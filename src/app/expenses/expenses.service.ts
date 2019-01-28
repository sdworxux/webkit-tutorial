import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { IExpense } from './IExpense';

@Injectable()
export class ExpensesService {

  private readonly api = 'http://localhost:9999/expenses';
  private expenses$: Observable<IExpense[]>;

  constructor(private http: HttpClient) {
    this.expenses$ = this.getExpenses$().pipe(shareReplay(1));
   }

  getExpenses = () => {
    return this.expenses$;
  };

  addExpense = (expense: IExpense) => {
    console.log('SERVICE: adding expense');
    return this.http
    .post(this.api, expense);
    //.pipe(tap(_ => this.expenses$ = this.getExpenses$()));
  };

  //deleteExpense = (expense: IExpense) => expense.hidden = true;

  deleteExpense = (index: number) => {
    console.log('SERVICE: deleting:' + this.api + '/'+index);
    return this.http
    .delete(this.api + '/' + index)
    .pipe(tap(_ => this.expenses$ = this.getExpenses$()));
  }

  private getExpenses$() {
    console.log('SERVICE: getting expenses from server');
    return this.http
      .get<IExpense[]>(this.api);
  }
}

export class ExpensesServiceMock {

  expenses: IExpense[] = [
    { id: 1, description: 'Ticket to Biarritz', amount: 545.45, date: new Date(2018, 6, 28) },
    { id: 2, description: 'Taxi from Bilbao to Biarritz', amount: 250.05, date: new Date(2018, 7, 16) },
  ]
  constructor() { }

  getExpenses = () => of(this.expenses);

  addExpense = (expense: IExpense) => { this.expenses.push(expense); return of(expense) };

  deleteExpense = (expense: IExpense) => expense.hidden = true;
}


import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpensesService } from '../expenses.service';
import { IExpense } from '../IExpense';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-expenses-home',
  templateUrl: './expenses-home.component.html',
  styleUrls: ['./expenses-home.component.css']
})
export class ExpensesHomeComponent {

  search = new FormControl();

  title = 'app';
  person = 'everybody';
  searchValue: string;
  active = false;

  get expenses() {
    console.log('getting expenses');
    return this.service.getExpenses();
  }

  constructor(private service: ExpensesService) {
  }
  addExpense(expense: IExpense) {
    this.service.addExpense(expense).subscribe();
  }

  deleteExpense(expense: IExpense) {
    console.log('delete:'+expense.id);
    this.service.deleteExpense(expense.id).subscribe();
  }

  toggleAddExpense() {
    this.active = !this.active;
  }
}

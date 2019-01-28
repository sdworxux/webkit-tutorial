import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { IExpense } from '../IExpense';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  @Output() newExpense = new EventEmitter<IExpense>();
  @Output() closeExpenseDialog = new EventEmitter();
  @Input() active = false;
  expenseForm = new FormGroup({
    amount: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl('2018-02-14', [Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeExpenseDialog.emit();
    console.log('emmited closeDialog');
  }
  addExpense() {
    if (!this.expenseForm.invalid) {
      this.newExpense.emit(this.expenseForm.value);
      this.closeExpenseDialog.emit();
      this.expenseForm.reset();
    }
  }

}

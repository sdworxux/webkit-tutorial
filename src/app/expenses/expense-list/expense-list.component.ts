import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IExpense } from '../IExpense';
import { trigger, transition, query as q, animate, style, keyframes, stagger, animateChild } from '@angular/animations';

const query = (s,a,o={optional:true})=>q(s,a,o);

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('listAnimation', [
      transition('* => *', [
        // child animation selector + stagger
        query('@animation', 
          stagger(300, animateChild())
        )
      ]),
    ]),
    trigger('animation', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
        style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
        style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ]),      
    ])
  ]
})
export class ExpenseListComponent implements OnInit {
  @Input() list: IExpense[];
  @Output() deleteExpense = new EventEmitter<IExpense>();
  
  constructor() { }

  ngOnInit() {
  }

  deleteExp(expense: IExpense) {
    this.list.splice(this.list.indexOf(expense)); // locally
    this.deleteExpense.emit(expense); // rest server
  }
}

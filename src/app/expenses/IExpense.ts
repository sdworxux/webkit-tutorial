export class IExpense {
  id: number;
  description: string;
  amount: number;
  date: Date;
  hidden?: boolean;
}
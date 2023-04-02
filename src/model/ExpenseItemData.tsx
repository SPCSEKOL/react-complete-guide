import IExpenseItemData from "./IExpenseItemData";

export default class ExpenseItemData implements IExpenseItemData{
    title: string
    amount: number
    date: Date

    constructor(title: string, amount: number, date: Date) {
        this.title = title
        this.amount = amount
        this.date = date
    }
}

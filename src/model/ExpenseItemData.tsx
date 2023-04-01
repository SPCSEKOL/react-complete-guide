export default interface ExpenseItemData {
    title: string,
    amount: number,
    date: Date
}

export class ExpenseItemDataImpl implements ExpenseItemData{
    title: string
    amount: number
    date: Date

    constructor(title: string, amount: number, date: Date) {
        this.title = title
        this.amount = amount
        this.date = date
    }
}
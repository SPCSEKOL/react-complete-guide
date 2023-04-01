import React from 'react'
import ExpenseItemData, { ExpenseItemDataImpl } from '../model/ExpenseItemData'
import ExpenseItem from './ExpenseItem'
import './Expense.css'

const Expenses:React.FunctionComponent = () => {
    let expenseItemList: ExpenseItemData[] = []
    let exp1: ExpenseItemData = new ExpenseItemDataImpl('Toilet Paper', 94.12, new Date(2022,7,14))
    let exp2: ExpenseItemData = new ExpenseItemDataImpl('Car Insurance', 294.67, new Date(2022,2,28))
    let exp3: ExpenseItemData = new ExpenseItemDataImpl('New TV', 799.42, new Date(2021,9,10))
    let exp4: ExpenseItemData = new ExpenseItemDataImpl('New Desk', 450, new Date(2020,1,8))
    expenseItemList.push(exp1)
    expenseItemList.push(exp2)
    expenseItemList.push(exp3)
    expenseItemList.push(exp4)
    return (
      <div className="expenses">
        <h2>Let's get started</h2>
        {expenseItemList && expenseItemList.map(item =>
          <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
        )}
      </div>
    );
}
export default Expenses

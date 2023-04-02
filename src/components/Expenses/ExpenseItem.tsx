import React from 'react'
import './ExpenseItem.css'
import IExpenseItemData from '../../model/IExpenseItemData'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";

const ExpenseItem:React.FunctionComponent<IExpenseItemData> = (prop) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={prop.date} />
                <div className='expense-item__description'>
                    <h2>{prop.title}</h2>
                    <div className='expense-item__price'>${prop.amount}</div>
                </div>
            </Card>
        </li>
    )
}
export default ExpenseItem

import React from 'react'
import './ExpenseItem.css'
import ExpenseItemData from '../model/ExpenseItemData'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem:React.FunctionComponent<ExpenseItemData> = (prop) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={prop.date} />
            <div className='expense-item__description'>
                <h2>{prop.title}</h2>
                <div className='expense-item__price'>${prop.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem

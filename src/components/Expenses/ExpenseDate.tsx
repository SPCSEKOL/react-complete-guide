import React from 'react'
import './ExpenseDate.css'

interface DateProps {
    date: Date
}
const ExpenseDate:React.FunctionComponent<DateProps> = (prop) => {
    const month = prop.date.toLocaleString('en-US', {month: 'long'})
    const day = prop.date.toLocaleString('en-US', {day: '2-digit'})
    const year = prop.date.getFullYear()

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}
export default ExpenseDate

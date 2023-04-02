import React from 'react'
import ExpenseItem from "./ExpenseItem"
import IExpenseItemData from "../../model/IExpenseItemData"
import './ExpenseList.css'

interface ExpenseListProps {
    expenseList: IExpenseItemData[]
}

const ExpenseList:React.FunctionComponent<ExpenseListProps> = (props) => {
    if (props.expenseList.length === 0) {
        return <h2 className="expense-list__fallback">Found no expenses.</h2>
    }
    return <ul className="expense-list">
        {props.expenseList.map((item, idx) =>
            <ExpenseItem key={idx} title={item.title} amount={item.amount} date={item.date}/>
        )}
    </ul>
}
export default ExpenseList

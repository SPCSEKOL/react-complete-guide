import React, {useState} from 'react'
import IExpenseItemData from '../../model/IExpenseItemData'
import './Expense.css'
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpenseChart"

interface ExpensesProps {
    expenseData: IExpenseItemData[]
}
const Expenses:React.FunctionComponent<ExpensesProps> = (props) => {
    const [filteredYear, setFilteredYear] = useState<string>('2020');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenseData.filter(item => {
        return filteredYear === item.date.getFullYear().toString()
    })

    return <div>
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList expenseList={filteredExpenses} />
        </Card>
    </div>
}
export default Expenses

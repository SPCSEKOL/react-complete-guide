import React, {useState} from "react"
import './ExpenseForm.css'
import IExpenseItemData from "../../model/IExpenseItemData"
import ExpenseItemData from "../../model/ExpenseItemData"

interface ExpenseFormProps {
    onSaveExpenseData: (expenseInfo: IExpenseItemData) => void,
    onStopEdit: React.MouseEventHandler<HTMLButtonElement>
}

const ExpenseForm:React.FunctionComponent<ExpenseFormProps> = (props) => {
    const [enteredTitle, setEnteredTitle] = useState<string>('')
    const [enteredAmount, setEnteredAmount] = useState<string>('')
    const [enteredDate, setEnteredDate] = useState<string>('')

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (enteredTitle && enteredAmount && enteredDate) {
            const expenseData: IExpenseItemData = new ExpenseItemData(enteredTitle, +parseFloat(enteredAmount), new Date(enteredDate))
            props.onSaveExpenseData(expenseData)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
        }
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button onClick={props.onStopEdit}>Cancel</button>
        </div>
    </form>
}
export default ExpenseForm

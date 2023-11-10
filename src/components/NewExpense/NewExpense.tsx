import React, {useState} from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import IExpenseItemData from "../../model/IExpenseItemData";

interface NewExpenseProps {
    onAddExpense: (expenseInfo: IExpenseItemData) => void
}

const NewExpense:React.FunctionComponent<NewExpenseProps> = (props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const saveExpenseDataHandler = (enteredExpenseData: IExpenseItemData) => {
        const expenseData: IExpenseItemData = {...enteredExpenseData, id: Math.random().toString()}
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEdit={stopEditingHandler}/>}
    </div>
}
export default NewExpense

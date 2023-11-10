import React, {useState} from "react"
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import IExpenseItemData from "./model/IExpenseItemData"
import ExpenseItemData from "./model/ExpenseItemData"

const App:React.FunctionComponent = () => {
    let expenseItemList: IExpenseItemData[] = []
    let exp1: IExpenseItemData = new ExpenseItemData('Toilet Paper', 94.12, new Date(2022,7,14))
    let exp2: IExpenseItemData = new ExpenseItemData('Car Insurance', 294.67, new Date(2022,2,28))
    let exp3: IExpenseItemData = new ExpenseItemData('New TV', 799.42, new Date(2021,9,10))
    let exp4: IExpenseItemData = new ExpenseItemData('New Desk', 450, new Date(2020,1,8))
    expenseItemList.push(exp1)
    expenseItemList.push(exp2)
    expenseItemList.push(exp3)
    expenseItemList.push(exp4)
    const [expenses, setExpenses] = useState(expenseItemList)

    const addExpenseHandler = (addExpenseData: IExpenseItemData) => {
        console.log("In App.tsx")
        console.log(addExpenseData)
        setExpenses((previousState) => [addExpenseData, ...previousState])
    }
    return <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenses}/>
    </div>
}

export default App

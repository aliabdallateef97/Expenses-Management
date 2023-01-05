import "./App.css";
import Expenses from "./Components/expenses/Expenses";
import {useState ,useEffect,useCallback} from 'react'
import ExpenseForm from "./Components/NewExpense/ExpenseForm";




function App() {
const [expenses,setExpenses]=useState(null)


const onAddExpenseHandler=expense=>{
  setExpenses(prevExpense=>{
    return [expense,...prevExpense]
  })
}

const fetchExpenses=useCallback(async()=>{

  const response=await fetch('https://expenses-managment-9d1fe-default-rtdb.firebaseio.com/expenses.json')
  const data= await response.json()
  let expensesArray=[]
  for(let exp in data){
    expensesArray.push({
      id:exp,
      date:new Date(data[exp].date),
      price:data[exp].price,
      title:data[exp].title
    })
  }
  setExpenses(expensesArray)
},[])

useEffect(()=>{
    fetchExpenses()
},[fetchExpenses])




  return (
    <div className="App">
      <h1>Expenses Managment</h1>
      <ExpenseForm onAddExpense={onAddExpenseHandler}/>
      {expenses && <Expenses expenses={expenses}/>}
    </div>
  );
}

export default App;

import classes from "./ExpenseForm.module.css";
import NewForm from "./NewForm";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [isOpen,setIsOpen]=useState(false)

  const isOpenHandler=()=>{
    setIsOpen(true)
  }

  const isCloseHandler=()=>{
    setIsOpen(false)
  }

  const onSaveExpenseHandler=(expense)=>{
    const newExpense={
      id:Math.random(),
      ...expense
    }
    props.onAddExpense(newExpense)
  }



  let content=<button onClick={isOpenHandler}>Add New Expense</button>

  if(isOpen){
    content=<NewForm close={isCloseHandler}   onSaveExpense={onSaveExpenseHandler}/>
  }



  return (
    <div className={classes.form}>
      {content}
    </div>
  );
};

export default ExpenseForm;

import classes from "./Expenses.module.css";
import ExpensesItem from "./ExpensesItem";
import FilterExpenses from "./FilterExpenses";
import ChartExpense from "./ChartExpense";
import { useState } from "react";

const Expenses = props => {
  const [year,setYear]=useState('2022')

  const changeYearHandler=(event)=>{
    setYear(event.target.value)
}

  const expensesYear=props.expenses.filter(exp=> exp.date.getFullYear().toString() === year)
  
  const expensesItems = expensesYear.map(exp => (
    <ExpensesItem
      key={exp.id}
      title={exp.title}
      price={exp.price}
      date={exp.date}
    />
  ));

  return(
     <div className={classes.ExpensesBox}>
      <FilterExpenses getYear={changeYearHandler} year={year}/>
      <ChartExpense expenses={expensesYear}/>
      {expensesItems}
      </div>);
};

export default Expenses;

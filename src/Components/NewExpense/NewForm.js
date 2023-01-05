import classes from "./NewForm.module.css";
import { useState } from "react";

const NewForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  let titleISValid=title.trim() !== ''
  let priceISValid=price.trim() !== ''
  let dateISValid=date.trim() !== ''

  let formIsValid=false

  if(titleISValid && priceISValid && dateISValid){
    formIsValid=true
  }

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onPriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const onDateHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      price: price,
      date: new Date(date),
    };
    const response= await fetch('https://expenses-managment-9d1fe-default-rtdb.firebaseio.com/expenses.json',{
      method:"Post",
      body:JSON.stringify(newExpense),
      headers:{
        'Content-type':'application/json'
      }
    })
    props.onSaveExpense(newExpense);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.allInputs}>
        <div className={classes.formInp}>
          <label className={classes.label}>Title</label>
          <input
            value={title}
            type="text"
            className={classes.input}
            onChange={onTitleHandler}
          ></input>
        </div>
        <div className={classes.formInp}>
          <label className={classes.label}>Price</label>
          <input
            onChange={onPriceHandler}
            className={classes.input}
            type="number"
            min="1000"
            step="100"
            value={price}
          ></input>
        </div>
        <div className={classes.formInp}>
          <label className={classes.label}>Date</label>
          <input
            onChange={onDateHandler}
            className={classes.input}
            type="date"
            min="2020-1-1"
            max="2023-12-31"
            value={date}
          ></input>
        </div>
      </div>
      <div className={classes.btnBox}>
        <button className={classes.btn} onClick={props.close}>
          Cancel
        </button>
        <button className={classes.btn} type="submit" disabled={!formIsValid}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default NewForm;

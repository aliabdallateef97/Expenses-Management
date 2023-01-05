import ExpenseDate from './ExpensesDate'
import classes from './ExpensesItem.module.css'

const ExpensesItem = props =>{
return(
    <div className={classes.ExpenseItem}>
       <div className={classes.date}>
            <ExpenseDate date={props.date}/>
        </div> 
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price}>{props.price}</div>
    </div>
)
}

export default ExpensesItem
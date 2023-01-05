import classes from './FilterExpenses.module.css'

const FilterExpenses=props=>{

return(
    <div className={classes.filter}>
        <h2>Filter By Year</h2>
        <select value={props.year} onChange={props.getYear}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
)
}

export default FilterExpenses
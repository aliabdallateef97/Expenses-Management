import classes from './Chart.module.css'
import ChartBars from './ChartBars';

const Chart = props=>{
    let valueArray=props.data.map(val=> val.value)
    let maxVal=Math.max(...valueArray)


return(
    <div className={classes.Chart}>
       {props.data.map(bar=>(
        <ChartBars 
        key={bar.label}
        value={bar.value}
        label={bar.label}
        maxValue={maxVal}
        />
    ))}
    </div>
)
}

export default Chart
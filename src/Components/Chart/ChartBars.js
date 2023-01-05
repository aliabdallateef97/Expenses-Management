import classes from './ChartBars.module.css'

const ChartBars=props=>{
    let fillAmount="0%"

    if(props.maxValue>0){
        fillAmount=Math.round((props.value/props.maxValue) *100) +'%'
    }

    return(
            <div className={classes.bar}>
                <div className={classes.amount} >
                    <div className={classes.barHeight} style={{height:fillAmount}}></div>
                </div>
                <div className={classes.label}>{props.label}</div>
        </div>
    )

}

export default ChartBars
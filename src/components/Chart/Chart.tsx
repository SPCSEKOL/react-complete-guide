import React from 'react'
import ChartBar from "./ChartBar"
import './Chart.css'
import IDataPoint from "../../model/IDataPoint"

interface ChartProps {
    dataPoints: IDataPoint[]
}
const Chart:React.FunctionComponent<ChartProps> = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
        )}
    </div>
}
export default Chart

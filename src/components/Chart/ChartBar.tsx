import React from 'react'
import './ChartBar.css'

interface ChartBarProps {
    value: number
    maxValue: any
    label: string
    max?: number
}

const ChartBar:React.FunctionComponent<ChartBarProps> = (props) => {
    let barFillHeight:string = '0%'
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}
export default ChartBar

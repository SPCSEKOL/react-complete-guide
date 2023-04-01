import React, { ReactNode } from 'react'
import './Card.css'

interface MyProps {
    children?: ReactNode,
    className?: string
}

const Card:React.FunctionComponent<MyProps> = (props) => {
    const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default Card

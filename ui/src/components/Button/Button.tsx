import React from 'react'
import { Button } from 'reactstrap'

type ButtonProps = {
    disabled?: boolean,
    loading?: any,
    text: string,
    color?: string,
    type?: "submit" | "reset" | "button" | undefined,
    block?: boolean,
    className?: string,
    onClick?: (param?:any)=> any
}
const ButtonComponent: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} disabled={props.disabled || props.loading? true : false}>{!props.loading ? props.text : "Loading..."}</Button>
    )
}

export default ButtonComponent;

import {IInputProps} from "./Input";
import {ForwardedRef, forwardRef} from "react";

const InputCtr = forwardRef(({className, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    console.log(props)
    return <input className={className}  {...props} ref={ref}/>
})

export default InputCtr
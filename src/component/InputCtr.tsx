import {IInputProps} from "./Input";
import {ForwardedRef, forwardRef} from "react";

const InputCtr = forwardRef(({className, error, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div>
            <input className={className}  {...props} ref={ref}/>
            {error && error.message}
        </div>


    )


})
export default InputCtr
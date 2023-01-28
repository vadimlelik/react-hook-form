import {DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?:FieldError
}

const Input = forwardRef(({className,error, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

    return (
        <div>
            <input className={className} {...props} ref={ref}/>
            {error && <span>{error.message}</span>}
        </div>

    )
})


export default Input
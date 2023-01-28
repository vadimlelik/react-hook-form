import {DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes} from "react";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const Input = forwardRef(({className, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

    return <input className={className} {...props} ref={ref}/>
})


export default Input
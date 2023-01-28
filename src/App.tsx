import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {useState} from "react";
import Input from "./component/Input";
import InputCtr from "./component/InputCtr";

type Inputs = {
    example: string
    inputControlled: string
};

function App() {
    const [formData, setFormData] = useState<Inputs[]>([])
    const {register, handleSubmit, control, formState: {errors}} = useForm<Inputs>()

    const onSubmitCtr = (data: Inputs) => {
        setFormData([...formData,data])
    }
    console.log(formData)

    return (
        <div className="App">

            <hr/>
            <h1>New Form Input</h1>
            <form onSubmit={handleSubmit(onSubmitCtr)}>
                <Controller
                    name='inputControlled'
                    render={({field: {value, ...rest}}) => <InputCtr
                        value={value ? value : ''}
                        {...rest}
                        placeholder='Контрол инпут'/>}
                    control={control}/>
                <input type='submit'/>
            </form>

        </div>

    )
}

export default App

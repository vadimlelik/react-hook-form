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
        setFormData([...formData, data])
    }
    return (
        <div className="App">

            <form onSubmit={handleSubmit(onSubmitCtr)}>
                <Input {...register('example', {required: {value: true, message: 'Заполните меня'}})}
                       error={errors.example}/>
                <hr/>
                <h1>New Form Input</h1>

                <Controller
                    name='inputControlled'
                    render={({field: {value, ...rest}, fieldState: {error}}) => (
                        <InputCtr
                            error={error}
                            value={value ? value : ''}

                            {...rest}
                            placeholder='Контрол инпут'/>)
                    }
                    control={control}
                    rules={{required: {value: true, message: 'Заполните контролируемый инпут'}}}
                />

                <input type='submit'/>
            </form>

        </div>

    )
}

export default App

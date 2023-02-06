import React, {useEffect, useState} from 'react';
import Input from "../../../component/Input";
import {Controller, useForm} from "react-hook-form";
import InputCtr from "../../../component/InputCtr";
import {useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {getUsers, loadUsersList} from "../../../store/usersSlice";



type Inputs = {
    example: string
    inputControlled: string
};

const AboutPage = () => {
    const dispatch = useAppDispatch()
    const users = useSelector(getUsers())
    const [formData, setFormData] = useState<Inputs[]>([])
    const {register, handleSubmit, control, formState: {errors}} = useForm<Inputs>()

    const onSubmitCtr = (data: Inputs) => {
        setFormData([...formData, data])
    }

    useEffect(() => {
        dispatch(loadUsersList())
    }, [])
    return (
        <div>
            <h1>About Page</h1>


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
            <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </div>
    );
};

export default AboutPage;
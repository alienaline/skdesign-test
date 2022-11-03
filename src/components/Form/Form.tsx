import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormStyles } from './FormStyles';
import SelectDataCities from './SelectData/SelectDataCities';
import SelectDataSources from './SelectData/SelectDataSources';
import cities from '../../assets/data/cities.json';
import sources from '../../assets/data/sources.json';
import InputController from './Inputs/InputController';

interface IForm {
    name: string;
    tel: string;
    email: string;
    socialLink: string;
    city: string;
    organization: string;
    recipient: string;
    sources: string;
}

function Form() {
    const [displayOptions, setDisplayOptions] = useState<boolean>(false);
    const { handleSubmit, control, reset, formState: { errors } } = useForm<IForm>({ mode: 'all'});

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(JSON.stringify(data));
        alert('Форма отправлена! Все данные в консоли.');
        reset();
    };
    
    return (
        <FormStyles>
            <form onSubmit={handleSubmit(onSubmit)}
                className='formContainer'>
                <div className='requireInputs'>
                    <InputController
                        name='name'
                        label='Ваше имя *'
                        control={control}
                        rules={{ 
                            required: 'Это обязательное поле',
                            pattern: {
                                value: /[A-Za-z]+/,
                                message: 'Имя должно состоять из букв'
                            },
                            minLength: {
                                value: 2,
                                message: 'Имя должно быть больше 1 символа'
                            } }}
                        error={errors?.name ? true : false}
                        helperText={errors?.name?.message} />
                    <InputController 
                        name='tel'
                        label='Номер телефона *'
                        control={control}
                        rules={{ 
                            required: 'Это обязательное поле',
                            pattern: {
                                value: /^[7-8]\d{10}$/,
                                message: 'Номер должен начинатся с 7 или 8 и быть не короче 11 символов'
                            } }}
                        error={errors?.tel ? true : false}
                        helperText={errors?.tel?.message} />
                    <InputController 
                        name='email'
                        type='email'
                        label='E-mail *'
                        control={control}
                        rules={{ 
                            required: 'Это обязательное поле',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неверный email-адрес'
                            } }}
                        error={errors?.email ? true : false}
                        helperText={errors?.email?.message} />
                    <InputController 
                        name='socialLink'
                        type='url'
                        label='Ссылка на профиль *'
                        control={control}
                        rules={{ 
                            required: 'Это обязательное поле'
                        }}
                        error={errors?.socialLink ? true : false}
                        helperText={errors?.socialLink?.message} />
                    <SelectDataCities 
                        data={cities}
                        control={control}
                        name='city'
                        label='Выберите город *'
                        rules={{ required: 'Это обязательное поле' }}
                        error={errors?.city ? true : false}
                        helperText={errors?.city?.message} />
                </div>
                <div className='optionalInputs'>
                    <InputController 
                        name='organization'
                        label='Название огранизации/студии'
                        control={control} />
                    <button 
                        type='button'
                        className='buttonShowOptions'
                        onClick={() => setDisplayOptions(!displayOptions)}>
                        {displayOptions ? 'Скрыть' : 'Показать'} дополнительные поля
                        <span 
                            className='arrow'
                            data-state={`${displayOptions? 'up' : 'down'}`}>
                        </span>
                    </button>
                    { displayOptions &&
                        <div className='options'>
                            <InputController 
                                name='recipient'
                                label='Введите имя получателя'
                                control={control}/>
                            <SelectDataSources
                                name='sources'
                                data={sources}
                                control={control}
                                label='Откуда вы узнали о нас?' />
                        </div>
                    }
                </div>
                <button 
                    type='submit'
                    className='buttonSubmit'>
                    Отправить заявку
                </button>
            </form>
        </FormStyles>
    );
}

export default Form;
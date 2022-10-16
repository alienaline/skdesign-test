import React, { useState } from 'react';
import Button from './Buttons/Button';
import { FormStyles } from './FormStyles';
import Input from './Inputs/Input';
import SelectData from './SelectData/SelectData';

function Form() {
    const [displayOptions, setDisplayOptions] = useState(false);

    return (
        <FormStyles>
            <form className='formContainer'>
                <div className='requireInputs'>
                    <Input placeholder='Иван'>Ваше имя *</Input>
                    <Input placeholder='+7 (900) 000-00-00'>Номер телефона *</Input>
                    <Input placeholder='example@skdesign.ru'>E-mail *</Input>
                    <Input placeholder='instagram.com/skdesign'>Ссылка на профиль *</Input>
                    <SelectData />
                </div>
                <div className='optionalInputs'>
                    <Input placeholder='SK Design'>Название огранизации/студии</Input>
                    <button 
                        type='button'
                        className='buttonShowOptions'
                        onClick={() => setDisplayOptions(!displayOptions)}>
                        {displayOptions ? 'Скрыть' : 'Показать'} дополнительные поля
                        <span className={`arrow ${displayOptions ? 'up' : 'down'}`}></span>
                    </button>
                    { displayOptions &&
                        <div className='options'>
                            <Input placeholder='ФИО'>Получатель</Input>
                            <SelectData />
                        </div>
                    }
                    <Button>Отправить заявку</Button>
                </div>
            </form>
        </FormStyles>
    );
}

export default Form;
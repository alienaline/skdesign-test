import { TextField } from '@mui/material';
import React from 'react'; 
import { Controller } from 'react-hook-form';

interface IInputController {
    name: string;
    label: string;
    type?: string;
    control: any;
    rules?: object;
    helperText?: string;
}


function InputController (props: IInputController) {

    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({field}) => (
                <TextField 
                    label={props.label}
                    type={props.type && 'text'}
                    onChange={(event) => field.onChange(event)}
                    value={field.value || ''}
                    helperText={props.helperText} />
            )} />
    );
}

export default InputController;
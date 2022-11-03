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
    error?: boolean;
}


function InputController (props: IInputController): JSX.Element {
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
                    helperText={props.helperText}
                    error={props.error} />
            )} />
    );
}

export default InputController;
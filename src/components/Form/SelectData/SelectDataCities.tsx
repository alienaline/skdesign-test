import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';

interface ICities {
    id: string;
    name: string;
}

interface ISelectDataProps {
    label: string;
    data: ICities[];
    name: string;
    control: any;
    rules: object;
    helperText: string | undefined;
}

function SelectDataCities(props: ISelectDataProps) {
    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({field}) => (
                <TextField
                    select
                    label={props.label}
                    value={field.value || props.data[0].name}
                    onChange={(event) => field.onChange(event)}
                    className='selectDataCities'
                    helperText={props.helperText} >
                    { props.data.map((elem: ICities) => (
                        <MenuItem
                            key={elem.id}
                            value={elem.name} >
                            {elem.name}
                        </MenuItem>
                    ))}
                </TextField>
            )} />
    );
}

export default SelectDataCities;
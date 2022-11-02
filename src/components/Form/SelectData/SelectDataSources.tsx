import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';

interface ISelectDataProps {
    label: string;
    data: string[];
    name: string;
    control: any;
}

function SelectDataSources(props: ISelectDataProps) {
    return (
        <Controller
            name={props.name}
            control={props.control}
            render={({field}) => (
                <TextField
                    select
                    label={props.label}
                    value={field.value || props.data[0]}
                    onChange={(event) => field.onChange(event)}
                    className='selectDataSources' >
                    { props.data.map((elem: string, index: number) => (
                        <MenuItem
                            key={index}
                            value={elem} >
                            {elem}
                        </MenuItem>
                    ))}
                </TextField>
            )} />
    );
}

export default SelectDataSources;
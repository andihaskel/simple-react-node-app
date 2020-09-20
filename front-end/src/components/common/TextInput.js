import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <TextField errorText={touched && error}
                required
                label={label}
                fullWidth
                autoComplete="given-name"
                {...input}
            />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    )

export default TextInput
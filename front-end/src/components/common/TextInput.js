import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = props =>
    <TextField errorText={props.touched && props.error}
                required
                label={props.label}
                fullWidth
                autoComplete="given-name"
                {...props.input}
    />;

export default TextInput
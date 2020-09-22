import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



export default function MaterialUIPickers(props) {
 console.log(props.input.value);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker

          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline*"
          {...props.input}
          fullWidth
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          value={!props.input.value ? new Date() : new Date(props.input.value)}
        />
    </MuiPickersUtilsProvider>
  );
}
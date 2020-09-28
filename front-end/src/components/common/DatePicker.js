import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';




export default function MaterialUIPickers(props) {
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
          value={!props.input.value ? moment(new Date()).format('MM-DD-YYYY') : new Date(props.input.value)}
        />
    </MuiPickersUtilsProvider>
  );
}
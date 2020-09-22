import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../common/DatePicker';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Field, reduxForm, useSelector } from 'redux-form';
import submitAction from '../../state/actions/eventActions';
import store from '../../state/store'
import moment from 'moment'
import TextInput from '../common/TextInput'
import validate from '../../utils/validators/validateEvent'

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "100%"
  }
}))


const EventFormFields = props => {
  const classes = useStyles();
  const { handleSubmit, eventDate, pristine, reset, submitting} = props

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitAction)}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <Field name="firstName" label="First Name" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="lastName" label="Last Name" value="sadfsfa" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={6} style={{ paddingTop: '5%' }}>
            <Field name="email" label="Email" component={TextInput} type="email" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field name="eventDate" component={DatePicker} type="any" initialValue={Date.now()} />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { }}
            className={classes.button}
            type="submit"
            {...props.input}
          >
            Submit
            </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    initialValues: {
      eventDate: Date.now(),
      firstName: "asd"
    }
  }
}
export default reduxForm({
  form: 'simple',
  enableReinitialize: true,
  validate
}, mapStateToProps)(EventFormFields);


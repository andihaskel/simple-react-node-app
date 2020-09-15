import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../common/DatePicker';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Field, reduxForm, useSelector } from 'redux-form';
import submit from './submit';
import store from '../../reducers/index'
import moment from 'moment'
import TextInput from '../common/TextInput'

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

const validate = val => {
  console.log('validate');
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const EventFormFields = props => {
  const classes = useStyles();
  const { handleSubmit, eventDate, pristine, reset, submitting, error } = props
  // const state = useSelector(state => state)

  console.log(store.getState());

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submit)} initialValues={() => {
        return {
          firstName: 'rajat',
          lastName: 'sd',
          email: 'asdf',
          eventDate: Date.now()
        };
      }} >

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field name="firstName" label="First Name" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="lastName" label="Last Name" value="sadfsfa" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={6} style={{paddingTop:'5%'}}>
            <Field name="email" label="Email" component={TextInput} type="email" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field name="eventDate" component={DatePicker} type="any" initialValue={Date.now()}/>
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


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
            <Field name="firstName" component={(props) => {
              return (
                <TextField
                  required
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  {...props.input}
                />
              )
            }
            } type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="lastName" value="sadfsfa" component={(props) =>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                {...props.input}
              />
            } type="text" />
          </Grid>
          <Grid item xs={6}>
            <Field name="email" component={(props) =>
              <TextField
                required
                label="Email"
                fullWidth
                autoComplete="shipping address-line1"
                style={{ marginTop: '6%' }}
                {...props.input}
              />
            } type="email" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field name="eventDate" component={(props) =>
              <DatePicker
                {...props}
              />
            } type="any" initialValue={moment(Date.now()).format('YYYY-MM-DD')} />
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
  enableReinitialize: true
}, mapStateToProps)(EventFormFields);


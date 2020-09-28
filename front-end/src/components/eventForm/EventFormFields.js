import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../common/DatePicker';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Field, reduxForm, useSelector } from 'redux-form';
import submitAction from '../../state/actions/eventActions';
import TextInput from '../common/TextInput'
import validate from '../../utils/validators/validateEvent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "100%"
  },
  errorMessage: {
    textAlign: 'center'
  }
}))

const getInitialValues = () => {
  return {
    firstName: 'rajat'
  };
}

let EventFormFields = props => {
  const classes = useStyles();
  const { handleSubmit, eventDate, pristine, reset, submitting, error } = props

  // useEffect(() => {
  //   initialize({ date: moment(new Date()).format('MM-DD-YYYY') });
  // }, []);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitAction)} initialValues={() => {return ({firstName: 'asd'})}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <Field name="firstName" label="First Name" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field name="lastName" label="Last Name" component={TextInput} type="text" />
          </Grid>
          <Grid item xs={6} style={{ paddingTop: '5%' }}>
            <Field name="email" label="Email" component={TextInput} type="email" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field name="date" component={DatePicker} type="any" />
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
        <div >
          {error && <strong>{error}</strong>}
        </div>
        <ToastContainer />
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    initialValues: {
      date: moment(new Date()).format('MM-DD-YYYY')
    }
  }
}


EventFormFields = reduxForm({
  form: 'eventForm',
  enableReinitialize: true,
  validate
}, mapStateToProps)(EventFormFields);


EventFormFields = connect(
  () => ({
    initialValues: {date: moment(new Date()).format('MM-DD-YYYY')}
  })
)(EventFormFields)


export default EventFormFields
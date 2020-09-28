import * as types from './types';
import { SubmissionError } from 'redux-form'
import { toast } from 'react-toastify';

const axios = require('axios');
require('dotenv').config()

export const submitEventForm = (values, dispatch) => {
  var newEvent = values;
  const url = process.env.REACT_APP_REST_API_LOCATION + 'v1/events';
  return axios.post(url, newEvent).then((res) => {
    toast.success("Event Created");
    dispatch({
      type: types.CREATE_EVENT,
      payload: newEvent
    });
  }).catch(error => {
    toast.error(error.response.data.errors[0].messages[0])
  })



};

export default submitEventForm
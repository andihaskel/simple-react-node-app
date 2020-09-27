import * as types from './types';
const axios = require('axios');
require('dotenv').config()

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// async function submitEventForm(values, dispatch) {
//     console.log('submit',values);
//     return sleep(1000) // simulate server latency
//         .then(async () => {
//             let res = await axios.post('https://2edf1a0ff52f.ngrok.io/v1/events', values);

//             console.log('res', res)
//             console.log(`Status code: ${res.status}`);
//             console.log(`Status text: ${res.statusText}`);
//             console.log(`Request method: ${res.request.method}`);
//             console.log(`Path: ${res.request.path}`);

//             console.log(`Date: ${res.headers.date}`);
//             console.log(`Data: ${res.data}`);

//             window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)

//         })
// }


export const submitEventForm = (values, dispatch) => {
  var newEvent = values;
  // newCode[codeDetails.referralCode] = {
  //   dateCreated: new Date().toLocaleDateString(),
  //   timesUsed: 0,
  //   createdBy: codeDetails.email
  // }
  const url = process.env.REACT_APP_REST_API_LOCATION + 'v1/events';
  axios.post(url, newEvent).then(() => {
    return dispatch({
      type: types.CREATE_EVENT,
      payload: newEvent
    });
  })



};

export default submitEventForm
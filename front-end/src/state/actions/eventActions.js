import { SubmissionError } from 'redux-form'
const axios = require('axios');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function submitEventForm(values, dispatch) {
    // console.log('submit',values);
    // return sleep(1000) // simulate server latency
    //     .then(async () => {
    //         let res = await axios.post('https://2edf1a0ff52f.ngrok.io/v1/events', values);

    //         console.log('res', res)
    //         console.log(`Status code: ${res.status}`);
    //         console.log(`Status text: ${res.statusText}`);
    //         console.log(`Request method: ${res.request.method}`);
    //         console.log(`Path: ${res.request.path}`);

    //         console.log(`Date: ${res.headers.date}`);
    //         console.log(`Data: ${res.data}`);

    //         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)

    //     })
}

export default submitEventForm
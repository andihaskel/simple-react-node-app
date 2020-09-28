const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
const mongoose = require('./config/mongoose');
const ngrok = require('ngrok');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => {
    logger.info(`server started on port ${port} (${env})`);
    try {
        (async function () {
            const ngrokEndpoint = await ngrok.connect(port);
            logger.info(`localhost: ${port} is available at ${ngrokEndpoint}`);
        })()
    } catch (ex){
        logger.error(ex);
    }

});

/**
* Exports express
* @public
*/
module.exports = app;

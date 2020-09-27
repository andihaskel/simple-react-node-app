const Joi = require('joi');

module.exports = {

  // POST /v1/events
  createEvent: {
    body: {
      email: Joi.string().email().required(),
      firstName: Joi.string().max(128).required(),
      lastName: Joi.string().max(128).required(),
      date: Joi.date().required()
    },
  }
};

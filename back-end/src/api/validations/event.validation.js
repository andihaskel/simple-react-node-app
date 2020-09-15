const Joi = require('joi');

module.exports = {

  // POST /v1/users
  createEvent: {
    body: {
      email: Joi.string().email().required(),
      firstName: Joi.string().max(128).required(),
      lastName: Joi.string().max(128).required()
    },
  }
};

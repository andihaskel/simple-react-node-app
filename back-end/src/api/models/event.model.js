const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');



/**
 * Event Schema
 * @private
 */
const eventSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  lastName: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  date: {
    type: Date,
    index: true,
  },
}, {
  timestamps: true,
});

/**
 * Methods
 */
eventSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'firstName', 'lastName', 'email', 'date'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  }
})

eventSchema.statics = {

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateEmail(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [{
          field: 'email',
          location: 'body',
          messages: ['"email" already exists'],
        }],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  }

}

/**
 * @typedef Event
 */
module.exports = mongoose.model('Event', eventSchema);

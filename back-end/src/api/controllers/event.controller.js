const httpStatus = require('http-status');
const Event = require('../models/event.model');

/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(httpStatus.CREATED);
    res.json(savedEvent.transform());
  } catch (error) {
    next(Event.checkDuplicateEmail(error));
  }
};



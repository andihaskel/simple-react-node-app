const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/event.controller');
const { createEvent } = require('../../validations/event.validation');

const router = express.Router();

router
  .route('/')
  /**
   * @api {post} v1/events Create Event
   * @apiDescription Create a new event
   * @apiName CreateEvent
   * @apiGroup Event
   *
   * @apiHeader {String} Authorization   Event's access token
   *
   * @apiParam  {String}             email          Person's email
   * @apiParam  {String{..128}}      [firstName]    Person's first name
   * @apiParam  {String{..128}}      [lastName]     Person's last name
   * @apiParam  {Date}               [date]         Event's date
   * 
   *
   * @apiSuccess (Created 201) {String}  firstName  Person's first name
   * @apiSuccess (Created 201) {String}  lastName   Person's last name
   * @apiSuccess (Created 201) {String}  email      Event's email
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   * @apiSuccess (Created 201) {Date}    date       Event's date
   * 
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   */
  .post(validate(createEvent), controller.create);





module.exports = router;

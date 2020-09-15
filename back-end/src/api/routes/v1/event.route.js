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
   * @apiVersion 1.0.0
   * @apiName CreateEvent
   * @apiGroup Event
   *
   * @apiHeader {String} Authorization   Event's access token
   *
   * @apiParam  {String}             email     Event's email
   * @apiParam  {String{..128}}      [firstName]    Event's first name
   * @apiParam  {String{..128}}      [lastName]    Event's last name
   * 
   *
   * @apiSuccess (Created 201) {String}  id         Event's id
   * @apiSuccess (Created 201) {String}  name       Event's name
   * @apiSuccess (Created 201) {String}  email      Event's email
   * @apiSuccess (Created 201) {String}  role       Event's role
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated Events can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(validate(createEvent), controller.create);





module.exports = router;

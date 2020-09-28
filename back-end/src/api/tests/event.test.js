/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const app = require('../../index');
const Event = require('../models/event.model');


describe('Events API', async () => {
  let dbEvents;

  beforeEach(async () => {
    dbEvents = {
      EventTest1: {
        email: 'test@gmail.com',
        firstName: 'Bran',
        lastName: 'Stark',
        date: new Date().toISOString()
      },
      EventTest2: {
        email: 'test2@gmail.com',
        firstName: 'John',
        lastName: 'Stark',
        date: new Date().toISOString()
      }
    };

    await Event.deleteMany({});
    await Event.insertMany([dbEvents.EventTest1, dbEvents.EventTest2]);
  });

  var eventTest3 = {
    email: 'test3@gmail.com',
    firstName: 'Paul',
    lastName: 'Stark',
    date: new Date().toISOString()
  }

  describe('POST /v1/events', () => {
    it('should create a new event when request is ok', () => {
      return request(app)
        .post('/v1/events')
        .send(eventTest3)
        .expect(httpStatus.CREATED)
        .then((res) => {
          expect(res.body).to.include(eventTest3);
        });
    });

    it('should report error when email already exists', () => {
      eventTest3.email = dbEvents.EventTest1.email;

      return request(app)
        .post('/v1/events')
        .send(eventTest3)
        .expect(httpStatus.CONFLICT)
        .then((res) => {
          const { field } = res.body.errors[0];
          const { location } = res.body.errors[0];
          const { messages } = res.body.errors[0];
          expect(field).to.be.equal('email');
          expect(location).to.be.equal('body');
          expect(messages).to.include('"email" already exists');
        });
    });
    
    it('should report error when email is invalid', () => {
      eventTest3.email = 'invalidemail';

      return request(app)
        .post('/v1/events')
        .send(eventTest3)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          const { field } = res.body.errors[0];
          const { location } = res.body.errors[0];
          const { messages } = res.body.errors[0];
          expect(field).to.be.equal('email');
          expect(location).to.be.equal('body');
          expect(messages).to.include('"email" must be a valid email');
        });
    });
  });
});



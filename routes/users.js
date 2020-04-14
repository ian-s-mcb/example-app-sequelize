const express = require('express');
const { UniqueConstraintError, ValidationError } = require('sequelize')

const models = require('../models')

const router = express.Router();
// GET /users
router.get('/', function(req, res, next) {
  models['User']
    .findAll()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err)
      return res.status(500).send('Unable to get all users')
    })
});

// POST /users/create
router.post('/create', function(req, res, next) {
  // Collect parameters
  const params = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }

  // Create record
  models['User']
    .create(params)
    .then(user =>
      res.json({ message: `Created user with email: ${user.email}`})
    ).catch(err => {
      if (err instanceof UniqueConstraintError) {
        console.log(err)
        return res.status(412).send('An account already exists with that email')
      }
      else if (err instanceof ValidationError) {
        console.log(err)
        return res.status(412).send(err.message)
      }
      else {
        console.log(err)
        return res.status(500).send('Unable to create user')
      }
    })
});

module.exports = router;

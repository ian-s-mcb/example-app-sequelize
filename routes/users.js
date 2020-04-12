const express = require('express');
const { ValidationError } = require('sequelize')

const models = require('../models')

var router = express.Router();

// GET /users
router.get('/', async function(req, res, next) {
  try {
    const users = await models['User'].findAll()
    return res.status(200).json(users)
  } catch(err) {
    console.log(err)
    return res.status(500).send('Unable to get all users')
  }
});

// POST /users/create
router.post('/create', async function(req, res, next) {
  // Collect parameters
  const params = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }

  // Create record
  try {
    const user = await models['User'].create(params)
    return res.json({ message: `Created user with email: ${params.email}`, user });
  }
  catch (err) {
    if (err instanceof ValidationError) {
      console.log(err)
      return res.status(412).send(err.message)
    }
    else {
      console.log(err)
      return res.status(500).send('Unable to create user')
    }
  }
});

module.exports = router;

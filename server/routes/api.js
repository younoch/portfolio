const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/user_controller');

const {
  createExperience,
  readExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experience_controller');

const router = express.Router();

router
  .post('/', createData)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData)
  //Experience
  .post('/experience', createExperience)
  .get('/experience', readExperience)
  .put('/experience/:id', updateExperience)
  .delete('/experience/:id', deleteExperience);

module.exports = router;

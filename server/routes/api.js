const express = require('express');
const multer  = require('multer')
// const upload = multer({ dest: './uploads/' })

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb( null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '_' + file.originalname);
  }
})

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
  .put('/experience/:id', multer({ storage: fileStorage}).single('logo'), updateExperience)
  .delete('/experience/:id', deleteExperience);

module.exports = router;

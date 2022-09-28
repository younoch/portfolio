'use strict';

const Experience = require('../models/experience_schema');

const createExperience = (req, res) => {
    Experience.create(req.body)
      .then((data) => {
        console.log('New Experience Created!', data);
        res.status(201).json(data);
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          console.error('Error Validating!', err);
          res.status(422).json(err);
        } else {
          console.error(err);
          res.status(500).json(err);
        }
      });
  };
  
  const readExperience = (req, res) => {
    Experience.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  };
  
  const updateExperience = (req, res) => {
    Experience.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
    })
      .then((data) => {
        console.log('Experience updated!');
        res.status(201).json(data);
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          console.error('Error Validating!', err);
          res.status(422).json(err);
        } else {
          console.error(err);
          res.status(500).json(err);
        }
      });
  };
  
  const deleteExperience = (req, res) => {
    Experience.findById(req.params.id)
      .then((data) => {
        if (!data) {
          throw new Error('Experience not available');
        }
        return data.remove();
      })
      .then((data) => {
        console.log('Experience removed!');
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  };
  
  module.exports = {
    createExperience,
    readExperience,
    updateExperience,
    deleteExperience,
  };
  
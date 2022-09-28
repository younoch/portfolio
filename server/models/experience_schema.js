const { Schema, model } = require('mongoose');
const experienceSchema = new Schema(
    {
      organazationName: {
        type: String,
        required: [true, 'name field is required'],
      },
      joiningDate: {
        type: String,
        required: [true, 'age field is required'],
      },
      resignDate: {
        type: String,
        required: [true, 'age field is required'],
      },
    },
    { timestamps: true },
  );
  module.exports = model('experiences', experienceSchema);
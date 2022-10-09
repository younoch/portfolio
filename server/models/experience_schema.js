const { Schema, model } = require('mongoose');
const experienceSchema = new Schema(
    {
      organazationName: {
        type: String,
        required: [true, 'Organazaion name field is required'],
      },
      date: {
        join : {
          type: Date,
          required: [true, 'Join date field is required'],
        },
        resign: {
          type: Date,
          required: [true, 'resign date field is required'],
        }
      }
    },
    { timestamps: true },
  );
  module.exports = model('experiences', experienceSchema);
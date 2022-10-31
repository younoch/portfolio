const { Schema, model } = require('mongoose');
const experienceSchema = new Schema(
  {
    organazationName: {
      type: String,
      required: [true, 'Organazaion name field is required'],
    },
    description: {
      type: Array,
      required: false,
    },
    date: {
      join: {
        type: Date,
        required: [true, 'Join date field is required'],
      },
      resign: {
        type: Date,
        required: [true, 'resign date field is required'],
      }
    },
    logo:
    {
      type: String,
      required: false,
    }
  },
  { timestamps: true },
);
module.exports = model('experiences', experienceSchema);
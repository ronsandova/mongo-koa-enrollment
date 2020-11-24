/**
 * Course Schema
 * This file describes the User Model
 *
 * @module CourseSchema
 */


import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    index : {
      unique : true,
      dropDups : true
    },
  },
  description: {
    type: String,
    required: true,
  }
});

export const CourseModel = mongoose.model('Course', CourseSchema);
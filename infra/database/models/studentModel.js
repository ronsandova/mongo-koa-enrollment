/**
 * Student Schema
 * This file describes the User Model
 *
 * @module StudentSchema
 */


import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    index : {
      unique : true
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

export const StudentModel = mongoose.model('Student', StudentSchema);
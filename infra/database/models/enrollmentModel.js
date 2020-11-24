/**
 * Enroll Schema
 * This file describes the User Model
 *
 * @module StudentSchema
 */

import mongoose from 'mongoose';
// Get the Schema constructor
var Schema = mongoose.Schema;

const EnrollmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  students: {
    type: Schema.Types.ObjectId,
    ref: "Students"
  },
  code: {
    type: String,
    required: true,
  },
  courses: {
    type: Schema.Types.ObjectId,
    ref: "Courses"
  },
  start_date: {
    type: Date,
    default: Date.now,
  },
  finish_date: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const EnrollmentModel = mongoose.model('Enrollment', EnrollmentSchema);
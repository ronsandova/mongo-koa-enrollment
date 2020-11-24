/**
 * student repository.
 * This module handle all requests with the students Collection in mongo databases.
 *
 * @module studentRepository
 */

import mongoose from 'mongoose'
import { handleMongoQuery } from '../../app/helpers'
const Student = mongoose.model('Student')


export const studentRepository = {
  createStudent: async (studentData) => handleMongoQuery(Student.create(studentData)),
  getStudentByEmail: async (email) => handleMongoQuery(Student.findOne({ "email": email })),
  getStudentByID : async (id) => handleMongoQuery(Student.findById(id)),
};

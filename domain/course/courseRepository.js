/**
 * Course repository.
 * This module handle all requests with the Course Collection in mongo databases.
 *
 * @module CourseRepository
 */

import mongoose from 'mongoose'
import { handleMongoQuery } from '../../app/helpers'
const Course = mongoose.model('Course')


export const courseRepository = {
  createCourse: async (courseData) => handleMongoQuery(Course.create(courseData)),
  getCourseByCode : async (code) => handleMongoQuery(Course.findOne({ "code": code }))
};

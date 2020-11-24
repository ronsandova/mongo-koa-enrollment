/**
 * Enrollment repository.
 * This module handle all requests with the Course Collection in mongo databases.
 *
 * @module EnrollmentRepository
 */

import mongoose from 'mongoose'
import { handleMongoQuery } from '../../app/helpers'
const Enrollment = mongoose.model('Enrollment')

export const enrollmentRepository = {
  enrollCourse: async (enrollData) => handleMongoQuery(Enrollment.create(enrollData)),

  checkDatesEnrollment : async (start_date, finish_date, email) => handleMongoQuery(
    Enrollment.find({
        "email": email ,
        $and:[
          { "start_date":{ $gte:new Date(start_date), $lt:new Date(finish_date) }},
          { "finish_date":{ $gte:new Date(start_date), $lt:new Date(finish_date) }}
        ]
    })
  ),


};

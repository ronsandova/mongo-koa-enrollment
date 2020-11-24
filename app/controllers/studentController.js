/**
 * student controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module student controller.
 */

'use strict'
import { studentService } from '../../domain/student/studentService'
import { handleResponse, isEmail } from '../helpers'

export const addStudent = async (ctx, next) => {
  const { first_name, last_name, email  } = ctx.request.body

  if (isEmail(email)) {
    await handleResponse(ctx, studentService.createStudent({ first_name, last_name, email }));
  }

}


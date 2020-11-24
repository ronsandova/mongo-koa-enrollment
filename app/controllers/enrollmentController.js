/**
 * Enrollment controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module Enrollment controller.
 */

'use strict'
import { enrollmentService } from '../../domain/enrollment/enrollmentService'
import { handleResponse } from '../helpers'

export const enrollCourse = async (ctx, next) => {
  const { email, code, start_date, finish_date  } = ctx.request.body
  await handleResponse(ctx, enrollmentService.enrollCourse( { email, code, start_date, finish_date } ));
}

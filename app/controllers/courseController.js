/**
 * Course controller.
 * This file provides all the methods exported in routes file.
 * All methods uses the product service api to handle business logic, and returns a http response.
 * @module Course controller.
 */

'use strict'
import { courseService } from '../../domain/course/courseService'
import { handleResponse } from '../helpers'

export const addCourse = async (ctx, next) => {
  const { name, code, description, start_date, finish_date  } = ctx.request.body
  await handleResponse(ctx, courseService.createCourse(
    { name, code, description, start_date, finish_date }));

}

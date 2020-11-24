import { Service } from '../core/service'
import { courseRepository } from '../course/courseRepository'

class CourseService extends Service {

  constructor() {
    super();
    this.courseRepository = courseRepository;
  }

  async createCourse({ name, code, description, start_date, finish_date }) {
    let result = {}
    // TODO validate here
    // dates are valid
    result.data = await this.courseRepository.createCourse({ name, code, description, start_date, finish_date });

    result.status = result.data ? 201 : 500
    return result;
  }

}

export const courseService = new CourseService();
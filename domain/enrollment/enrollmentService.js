import { Service } from '../core/service'
import { enrollmentRepository } from '../enrollment/enrollmentRepository'
import { studentRepository } from '../student/studentRepository'
import { courseRepository } from '../course/courseRepository'
import { isEmail } from '../../app/helpers'

class EnrollmentService extends Service {

  constructor() {
    super();
    this.enrollmentRepository = enrollmentRepository;
    this.studentRepository = studentRepository;
    this.courseRepository = courseRepository;
  }

  async enrollCourse({  email, code, start_date, finish_date }) {
    let result = {}
    // TODO validate the student id
    if (isEmail(email)) {
      let student = await this.studentRepository.getStudentByEmail( email )

      if ( !student ) {
        result.status = 409
        result.data = 'This email is not registered'
        return result

      }
    } else {
      result.status = 422
      return result
    }

    let course = await this.courseRepository.getCourseByCode(code)
    if ( !course ) {
      result.status = 404
      result.data = 'no course found.'
      return result
    }

    let enrollDates = await this.enrollmentRepository.checkDatesEnrollment( start_date, finish_date, email)
    if ( enrollDates ) {
      result.status = 404
      result.data = 'can not take the course because it conflicted with another enrollment found.'
      return result
    }

    result.data = await this.enrollmentRepository.enrollCourse({  email, code, start_date, finish_date });

    result.status = result.data ? 201 : 500
    return result;
  }

}

export const enrollmentService = new EnrollmentService();
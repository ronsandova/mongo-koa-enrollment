import { Service } from '../core/service'
import { studentRepository } from '../student/studentRepository'

class StudentService extends Service {

  constructor() {
    super();
    this.studentRepository = studentRepository;
  }

  async createStudent({ first_name, last_name, email }) {
    let result = {}
    // TODO validate email exist
    if (!this.getStudentByEmail(email)) {
      result.status = 404
      return result;
    }

    result.data = await this.studentRepository.createStudent({ first_name, last_name, email });
    result.status = result.data ? 200 : 500
    return result;
  }

  async getStudentByEmail(email) {
    let result = {}
    result.data = await this.studentRepository.getUserByEmail(email)
    return result.data ? true : false
  }


}

export const studentService = new StudentService();
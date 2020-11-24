 /**
 * Routes file
 * This file describes any external endpoint of our application, calling their respective controllers.
 * 
 * @module router
 */

'use strict'

import Router from 'koa-router';
import { addStudent, addCourse, enrollCourse } from './controllers';


const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Enrollment Service';
});

router.post('/student/add', addStudent);
router.post('/course/add', addCourse);
router.post('/enroll/add', enrollCourse);

export default router

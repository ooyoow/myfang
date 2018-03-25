'use strict';

import Router from 'koa-router';
import User from '../../controller/user';

const router = Router();
const abc = () => {};
router.get('/user', User.getUserList);
export default router;

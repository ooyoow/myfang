'use strict';

import Router from 'koa-router';
import Hourse from '../../controller/hourse';

const router = Router();
const abc = () => {};
router.get('/hourse', Hourse.getHouse);
export default router;

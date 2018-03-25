'use strict';
import Router from 'koa-router';
import hourse from './hourse';
import user from './user';

const router = Router();

// routes表示的是路由的嵌套处理
router.use(hourse.routes(), hourse.allowedMethods());
router.use(user.routes(), user.allowedMethods());
export default router;

#mysql数据库表结构

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_name` char(50) NOT NULL DEFAULT '' COMMENT '用户帐号',
  `pass_word` char(128) NOT NULL DEFAULT '' COMMENT '用户密码',
  `user_type` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '用户类型 0:超级管理员;1:普通管理员;2:VIP用户;3:普通用户',
  `user_email` char(128) NOT NULL DEFAULT '' COMMENT '邮箱地址',
  `create_time` timestamp DEFAULT '0000-00-00 00:00:00' COMMENT '注册时间',
  `login_ip` char(15) NOT NULL DEFAULT '' COMMENT '登录IP',
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '最后登录时间',
  `user_pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '用户头像',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户据库表';

DROP TABLE IF EXISTS `sort`;
CREATE TABLE `sort` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sort_name` char(50) NOT NULL DEFAULT '' COMMENT '分类名称',
  `sort_type` char(10) NOT NULL DEFAULT '' COMMENT '分类类别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='房源分类表';

DROP TABLE IF EXISTS `hourse`;
CREATE TABLE `hourse` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sort_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '分类ID',
  `title` char(100) NOT NULL DEFAULT '' COMMENT '标题',
  `hourse_type` char(100) NOT NULL DEFAULT '' COMMENT '户型',
  `acreage` int(20) unsigned NOT NULL DEFAULT '0' COMMENT '面积',
  `time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '年代',
  `floor` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '楼层',
  `money` int(20) unsigned NOT NULL DEFAULT '0' COMMENT '单价',
  `prices` int(20) unsigned NOT NULL DEFAULT '0' COMMENT '总价',
  `position` char(100) NOT NULL DEFAULT '' COMMENT '地理位置',
  `description` char(255) NOT NULL DEFAULT '' COMMENT '房源描述',
  `images` char(255) NOT NULL DEFAULT '' COMMENT '房源描述',
  `create_time` timestamp NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `sort_id` (`sort_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='房源数据表';

DROP TABLE IF EXISTS `upload`;
CREATE TABLE `upload` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `hourse_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '房源ID',
  `file_name` char(100) NOT NULL DEFAULT '' COMMENT '文件名称',
  `file_path` char(200) NOT NULL DEFAULT '' COMMENT '文件路径',
  `mime_type` char(50) NOT NULL DEFAULT '' COMMENT '文件类型',
  `file_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文件大小KB',
  `is_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `create_time` timestamp NULL DEFAULT '0000-00-00 00:00:00' COMMENT '上传时间',
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `hourse_id` (`hourse_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='上传列表';
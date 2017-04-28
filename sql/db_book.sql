/*
Navicat MySQL Data Transfer

Source Server         : dbConnection
Source Server Version : 50704
Source Host           : localhost:3306
Source Database       : db_book

Target Server Type    : MYSQL
Target Server Version : 50704
File Encoding         : 65001

Date: 2016-01-12 00:24:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_academy
-- ----------------------------
DROP TABLE IF EXISTS `t_academy`;
CREATE TABLE `t_academy` (
  `Academy_id` varchar(10) NOT NULL,
  `Academy_name` varchar(30) NOT NULL,
  PRIMARY KEY (`Academy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_academy
-- ----------------------------

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `Admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `Admin_name` varchar(10) NOT NULL,
  `Admin_password` varchar(32) NOT NULL,
  PRIMARY KEY (`Admin_id`),
  UNIQUE KEY `Admin_id_UNIQUE` (`Admin_id`),
  UNIQUE KEY `Admin_name` (`Admin_name`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('8', 'hwf', 'c03223e4c2e74fdac0e5f7469073da26');
INSERT INTO `t_admin` VALUES ('9', 'zsy', 'eb25d21e8a4d7dc52947b61ab26a2694');
INSERT INTO `t_admin` VALUES ('10', 'admin', '21232f297a57a5a743894a0e4a801fc3');
INSERT INTO `t_admin` VALUES ('11', 'test', '098f6bcd4621d373cade4e832627b4f6');
INSERT INTO `t_admin` VALUES ('12', 'test2', 'ad0234829205b9033196ba818f7a872b');
INSERT INTO `t_admin` VALUES ('13', 'test3', '8ad8757baa8564dc136c1e07507f4a98');
INSERT INTO `t_admin` VALUES ('14', 'test5', 'e3d704f3542b44a621ebed70dc0efe13');
INSERT INTO `t_admin` VALUES ('15', 'test6', 'b04083e53e242626595e2b8ea327e525');
INSERT INTO `t_admin` VALUES ('16', 'oo', 'e47ca7a09cf6781e29634502345930a7');
INSERT INTO `t_admin` VALUES ('17', 'asd', '7815696ecbf1c96e6894b779456d330e');

-- ----------------------------
-- Table structure for t_book
-- ----------------------------
DROP TABLE IF EXISTS `t_book`;
CREATE TABLE `t_book` (
  `Book_num` int(11) NOT NULL AUTO_INCREMENT,
  `Book_name` varchar(100) NOT NULL,
  `Writer` varchar(100) NOT NULL,
  `Sort_id` int(11) NOT NULL,
  `Price` decimal(5,2) DEFAULT NULL,
  `Pub_company` varchar(20) DEFAULT NULL,
  `Pub_date` date DEFAULT NULL,
  `Total_num` int(11) NOT NULL,
  `Current_num` int(11) NOT NULL,
  `Buy_date` date NOT NULL,
  `Brief` text,
  `imageName` varchar(100) DEFAULT NULL,
  `ISBN` varchar(100) DEFAULT NULL,
  `Add_date` date DEFAULT NULL,
  PRIMARY KEY (`Book_num`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_book
-- ----------------------------
INSERT INTO `t_book` VALUES ('1', '', '', '0', '0.00', '', '2016-01-11', '0', '0', '2016-01-11', '', '','ISBN','2017-01-01');
INSERT INTO `t_book` VALUES ('5', 'Java编程思想（第4版） [thinking in java]', '[美] Bruce Eckel 著；陈昊鹏 译', '2', '73.40', '机械工业出版社', '2007-06-01', '10', '10', '2016-01-10', '《计算机科学丛书：Java编程思想（第4版）》赢得了全球程序员的广泛赞誉，即使是最晦涩的概念，在BruceEckel的文字亲和力和小而直接的编程示例面前也会化解于无形。', '','ISBN','2017-01-01');
INSERT INTO `t_book` VALUES ('6', '疯狂Java讲义（第3版 附光盘）', '李刚 著', '2', '91.30', '电子工业出版社', '2014-07-01', '10', '6', '2016-01-10', 'IT图书作家李刚老师针对Java 8推出的全新升级版；', '','ISBN','2017-01-01');
INSERT INTO `t_book` VALUES ('7', '轻量级Java EE企业应用实战：Struts2+Spring4+Hibernate整合开发（第4版 附CD光盘）', '李刚 著', '2', '93.60', '电子工业出版社', '2014-10-01', '10', '9', '2016-01-11', '国内知名IT图书作家李刚老师基于曾荣获中国书刊发行业协会“年度全行业**畅销品种”大奖的《轻量级Java EE企业应用实战（第3版）》全新升级；\n　　本书内容升级到Struts 2.3、Spring 4.0、Hibernate 4.3；全书所有示例基于Java 8、Hibernate注解进行全面升级；\n　　《轻量级Java EE企业应用实战》新增Maven、SVN、Tomcat 8.0、Eclipse luna（4.4）等知识；\n　　数百个小型案例及完整的工作流系统综合案例帮读者领略S2SH开发精髓；\n　　《轻量级Java EE企业应用实战》被多所“985”“211”院校选作教材；\n　　最受程序员欢迎、影响力*大的国人原创S2SH应用开发必读经典。', '','ISBN','2017-01-01');

-- ----------------------------
-- Table structure for t_book_student
-- ----------------------------
DROP TABLE IF EXISTS `t_book_student`;
CREATE TABLE `t_book_student` (
  `Id` varchar(35) NOT NULL,
  `Book_num` varchar(15) NOT NULL,
  `Student_num` varchar(15) NOT NULL,
  `borrow_date` date NOT NULL,
  `return_date` date NOT NULL,
  `Money` decimal(5,2) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_book_student
-- ----------------------------

-- ----------------------------
-- Table structure for t_class
-- ----------------------------
DROP TABLE IF EXISTS `t_class`;
CREATE TABLE `t_class` (
  `Class_id` varchar(10) NOT NULL,
  `Class_name` varchar(30) NOT NULL,
  `Academy_id` varchar(10) NOT NULL,
  PRIMARY KEY (`Class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_class
-- ----------------------------

-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student` (
  `Student_num` varchar(15) NOT NULL,
  `Student_name` varchar(10) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Academy_id` varchar(10) NOT NULL,
  `Class_id` varchar(10) NOT NULL,
  `Sex` varchar(2) DEFAULT NULL,
  `Telephone` varchar(15) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Lended_num` int(11) NOT NULL DEFAULT '0',
  `Create_date` date NOT NULL,
  PRIMARY KEY (`Student_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_student
-- ----------------------------

-- ----------------------------
-- Table structure for t_type
-- ----------------------------
DROP TABLE IF EXISTS `t_type`;
CREATE TABLE `t_type` (
  `Sort_id` int(11) NOT NULL AUTO_INCREMENT,
  `Sort_name` varchar(20) NOT NULL,
  PRIMARY KEY (`Sort_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type
-- ----------------------------
INSERT INTO `t_type` VALUES ('1', 'JavaScript');
INSERT INTO `t_type` VALUES ('2', 'Java');
INSERT INTO `t_type` VALUES ('4', '文学');
INSERT INTO `t_type` VALUES ('5', '数据库');
INSERT INTO `t_type` VALUES ('6', '建筑');
INSERT INTO `t_type` VALUES ('7', '经济');
INSERT INTO `t_type` VALUES ('8', '医学');
INSERT INTO `t_type` VALUES ('9', '摄影');
INSERT INTO `t_type` VALUES ('10', '字典词典');
INSERT INTO `t_type` VALUES ('11', '政治/军事');
INSERT INTO `t_type` VALUES ('12', '儿童文本');
INSERT INTO `t_type` VALUES ('13', '科普');
INSERT INTO `t_type` VALUES ('14', '杂志/期刊');

/**
 * Created by fiona on 2017/4/28.
 */
var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;

/*
 输入           输出
 insert       Reader           信息
 delete       Reader.id        信息
 modify       Reader           信息
 selectAll    无             [Reader]
 selectOne    Reader.id        Reader
 */

//可以考虑将insert,delete,modify,selectOne,selectAll封装成方法
//将t_book等表格独立出来变成参数传入，然后将传入的对象也封装起来
//这样的话增删查改变成公共接口
var insert = function(reader, callback) {
    console.log("reader:" + reader);
    var sql = "insert into t_reader set ?";
    var obj = {
        Reader_code:    reader.readerCode || '',
        Reader_name:    reader.readerName || '',
        Sort_id:        reader.typeId     || 0, //连接类别的外键
        Gender:         reader.Gender     || 0, // 0 男 1 女
        Grade:          reader.Grade      || '',
        Total_num:      reader.sum        || 0,
        Current_num:    reader.currentNum || 0,
        Tel:            reader.tel        || '',
        Paid:           reader.paid       || 0,
        Other:          reader.other      || ''
    };
    console.log(obj);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("ReaderDaoInsertSuccess:" + rows);
            if (err) {
                console.error("ReaderDaoInsertError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderDaoInsertCatchError:" + er);
        callback(er);
    }
};

exports.insert = insert;

var deleteOne = function(id, callback) {
    var sql = "DELETE FROM t_reader WHERE Reader_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("ReaderDaoDeleteSuccess:" + rows);
            if (err) {
                console.error("ReaderDaoDeleteError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderDaoDeleteCatchError:" + er);
        callback(er);
    }
};

exports.deleteOne = deleteOne;


var modify = function(reader, callback) {
    var sql = "UPDATE t_reader SET ? WHERE Reader_num = " + reader.id;
    console.log("sql:"+sql);

    var obj = {
        Reader_code:    reader.readerCode || '',
        Reader_name:    reader.readerName || '',
        Sort_id:        reader.typeId     || 0, //连接类别的外键
        Gender:         reader.Gender     || 0, // 0 男 1 女
        Grade:          reader.Grade      || '',
        Total_num:      reader.sum        || 0,
        Current_num:    reader.currentNum || 0,
        Tel:            reader.tel        || '',
        Paid:           reader.paid       || 0,
        Other:          reader.other      || ''
    };

    console.log(obj);
    console.log(sql);

    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("ReaderDaoModifySuccess:" + rows);
            if (err) {
                console.error("ReaderDaoModifyError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderDaoModifyCatchError:" + er);
        callback(er);
    }
};

exports.modify = modify;


var selectOne = function(id, callback){
    var sql = "SELECT * FROM t_reader WHERE Reader_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("ReaderDaoSelectOneSuccess:" + rows);
            if (err) {
                console.error("ReaderDaoSelectOneError:" + err);
            }
            callback(rows[0]);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderDaoSelectOneCatchError:" + er);
        callback(er);
    }
};

exports.selectOne = selectOne;

var selectAll = function(callback) {
    var sql = "select * from t_reader,t_type where t_reader.Sort_id = t_type.Sort_id";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("ReaderDaoSelectAllSuccess:" + rows);
            if (err) {
                console.error("ReaderDaoSelectAllError:" + err);
            }
            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderDaoSelectAllCatchError:" + er);
        callback(er);
    }
};

exports.selectAll = selectAll;


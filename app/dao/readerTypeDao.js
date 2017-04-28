/**
 * Created by fiona on 2017/4/28.
 */
var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;

/*
 输入       	输出
 insert       BookType       信息
 delete       BookType.id    信息
 modify       BookType       信息
 selectAll    无         	[BookType]
 selectOne    BookType.id    BookType
 */

var insert = function(bookType, callback) {
    console.log("readerType:"+bookType);
    var sql = "insert into t_reader_type set ?";
    var obj = {
        Sort_name: bookType.typeName
    };
    console.log(obj);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("ReaderTypeDaoInsertSuccess:" + rows);
            if (err) {
                console.error("ReaderTypeDaoInsertError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderTypeDaoInsertCatchError:" + er);
        callback(er);
    }
};

exports.insert = insert;

var deleteOne = function(id, callback) {
    var sql = "DELETE FROM t_reader_type WHERE Sort_id = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("ReaderTypeDaoDeleteSuccess:" + rows);
            if (err) {
                console.error("ReaderTypeDaoDeleteError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderTypeDaoDeleteCatchError:" + er);
        callback(er);
    }
};

exports.deleteOne = deleteOne;

var modify = function(bookType, callback) {
    var sql = "UPDATE t_reader_type SET Sort_name = '" + readerType.typeName + "' WHERE Sort_id =" + bookType.id;
    console.log(sql);
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("ReaderTypeDaoModifySuccess:" + rows);
            if (err) {
                console.error("ReaderTypeDaoModifyError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderTypeDaoModifyCatchError:" + er);
        callback(er);
    }
};

exports.modify = modify;

var selectOne = function(id, callback){
    var sql = "SELECT * FROM t_reader_type WHERE Sort_id = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("ReaderTypeDaoSelectOneSuccess:" + rows);
            if (err) {
                console.error("ReaderTypeDaoSelectOneError:" + err);
            }
            callback(rows[0]);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderTypeDaoSelectOneCatchError:" + er);
        callback(er);
    }
};

exports.selectOne = selectOne;

var selectAll = function(callback) {
    var sql = "select * from t_reader_type";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("ReaderTypeDaoSelectAllSuccess:" + rows);
            if (err) {
                console.error("ReaderTypeDaoSelectAllError:" + err);
            }
            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("ReaderTypeDaoSelectAllCatchError:" + er);
        callback(er);
    }
};

exports.selectAll = selectAll;

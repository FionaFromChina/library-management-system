/**
 * Created by fiona on 2017/4/28.
 */
/**
 * Created by fiona on 2017/4/28.
 */
var connection = require('../db/connection');
var queryWithArgs = connection.queryWithArgs;
var query = connection.query;

/*
 输入           输出
 insert       Borrow           信息
 delete       Borrow.id        信息
 modify       Borrow           信息
 selectAll    无             [Borrow]
 selectOne    Borrow.id        Borrow
 */

//可以考虑将insert,delete,modify,selectOne,selectAll封装成方法
//将t_book等表格独立出来变成参数传入，然后将传入的对象也封装起来
//这样的话增删查改变成公共接口
var insert = function(borrow, callback) {
    console.log("borrow:" + borrow);
    var sql = "insert into t_borrow set ?";
    var obj = {
        Borrow_date:    borrow.borrowDate   || new Date(),
        Reader_Id:      borrow.readerId     || 0, //外键 读者ID
        Book_Id:        borrow.bookId       || 0, //外键 图书ID
        Num:            borrow.Num          || 0, //借阅数量
        Return_date:    borrow.returnDate   || new Date(), // todo默认30天
        Memo:           borrow.Memo         || '',
        Borrow_state:   borrow.borrowState  ||0 //0 未还 1 已还
    };
    console.log(obj);
    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("BorrowDaoInsertSuccess:" + rows);
            if (err) {
                console.error("BorrowDaoInsertError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BorrowDaoInsertCatchError:" + er);
        callback(er);
    }
};

exports.insert = insert;

var deleteOne = function(id, callback) {
    var sql = "DELETE FROM t_borrow WHERE Borrow_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("BorrowDaoDeleteSuccess:" + rows);
            if (err) {
                console.error("BorrowDaoDeleteError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BorrowDaoDeleteCatchError:" + er);
        callback(er);
    }
};

exports.deleteOne = deleteOne;


var modify = function(borrow, callback) {
    var sql = "UPDATE t_borrow SET ? WHERE Borrow_num = " + borrow.id;
    console.log("sql:"+sql);

    var obj = {
        Borrow_date:    borrow.borrowDate   || new Date(),
        Reader_Id:      borrow.readerId     || '',
        Book_Id:        borrow.bookId       || '',
        Num:            borrow.Num          || 0, //借阅数量
        Return_date:    borrow.returnDate   || new Date(), // todo默认30天
        Memo:           borrow.Memo         || '',
        Borrow_state:   borrow.borrowState  ||0 //0 未还 1 已还
    };

    console.log(obj);
    console.log(sql);

    try {
        //执行插入语句，成功返回success
        queryWithArgs(sql, obj, function(err, rows) {
            console.log("BorrowDaoModifySuccess:" + rows);
            if (err) {
                console.error("BorrowDaoModifyError:" + err);
            }
            callback("success");
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BorrowDaoModifyCatchError:" + er);
        callback(er);
    }
};

exports.modify = modify;


var selectOne = function(id, callback){
    var sql = "SELECT * FROM t_borrow WHERE Borrow_num = ?";
    try {
        queryWithArgs(sql, id, function(err, rows) {
            console.log("BorrowDaoSelectOneSuccess:" + rows);
            if (err) {
                console.error("BorrowDaoSelectOneError:" + err);
            }
            callback(rows[0]);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BorrowDaoSelectOneCatchError:" + er);
        callback(er);
    }
};

exports.selectOne = selectOne;

var selectAll = function(callback) {
    var sql = "select * from t_borrow,t_type where t_borrow.Sort_id = t_type.Sort_id";
    try {
        //执行插入语句，成功返回success
        query(sql, function(err, rows) {
            console.log("BorrowDaoSelectAllSuccess:" + rows);
            if (err) {
                console.error("BorrowDaoSelectAllError:" + err);
            }
            callback(rows);
        });
    } catch (er) {
        //错误则输出异常并输出错误
        console.error("BorrowDaoSelectAllCatchError:" + er);
        callback(er);
    }
};

exports.selectAll = selectAll;


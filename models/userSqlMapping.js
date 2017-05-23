
// models/userSqlMapping.js
// CRUD SQL语句
var test = {
	insert:'INSERT INTO test(id, name, age) VALUES(0,?,?)',
	update:'update test set name=?, age=? where id=?',
	delete: 'delete from test where id=?',
	queryById: 'select * from test where id=?',
	queryAll: 'select * from test'
};
 
module.exports = test;
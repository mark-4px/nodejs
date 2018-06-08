
//连接数据库
var mysql = require('mysql');
var fs = require('graceful-fs');

console && console.log(fs);

var connection = mysql.createConnection({
    host: '115.29.248.46',
    port: 3279,
    user: 'mark',
    password: '4px_mark',
    database:'mark'
});

//查询book表的所有的数据
var query = function (_callback){
	//查询
	connection.query('select distinct category from book order by id asc', function(err, categories, fields) {
    	if (err){
    		throw err;
    	}
    	connection.query('select name,image,category from book order by id asc', function(err, books, fields) {
	    	if (err){
	    		throw err;
	    	}
	    	_callback && _callback(categories,books);
		});
	});
};

const DATA_FILE = 'D:/svn/mark/01_project/trunk/books/routes/data.js';
var flush = function (categories,books,_callback){
	//console && console.log(books);
	
	var dataArray = [];

	dataArray.push('\nvar data = {};\n');

	dataArray.push('data.categories = ');
	dataArray.push(JSON.stringify(categories));
	dataArray.push(';\n');

	dataArray.push('data.books = ');
	dataArray.push(JSON.stringify(books));
	dataArray.push(';\n');

	dataArray.push('module.exports = data;\n');

	//清空文件
	fs.writeFileSync(DATA_FILE,dataArray.join(''));

	_callback && _callback();
};


//启动连接
connection.connect();
//执行查询
query(function (categories,books){
	//释放到磁盘生成资源文件
	flush(categories,books,function (){
		//关闭连接
		connection.end();
		console && console.log('finished ... ');
	});
});


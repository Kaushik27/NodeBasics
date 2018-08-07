console.log('hello node');

var person = {
	name : 'kaushik',
	age : '10'
};
console.log(person);



var print = function() {
	console.log("print this");
};

setTimeout(print, 2000);

var fs= require('fs');
fs.writeFileSync('test.txt','This is my test file');
console.log(fs.readFileSync('test.txt').toString());

var path=require('path');
var testPath='Desktop/Module//index.html';
console.log(path.normalize(testPath));



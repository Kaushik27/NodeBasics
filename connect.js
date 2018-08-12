var connect=require('connect');
var http=require('http');

var app=connect();

function doFirst(request,response,next){
    console.log("First method call");
    next();
}
function doSecond(request,response,next){
    console.log("Second method call");
    next();
}


function homePage(request,response){
    console.log("home page requested");
}


function login(request,response){
    console.log("login page requested");
}


//app.use(doFirst);
//app.use(doSecond);

app.use('/home',homePage);
app.use('/login',login);


http.createServer(app).listen(9999);
console.log("server is up and running");





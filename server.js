var http=require('http');

function onRequest(request,response){
    console.log("a new request "+request.url);
    response.writeHead(200,{"Context-Type":"text/plan"});
    response.write("this is data from server");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server started");
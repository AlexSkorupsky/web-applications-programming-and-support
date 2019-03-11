var http = require('http');
var fs = require('fs');

// var index = fs.readFile("../static/index.html", 'utf8');

// var style = fs.readFile("../static/style.css", 'utf8');

// var script = fs.readFile("../static/script.js", 'utf8');

var html = `
<!DOCTYPE html>
<html>
<body>
<h1>Привіт</h1>
<p>Тобі відповів САМ сервер...</p>
</body>
</html>`

http.createServer( function(req, res){
    console.log(req.url);
    console.log(req.method);
    //console.log(req.headers);

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream("../static/index.html", "utf8").pipe(res);
    }else if(req.url == '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
        fs.createReadStream("../static/style.css", "utf8").pipe(res);
    }else if(req.url == '/script.js'){
        res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'});
        fs.createReadStream("../static/script.js", "utf8").pipe(res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream("../static/error404.html", "utf8").pipe(res);
    }
    // switch(req.url){
    //     case '/':
    //     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    //     fs.createReadStream("../static/index.html", "utf8").pipe(res);

    //     // case '/style.css':
    //     // res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
    //     // fs.createReadStream("../static/style.css", "utf8").pipe(res);

    //     // case '/script.js':
    //     // res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'});
    //     // fs.createReadStream("../static/script.js", "utf8").pipe(res);

    //     default:
    //     res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    //     fs.createReadStream("../static/index.html", "utf8").pipe(res);
    // }
    

}).listen(3000, '127.0.0.1');

//server.listen(3000, '127.0.0.1');





// var net = require('net');
// var server = net.createServer(function (socket) {
//     console.log('client connected');
//     socket.on('data', function (data) {
//         var textChunk = data.toString('utf8');
//         console.log("receive from client: \n" + textChunk);
//         socket.write("Hello client, I can hear You!");
//     });
//     socket.on('end', function () {
//         console.log('client disconnected');
        
//     });
// });
// server.listen(3000, '127.0.0.1');
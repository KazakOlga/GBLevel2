const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log(req.url);
    let body = null;
    try{
        body=fs.readFileSync(`./Game${req.url}`)
    }
    catch (err){
       body = fs.readFileSync('./Game/index.html')  
    }
res.end(body);
});
const port = process.env.PORT || 29506;
server.listen(port);
console.log ('Server started');

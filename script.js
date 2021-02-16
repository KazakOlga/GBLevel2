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
server.listen(29506);
console.log ('Server started');
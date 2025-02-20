const app=require('./app');
// importing app from app.js
const http=require('http');
const server=http.createServer(app);
// now creating a server to listen it
const port=process.env.PORT || 3000
server.listen(port,()=>{
    console.log("server is listening on port"+port);
})
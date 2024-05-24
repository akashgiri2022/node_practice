let http=require('http')
let server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url=='/'){
        res.write("<h1>Hello From Server <h1>")
        res.end();
    }
    if(req.url=='/about'){
        res.write("Hii this is about page")
        res.end();
    }
})
server.listen(2000,()=>{
    console.log("Server is now Listening");
});
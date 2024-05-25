let http=require('http');
let fs=require('fs');
let server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
   if(req.url=='/'){
    let data=fs.readFileSync('./Pages/Home.html','utf-8');
    res.write(data)
    res.end;
   }
   if(req.url=='/about'){
    res.write('<h1><marquee>"Hii this is about page"</marquee></h1>')
    res.end();
}
if(req.url=='/homecss'){
    let data=fs.readFileSync('./Pages/css/Home.css',"utf-8")
    res.write(data);
    res.end()
}
        

})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started at http://127.0.0.1:8000');
})
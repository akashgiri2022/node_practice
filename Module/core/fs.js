let fs=require('fs')
console.log('start');
// console.log(fs);

//                                              ....   create file   ....
//                  fs.writeFile(using Synchronous)   or    fs.writeFileSync (using Asynchronous)



//                     ....Synchronous....

// fs.writeFileSync('./msg.text','Hello World','utf-8');   


//                  ....Asynchronous...


// fs.writeFile('./demo.text','Akash','utf-8', (err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('file created');
//     }
// })

// console.log('end');

//                                       .......................readFile............................

//                   ...........  fs.readFileSync  or   fs.readFile.............

//                    ....Synchronous....


// let data=fs.readFileSync('./msg.text','utf-8');
// console.log(data);



//                  ...without utf-8...

// let data=fs.readFileSync('./msg.text');
// console.log(data.toString());



//                        .....Asynchronous.......

// fs.readFile('./msg.text','utf-8',(err,data)=>{
//     if(err)
//         console.log('err');
//     else
//     console.log(data);
// })
// console.log('end');




//                                                                ...UpdateFile...
//                    fs.appendFile or fs.appendFileSync

//                 .....Synchronous.....


// fs.appendFileSync('./msg.text','Hlw Brother','utf-8');


//                          .....Asynchronous....


// fs.appendFile('./msg.text', 'Hii This is Akash','utf-8',(err)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log('data updated in file');
// })
// console.log('end');



//                                                     ...... Delete File .......
//                     fs.unlinkSync or fs.unlink
 



//                     .....unlinkSync....

// fs.unlinkSync('./demo.text')
// console.log('end');


//                .....unlink.....


// fs.unlink('./demo.text',(err)=>{
//     if(err)
//         console.log(err)
//     else
//     console.log('prgrm done');
// })



//                                                   ......copy file......

//           fs.copyfileSync or fs.copyfile (deep copy) -> is one file change,another file also changed

//                        ....copyfileSync....

// fs.copyFileSync('./msg.text','./msg1.text')


//           ....copyfile....

// fs.copyFile('./msg.text','./demo.text',(err)=>{
//     if(err)
//         console.log(err)
//     else
//     console.log('file copied');
// })


//                                ....  fs.link or fs.linksync ....(reference copy) -> if you change one file,it automatically changed another file

//          ..sync
// fs.linkSync('./demo.text','./demo1.text')

//              ....Async

// fs.link('./demo1.text','./demo2.text',(err)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log('file reference copied');
// })



//                                                 ....Rename file....
//fs.renameSync or fs.rename

//              ..Sync..
// fs.renameSync('./demo.text','./msd.text')



//        ...Async

// fs.rename('./demo2.text','./vk.text',(err)=>
// {
//     if(err)
//         console.log(err);
//     else
//     console.log('file rename succefully');
// })
// console.log('end');


//                                               ....create a folder....
//fs.mkdirSync or fs.mkdir

//mkdirSync

// fs.mkdirSync('../https')  //outside the current directory
// fs.mkdirSync('./https')      //inside the current directory6

fs.mkdir('./http',(err)=>{
    if(err)
        console.log(err);
    else
    console.log("create a folder");
})



//                                                          ..Event module..

// event module is used to create and execute inside a node server

let events=require('events')
//create an instance of eventEmitter
let eventsEmitter=new events.EventEmitter()
// create an event
eventsEmitter.addListener("printmsg",()=>{
    console.log('printing msg executed');
})


eventsEmitter.on('printmsg',()=>{
    console.log('printing msg executed again');
})

//execute an event
eventsEmitter.emit('printmsg')
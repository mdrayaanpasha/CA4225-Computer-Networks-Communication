const net = require("net");


const port = 3000
const host = "127.0.0.1";


const server = net.createServer((socket)=>{
    console.log("server created: ",socket.remoteAddress,socket.remotePort);

    //reading data!!
    socket.on("data",(d)=>{
        console.log("data recived: ",d.toString());
        socket.write(d)
    })

    //ending socket?
    socket.on("end",()=>{
        console.log("client closed!!");
    })

    //error hangling
    socket.on("error",(e)=>{
        console.error("error: ",e)
    })


})


server.listen(port,host,()=>{
    console.log(`server running on ${host}:${port} `)
})
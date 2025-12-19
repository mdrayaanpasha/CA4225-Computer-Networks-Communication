const net = require("net");

const port = 3000;
const host = '127.0.0.1'

const client = new net.Socket();

client.connect(port,host,()=>{
    console.log("connected to the server");

    const mess = "yello there mate!";
    console.log("sending this message: ",mess);

    client.write(mess)
})

client.on("data",(d)=>{
    console.log("recived this echo: ",d.toString());
    client.end();
})

client.on("close",()=>{
    console.log("connection closed")
})

client.on("error",(e)=>{
    console.error(e)
})
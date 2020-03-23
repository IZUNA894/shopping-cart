const express = require("express");
const jsonServer= require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const filename = process.argv[2] || "./data.js";
const port = process.argv[3] || 3000;

 let router = undefined;

 let app = express();

 const createSever= ()=>{
   delete require.cache[require.resolve(filename)];
          setTimeout(()=>{
            router = jsonServer.router(filename.endsWith(".js")?
                      require(filename)():filename);
          },50);

 }
createSever();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api",(req,res,next)=>router(req,res,next));

chokidar.watch(filename).on("change",()=>{
  console.log("changes detected... restarting ...");
  createSever();
  console.log("server back on line");
});

app.listen(port,()=>{console.log(`listenning on port ${port}`);});

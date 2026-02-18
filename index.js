// "start": "nodemon index.js"
// console.log("Muzamil Fatima");
// 1. packages
import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
// 2. Instances

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 3. Serving HTML File

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname, 'index.html')
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html")));

// 4. Define a connection event handler

io.on("connection", (client) => {
  console.log("User connected to server");
  // console.log(socket);

  // Emit a 'message' event to the client 
client.emit('message', "Welcome to the server ")

  client.on("disconnect", () => {
    console.log("User Disconnected From (Server) ");
  });
});
// 5.Start the server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

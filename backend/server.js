const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("add-task", (task) => {
    io.emit("task-added", task);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

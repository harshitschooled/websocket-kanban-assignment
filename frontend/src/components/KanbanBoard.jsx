import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://websocket-kanban-assignment.onrender.com");

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("task-added", (task) => {
      setTasks((prev) => [...prev, task]);
    });

    return () => {
      socket.off("task-added");
    };
  }, []);

  const addTask = () => {
    if (!input.trim()) return;

    const task = { text: input };
    socket.emit("add-task", task);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Kanban Board</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default KanbanBoard;

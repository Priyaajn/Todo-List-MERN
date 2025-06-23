import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  // Fetch todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Add todo
  const addTodo = async () => {
    if (newTitle.trim() === "") return;
    try {
      const res = await axios.post("http://localhost:5000/api/todos", {
        title: newTitle,
      });
      setTodos([...todos, res.data]);
      setNewTitle("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // Mark as done (update)
  const markAsDone = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: true,
      });
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📝 Todo List</h1>

      <input
        type="text"
        placeholder="Enter new task"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={addTodo} style={{ padding: "8px 15px" }}>
        Add
      </button>

      <ul style={{ marginTop: "30px", listStyle: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.title}
            </span>

            {!todo.completed && (
              <button onClick={() => markAsDone(todo._id)}>✅ Done</button>
            )}

            <button
              onClick={() => deleteTodo(todo._id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

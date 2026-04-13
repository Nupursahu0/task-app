import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Task Manager</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.listItem}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "200px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    margin: "10px auto",
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
  },
  deleteButton: {
    cursor: "pointer",
    border: "none",
    background: "transparent",
  },
};

export default App;
import React, { useState, useEffect } from "react";

function TaskManagementDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "", priority: "Low" });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(e) {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  }

  function addTask() {
    if (!newTask.title.trim()) return;
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    setNewTask({ title: "", description: "", dueDate: "", priority: "Low" });
  }

  function toggleTaskCompletion(taskId) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <div>
        <input type="text" name="title" placeholder="Task Title" value={newTask.title} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newTask.description} onChange={handleInputChange} />
        <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title} - {task.description} - {task.dueDate}</span>
            <div>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagementDashboard;
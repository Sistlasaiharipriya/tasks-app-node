//tasks app
const express = require("express");
const app = express();


//or using json 
app.use(express.json());

//task array
let tasks = [];

//get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});


//create a new task
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    const newTask = {
      id: tasks.length + 1,
      title,
    };
    tasks.push(newTask);
    res.status(201).json({
      status:"created successfully"
    });
  });

  // Route to update task status
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title } = req.body;
  
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
  
    task.title = title;
    res.json(task);
  });
  
  // Route to delete a task
  app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }
  
    tasks.splice(taskIndex, 1);
    res.status(204).json({
      "status":"delete success"
    });
  });


// Start the server
app.listen(3000, () => {
    console.log(`Task API listening at http://localhost:3000}`);
});
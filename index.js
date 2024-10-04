//tasks app
const express = require("express");
const app = express();

// Start the server
app.listen(3000, () => {
    console.log(`Task API listening at http://localhost:${port}`);
});

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
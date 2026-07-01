const Task = require('../models/Task');

// 1. Create a new task
const createTask = async (req, res, next) => {
  try {
    // Extracting the data sent from my React frontend
    const { title, description, priority, dueDate } = req.body;

    // Basic manual validation: Make sure the user at least provides a title
    if (!title) {
      return res.status(400).json({ message: 'Please provide a task title. It is required.' });
    }

    // Creating a new task instance using my Mongoose model
    const newTask = new Task({
      title,
      description,
      priority,
      dueDate
    });

    // Saving it to the MongoDB database
    const savedTask = await newTask.save();
    
    // 201 status code means "Created successfully"
    res.status(201).json(savedTask); 
  } catch (error) {
    // If anything fails (like a database error), pass it to my errorHandler middleware
    next(error);
  }
};

// 2. Get all tasks to display on the frontend
const getTasks = async (req, res, next) => {
  try {
    // Fetch all tasks from MongoDB and sort them so the newest tasks appear first
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// 3. Get a single task by its ID
const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    // If the ID isn't in the database, return a 404 Not Found error
    if (!task) {
      return res.status(404).json({ message: 'Sorry, I could not find that task.' });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// 4. Update a task (used for editing text or checking the "complete" box)
const updateTask = async (req, res, next) => {
  try {
    // I am using findByIdAndUpdate here. 
    // The { new: true } option tells Mongoose to return the newly updated task instead of the old one.
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } 
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found for updating.' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

// 5. Delete a task
const deleteTask = async (req, res, next) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Task not found. It might have already been deleted.' });
    }

    res.status(200).json({ message: 'Task deleted successfully!' });
  } catch (error) {
    next(error);
  }
};

// 6. Custom Search Functionality for the frontend search bar
const searchTasks = async (req, res, next) => {
  try {
    // Grab the search term from the URL query string (e.g., ?q=homework)
    const searchQuery = req.query.q; 

    if (!searchQuery) {
      return res.status(400).json({ message: 'Please enter a search term.' });
    }

    // I learned how to use $regex to search for partial matches in MongoDB.
    // The 'i' option makes the search case-insensitive so "React" and "react" both work.
    const tasks = await Task.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Exporting all my controller functions so my routes file can use them
module.exports = { 
  createTask, 
  getTasks, 
  getTaskById, 
  updateTask, 
  deleteTask, 
  searchTasks 
};
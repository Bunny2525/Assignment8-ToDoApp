const express = require('express');
const router = express.Router();
const {
  addTask, getTasks, getTask,
  updateTask, deleteTask, completeTask
} = require('../controllers/taskController');

router.post('/', addTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/complete', completeTask);

module.exports = router;

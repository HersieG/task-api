import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateGetTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);

router.get('/:id', validateGetTask, taskController.getTask);

router.post('/', validateTask, taskController.createTask);

export default router;

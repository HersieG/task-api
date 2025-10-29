import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return await taskRepository.findAll();
}

export async function createTask(newTask) {
  return await taskRepository.create(newTask);
}

export async function findTaskById(id) {
  const task = await taskRepository.findById(id);
  console.log(task);
  if (task) return task;
  else {
    const err = new Error('Task not found');
    err.status = 404;
    throw err;
  }
}

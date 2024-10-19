
// starting to do list
// Get elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add 'Complete' button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Add 'Delete' button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
});
// ending of to do list


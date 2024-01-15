// src/components/TaskList.tsx

import React from 'react';

interface TaskListProps {
  tasks: any[]; // Replace 'any' with actual type
  submitTask: (taskId: number) => void;
}

function TaskList({ tasks, submitTask }: TaskListProps) {
  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} - Status: {task.status}
            {task.status === 0 && (
              <button onClick={() => submitTask(task.id)}>Submit Task</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

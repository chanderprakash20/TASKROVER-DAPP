// src/components/TaskForm.tsx

import React, { useState } from 'react';

interface TaskFormProps {
  createTask: (description: string) => void;
}

function TaskForm({ createTask }: TaskFormProps) {
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    if (description.trim() !== '') {
      createTask(description);
      setDescription('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default TaskForm;

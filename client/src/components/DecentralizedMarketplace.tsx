// src/components/DecentralizedMarketplace.tsx

import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { usePetraWallet } from 'petra-wallet-sdk'; // Assuming a Petra wallet SDK exists

function DecentralizedMarketplace() {
  const [tasks, setTasks] = useState([]);
  const { signIn, getAccount, sendTransaction, fetchContractData } = usePetraWallet();

  useEffect(() => {
    // Check if the user is signed in
    const checkSignIn = async () => {
      if (!(await getAccount())) {
        // User is not signed in, prompt for sign-in
        await signIn();
      }
    };

    checkSignIn();
  }, [getAccount, signIn]);

  const createTask = async (description: string) => {
    // Call the Move smart contract to create a new task
    const result = await sendTransaction('0x1.createTask', [Buffer.from(description)]);
    console.log('Task Created:', result);
    // Refresh the task list
    fetchTaskList();
  };

  const submitTask = async (taskId: number) => {
    // Call the Move smart contract to submit a task
    await sendTransaction('0x1.submitTask', [taskId]);
    console.log('Task Submitted:', taskId);
    // Refresh the task list
    fetchTaskList();
  };

  const fetchTaskList = async () => {
    // Fetch the list of tasks from the blockchain
    const taskList = await fetchContractData('0x1.Tasks', 'getAll');
    setTasks(taskList);
  };

  useEffect(() => {
    // Fetch the initial task list
    fetchTaskList();
  }, []);

  return (
    <div>
      <h1>Decentralized Marketplace</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} submitTask={submitTask} />
    </div>
  );
}

export default DecentralizedMarketplace;

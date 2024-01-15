module 0x1 {
  // Define a structure to represent a task
  struct Task {
    id: u64;
    owner: address;
    assignee: address;
    description: vector<u8>;
    status: u8;
  }

  // Vector to store tasks
  public vector<Task> Tasks;

  // Event to signal the creation of a new task
  public event TaskCreated(u64, address, address, vector<u8>, u8);

  // Function to create a new task
  public fun createTask(description: vector<u8>): u64 {
    let id = Tasks.length as u64;
    let task = Task(id, 0x0, 0x0, description, 0);
    Tasks.push(task);
    TaskCreated(id, 0x0, 0x0, description, 0);
    return id;
  }

  // Function to assign a task to an address
  public fun assignTask(taskId: u64, assignee: address) {
    let mut task = &mut Tasks[taskId];
    assert(task.status == 0, 1); // Check if the task is not already assigned
    task.assignee = assignee;
    task.status = 1; // Mark the task as assigned
  }

  // Function to mark a task as completed
  public fun completeTask(taskId: u64) {
    let mut task = &mut Tasks[taskId];
    assert(task.assignee == get_signer(), 2); // Only the assignee can mark a task as completed
    task.status = 2; // Mark the task as completed
  }
}

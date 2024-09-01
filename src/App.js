import { useState } from "react";
import "./App.css";
import { Header } from "./Component/Header";
import { Task } from "./Component/Task/Task";

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const handleUpdateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  return (
    <div className="">
      <Header />
      <div className="flex flex-wrap ">
        {tasks.map((task, index) => (
          <Task
            key={index}
            tasks={task}
            setTasks={setTasks}
            onUpdateTask={(updatedTask) =>
              handleUpdateTask(tasks.index, updatedTask)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;

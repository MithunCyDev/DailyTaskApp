import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Draggable from "react-draggable";
import { Todos } from "./Todos/Todos";

export const Task = ({ tasks, setTasks, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(tasks);

  const handleTaskClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const initialTask = e.target.value;
    setCurrentTask(initialTask);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateTask(currentTask);
  };
  return (
    <div className="mt-10 mx-10">
      <div className="bg-black w-[250px] h-full flex items-start flex-col rounded-md">
        <div className="flex items-center space-x-24 relative">
          {isEditing ? (
            <input
              type="text"
              value={currentTask}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="text-white py-1 px-4 m-2 bg-liteBlack rounded-md border-none outline-none w-[100px] h-[30px]"
              autoFocus
            />
          ) : (
            <p
              className="text-white  py-1 px-4 m-2 bg-liteBlack rounded-md cursor-pointer"
              onClick={handleTaskClick}
            >
              {currentTask}
            </p>
          )}
          <BsThreeDots className="text-white absolute left-28 top-4 cursor-pointer hover:text-blue" />
        </div>
        <div className="mx-2 my-4">
          <Todos />
        </div>
      </div>
    </div>
  );
};

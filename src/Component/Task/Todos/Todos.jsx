import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

export const Todos = () => {
  const [createTask, setCreateTask] = useState(false);
  const [todos, setTodos] = useState("");
  const handleChange = (event) => {
    setTodos(event.target.value);
  };

  return (
    <div>
      {createTask ? (
        <div>
          <textarea
            onChange={handleChange}
            value={todos}
            onBlur={() => setCreateTask(false)}
            className="w-[230px] h-[40px] min-h-[40px] focus:outline-none overflow-hidden
       bg-liteBlack text-white rounded-md py-2 px-4"
          />
          <button
            onClick={() => setCreateTask(false)}
            className="bg-blue hover:bg-liteBlack py-1 px-4 text-white rounded-md "
          >
            Save
          </button>
        </div>
      ) : (
        <>
          {todos == "" ? (
            <div className="flex items-center space-x-2">
              <IoMdAddCircle
                onClick={() => setCreateTask(true)}
                className="text-liteWhite w-6 h-6 hover:text-blue cursor-pointer"
              />
              <p className="text-white font-semibold">Add Task</p>
            </div>
          ) : (
            <div className="flex items-center cursor-pointer relative">
              <p className="text-white font-medium px-2 max-w-[100px]">
                {todos}
              </p>
              <MdOutlineEdit
                className="text-blue hover:text-white absolute left-52"
                onClick={() => setCreateTask(true)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

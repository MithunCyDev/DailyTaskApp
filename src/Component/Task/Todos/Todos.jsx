import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "react-avatar";

export const Todos = () => {
  const [createTask, setCreateTask] = useState(false);
  const [todos, setTodos] = useState("");
  const [member, setMember] = useState("Mithun"); // Default selected member
  const [colors, setColors] = useState({});
  const [menu, setMenu] = useState(false);
  const [memberList, setMemberList] = useState([
    "Mithun",
    "Rajib",
    "Somik",
    "Roman",
  ]);

  const handleChange = (event) => {
    setTodos(event.target.value);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // Generate a random color for each member and store it in the state
    const newColors = {};
    memberList.forEach((memberName) => {
      newColors[memberName] = getRandomColor();
    });
    setColors(newColors);
  }, [memberList]);

  return (
    <div>
      {createTask ? (
        <div>
          <Box
            component="form"
            sx={{ "& > :not(style)": { my: 2, width: "25ch", color: "white" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handleChange}
              value={todos}
              onBlur={() => setCreateTask(false)}
              sx={{
                "& .MuiInputBase-input": { color: "white" }, // input text color
                "& .MuiInputLabel-root": { color: "white" }, // label color
                "& .MuiInput-underline:before": { borderBottomColor: "white" }, // bottom border before focus
                "& .MuiInput-underline:after": { borderBottomColor: "white" },
              }}
              id="standard-basic"
              variant="standard"
            />
          </Box>

          <Button onClick={() => setCreateTask(false)} variant="contained">
            Save
          </Button>
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
            <div className=" cursor-pointer relative space-y-2">
              <div className="flex items-center bg-liteBlack p-2 rounded-md">
                <Avatar
                  name={member}
                  round={50}
                  color={colors[member]}
                  size={30}
                  onClick={() => setMenu(!menu)}
                />
                <div className="">
                  <p className="relative text-white  font-medium text-[15px] px-2 w-[185px] overflow-hidden text-ellipsis whitespace-wrap">
                    {todos}
                  </p>
                  <MdOutlineEdit
                    className="text-blue bg-liteBlack w-7 h-7 p-1 rounded-full hover:text-white absolute top-2 left-48 z-10"
                    onClick={() => setCreateTask(true)}
                  />
                </div>
              </div>

              <div className="bg-liteBlack w-full h-[25px] flex items-center p-2 space-x-2">
                <IoMdAddCircle className="text-gray hover:text-white w-5 h-5" />
                <p className="text-gray">Add Task</p>
              </div>

              {menu && (
                <div className="absolute bg-liteBlack w-[250px] h-[200px] top-12  -left-2 overflow-y-auto rounded-b-md">
                  <div className=" flex flex-col py-4 px-4 space-y-4 bg-black">
                    {memberList.map((memberName, index) => (
                      <Avatar
                        onClick={() => setMember(memberName)} // Set the clicked member
                        key={index}
                        name={memberName}
                        round={50}
                        color={colors[memberName]}
                        size={30}
                        style={{
                          backgroundColor: colors[memberName],
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

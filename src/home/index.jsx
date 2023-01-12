import React, { useState } from "react";
import { FiCheck, FiX, FiTrash } from "react-icons/fi";

export default function Home() {
  const [todoItems, setTodoItems] = useState([
    {
      task: "FINSH THE DAMN APP",
      description: "PLEASEEE just do it",
      done: false,
    },
    {
      task: "When life give lemons, destroy it's house",
      description: "HAHAHHAAHHAHAHA let's do it",
      done: true,
    },
    {
      task: "Game of thrones final season sucked",
      description: "YEAH IT SURE DID, man throw that season in trash can!!!",
      done: true,
    },
  ]);

  function changeStatus(index) {
    let arr = [...todoItems];
    arr[index].done = !arr[index].done;
    setTodoItems(arr);
    setTextBox("");
    setDescription("");
  }

  function deleteItem(index) {
    let arr = [...todoItems];
    arr.splice(index, 1);
    setTodoItems(arr);
  }

  //   function changeStatus(element) {
  //     setTodoItems([
  //       ...todoItems,
  //       {
  //         ...element,
  //         done: !element.done,
  //       },
  //     ]
  //     );
  //   }

  const [textBox, setTextBox] = useState("");
  const [Description, setDescription] = useState("");

  const doneDesign = "w-full line-through text-green-400";
  const notDoneDesign = "w-full text-slate-300";
  const doneButton =
    "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-500 hover:bg-green-500";
  const notDoneButton =
    "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-300 border-gray-400 hover:bg-grey";
  const removeButton =
    "flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-500 hover:text-white hover:bg-red-500";

  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-zinc-800">
        <div className="h-100 w-full flex items-center justify-center  font-sans">
          <div className="bg-zinc-700 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4 text-center">
              <h1 className="text-slate-300">Todo List</h1>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col space-y-3">
                  <input
                    className="shadow appearance-none border md:placeholder:text-left placeholder:text-center rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    value={textBox}
                    onChange={(event) => {
                      setTextBox(event.target.value);
                    }}
                  />
                  <textarea
                    className="shadow appearance-none border md:placeholder:text-left placeholder:text-center rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    value={Description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    let arr = [...todoItems];
                    let obj = {
                      task: textBox,
                      description: Description,
                      done: false,
                    };
                    console.log(obj);
                    arr.push(obj);

                    setTodoItems(arr);
                  }}
                  className="flex-no-shrink p-5 border-2 rounded text-slate-300 border-zinc-600 hover:text-white hover:bg-teal-400 duration-200"
                >
                  Add
                </button>
              </div>
            </div>

            <div>
              {/* here imma do some mapping */}
              {todoItems.map((element, index) => {
                return (
                  <div
                    className="flex mb-4 items-center justify-between"
                    key={index}
                  >
                    <div className="flex flex-col max-w-sm">
                      <p
                        className={
                          (element.done ? doneDesign : notDoneDesign) +
                          " max-w-sm"
                        }
                      >
                        {element.task}
                      </p>
                      <p className={element.done ? doneDesign : notDoneDesign}>
                        {element.description}
                      </p>
                    </div>
                    <div className="flex max-w-xs">
                      <button
                        onClick={() => {
                          changeStatus(index);
                        }}
                        className={element.done ? notDoneButton : doneButton}
                      >
                        {element.done ? <FiX /> : <FiCheck />}
                      </button>
                      <button
                        onClick={() => {
                          deleteItem(index);
                        }}
                        className={removeButton}
                      >
                        <FiTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

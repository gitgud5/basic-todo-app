import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function Expenses() {
  const [money, setMoney] = useState("");
  const [expense, setExpense] = useState(false);
  const [reason, setReason] = useState("");
  const [allExpenses, setAllExpenses] = useState([
    { cash: 14, expense: true, reason: "Credit Card Payment" },
    { cash: 20, expense: false, reason: "Loan Payment" },
  ]);

  useEffect(() => {
    calculateExpense();
    console.log(allExpenses);
  }, [allExpenses]);

  const [totalExpense, settotalExpense] = useState("");

  function calculateExpense() {
    let a = 0;
    allExpenses.forEach((element) => {
      if (element.expense) {
        a -= Number(element.cash);
      } else {
        a += Number(element.cash);
      }
    });
    settotalExpense(a);
  }

  function deleteExpense(index) {
    console.log(
      `This is inside thee function of deleteExpense of ${index} of the list`
    );
    let arr = [...allExpenses];
    arr.splice(index, 1);
    console.log(arr);
    setAllExpenses(arr);
  }

  return (
    <div className="flex flex-col space-y-4 items-center justify-center min-h-screen bg-zinc-800">
      <div className="flex flex-col space-y-3 bg-zinc-700 p-4 rounded-xl mt-10">
        <div>
          <label className="text-l block mb-2  font-medium text-gray-900 dark:text-white">
            Money
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write money"
            value={money}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                setMoney(e.target.value);
              }
            }}
          />
        </div>
        <div>
          <label className="text-l block mb-2  font-medium text-gray-900 dark:text-white">
            Reason
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write the reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={expense}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => {
              setExpense(!expense);
            }}
          />
          <label className="text-l ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            This is an expense
          </label>
        </div>
        <div className="flex item-center justify-center my-3">
          <button
            onClick={() => {
              if (money === "" || reason === "") {
                alert("Please add some money or reason");
              } else {
                let arr = [...allExpenses];
                arr.push({ cash: Number(money), expense: expense, reason: reason });
                // console.table(arr);
                setAllExpenses(arr);
                setExpense(false);
                setMoney("");
                setReason("");
                // console.log(allExpenses);
              }
            }}
            type="button"
            className="min-w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-y-3 bg-zinc-700  mb-4 rounded-xl">
        <ul className="p-4">
          {allExpenses.map((element, index) => {
            return (
              <li
                key={index}
                className={
                  "m-2 py-2' flex justify-between bg-zinc-400 rounded-xl " +
                  (element.expense ? "text-red-600" : "text-green-800")
                }
              >
                <div className="mx-5 px-1 text-left">
                  <h1>{element.cash}$</h1>
                  <h2>{element.reason}</h2>
                </div>
                <button
                  onClick={() => {
                    console.log(
                      `I am clicking the delete button of ${index} list item`
                    );
                    deleteExpense(index);
                  }}
                  className="self-center mx-3"
                >
                  <FiTrash2 />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col space-y-3 bg-zinc-700 p-4 mb-4 rounded-xl text-white">
        <h2>Total expense is {totalExpense}</h2>
      </div>
    </div>
  );
}

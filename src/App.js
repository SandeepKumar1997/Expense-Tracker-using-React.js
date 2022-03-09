import logo from "./logo.svg";
import "./App.css";
import "./components/TestFile";
import Card from "./components/Card";
import TestFile from "./components/TestFile";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import React, { useState } from "react";
import ExpenseChart from "./components/NewExpense/ExpenseChart";

const dummy_expenses = [
  {
    id: "e1",
    name: "Loan EMI",
    age: 85,
    date: new Date(),
  },
  {
    id: "e2",
    name: "Phone EMI",
    age: 50,
    date: new Date(),
  },
  {
    id: "e3",
    name: "Bike EMI",
    age: 100,
    date: new Date(),
  },
];

function App() {
  useState(dummy_expenses);
  const [expenses, setExpenses] = useState(dummy_expenses);

  const setExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterbyyear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No items found</p>;
  if (filterbyyear.length > 0) {
    expenseContent = filterbyyear.map((expense) => (
      <TestFile
        key={expense.id}
        date={expense.date}
        name={expense.name}
        age={expense.age}
      ></TestFile>
    ));
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={setExpenseHandler}></NewExpense>
      <Card className="list-item">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart filteredExpenses={filterbyyear}></ExpenseChart>
        {expenseContent}
      </Card>
    </div>
  );
}

export default App;

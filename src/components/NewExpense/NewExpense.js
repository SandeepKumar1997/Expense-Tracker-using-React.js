import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setEditingHandler] = useState(false);

  const setDataChangeHandler = (enteredExpenseData) => {
    //Use of spread operator to bring in the existing data and adding new data

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(expenseData);
    setEditingHandler(false)
  };

  const editingHandler = () => {
    setEditingHandler(true);
  };

  const stopEditingHandler = () => {
    setEditingHandler(false);
  };
  return (
    <div>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={editingHandler}>Add new Expense</button>
        )}
        {isEditing && (
          <NewExpenseForm
            onNewFormDataChange={setDataChangeHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;

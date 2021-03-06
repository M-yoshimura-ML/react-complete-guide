import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id:Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
 

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    

    return (
        <div className="new-expense">
            {!isEditing &&  
                <button onClick={startEditingHandler}>Add New Expense</button>
            }
            {isEditing &&  
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCansel={stopEditingHandler} />
            }
            {/* <button onClick={displayNewExpenseForm}>Add New Expense</button>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
        </div>
    )

}

export default NewExpense;
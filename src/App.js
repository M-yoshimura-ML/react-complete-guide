import './App.css';
import './components/Expenses/Expenses.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';


const DUMMY_EXPENSES = [
  {id:'1',title:'Car Insurance', amount:94.12, date: new Date(2019, 2, 12)},
  {id:'2',title:'Toy', amount:14.12, date: new Date(2020, 3, 13)},
  {id:'3',title:'Toy2', amount:15.12, date: new Date(2020, 5, 13)},
  {id:'4',title:'Subscribe', amount:114.12, date: new Date(2021, 8, 14)},
  {id:'5',title:'Bag', amount:24.12, date: new Date(2022, 11, 15)},
  // {id:'6',title:'Book', amount:94.12, date: new Date(2018, 2, 12)},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

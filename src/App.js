// import logo from './logo.svg';
import './App.css';
import './components/Expenses/Expenses.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React from 'react';


const App = () => {

  const expenses = [
    {title:'Car Insurance', amount:94.12, date: new Date(2019, 2, 12)},
    {title:'Toy', amount:14.12, date: new Date(2020, 3, 13)},
    {title:'Toy2', amount:15.12, date: new Date(2020, 5, 13)},
    {title:'Subscribe', amount:114.12, date: new Date(2021, 8, 14)},
    {title:'Bag', amount:24.12, date: new Date(2022, 11, 15)}
  ];

  const filteredData = expenses.filter(expense => expense.date.getFullYear() == '2022');
  console.log(filteredData);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  // return React.createElement(
  //   'div', {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items:expenses}) 
  // );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

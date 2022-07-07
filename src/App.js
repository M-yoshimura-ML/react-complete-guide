// import logo from './logo.svg';
import './App.css';
import './components/Expenses/Expenses.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import React from 'react';


const App = () => {

  const expenses = [
    {title:'Car Insurance', amount:94.12, date: new Date(2022, 5, 12)},
    {title:'Toy', amount:14.12, date: new Date(2022, 5, 13)},
    {title:'Subscribe', amount:114.12, date: new Date(2022, 5, 14)},
    {title:'Bag', amount:24.12, date: new Date(2022, 5, 15)}
  ]
  console.log(expenses[0].title);

  // return React.createElement(
  //   'div', {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items:expenses}) 
  // );

  return (
    <div className="App">
      {/* {expenses.map((expense, i) => {
        return (
          <div key={i} className='expenses'>
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
          </div>
        )
      })} */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

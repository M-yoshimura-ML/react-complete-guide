import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


const Expenses = (props) => {
    const [expenseList, setExpenseList] = useState(props.items);
    const filteredExpenseData = (selectedYear) => {
        const filteredList = props.items.filter(item => item.date.getFullYear() == selectedYear);
        setExpenseList(filteredList);
        console.log(filteredList);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onSelectedYear={filteredExpenseData} />
            {/* <ExpenseItem 
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.itemns[0].date} 
            />
            <ExpenseItem 
                title={props.items[1].title} 
                amount={props.items[1].amount} 
                date={props.itemns[1].date} 
            /> */}
            {expenseList.map((expense, i) => {
                return (
                <div key={i} className='expenses'>
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                </div>
                )
            })}
        </Card>
        
    )
}

export default Expenses;
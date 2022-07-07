import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const Expenses = (props) => {
    return (
        <Card className='expenses'>
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
            {props.items.map((expense, i) => {
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
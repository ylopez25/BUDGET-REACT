import Budgets from '../Components/Budgets';
import { useState, useEffect } from 'react';

function Index({ budgets }) {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let sum = budgets.map(budget => Number(budget.amount)).reduce((a,b) => a + b, 0);
        setAmount(sum);
    }, [budgets])
    return (
        <div id='index'>
             {
                amount > 1000
                ? <h2 style={{color: 'green'}}>{`Account Balance: $${amount.toLocaleString('en-US')}`}</h2>
                : <h2 style={{color: 'red'}}>{`Account Balance: $${amount.toLocaleString('en-US')}`}</h2>
            }
    
            <Budgets budgets={budgets}/>
        </div>
    )
}
export default Index;
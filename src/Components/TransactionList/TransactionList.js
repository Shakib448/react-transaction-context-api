import React, {useContext} from 'react'
    
import { GlobalContext } from '../../Context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul  className="list">
                {
                    transactions.map((transaction, id) => <Transaction transaction={transaction} key={id}/>)
                }

            </ul>
        </>
    )
}

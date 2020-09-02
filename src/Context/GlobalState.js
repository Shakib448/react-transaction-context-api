import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions : []
}

// Create Context

export const GlobalContext = createContext(initialState);


// Provider componnets

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }

        // Actions
            function addTransaction(transaction){
                dispatch({
                    type : 'ADD_TRANSACTION',
                    payload : transaction
                });
    
    }

    return(<GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }} >
        {children}
    </GlobalContext.Provider>)

}




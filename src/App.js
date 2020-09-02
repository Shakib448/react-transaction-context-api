import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Balance } from './Components/Balance/Balance';
import { InExp } from './Components/InExp/InExp';
import { TransactionList } from './Components/TransactionList/TransactionList';
import { TransactionForm } from './Components/TransactionForm/TransactionForm';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <InExp/>
          <TransactionList/>
          <TransactionForm/>
        </div>
      </GlobalProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const [balance,setBalance] = useState();
  const addBalance = (amount) => {
    setBalance(amount)
  }

  useEffect(() => {
    addBalance(1)
  },[])

  const decreaseBalance = (amount) => {
    setBalance(balance-amount)
    return(
      balance - amount
    )
  }

  return (
    <div style={{ height: '100%' }}>
      <Header balance={ balance } />  
      <Content balance={ balance } decrease={ decreaseBalance } />
      <Footer />
    </div>
  );
}

export default App;

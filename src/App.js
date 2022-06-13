import logo from './logo.svg';
import './App.css';
import React from 'react'
import Profile from './profile/Profile';

function App() {
  function handleName(name){
    alert(`hello ${name}`)
  }
  const obj={
    name:'Wissem Naddari',
    bio:'i joined gomycode in 2021',
    profession:'im student',

  }
  return (
    
    <div className="App">
      <Profile obj={obj} handleName={handleName}/>
    </div>
    
  );
}

export default App;

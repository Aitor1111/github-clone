import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { ReposContainer } from './components/ReposContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='main' >
        <Profile />
        <ReposContainer />
      </section>
    </div>
  );
}

export default App;

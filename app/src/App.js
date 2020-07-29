import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { ReposContainer } from './components/ReposContainer';
import { retrieveUser, retrieveRepos } from 'logic';

function App() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    (async () => {
      const _user = await retrieveUser()
      setUser(_user)
      const _repos = await retrieveRepos()
      setRepos(_repos)
    })()
  }, [])

  return (
    <div className="App">
      <NavBar reposCount={user.public_repos} />
      <section className='main' >
        {user && <Profile user={user} />}
        {repos && <ReposContainer repos={repos} />}
      </section>
    </div>
  );
}

export default App;

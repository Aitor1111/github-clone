import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { ReposContainer } from './components/ReposContainer';
import { retrieveUser, retrieveRepos } from 'logic';
import { UserInput } from './components/UserInput';

function App() {
  const [view, setView] = useState('landing')
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     const _user = await retrieveUser()
  //     setUser(_user)
  //     const _repos = await retrieveRepos()
  //     setRepos(_repos)
  //     setView('landing')
  //   })()
  // }, [])

  const handleOnSubmit = async (query) => {
    const _user = await retrieveUser()
    setUser(_user)
    const _repos = await retrieveRepos()
    setRepos(_repos)
    setView('landing')
  }

  return (<>
    {view === 'landing' && <UserInput onSubmit={handleOnSubmit} />}
    {view === 'home' && <div className="App">
      <NavBar reposCount={user.public_repos} />
      <section className='main' >
        {user && <Profile user={user} />}
        {repos && <ReposContainer repos={repos} />}
      </section>
    </div>}
  </>);
}

export default App;

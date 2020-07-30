import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { ReposContainer } from './components/ReposContainer';
import { retrieveUser, retrieveRepos } from 'logic';
import { UserInput } from './components/UserInput';
import { Home } from './components/Home';
import searchRepos from 'logic/search-repos';

function App() {
  const [view, setView] = useState('landing')
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [error, setError] = useState('')

  const handleOnSubmit = async (user) => {
    try {
      const _user = await retrieveUser(user)
      setUser(_user)
      const _repos = await retrieveRepos(user)
      setRepos(_repos)
      setView('home')
    } catch (error) {
      setError(`Ouch, it seems that '${user}' hasn't GitHub yet.`)
    }

  }

  const handleOnSearch = async (e) => {
    const { value: query } = e.target
    try {
      if (query.length > 0) {
        const { items } = await searchRepos(user.login, query)
        setRepos(items)
      } else {
        const _repos = await retrieveRepos(user.login)
        setRepos(_repos)
      }
    } catch (error) {
      setError(`Hmm, ${query} is not a ${user.login}'s repo`)
    }
  }

  return (<>
    {view === 'landing' && <UserInput onSubmit={handleOnSubmit} error={error} />}
    {view === 'home' && user && repos && <Home user={user} repos={repos} onSearch={handleOnSearch} error={error} />}
  </>);
}

export default App;

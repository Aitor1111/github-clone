import React from 'react'
import { NavBar } from './NavBar'
import { Profile } from './Profile'
import { ReposContainer } from './ReposContainer'

export const Home = ({ user, repos, onSearch, error }) => {
    return (
        <div className="App">
            <NavBar reposCount={user.public_repos} />
            <section className='main' >
                {user && <Profile user={user} />}
                {repos && <ReposContainer repos={repos} onSearch={onSearch} error={error} />}
            </section>
        </div>
    )
}

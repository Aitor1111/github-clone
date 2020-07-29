import React from 'react'
import { Search } from './Search'
import { Repo } from './Repo'

export const ReposContainer = ({ repos }) => {
    return (
        <section className='repos' >
            <Search />
            <hr className="hr__repos" />
            {repos.map(repo => <Repo repo={repo} />)}
        </section>
    )
}

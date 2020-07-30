import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import { Repo } from './Repo'
import { retrieveRepos } from 'logic';

export const ReposContainer = ({ repos, onSearch, error }) => {

    return (
        <section className='repos' >
            <Search onSearch={onSearch} />
            <hr className="hr__repos" />
            {repos.map(repo => <Repo repo={repo} />)}
            {error && <div>{error}</div>}
        </section>
    )
}

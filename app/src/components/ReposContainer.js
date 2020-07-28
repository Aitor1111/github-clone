import React from 'react'
import { Search } from './Search'
import { Repo } from './Repo'

export const ReposContainer = () => {
    return (
        <section className='repos' >
            <Search />
            <hr class="hr__repos" />
            <Repo />
        </section>
    )
}

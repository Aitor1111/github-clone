import React from 'react'

export const Search = ({ onSearch }) => {
    return (
        <section className="search">
            <input className="search__input" type="text" name="search" placeholder="Find a repository..." onChange={onSearch} />
            <button className="button">
                Type: <span className="button__text-highlight">All</span>
            </button>
            <button className="button">
                Language: <span className="button__text-highlight">All</span>
            </button>
        </section>
    );
}

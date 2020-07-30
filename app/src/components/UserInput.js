import React, { useState } from 'react'
import { Search } from './Search'


export const UserInput = ({ onSubmit, error }) => {
    const [query, setQuery] = useState('')

    const handleOnChange = (e) => {
        const { value } = e.target
        setQuery(value)
    }

    return (
        <section className="user-input">
            <div className="user-input__container">
                <img className="user-input__logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F25%2F25231.png&f=1&nofb=1" alt="" />
                <div className="user-input__title">Find a GitHub Profile</div>
                <input
                    onChange={handleOnChange}
                    className="search__input search__input--large"
                    type="text" name="search"
                    placeholder="Find a github profile... (ex: Aitor1111)"
                />
                {error && <div>{error}</div>}
                <button className="button button--huge" onClick={() => onSubmit(query)}>Find</button>
            </div>
        </section>
    );
}

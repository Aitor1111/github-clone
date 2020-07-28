import React from 'react'

export const NavBar = () => {


    return (
        <div>
            <section className="nav">
                <a className="nav__item" href="#">Overview</a>
                <a className="nav__item nav__item--active" href="#">Repositories <span className="nav__count">10</span></a>
                <a className="nav__item" href="#">Projects</a>
                <a className="nav__item" href="#">Packages</a>
            </section>
            <hr className="hr__nav" />
        </div>
    );
}

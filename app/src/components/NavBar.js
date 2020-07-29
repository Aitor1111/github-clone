import React from 'react'
import { BookIcon, RepoIcon, ProjectIcon, PackageIcon } from '@primer/octicons-react'

export const NavBar = ({ reposCount }) => {


    return (
        <div>
            <section className="nav">
                <a className="nav__item" href="#"><BookIcon size={16} verticalAlign={'middle'} /> Overview</a>
                <a className="nav__item nav__item--active" href="#"><RepoIcon size={16} verticalAlign={'middle'} /> Repositories <span className="nav__count">{reposCount}</span></a>
                <a className="nav__item" href="#"> <ProjectIcon size={16} verticalAlign={'middle'} /> Projects</a>
                <a className="nav__item" href="#"><PackageIcon size={16} verticalAlign={'middle'} /> Packages</a>
            </section>
            <hr className="hr__nav" />
        </div>
    );
}

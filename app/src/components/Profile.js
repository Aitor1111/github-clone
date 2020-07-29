import React from 'react'
import { PeopleIcon } from '@primer/octicons-react'

export const Profile = ({ user }) => {
    return (
        <section className="profile">
            <img className="profile__avatar" src={`${user.avatar_url}`} alt="" />
            <div className="profile__name">{user.login}</div>
            <div className="profile__subname">{user.name}</div>
            <div className="profile__company">{user.bio}</div>
            <button className="button button--large">
                Follow
          </button>
            <div className="profile__status"><PeopleIcon size={16} /> {user.followers} followers · {user.following} following</div>
        </section>
    );
}

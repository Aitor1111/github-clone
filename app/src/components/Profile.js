import React from 'react'

export const Profile = () => {
    return (
        <section className="profile">
            <img className="profile__avatar" src="https://avatars0.githubusercontent.com/u/59667946?v=4" alt="" srcSet />
            <div className="profile__name">Aitor1111</div>
            <div className="profile__subname">Aitor Truji</div>
            <div className="profile__company">React Fullstack Developer</div>
            <button className="button button--large">
                Follow
          </button>
            <div className="profile__status">17 followers · 45 following · $ 24</div>
        </section>
    );
}

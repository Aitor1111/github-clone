import React from 'react'

export const Repo = () => {
    return (
        <div >
            <section className="repo">
                <div className="repo__container">
                    <a href="#" className="repo__title">nomad-app</a>
                    <div className="repo__description">
                        A declarative, efficient, and flexible JavaScript library for
                        building user interfaces.
              </div>
                    <div className="repo__info-container">
                        <div className="repo__light-text">
                            <span className="lang-icon" />
                  JavaScript
                </div>
                        <div className="repo__light-text">Updated 7 days ago</div>
                    </div>
                </div>
                <div className="repo__button-container">
                    <button className="button">
                        $ Star
              </button>
                </div>
            </section>
            <hr className="hr__repos" />
        </div>
    );
}

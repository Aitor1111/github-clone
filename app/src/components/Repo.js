import React, { useEffect, useState } from 'react'
import { StarIcon } from '@primer/octicons-react'

export const Repo = ({ repo }) => {
    const [lastUpdate, setLastUpdate] = useState()

    useEffect(() => {
        const updatedDate = repo.pushed_at.split('T')[0]
        const now = formatDate()

        setLastUpdate(getDaysPassed(updatedDate, now))
    }, [])

    const formatDate = () => {
        const date = new Date()

        return date.getFullYear() + '-' +
            (date.getMonth().toString().length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' +
            (date.getDate().length === 1 ? '0' + date.getDate() : date.getDate());
    }

    const getDaysPassed = (before, after) => {
        before = before.split('-')
        after = after.split('-')

        const years = Number(after[0]) - Number(before[0])
        const months = Number(after[1]) - Number(before[1])
        const days = Number(after[2]) - Number(before[2])

        return (years * 365) + (months * 31) + (days)
    }

    return (
        <div >
            <section className="repo">
                <div className="repo__container">
                    <a href={`${repo.html_url}`} className="repo__title">{repo.name}</a>
                    <div className="repo__description">
                        A declarative, efficient, and flexible JavaScript library for
                        building user interfaces.
              </div>
                    <div className="repo__info-container">
                        {repo.language && <div className="repo__light-text">
                            <span className="lang-icon" />
                            {repo.language}
                        </div>}
                        {lastUpdate && lastUpdate > 0 && <div className="repo__light-text">Updated {lastUpdate} days ago</div> || <div className="repo__light-text">Today</div>}
                    </div>
                </div>
                <div className="repo__button-container">
                    <button className="button">
                        <StarIcon size={16} /> Star
              </button>
                </div>
            </section>
            <hr className="hr__repos" />
        </div>
    );
}

import React from 'react'
import './styles.css'
function DevItem({ dev }) {
    return (
        <li key={dev._id} className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(' | ')}</span>
                </div>
            </header>
            <p>
                {dev.bio || "Sem Bio"}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" width="25px" height="25px" />
            </a>
        </li>
    )
}

export default DevItem;
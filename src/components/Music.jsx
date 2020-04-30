import React from 'react';
import './Music.css';

export const Music = () => {
    return <div className="music">
        <span className="music-text">Guitar player <span role="img" aria-label="jsx-a11y/accessible-emoji">🎸⚡</span> and music lover <span role="img" aria-label="jsx-a11y/accessible-emoji">🎵</span></span>
        <span className="music-text">My guitar YouTube channel</span>
        <span className="yt-vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/Z2XUmj7riy8?list=PUfynVJdFfmW4oewIy68odsQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
        <iframe src="https://open.spotify.com/embed/playlist/5WmuTiFx1PuHvlJ7PqemWi" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>;
};
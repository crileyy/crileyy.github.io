import React from 'react';
import './Project.css';

export const Project = ({ name, desc, date, github, link }) => {
    return <div className="project">
      <h2>{name}</h2>
      <a href={link} className="link">{link}</a>
      <span className="desc">{desc}</span>
    </div>
};
import React from 'react';
import { Project } from './Project';
import './ProjectList.css';

const project1 = {
  name: 'Break Time',
  desc: 'Slack bot that encourages a healthy work-life balance by matching coworkers to take breaks together. Made using AWS Lambda and Java. Calls the Slack APIs.'
};
const project2 = {
  name: 'Best Co-op',
  desc: 'Web app that allows Northeastern students to read and write reviews and rate the co-ops they\'ve been on. Made using React, JavaScript, Spring Boot, Java, and MySQL.'
};
const project3 = {
  name: 'Music Easy',
  desc: 'Website to listen to the audio of YouTube videos. I made this because I mainly use YouTube to listen to all of my music, but I only care about the audio, so I made this website to allow me to organize all of my YouTube music and only listen to the audio. Made using React, Spring Boot, Java, and MySQL. Calls the YouTube IFrame APIs.'
};
const project4 = {
  name: 'Restaurant Finder',
  desc: 'Website that allows users to look up restaurants. Made using React and calls the Yelp APIs.'
};
const project5 = {
  name: 'TravLibs',
  desc: 'Travis Scott ad-libs sound board.',
  link: 'https://crileyy.github.io/TravLibs',
};

const project6 = {
  name: 'Be The Band',
  desc: 'Built a web app that displays guitar tabs next to Spotify songs, making it easier for musicians to learn how to play the songs they enjoy. Made using React, JavaScript, and calling Spotify APIs with GraphQL.',
  link: 'https://be-the-band.herokuapp.com/',
};

const project7 = {
  name: 'ASICS ID Scan',
  desc: 'Created a feature that allows users to create a OneASICS account by taking a picture of their ID. Made using JavaScript, HTML, and a JS library that returns ID info given the ID’s barcode.',
  link: 'https://jlipinski3.github.io/asicshackathon2019/',
};

const project8 = {
  name: 'Music in Memes Database',
  desc: 'A database and Tableau visualization for analyzing the types of music used in memes. Made using MySQL and Tableau',
  link: 'https://public.tableau.com/profile/colin3371#!/vizhome/TheMusicInMemes/TheMusicInMemes',
};

export const ProjectList = () => {
  return <div className="project-list">
    <Project name={project6.name} desc={project6.desc} link={project6.link}/>
    <Project name={project7.name} desc={project7.desc} link={project7.link}/>
    <Project name={project5.name} desc={project5.desc} link={project5.link}/>
    <Project name={project8.name} desc={project8.desc} link={project8.link}/>
    <Project name={project1.name} desc={project1.desc}/>
    <Project name={project2.name} desc={project2.desc}/>
    <Project name={project3.name} desc={project3.desc}/>
    <Project name={project4.name} desc={project4.desc}/>
  </div>
};
import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Project = (props) => {

    const [currentProject] = useState(projectsData);
    const projet = currentProject[props.numberProject];
    console.log(currentProject[2]);  
    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let transform = "scale(" + (Math.random() + 0.7) + ")";

    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{projet.title}</h1>
                <p>{projet.date}</p>
                <ul className="languages">
                    {projet.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    }   )}
                </ul>
            </div>

            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{projet.title}</h3>
                        <p>{projet.infos}</p>
                    </span>
                    <img src={projet.img} alt="tof projet"/>

                </div>
           

                <div className="button-container">
                    <a href={projet.link} target="_blank" rel="noopener noreferrer" className="hover">
                        <span className="button">Visiter</span>
                    </a>
                </div>
            </div>

            <span className="random-circle" style={{left, top, transform}}></span>
        </div>

    );
}

export default Project;
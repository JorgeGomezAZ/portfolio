import React from 'react'
import './projectList.css'
import Project from './../project/Project'
import { projects } from '../../data'
const ProjectList = () =>
{

    return (
        <div className='pl' id='projects'>
            <div className="pl-text">
                <h1 className="pl-title">Personal Projects</h1>
                <p className="pl-desc">desc</p>
            </div>
            <div className="pl-list">
                {projects.map((item) =>
                {
                    return (
                        <Project key={item.id} img={item.img} link={item.link} />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectList
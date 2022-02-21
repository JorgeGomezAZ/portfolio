import React from 'react'
import './project.css'
import { useNavigate } from "react-router-dom";
const Project = ({ img, link }) =>
{
    const navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/palabraz");
    }
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={img} alt="" className='p-img' />
            </a>
        </div>
    )
}

export default Project
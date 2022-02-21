import React, { Component } from 'react'
import { Link } from 'react-scroll';
import Toggle from '../toggle/Toggle';
import './navBar.css'

export default class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        }
    }
    componentDidMount()
    {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = () =>
    {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }
    render()
    {
        return (
            <nav className={'active'/*this.state.show ? 'active' : 'hidden'*/} style={{ backgroundColor: this.props.mode ? '#555' : 'black'/*, color: this.props.mode ? 'black' : 'white'*/ }}>
                <Link className='n-item' to="intro" smooth={true} duration={700}> Intro</Link>
                <Link className='n-item' to="about" smooth={true} duration={700}> About</Link>
                <Link className='n-item' to="projects" smooth={true} duration={700}> Projects</Link>
                <Link className='n-item' to="contact" smooth={true} duration={700}> Contact</Link>
                <Toggle></Toggle>
            </nav >
        )
    }
}

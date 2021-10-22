import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderCover from "./IMG/cover5.jpg"
import MyImg from "./IMG/MyIMG.jpg"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <>
            <div id="headerNav"> 
                <img id="headerCover" src={HeaderCover} alt="" />
                <div id="Me">
                <img src={MyImg} alt="" />
                <h1>Mohammad Abdul Ghafour</h1>
                <h3>Computers Eng / Web Dev</h3>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
            {window.addEventListener("scroll",function(){
                const header = document.getElementById('headerNav');
                header.classList.toggle('sticky',window.scrollY > 0)
            })}
            </>
        )
    }
}

export default Header;

import React from 'react'
import Logo from '../../assets/branging/logo.svg'
import './Navbar.css'
import StarButton from '../starButton/StarButton'


function Navbar(){

 return (
    <header className="header">

        <div className="div-logo">

            <a href="#"> 

                 <img src={Logo} alt="CodeStografo svg logo"/> 

            </a>

        </div>
        <div className="div-menu">

        <input className="menu-btn" type="checkbox" id="menu-btn"/>

            <label className="menu-icon" for="menu-btn">

                <span className="navicon"></span>

            </label>
        
            <ul className="menu">
                <li>
                    <a> CURSES </a>
                </li>
                <li>
                    <a>  Resources</a>
                    
                </li>
                <li>
                    <a>About</a>
                    
                </li>
                
            </ul>

        </div>
           
            
        
        <div className="div-user">
            

            <StarButton/>
            
            
        </div>
        
    </header>
    
    )

}
export default Navbar
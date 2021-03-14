import React from 'react'
import Logo from '../../assets/branging/logo.svg'
import './Navbar.css'
import StarButton from '../starButton/StarButton'
import Menu from './menu/Menu'



function Navbar(){

 return (
    <header className="header">

        <div className="div-logo">

            <a href="/"> 

                 <img src={Logo} alt="CodeStografo svg logo"/> 

            </a>

        </div>
        <div className="div-menu">
            <Menu/>

        </div>
           
            
        
        <div className="div-user">
            

            <StarButton/>
            
            
        </div>
        
    </header>
    
    )

}
export default Navbar
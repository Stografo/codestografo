import React from 'react'
import './Menu.css'

function Menu(){
    return(
        <div container>
            
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
    )

}
export default Menu
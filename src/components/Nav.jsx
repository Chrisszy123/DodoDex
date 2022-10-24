import { useState, useRef} from 'react'
import Logo from "./base/icons/logo"
import Navlist from './NavComponents/Navlist'
import NavLogo from './NavComponents/NavLogo'

const Nav = (props) => {
    // set the drop down state, and setting the initial state to false

    return(
        <div className="container">
        <nav className="sidebar">
            <div className="sidebar__navbox">
            <NavLogo
                header="sidebar__navbox__header"
                hamWrapper= "sidebar__navbox__header__hamWrapper"
                icon="sidebar__navbox__header__hamWrapper__icon"
                gridIcon="sidebar__navbox__header__hamWrapper__icon__gridicon"
                dropDown="sidebar__navbox__header__hamWrapper__icon__dropdown"
                logo={<Logo />}
            />
            <Navlist />
            </div>
            
        </nav>
        {props.children}
        </div>
    )
}
export default Nav
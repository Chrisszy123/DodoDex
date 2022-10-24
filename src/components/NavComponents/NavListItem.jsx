import { Link } from "react-router-dom"
import { useState} from "react"
import {Navitemss} from '../base/NavLi'

const NavListItem = () => {
    const [active, setActive] = useState("/")
    return(
        <ul className="sidebar__navbox__navlist">
            {Navitemss.map((navitem, key) => (
                <li className="sidebar__navbox__navlist__listitem" key = {key}>
                <div className="sidebar__navbox__navlist__listitem__wrapper" >
                    <Link to={navitem.link}
                        style={{backgroundColor: active === navitem.link ? "rgb(255, 232, 4)" : "", color: active === navitem.link ?"black": ""}}
                        onClick={() => setActive(navitem.link)}
                        className="sidebar__navbox__navlist__listitem__wrapper__link"
                        >
                            {navitem.icon}
                            {navitem.text}
                    </Link>
                </div>
            </li>
            ))}         
        </ul>        
    )

}
export default NavListItem
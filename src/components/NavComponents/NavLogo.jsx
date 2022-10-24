import React, {useState} from 'react'
import HamburgerNav from './HamburgerNav'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai"

const NavLogo = ({logo, hamWrapper, icon, gridIcon, dropDown, header}) => {
    const [dropdown, setDropDown] = useState(false)
  return (
    <div className={header}>
                <button className="sidebar__navbox__header__logobutton" style = {{cursor: "pointer"}}>{logo}</button>
                <div className={hamWrapper} style = {{cursor: "pointer"}}>
                    <div className={icon}>
                        <div className={gridIcon}>
                            <BsFillGrid3X3GapFill />
                        </div>
                        <div className={dropDown} onClick={() => setDropDown(!dropdown)}>
                            {
                                !dropdown ? <AiFillCaretDown /> : <AiFillCaretUp />
                            }
                        
                        </div>
                    </div>
                </div>
                {dropdown ? 
                    <HamburgerNav />
                : null
                }
            </div>
  )
}

export default NavLogo
import styles from "../../styles/App.css"
import { HelpSectionIcons } from "../base/NavLi"

const HelpIcons = () => {
    return(
        <ul className="sidebar__navbox__downlist">
            { HelpSectionIcons.map((hl, key) => (
                <a className="sidebar__navbox__downlist__downlistitem" key={key}>
                    {hl.icon}
                    {hl.text}
                </a>
            ))}      
        </ul>
    )
} 

export default HelpIcons
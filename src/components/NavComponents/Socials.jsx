import { SocialIcons } from "../base/NavLi"
const Socials = () => {
    return(
        <div className="sidebar__navbox__socials">
            {SocialIcons.map((si, key) => (
                <div className="sidebar__navbox__wrapper" key={key}>
                    <a className="sidebar__navbox__wrapper__sociallink" href={si.link}>
                        {si.icon}
                    </a>
                </div>
            ))}    
        </div>
    )
}
export default Socials
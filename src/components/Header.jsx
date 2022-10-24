import Headertitle from './header/Headertitle'
import Mobilelogo from "./base/icons/Mobilelogo"
import HeadItems from "./header/HeadItems"
import NavLogo from './NavComponents/NavLogo'

const Header = ({title, children}) => {
    return(
        <header className="header">
        <div className="header__wrapper">
            <Headertitle title = {title} />
            <NavLogo
                header="header__wrapper__header"
                hamWrapper="header__wrapper__header__hamWrapper"
                icon="header__wrapper__header__hamWrapper__icon"
                gridIcon="header__wrapper__header__hamWrapper__icon__grid"
                dropDown="header__wrapper__header__hamWrapper__icon__dropdown"
                logo={<Mobilelogo />}
            />
            <HeadItems />
        </div>
        {children}
        </header>
    )

}
export default Header
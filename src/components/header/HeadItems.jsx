import {GiRialtoBridge} from 'react-icons/gi'
import {AiFillCaretDown } from "react-icons/ai"
import {FaEthereum} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import Wallet from '../base/icons/Wallet'

const HeadItems = () => {
  return (
    <div className="header__wrapper__right">
                <div className="header__wrapper__right__bridge">
                    <div className="header__wrapper__right__bridge__wrapper" style={{"cursor": "pointer"}}>
                        <GiRialtoBridge />
                        <h3>Bridge</h3>
                    </div>
                </div>
                <div className="header__wrapper__right__bridge">
                    <div className="header__wrapper__right__bridge__wrapper" style={{"cursor": "pointer"}}>
                        <FaEthereum />
                        <h3>Ethereum</h3>
                        <span> <AiFillCaretDown /> </span>
                        
                    </div>
                </div>
                <div className="header__wrapper__right__bridge">
                    <div className="header__wrapper__right__bridge__wrapped" style={{"cursor": "pointer"}}>
                        <h3>Connect Wallet</h3>
                    </div>
                </div>
                <div className="header__wrapper__right__bridge">
                    <div className="header__wrapper__right__bridge__wrapp" style={{"cursor": "pointer"}}>
                        <span><Wallet /> </span>
                        <h3>Connect</h3>
                    </div>
                </div>
                <div className="header__wrapper__right__bridge">
                    <div className="header__wrapper__right__bridge__wrapped" style={{"cursor": "pointer"}}>
                        <div className='header__wrapper__right__bridge__wrapper__more'> <FiMoreHorizontal /> </div>
                    </div>
                </div>
            </div>
  )
}

export default HeadItems
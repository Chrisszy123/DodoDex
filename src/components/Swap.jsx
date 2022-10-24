import { useState } from "react"
import {IoIosRefresh} from "react-icons/io"
import Speaker from "./base/icons/speaker"
import Share from  "./base/icons/Share"
import {AiFillCaretDown,AiOutlineArrowDown} from "react-icons/ai"
import {FaEthereum} from 'react-icons/fa'
import SwapBody from "./SwapBody"
import SwapButton from "./base/icons/SwapButton"
import Button from "./Button"

const Swap = () => {
    //
    const [active, setActive] = useState("/")

    return(
        <div className="swapcontainer__swapmain">
            <div className="swapcontainer__swapmain__swap">
                {/* SWAP Header */}
                <div className="swapcontainer__swapmain__swap__header">
                    <div className="swapcontainer__swapmain__swap__header__left">
                        <div className="swapcontainer__swapmain__swap__header__left__tabItem" 
                            onClick={() => setActive("/")}
                            style={{backgroundColor: active === "/"? "rgb(255, 234, 4)": "", color: active === "/" ? "black" : "", cursor: "pointer"}}
                            >Swap</div>
                        <div className="swapcontainer__swapmain__swap__header__left__tabItem" 
                            onClick={() => setActive("/limit")}
                            style={{backgroundColor: active === "/limit"? "rgb(255, 234, 4)": "", color: active === "/limit" ? "black" : "", cursor: "pointer"}}
                            >Limit</div>
                        <div className="swapcontainer__swapmain__swap__header__left__tabItem" 
                            onClick={() => setActive("/gasless")}
                            style={{backgroundColor: active === "/gasless"? "rgb(255, 234, 4)": "", color: active === "/gasless" ? "black" : "", cursor: "pointer"}}
                            >Gasless</div>
                    </div>
                    <div className="swapcontainer__swapmain__swap__header__right">
                        <div className="swapcontainer__swapmain__swap__header__right__tabItem"><IoIosRefresh /></div>
                        <div className="swapcontainer__swapmain__swap__header__right__tabItem"><Share /></div>
                        <div className="swapcontainer__swapmain__swap__header__right__tabItem"><Speaker /></div>
                    </div>
                </div>
                {/* SWAP  coinName, coinIcon, dropDown, Balance*/}
                <div className="swapcontainer__swapmain__swap__pack">
                    <SwapBody
                        styles={{backgroundColor: "rgb(255, 234, 4)"}}
                        show= {true}
                        coinName="ETH"
                        coinIcon={ <FaEthereum className="swapcontainer__swapmain__swap__body__top__header__coinName__icon__eth"/>}
                        dropDown={<AiFillCaretDown />}
                        Balance="0.90129"
                    />
                    <div className="swapcontainer__swapmain__swap__pack__swapIcon">
                        <div className="swapcontainer__swapmain__swap__pack__swapIcon__wrap">
                            <AiOutlineArrowDown />
                        </div>
                    </div>
                    <SwapBody
                    styles={{backgroundColor: "rgba(255, 255, 255, 0.6)"}}
                    show = {false}
                    coinName="USDT"
                    coinIcon={ <FaEthereum className="swapcontainer__swapmain__swap__body__top__header__coinName__icon__eth"/>}
                    dropDown={<AiFillCaretDown />}
                    Balance="78.9"
                    />
                </div>
                <div className="swapcontainer__swapmain__swap__convert">1 ETH = 1280 USDC</div>
                {/* BUTTONS */}
                <Button 
                    text="You're in expert mode, price Deviation is ~" 
                    styles={{fontSize: "12px", fontWeight: "500", lineHeight: "17px", padding: "1.2rem"}}
                    
                />
                <Button 
                
                    text="Enter Amount to see more trading result" 
                    styles={{fontSize: "15px", fontWeight: "600", padding: "1.6rem"}}
                />
                
            </div>
        </div>
    )
}

export default Swap
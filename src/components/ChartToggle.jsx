import Candlestick from "./base/icons/candlestick"
import {useState} from "react"

const ChartToggle = () => {
    // use state to handle toggle on and off states
    const [toggle, setToggle] = useState(false)
    return (
        <div className="swapcontainer__togglecontainer">
                        <div className="swapcontainer__chartText"> Chart</div>
                        <button className="swapcontainer__chartToggle" >
                            <div className="swapcontainer__chartToggle__text" style={{display: toggle === false ? "none" : "flex", color: "rgb(255, 234, 4)"}}>On</div>
                            <div className="swapcontainer__chartToggle__iconWrapper" onClick={() => setToggle(!toggle)} style={{cursor: "pointer"}}>
                                <div className="swapcontainer__chartToggle__iconWrapper__wrapper">
                                    <Candlestick />
                                </div>
                            </div>
                            <div className="swapcontainer__chartToggle__text"  style={{display: toggle === true ? "none" : "flex"}}>Off</div>
                        </button>
            </div>
    )
}
export default ChartToggle
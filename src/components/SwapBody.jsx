import {useState} from "react"

const SwapBody = ({coinName, coinIcon, dropDown, Balance, show, styles}) => {
  const [input, setInput] = useState("0.00")
  const [meter, setMeter] = useState("0.00")
  // use static value, once i integrate web3, Ill use provider.balanceOf
  const ethBalance =  0.90129
  // const calcVal = meter * ethBalance
  const meterPercent = [
    {
      id: 1,
      text: "25%",
      value: 0.25
    },
    {
      id: 2,
      text: "50%",
      value: 0.50
    },
    {
      id: 3,
      text: "75%",
      value: 0.75
    },
    {
      id: 1,
      text: "100%",
      value: 1.00
    }
]
  return (
    <div className="swapcontainer__swapmain__swap__pack__body">
    <div className="swapcontainer__swapmain__swap__pack__body__top">
        <div className="swapcontainer__swapmain__swap__pack__body__top__header">
            <div className="swapcontainer__swapmain__swap__pack__body__top__header__coinName">
                <div className="swapcontainer__swapmain__swap__pack__body__top__header__coinName__icon"
                  style={styles}
                >
                    {/* icon here */}
                   {coinIcon}
                </div>
                <div>{coinName}</div>
                {dropDown}
            </div>
            <div className="swapcontainer__swapmain__swap__pack__body__top__header__coinName__balance">Balance: {Balance}</div>
        </div>
        {/* Input  
          find a way to dynamically populate the input field
        */}
        <div className="swapcontainer__swapmain__swap__pack__body__top__input">
          <input className="swapcontainer__swapmain__swap__pack__body__top__input__form" 
            onChange={(e) => setInput(e.target.value)}
            type="number"
            placeholder={"0.00"}
            />
        </div>
        {/* Meter */}
        { show === true ? 
          <div className="swapcontainer__swapmain__swap__pack__body__top__meter">
          {meterPercent.map((m) => (
            <div className="swapcontainer__swapmain__swap__pack__body__top__meter__wrap" key = {m.id} onClick={() => setMeter(m.value)}>
              <div className="swapcontainer__swapmain__swap__pack__body__top__meter__wrap__btn" >
                {m.text}
              </div>
          </div>
          ))}
          
        </div>
        :
        null
      }   
    </div>
</div>
  )
}

export default SwapBody
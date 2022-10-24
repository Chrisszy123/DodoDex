import Header  from "../components/Header"
import ChartToggle from "./ChartToggle"
import Swap from "./Swap"

const Exchange = () => {
    return(
        <>
            <Header title = "Exchange" /> 
            <div className="swapcontainer">
                    <ChartToggle />
                    <Swap />
            </div>
        </>
    )
}
export default Exchange

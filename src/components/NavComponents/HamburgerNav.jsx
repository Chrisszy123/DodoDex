import {IoIosPeople, IoIosArrowForward} from "react-icons/io"
import { motion } from "framer-motion"

const  HamburgerNav = () => {
    return(
        <>
            {/* HAMBURGER NAV */}
            <motion.div 
                className="sidebar__hamburgernav"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, type: "spring"}}
                exit={{opacity: 0, transformOrigin: "0px 0px"}}
            
            >
                <motion.div 
                    className="sidebar__hamburgernav__wrapper"
                    initial={{opacity: 0,translateY: "-50%"}}
                    animate={{opacity: 1, translateY: "0%"}}
                    transition={{duration: 1}}
                    exit={{opacity: 0, transformOrigin: "0px 0px"}}
                    >
                    <div className="sidebar__hamburgernav__wrapper__article" style={{"cursor" : "pointer"}}>
                        <div className="sidebar__hamburgernav__wrapper__article__icon">
                            <IoIosPeople />
                        </div>
                        <div className="sidebar__hamburgernav__wrapper__article__text">
                            <h3> VERTEX GOVERNANCE </h3>
                            <h5> Mint Vertex NFT to partake in governace </h5>
                        </div> 
                        <div className="sidebar__hamburgernav__wrapper__article__arrow">
                            <IoIosArrowForward />
                        </div>
                        
                    </div> 
                    <div className="sidebar__hamburgernav__wrapper__article" style={{"cursor" : "pointer"}}>
                        <div className="sidebar__hamburgernav__wrapper__article__icon">
                            <IoIosPeople />
                        </div>
                        <div className="sidebar__hamburgernav__wrapper__article__text">
                            <h3> EARN </h3>
                            <h5> See how you can earn trading with Vertex finance </h5>
                        </div> 
                        <div className="sidebar__hamburgernav__wrapper__article__arrow">
                            <IoIosArrowForward />
                        </div>
                        
                    </div> 
                    <div className="sidebar__hamburgernav__wrapper__article" style={{"cursor" : "pointer"}}>
                        <div className="sidebar__hamburgernav__wrapper__article__icon">
                            <IoIosPeople />
                        </div>
                        <div className="sidebar__hamburgernav__wrapper__article__text">
                            <h3> MARKET PLACE </h3>
                            <h5> Buy and Sell your NFTs </h5>
                        </div> 
                        <div className="sidebar__hamburgernav__wrapper__article__arrow">
                            <IoIosArrowForward />
                        </div>
                        
                    </div> 
                    <div className="sidebar__hamburgernav__wrapper__article" style={{"cursor" : "pointer"}}>
                        <div className="sidebar__hamburgernav__wrapper__article__icon">
                            <IoIosPeople />
                        </div>
                        <div className="sidebar__hamburgernav__wrapper__article__text">
                            <h3> VERTEX NFT </h3>
                            <h5> Mint Vertex NFT and Trade on Marketplace </h5>
                        </div> 
                        <div className="sidebar__hamburgernav__wrapper__article__arrow">
                            <IoIosArrowForward />
                        </div>
                        
                    </div> 
                    <div className="sidebar__hamburgernav__wrapper__article" style={{"cursor" : "pointer"}}>
                        <div className="sidebar__hamburgernav__wrapper__article__icon"  >
                            <IoIosPeople />
                        </div>
                        <div className="sidebar__hamburgernav__wrapper__article__text">
                            <h3> DASHBOARD </h3>
                            <h5> Access your VTX dashboard </h5>
                        </div> 
                        <div className="sidebar__hamburgernav__wrapper__article__arrow">
                            <IoIosArrowForward />
                        </div>
                        
                    </div> 
                </motion.div>
            </motion.div>
        </>
    )
}
export default HamburgerNav
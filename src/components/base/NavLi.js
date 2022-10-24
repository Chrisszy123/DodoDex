import {FaExchangeAlt,FaRedditAlien, FaTelegramPlane} from "react-icons/fa"
import {GoOrganization} from "react-icons/go"
import {BsCurrencyExchange, BsMedium } from "react-icons/bs"
import {FiHelpCircle} from "react-icons/fi"
import {HiOutlineDocumentText} from "react-icons/hi"
import {AiOutlineBell,AiFillHome,AiFillGithub,AiOutlineTwitter} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {RiExchangeLine} from "react-icons/ri"

import Xchange from "./icons/exchange"
import Bridge from "./icons/Bridge"
import Earn from "./icons/Earn"
import Crowdpooling from "./icons/Crowdpooling"

export const Navitemss = [
    {
        id: 1,
        icon : <Xchange />,
        text: "Exchange",
        link: "/"
    },
    {
        id: 2,
        icon : <Bridge />,
        text: "Bridge",
        link: "/dao"
    },
    {
        id: 3,
        icon : <Earn />,
        text: "Earn",
        link: "/liquidity"
    },
    {
        id: 4,
        icon : <Crowdpooling />,
        text: "Crowdpooling",
        link: "/yieldfarming"
    }
]

export const HelpSectionIcons = [
    {
        icon: <FiHelpCircle />,
        text: "Help"
    },
    {
        icon: <HiOutlineDocumentText />,
        text: "Docs"
    },
    {
        icon: <AiOutlineBell />,
        text: "Announcement"
    },
    {
        icon: <CgProfile />,
        text: "Careers"
    },
    {
        icon: <RiExchangeLine />,
        text: "Beta Version"
    }

]

export const SocialIcons = [
    {
        icon: <AiFillHome />,
        link: ""
    },
    {
        icon: <AiFillGithub />,
        link: ""

    },
    {
        icon: <AiOutlineTwitter />,
        link: ""
    },
    {
        icon: <FaRedditAlien />,
        link: ""
    },
    {
        icon: <FaTelegramPlane />,
        link: ""
    },
    {
        icon: <BsMedium />,
        link: ""
    }
]
import {useState} from "react";
import {Link} from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import { FaTimes } from 'react-icons/fa';
import logo from "../../../assets/images/logo.jpg"

export const Navbar = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("")

    const links =[
        {"name":"Home", "link":"/", "active" : activeTab === "Home"},
        {"name":"About", "link":"/about", "active" : activeTab === "About"},
        {"name":"Work", "link":"/works", "active" : activeTab === "Work"},
        {"name":"Contact", "link":"/contact", "active" : activeTab === "Contact"},
    ]
    return(
        <>
        <div className="container md:mx-auto md:flex items-center justify-between md:py-5 py-6 w-full ">
            <div className="logo md:py-0 py-2">
                <Link to={"/"}>
                    <h1 className="text-white text-3xl font-semibold ml-[5px] flex items-center gap-2">
                        <img src={logo} alt="logo comes here" className="h-[45px] w-[45px] rounded-full"/>
                        Shavaiz Ali
                    </h1>
                </Link>
            </div>
                <div className="toggle-btn">
                    <span onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes className="text-white md:hidden text-[2.2rem] absolute top-[45px] right-[5px] cursor-pointer"/>:<RxHamburgerMenu className="text-white md:hidden text-[2.2rem] absolute top-[45px] right-[5px] cursor-pointer"/> }
                    </span>
                </div>
                <ul className={`flex md:flex-row flex-col items-center text-center md:gap-10 gap-5 absolute bg-black md:static md:z-auto z-40 md:top-[20px] md:w-auto w-full left-0 py-8 md:border-hidden border border-t-white border-b-0 border-l-0  transition-all  ease-in-out ${isMobileMenuOpen ? "top-[5.2rem]" : "top-[-490px]"}`}>
                    { 
                        links.map((item, ind) =>{
                            return(
                                < >
                                <Link to={item.link} key={ind} className={`text-white list-none text-xl hover:text-white/[0.15] cursor-pointer md:my-0 my-5 transition-all ease-in ${item.active ? "text-white/[0.30]" : ""}`} onClick={() => setActiveTab(item.name)}>{item.name}</Link>
                                
                                </>
                            )
                        })
                    }
                    <Link to={"/contact"} className="bg-white/[0.15] py-2 px-6 rounded-lg text-white text-[1.2rem] hover:bg-white hover:text-black md:block hidden transition-all ease-in md:ml-0 ml-7">Lets Talk</Link>
                </ul>
        </div>
        </>
    )
}  
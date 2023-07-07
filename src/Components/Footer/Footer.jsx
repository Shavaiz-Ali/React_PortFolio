import {useState} from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [activeTab, setActiveTab] = useState("")

    const links =[
        {"name":"Home", "link":"/", "active" : activeTab === "Home"},
        {"name":"About", "link":"/about", "active" : activeTab === "About"},
        {"name":"Work", "link":"/works", "active" : activeTab === "Work"},
        {"name":"Contact", "link":"/contact", "active" : activeTab === "Contact"},
    ]
  return (
    <> 
        <div className="container flex flex-col justify-center items-center mx-auto sm:py-14 py-8">
            <div className="logo md:py-0 sm:py-2">
                <Link to={"/"}>
                    <h1 className="text-white sm:text-3xl text-2xl font-semibold ml-[5px] flex items-center gap-2">
                        {/* <img src={logo} alt="logo comes here" className="h-[55px] w-[55px] rounded-full"/> */}
                        Shavaiz Ali
                    </h1>
                </Link>
            </div>
            <ul className={`flex  flex-wrap justify-center items-center sm:gap-12 gap-5 sm:py-5 py-2`}>
                    { 
                        links.map((item, ind) =>{
                            return(
                                < >
                                <Link to={item.link} key={ind} className={`text-white/[0.40] font-semibold list-none sm:text-xl text-[18px] hover:text-white/[0.15] cursor-pointer md:my-0 sm:my-5 my-2 transition-all ease-in ${item.active ? "text-white/[0.30]" : ""}`} onClick={() => setActiveTab(item.name)}>{item.name}</Link>
                                
                                </>
                            )
                        })
                    }
                </ul>
            <div className="copyright  text-white/[0.40] flex justify-center items-center sm:gap-1">
                © 2022 All rights reserved by <span className='sm:text-[20px] text-16px text-blue-600'> Shavaiz Ali</span>
            </div>    
        </div>
    </>
  )
}

export default Footer

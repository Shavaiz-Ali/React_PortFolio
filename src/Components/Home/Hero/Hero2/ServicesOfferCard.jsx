import { BsArrowBarRight } from "react-icons/bs";
import {Link} from "react-router-dom"
import {BsBrowserChrome} from "react-icons/bs"
export const ServicesOfferCard = () =>{
    return(
        <>
            <div className="services-offer border border-white/[0.15] text-center bg-[#161616] sm:py-8 sm:px-12 px-8 py-5 gap-5 rounded-[20px] sm:w-auto w-[100vw]">
                <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center mx-auto text-center">
                    <span className="text-4xl text-white py-6" ><BsBrowserChrome /></span>
                    <span className="text-4xl text-white py-6"><BsBrowserChrome /></span>
                    <span className="text-4xl text-white py-6"><BsBrowserChrome /></span>
                    <span className="text-4xl text-white py-6"><BsBrowserChrome /></span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text text-left">
                        <h1 className="text-[18px] text-gray-600 font-normal mt-6">Specialization</h1>
                        <h1 className="text-white font-semibold text-xl text-left">Services Offering</h1>
                    </div>
                    <div className="icon">
                        <Link>
                            <BsArrowBarRight className="text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out mt-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
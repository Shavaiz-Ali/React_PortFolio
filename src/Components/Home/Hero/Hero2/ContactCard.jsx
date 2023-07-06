import {Link} from "react-router-dom"
import {BsArrowBarRight} from "react-icons/bs";
import icon2 from "../../../../assets/images/icon2.png"
export const ContactCard = () => {
    return(
        <>
        <div className="relative services-offer border border-white/[0.15] text-center bg-[#161616] sm:py-8 sm:px-12 px-8 py-5 gap-5 rounded-[20px] sm:w-auto w-[100vw]">
                    <div className="absolute top-0">
                        <img src={icon2}/>
                    </div>
                <div className="flex justify-between items-center relative py-2">
                    <div className="text text-left mt-11">
                        <h1 className="sm:text-[2.5rem] text-[1.8rem] text-white sm:font-semibold text-left">Let&lsquo;s</h1>
                        <h1 className="text-white sm:font-semibold sm:text-[1.8rem] text-[2rem] text-left">Work <span className="text-blue-600">Together</span></h1>
                    </div>
                    <div className="icon mt-11">
                        <Link>
                            <BsArrowBarRight className="absolute text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out bottom-[12px] sm:right-[-5px] right-[5px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
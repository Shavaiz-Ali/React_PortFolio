import {Link } from "react-router-dom"
import img from "../../../../assets/images/logo.jpg"
import { BsArrowBarRight } from "react-icons/bs"
import Marquee from "./Marquee"
import Credentials from "./Credentials"
export const AboutCard = () => {
    return (
        <>
            <div className="container xl:w-80% w-full ">
                {/* about card  */}
                <div className="lg:flex justify-center items-center gap-4">
                    <div className="card relative border border-white/[0.15] text-center bg-[#161616] sm:py-8 sm:px-12 py-5 gap-5 rounded-[20px] sm:w-auto w-[100vw]">
                        
                        <div className="sm:flex justify-center items-center gap-5">
                            <div className="image border-4 border-gray-600 sm:p-4 p-2 rounded-tl-[30px] rounded-br-[30px] text-center sm:w-auto w-[50%] mx-auto">
                                <img src={img} alt="iamge" className="sm:w-36 w-[200px] mx-auto" />
                            </div>

                            <div className="name text-center mx-auto ">
                                <h1 className="sm:text-[18px] text-[16px] font-normal text-gray-600  sm:text-left text-center">A Front-End Developer</h1>
                                <h1 className="sm:text-4xl text-2xl font-semibold text-white sm:text-left text-center">Shavaiz Ali</h1>
                                <h1 className="sm:text-[18px] text-[16px] font-normal text-gray-600  sm:text-left text-center">I am a Web Developer Based In <br /> GilGit Pakistan</h1>
                            </div>
                        </div>

                        <div className="link">
                            <Link to={"/about"}><BsArrowBarRight className={`text-gray-600 text-3xl font-semibold absolute right-[20px] sm:bottom-[20px] bottom-[18px] cursor-pointer hover:text-white transition-all ease-in-out`} /></Link>
                        </div>
                    </div>

                    {/* marquee and credentials card and  goes here  */}
                    <div className="hero-left flex flex-col items-center justify-center gap-5">
                        <div className="container marquee">
                            <Marquee>
                                <span className="text-lg text-white">This is a marquee text.</span>
                            </Marquee>
                        </div>
                        <div className="credentials">
                            <Credentials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
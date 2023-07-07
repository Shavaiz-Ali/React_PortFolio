import {Link} from 'react-router-dom'
import {BsArrowBarRight} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs"
const SocialIcons = () => {
  return (
        <div className="container mx-auto sm:flex items-center justify-center gap-5">
            <div className="border border-white/[0.15] text-center bg-[#161616] py-3 px-7 gap-5 sm:mt-0 mt-5 rounded-[20px] lg:w-auto w-[100vw]">

                <div className="flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-5 px-6  gap-5 sm:mt-0 mt-5 rounded-[20px] lg:w-auto ">

                    <div className="linkedIn text-white flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-6 px-6 rounded-full hover:bg-white hover:text-black transition-all ease-in cursor-pointer">
                        <Link to={"https://www.linkedin.com/in/shavaiz-ali-436853258/"} target='_blank'><FaLinkedinIn className='text-4xl  cursor-pointer'/></Link>
                    </div>

                    <div className="github text-white flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-6 px-6 rounded-full hover:bg-white hover:text-black transition-all ease-in cursor-pointer">
                      <Link to={"https://github.com/Shavaiz-Ali"} target="_blank"><BsGithub className='text-4xl cursor-pointer'/></Link>
                    </div>

                </div>
                <div className="flex items-center justify-between my-2">

                    <div className="text">
                        <h1 className='text-white font-semibold text-xl text-left'>Stay with Me</h1>
                        <h1 className='text-[18px] text-gray-600 font-normal text-left'>Profiles</h1>
                    </div>

                    <div className="link">
                    <Link to={""}>
                            <BsArrowBarRight className="text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out " />
                    </Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default SocialIcons

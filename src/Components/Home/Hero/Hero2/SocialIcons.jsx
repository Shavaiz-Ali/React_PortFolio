import {Link} from 'react-router-dom'
import {BsArrowBarRight} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs"
const SocialIcons = () => {
  return (
    <>
        <div className="flex flex-col justify-center bg-[#161616] border border-white/[0.15] rounded-[20px] px-5 py-5">
            {/* left section  */}
            <div className="flex justify-center gap-3 items-center bg-[#161616] border border-white/[0.15] rounded-[20px] px-5 py-4"> 
                <div className="flex justify-center items-center bg-[#161616] border border-white/[0.15] rounded-full px-5 py-5 text-white hover:bg-white hover:text-black transition-all ease-in duration-[0.3s] cursor-pointer">
                    <FaLinkedinIn className=' text-4xl'/>
                </div>
                <div className="flex justify-center items-center bg-[#161616] border border-white/[0.15] rounded-full px-5 py-5 text-white hover:bg-white hover:text-black transition-all ease-in duration-[0.3s] cursor-pointer">
                    <BsGithub className='text-4xl'/>
                </div>
            </div>
            {/* right section  */}
            <div className="flex justify-between items-center mt-5">
                <div className="flex flex-col">
                    <h1 className='text-white font-semibold text-xl text-left'>Stay with Me</h1>
                    <h1 className='text-[18px] text-gray-600 font-normal text-left'>Profiles</h1>
                </div>
                <div className="link">
                    <Link to={"/contact"}>
                        <BsArrowBarRight className="text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out "/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default SocialIcons

        // <div className="container  border border-white/[0.15] text-center bg-[#161616] py-3 gap-5 sm:mt-0 mt-5 rounded-[20px] ">
        //     <div className="sm:flex flex-col">
        //         <div className="flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-5 lg:px-0 px-8 gap-5 sm:mt-0 mt-5 rounded-[20px] w-auto ">

        //             <div className="linkedIn text-white flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-4 px-4 rounded-full hover:bg-white hover:text-black transition-all ease-in cursor-pointer">
        //                 <Link to={"https://www.linkedin.com/in/shavaiz-ali-436853258/"} target='_blank'><FaLinkedinIn className='text-4xl  cursor-pointer'/></Link>
        //             </div>

        //             <div className="github text-white flex items-center justify-center border border-white/[0.15] text-center bg-[#161616] py-4 px-4 rounded-full hover:bg-white hover:text-black transition-all ease-in cursor-pointer">
        //               <Link to={"https://github.com/Shavaiz-Ali"} target="_blank"><BsGithub className='text-4xl cursor-pointer'/></Link>
        //             </div>

        //         </div>
        //         <div className="flex items-center justify-around">

        //             <div className="text">
        //                 <h1 className='text-white font-semibold text-xl text-left'>Stay with Me</h1>
        //                 <h1 className='text-[18px] text-gray-600 font-normal text-left'>Profiles</h1>
        //             </div>

        //             <div className="link">
        //             <Link to={""}>
        //                     <BsArrowBarRight className="text-gray-600 text-3xl font-semibold cursor-pointer hover:text-white transition-all ease-in-out " />
        //             </Link>
        //             </div>

        //         </div>
        //     </div>
        // </div>
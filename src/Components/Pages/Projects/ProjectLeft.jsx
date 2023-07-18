import {ProjectsDataLeft} from "./ProjectsData";
import { BsArrowBarRight } from "react-icons/bs";
import {Link} from "react-router-dom";
export const ProjectLeft = () =>{
    return(
        <>
            <div className="projects mx-auto sm:flex lg:flex-col sm:flex-row gap-5 ">
            {
                ProjectsDataLeft.map((item) =>{
                    return(
                        <>                        
                            <div className="flex flex-col justify-center bg-[#161616] rounded-[20px] p-6 mt-4">
                                <img src={item.img} alt="image" className="w-full rounded-[20px] mb-6"/>
                                    <div className="flex justify-between items-center relative">
                                        <div className="flex flex-col">
                                            <h1 className="text-[18px] text-gray-600 font-normal">{item.title}</h1>
                                            <h1 className="text-white font-semibold text-xl text-left">{item.subTitle}</h1>
                                        </div>
                                        <div className="link">
                                            <Link to={"/"}><BsArrowBarRight className={`text-gray-600 text-3xl font-semibold absolute right-[20px] sm:bottom-[20px] bottom-[18px] cursor-pointer hover:text-white transition-all ease-in-out`} /></Link>
                                        </div>
                                    </div>
                            </div>
                        </>
                    )
                })
               }
            </div>
        </>
    )
}
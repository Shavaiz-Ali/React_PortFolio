import icon2 from "../../../assets/images/icon2.png"
import img2 from "../../../assets/images/star-2.png"

export const SelfSummary = () =>{
    return(
        <>
        <div className="container services-offer lg:w-[70%] w-full">
            <div className="flex justify-center items-center gap-1">
                <img src={img2} alt="star svg"/>
                <h1 className="text-white xl:text-[5rem] sm:text-[3.5rem] text-[26px]">SELF SUMMARY</h1>
                <img src={img2} alt="star svg"/>
            </div>
                <div className="relative text-white services-offer border border-white/[0.15] text-center bg-[#161616] sm:py-8 sm:px-12 px-8 py-5 gap-5 rounded-[20px]">
                            <div className="absolute top-0">
                                <img src={icon2}/>
                            </div>
                        <div className="flex justify-between items-center relative py-2">
                            <div className="text text-left mt-11">
                                <h1 className="sm:text-[2.5rem] text-[1.8rem] text-white sm:font-semibold text-left">Meet Shavaiz Ali</h1>
                                <p className="text-xl text-white/[0.40]">A Front-End developer with a passion for crafting visually appealing and user-friendly websites.Skilled in HTML, CSS, and JavaScript, with expertise in responsive design and cross-browser compatibility. Proficient in utilizing front-end frameworks such as React and Vue.js to deliver dynamic and interactive web applications.</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
 

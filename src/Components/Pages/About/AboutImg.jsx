import img from "../../../assets/images/logo.jpg"



export const AboutImg = () =>{
    return(
        <>
            <div className="relative flex justify-center items-center bg-[#161616] sm:p-5 p-3 rounded-[20px] lg:w-auto sm:w-[420px] max-w-[70%]  mx-auto h-[60%]">
                <img src={img} alt={img} className="relative rounded-[20px] sm:h-[350px] sm:w-[350px] max-w-[100%] max-h-[100%]"/>
            </div>
        </>
    )
}
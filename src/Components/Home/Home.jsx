import {AboutCard} from "./Hero/Hero1/AboutCard";
import {ServicesOfferCard} from "./Hero/Hero2/ServicesOfferCard"
import {ContactCard} from "./Hero/Hero2/ContactCard"
import SocialIcons from "./Hero/Hero2/SocialIcons";
// import Fade from "./Animation/Fade"
export const Home = () =>{
    return( 
        <>
            {/* <Fade duration={500}> */}
            <AboutCard />
                <div className="container xl:w-[100%] mx-auto grid sm:grid-cols-12 lg:py-10 py-5 gap-5 ">
                    <div className="lg:col-span-5 sm:col-span-12 col-span-auto lg:order-1 order-3"><ServicesOfferCard /></div> 
                    <div className="lg:col-span-4 sm:col-span-6 col-span-auto order-2"><ContactCard /></div> 
                    <div className="lg:col-span-3 sm:col-span-6 col-span-auto lg:order-3 order-1"><SocialIcons /></div>        
                </div>
                {/* </Fade> */}
        </>
    )
}
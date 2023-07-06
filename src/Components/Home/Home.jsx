import {AboutCard} from "./Hero/Hero1/AboutCard";
import {ServicesOfferCard} from "./Hero/Hero2/ServicesOfferCard"
import {ContactCard} from "./Hero/Hero2/ContactCard"

export const Home = () =>{
    return( 
        <>
            <AboutCard />
                <div className="grid lg:grid-cols-12 py-10 gap-5">
                    <div className="col-span-5"><ServicesOfferCard /></div> 
                    <div className="lg:col-span-4 col-span-5"><ContactCard /></div>         
                </div>
        </>
    )
}
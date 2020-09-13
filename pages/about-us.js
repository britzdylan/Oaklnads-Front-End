import Layout from '../components/layout';
import Link from 'next/link'
import { AiOutlineCheck, AiOutlineShopping, AiOutlineTeam, AiOutlineGlobal } from 'react-icons/ai'
import HeadSection from '../components/head-section'
export default function AboutUs() {

    return (
        <Layout>
            <HeadSection Title="About Us"/>
            <div className="flex flex-row flex-wrap justify-between px-5">
                <div className="md:w-1/2 w-full mb-5">
                    <h2 className="text-4xl font-bold mb-10">We Are Oaklands</h2>
                    <p className="mb-5">Keen knowledge of the latest international trends, exclusive designs and Innovative ideas are our signature.</p>
                    <p className="mb-5">Mixture of imagination, expertise, spectacular merchandise and professionalism is the secret of our design!</p>
                    <p className="mb-5">We are proud of our amicable, professional and always innovative team of decorators and designers who serve the 
                        globe and provide world-class service standards to residential, corporate, hotels, lodges, commercial and hospitality industry.</p>
                    <p className="mb-5">Diverse Décor and Innovative Global Design Service offered too! Let us transform your living space</p>
                    <ul>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">exclusive designs</span></li>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">decor elements</span></li>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">textile and interior</span></li>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">enlightenment</span></li>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">modern living rooms</span></li>
                        <li className="flex flex-row justify-start items-center"><AiOutlineCheck /> <span className="ml-4">award-winning designers</span></li>
                    </ul>
                </div>
                <div>
                    <img src="/about-us.jpg" alt="about oaklands furniture & design"/>
                </div>
            </div>
            <div className="flex flex-row flex-wrap  my-20">
                <div className="w-full md:w-1/2 p-5">
                    <h3 className="text-2xl font-medium mb-10">Our Mission</h3>
                    <p className="mb-5">We work to ensure people’s comfort at their home, and to 
                        provide the best and the fastest help at fair prices. We stand for quality, safety and credibility, so you could be sure about our work.</p>
                    <p className="mb-5">Oaklands succeeds for years in tracking down style icons, developing 
                            trends and innovations in furniture design, and using them to fulfil the dreams of furnishing enthusiasts.</p>
                    <p className="mb-5">With the courage to innovate, Oaklands creates trends and unique furnishing collections being affordable and desirable for all people. </p>
                </div>
                <div className="w-full md:w-1/2 p-5">
                    <div className="mb-5 p-5">
                        <div className="flex flex-row items-center mb-5">
                            <AiOutlineShopping size="3em" />
                            <Link href="/catalogue"><h4 className="font-bold text-xl ml-3 cursor-pointer">Shop Online</h4></Link>
                        </div>
                        <p>For your convenience you can shop our enitre furniture range online, simply pick your items and request a quote!</p>
                    </div>
                    <div className="mb-5 p-5">
                        <div className="flex flex-row items-center mb-5">
                            <AiOutlineTeam size="3em" />
                            <h4 className="font-bold text-xl ml-3">Tailored Solutions</h4>
                        </div>
                        <p>We don't just sell you a furniture piece, our interior designers will reccomend you  some alternate designs or looks for your next porject.</p>

                    </div>
                    <div className="mb-5 p-5">
                        <div className="flex flex-row items-center mb-5">
                            <AiOutlineGlobal size="3em" />    
                            <h4 className="font-bold text-xl ml-3">  Nation wide reach</h4>
                        </div>
                        <p>We take on any project throughout South Africa, we can assist you where ever you may be located.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
import Layout from '../components/layout'
import HeadSection from '../components/head-section'
import { AiOutlineClockCircle, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SocialLinks from '../components/sociallinks'
export default function Contact() {
    return (
        <Layout>
            <HeadSection Title="Contact Us" />
            {/* details */}
            <div className="lg:flex text-center lg:text-left flex-row flex-wrap w-full py-5 justify-between items-start">
                <div className="p-5">
                    <div className="flex flex-row justify-center lg:justify-start items-center mb-3">
                        <AiOutlineClockCircle size="2em" />
                        <h3 className="text-xl ml-5 leading-5 my-0">Open hours</h3>
                    </div>
                    <p>Mon - Fri: 08:00 - 16:00</p>
                    <p>Sat: 08:00 - 13:00</p>
                </div>

                <div className="p-5">
                    <div className="flex flex-row justify-center lg:justify-start items-center mb-3">
                        <AiOutlinePhone size="2em" />
                        <h3 className="text-xl ml-5 leading-5 my-0">Phone number</h3>
                    </div>
                    <p>011 781 5569</p>
                </div>

                <div className="p-5 ">
                    <div className="flex flex-row justify-center lg:justify-start items-center mb-3">
                        <AiOutlineMail size="2em" />
                        <h3 className="text-xl ml-5 leading-5 my-0">Our email</h3>
                    </div>
                    <p>showroom@oaklandsfurniture.co.za</p>
                </div>

                <div className="p-5">
                    <div className="flex flex-row justify-center lg:justify-start items-center mb-3">
                        <FaMapMarkerAlt size="2em" />
                        <h3 className="text-xl ml-5 leading-5 my-0">Our location</h3>
                    </div>
                    <p>c/o Bramfiscer & Geaorge street</p>
                    <p>Bramfischer Shopping Centre</p>
                </div>
            </div>
            {/* ---- */}
            <hr className="my-10" />
            <div className="flex flex-row flex-wrap justify-between items-start">
                <div className="w-1/2">
                    <h3 className="text-xl font-bold">Get in touch</h3>
                    <form class=" pt-6 pb-8 mb-4">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name*
                            </label>
                            <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="name" type="text" placeholder="Your first name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email*
                            </label>
                            <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="email" type="email" placeholder="Your emai address" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                Sibject*
                            </label>
                            <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="subject" type="text" placeholder="Your subject" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                                Message*
                            </label>
                            <textarea className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" rows="10" id="message" type="text" placeholder="Your message..." />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-1/3">
                    <p className="mb-20">Diverse Décor and Innovative Global Design Service offered too! Let us transform your living space</p>
                    <p className="font-bold">Connect with us</p>
                    <SocialLinks />
                </div>
            </div>
        </Layout>
    )

}
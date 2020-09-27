import Layout from '../components/layout';
import Link from 'next/link';
import HeadSection from '../components/head-section'

export default function Booking() {

    return (
        <Layout>
            <HeadSection Title="Make a booking"/>
            <div className="flex flex-row items-start justify-center">
                <img src="/hedline-2-1.png" width="60px" height="60px"/>
                <h2 className="font-bold text-center text-2xl">START TURNING YOUR HOUSE <br /> INTO A HOME TODAY!</h2>
                <img className="self-end" src="/hedline-3-1.png" width="60px" height="60px"/>
            </div>

            <div className="w-1/2 text-center mt-20 mx-auto">
                <p className="text-xl">Setup an apointment with our expert designers to help get your vision on a board and turn your dream of a home into a reality.</p>
            </div>

            <form action="https://formspree.io/mzbkbrgb" method="POST" class="w-full max-w-lg mx-auto my-20">
                <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="first name" required id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>


                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="last name" required id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Contact Number
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="contact" required id="grid-password" type="number" placeholder="******************"/>
                    </div>
                </div>

                    <div class="w-full   mb-6 md:mb-8">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Email
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="_replyto" required id="grid-city" type="email" placeholder="example@gmail.com"/>
                    </div>

                    <div class="w-full   mb-6 md:mb-8">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date">
                        Date
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="date" required id="date" type="date" />
                    </div>

                    <div class="w-full   mb-6 md:mb-8">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="time">
                        Time
                    </label>
                    <input className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" name="time" required id="time" type="time" />
                    </div>

                    <input className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="submit"/> 
                </form>
            
        </Layout>   
    )
    
}
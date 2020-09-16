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

            <form class="w-full max-w-lg mx-auto my-20">
                <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>


                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Contact Number
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="******************"/>
                    </div>
                </div>

                    <div class="w-full   mb-6 md:mb-8">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="email" placeholder="example@gmail.com"/>
                    </div>

                    <button className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                                Submit your booking
                    </button>
                    
                </form>
            
        </Layout>   
    )
    
}
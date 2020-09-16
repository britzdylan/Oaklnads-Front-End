import { AiOutlineArrowRight } from 'react-icons/ai';
import SocialIcons from '../components/sociallinks';
import Address from '../components/address';
import Link from 'next/link';
export default function Footer() {

    return (
        <div className="md:p-10 p-2 border-t font-Montserrat">
            <div className="md:flex flex-row flex-wrap content-start justify-between w-full xl:max-w-6xl mx-auto py-20">
                <div className="mb-5 mt-5 md:mb-0 md:w-1/4 w-full">
                    <h6 className="font-bold text-xl mb-5">Address</h6>
                    <Address />
                    <SocialIcons />
                </div>

                <div className="mb-5 mt-5 md:mb-0">
                    <h6 className="font-bold text-xl mb-5">Help & Information</h6>
                    <ul className="appearance-none leading-8 cursor-pointer">
                        <Link href="/policy"><li className="transition-all duration-500 ease-in-out hover:text-gray-500">Privacy Policy</li></Link>
                        <Link href="/shipping"><li className="transition-all duration-500 ease-in-out hover:text-gray-500">Shipping</li></Link>
                        <Link href="/terms"><li className="transition-all duration-500 ease-in-out hover:text-gray-500">Terms & Conditions</li></Link>
                    </ul>
                </div>

                <div className="mb-5 mt-5 md:mb-0">
                    <h6 className="font-bold text-xl mb-5">About Us</h6>
                    <ul className="appearance-none leading-8 cursor-pointer">
                        <Link href="/about-us"><li className=" hover:text-gray-500 transition-all duration-500 ease-in-out">About us</li></Link>
                        <Link href="/blog"><li className=" hover:text-gray-500 transition-all duration-500 ease-in-out">Blog</li></Link>
                        <Link href="/contact"><li className=" hover:text-gray-500 transition-all duration-500 ease-in-out">Contact US</li></Link>
                    </ul>
                </div>

                <div className="mb-5 mt-5 md:mb-0">
                    <h6 className="font-bold text-xl mb-5">Newsletter</h6>
                    <div className="flex md:mt-0 mt-5 flex-row items-center bg-gray border-b">
                        <input className="py-3 px-2 border-none w-full active:border-none outline-none rounded-tl rounded-bl placeholder-gray-800" type="email" placeholder="Your email address" />
                        <button className="bg-white py-3 px-3 rounded-tr rounded-br"><AiOutlineArrowRight size="1.5em" color="dark-gray" /></button>
                    </div>
                </div>
            </div>

            <div className="text-center py-5">
                <h6 className="text-3xl font-bold mb-5">Oaklands Furniture & Design</h6>
                <p>© 2020 Oaklands Furniture & Design. All Rights Reserved.</p>
            </div>
        </div>
    )
}

import { AiOutlineArrowRight } from 'react-icons/ai';
export default function NewsletterCta() {

    return (
        <div className="my-20 mx-5 bg-gray-300 p-10 md:flex flex-row justify-between content-center">
            <div className="md:w-1/2">
                <h5 className="text-3xl font-bold">Sign up and save</h5>
                <p className="">Sign up to our newsletter and save 20% on your first order</p>
                <smal className="text-xs">T's & C's apply</smal>
            </div>
            <div className="md:w-1/2 flex md:mt-0 mt-5 flex-row items-center">
                <input className="w-3/4 py-3 px-2 border-none active:border-none outline-none rounded-tl rounded-bl" type="email" placeholder="Your email address" />
                <button className="bg-white py-3 px-3 rounded-tr rounded-br"><AiOutlineArrowRight size="1.5em" color="gray" /></button>
            </div>
        </div>
    )
}
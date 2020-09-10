import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

export default function HomeBlogGrid({ fakeBlog }) {

    return (
        <div className="md:p-20 p-1 xl:p-0 my-40 w-full mx-auto">
            <div className="md:flex flex-row justify-between mb-10">
                <h4 className="font-bold text-3xl">Read our Blog</h4>
                <Link href="#">
                    <div className="flex flex-row justify-between items-center cursor-pointer">

                        <p className="font-bold mr-2">View All </p>
                        <AiOutlineArrowRight size="2em" />

                    </div>
                </Link>
            </div>
            <div id="container-collection" className="md:flex flex-row flex-wrap mx-auto" >
                {fakeBlog.map(post =>

                    <div className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/3 py-5">
                        <Link href="#">
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={post.image} alt={post.title} width="100%" />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link href="#">
                                <h5 className="text-xl hover:text-red-900 transition-all duration-500 ease-in-out cursor-pointer font-bold">{post.title}</h5>
                            </Link>
                        </div>
                        <hr className="w-1/4 my-5 bg-gray-500 pt-1" />
                        <div>
                            <small className="text-xsm tracking-widest font-bold">{post.collection} / {post.date} / {post.author}</small>
                        </div>


                    </div>

                )}
            </div>
        </div >
    )
}
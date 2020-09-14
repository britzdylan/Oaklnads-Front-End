import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

export default function HomeBlogGrid({ allPosts }) {

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
                {allPosts.blogPosts.map(post =>

                    <div key={post.Title} className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/3 py-5">
                        <Link href={`/blog/${post.slug}`}>
                            <div className="bg-gray-500 relative  cursor-pointer w-full h-64">
                                <img className="transition duration-500 ease-in-out hover:opacity-50 object-cover h-full" src={post.Cover.url} alt={post.Title} />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link href={`/blog/${post.slug}`}>
                                <h5 className="text-xl hover:text-red-900 transition-all duration-500 ease-in-out cursor-pointer font-bold">{post.Title.charAt(0).toUpperCase() + post.Title.slice(1).toLowerCase()}</h5>
                            </Link>
                        </div>
                        <hr className="w-1/4 my-5 bg-gray-500 pt-1" />
                        <div>
                            <Link href={`/categories/${post.blog_categories.length > 0 ? post.blog_categories[0].slug : '#'}`}><small className="text-xsm tracking-widest font-bold">{post.blog_categories.length > 0 ? post.blog_categories[0].Title : 'Design'} / {post.PublisedDate} / Oaklands Design Team</small></Link>
                        </div>


                    </div>

                )}
            </div>
        </div >
    )
}
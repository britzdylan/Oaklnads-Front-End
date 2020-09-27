import Layout from '../../../components/layout'
import HeadSection from '../../../components/head-section'
import { getPostsByCategory, getAllCategories } from '../../../lib/api'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function subCategory({ allPosts, allCateogires }) {
    const router = useRouter()
    const { slug } = router.query
    const newSlug = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
  

    return (
        <Layout>
            <HeadSection Title={`Category: ${newSlug}`} />
            <div className="md:flex flex-row justify-between mb-20 text-center md:text-left px-10 xl:px-0">
                <div className="w-full md:w-3/4 mt-20 md:mt-0">
                    {allPosts.blogCategory.blog_posts.map(post =>
                        <div key={post.id} className="w-full px-5 lg:pr-5 lg:px-0 place-items-start py-5 mb-20">
                        <Link href={`/blog/${post.slug}`}>
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={post.Cover.url} alt={post.title} width="100%" />
                            </div>
                        </Link>
                        <div className="pt-3 mb-10">
                            <Link href={`/blog/${post.slug}`}>
                                <h5 className="hover:text-gray-500 text-3xl mb-1 mt-0 leading-10 font-bold cursor-pointer">{post.Title.charAt(0).toUpperCase() + post.Title.slice(1).toLowerCase()}</h5>
                            </Link>
                            <p className="block mb-5 leading-4 text-sm tracking-wider"> October 16, 2020 / By Oaklands design team / in {post.blog_categories.length > 0 ? post.blog_categories[0].Title : 'Design'}</p>
                            <p className="text-xl my-2">{post.excerpt}</p>
                        </div>
                        <Link href={`/blog/${post.slug}`}><button className="bg-transparent hover:bg-gray-100 text-sm text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-black">Read More</button></Link>
                    </div>
                    )}
                </div>
                <div className="w-1/3 pl-5">
                    <h3 className="text-xl mb-3 font-bold">Categories</h3>
                    <hr />
                    <ul className="text-sm leading-8 md:block flex flex-row flex-wrap justify-evenly">
                        <Link href="/blog"><li className="cursor-pointer hover:text-gray-500">All</li></Link>
                        {allCateogires.blogCategories.map(item =>
                            <Link href={{
                                pathname: `/blog/category/${item.slug}`,
                                query: { id: `${item.id}` },
                              }}><li key={item.id} className={`${newSlug === item.Title ? "font-bold" : ""} cursor-pointer hover:text-gray-500`}>{item.Title}</li></Link>
                        )}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const articles = (await getAllCategories()) || []
//     return {
//         paths: articles.blogCategories.map((category) => ({
//             params: {
//                 slug: category.slug,
//             },
//         })),
//         fallback: false,
//     }
// }

export async function getServerSideProps({ query }) {

    const allPosts = (await getPostsByCategory(query.id)) || []

    const allCateogires = (await getAllCategories()) || []
    return {
        props: { allPosts, allCateogires }
    }
}

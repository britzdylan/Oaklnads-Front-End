import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getHomePagePosts } from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import HomeBlogGrid from '../../components/home-blog-grid'
const SinglePost = ({ article, allPosts }) => {
    const post = article.blogPosts[0]

    return (
        <Layout>
            <article id="single-post mb-10">
            <div className="w-full p-5 md:px-10 lg:px-20 lg:w-8/12 mx-auto mb-20">
                <h1 className="font-bold mb-0 mt-20  text-left text-gray-700 text-4xl">{post.Title}</h1>
                <p className=" my-2">By Oaklands Design Team</p>
                <img width="100%" className=" mt-20 shadow-md rounded mx-auto" src={post.Cover.url} alt={post.Title} />
                <ReactMarkdown source={post.Content} />
                </div>
                <HomeBlogGrid title="Related posts" allPosts={allPosts} />
            </article>

        </Layout>
    )
}

export async function getStaticPaths() {
    const articles = (await getAllPosts()) || []
    return {
        paths: articles.blogPosts.map((article) => ({
            params: {
                id: article.slug,
            },
        })),
        fallback: false,
    }
}


export async function getStaticProps({ params }) {
    const article = (await getPostBySlug(params.id)) || []
    const allPosts = (await getHomePagePosts()) || []
    return {
        props: { article, allPosts },
        revalidate: 1
    }
}

export default SinglePost
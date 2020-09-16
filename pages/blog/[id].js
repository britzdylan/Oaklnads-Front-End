import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const SinglePost = ({ article }) => {
    const post = article.blogPosts[0]

    return (
        <Layout>
            <article id="single-post mb-10">
                <img width="100%" src={post.Cover.url} alt={post.Title} />
                <h1 className="font-bold mt-20 p-5 text-left text-gray-700">{post.Title}</h1>
                <p className="p-5">By Oaklands Design Team</p>
                <div className="w-full p-5 md:p-10 lg:p-20 lg:w-8/12 mx-auto mb-20">
                <ReactMarkdown source={post.Content} />
                </div>
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

    return {
        props: { article },
        revalidate: 1
    }
}

export default SinglePost
import { getAllPosts } from '../lib/api'
import Layout from '../components/layout';
import HomeGrid from '../components/home-category-grid';

export default function IndexPage({ allPosts }) {

  return (
    <Layout>
      <HomeGrid />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPosts()) || []
  return {
    props: { allPosts }
  }
}

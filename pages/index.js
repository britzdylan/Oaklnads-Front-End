import { getHomePagePosts } from '../lib/api'
import Layout from '../components/layout';
import HomeGrid from '../components/home-category-grid';
import HomeProductGrid from '../components/home-product-grid';
import HomeBlogGrid from '../components/home-blog-grid';
import NewsletterCta from '../components/newsletter-cta'

const fakeProducts = [
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'
  },
  {
    title: 'Teapot with black tea',
    image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
    slug: "fake-product",
    collection: 'collection'

  }
]

const fakeBlog = [
  {
    title: 'Interior design is the art, the interior designer is the artist.',
    image: 'https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/blog/8-570x370.jpg',
    author: 'Dylan',
    collection: 'Decor',
    date: '29/05/2020'

  },
  {
    title: 'Interior design is the art, the interior designer is the artist.',
    image: 'https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/blog/8-570x370.jpg',
    author: 'Dylan',
    collection: 'Decor',
    date: '29/05/2020'

  },
  {
    title: 'Interior design is the art, the interior designer is the artist.',
    image: 'https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/blog/8-570x370.jpg',
    author: 'Dylan',
    collection: 'Decor',
    date: '29/05/2020'

  }
]


export default function IndexPage({ allPosts }) {

  return (
    <Layout>
      <HomeGrid />
      <div className="md:py-20 md:px-40 text-left px-5  md:text-center my-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Oaklands Furniture & Design
        </h1>
        <p>Our Signature Classic and Contemporary Designs, Luxuriant Fabrics And Trendy Decorative
        Patterns are an attraction for all those who possess style, sophistication and a desire to be unique.
          What sets us apart is that each custom or showroom piece is absolutely unique as we design and manufacture furniture according to our clients specifications.</p>
      </div>
      <HomeProductGrid fakeProducts={fakeProducts} />
      <HomeBlogGrid allPosts={allPosts} />
      <NewsletterCta />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = (await getHomePagePosts()) || []
  return {
    props: { allPosts }
  }
}

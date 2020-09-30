import Layout from "../../components/layout";
import { getQuoteById } from '../../lib/api'
import HeadSection from '../../components/head-section'
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';
import { AiOutlinePlus } from 'react-icons/ai';
export default function SingleQuote({ quote }) {
    console.log(quote);
    return (
        <Layout>
            <HeadSection Title={quote.quote.QuoteNumber}/>
            <div className="flex flex-row justify-start mb-20">
                <div className="w-1/3 p-5 mr-5 bg-gray-200 rounded">
                    <p>Client Name: <span className="font-bold">{quote.quote.ClientName}</span></p>
                    <p>Client Surname: <span className="font-bold">{quote.quote.ClientSurname}</span></p>
                    <p>Client Email: <span className="font-bold">{quote.quote.ClientEmail}</span></p>
                    <p>Client Number: <span className="font-bold">{quote.quote.ClientNumber}</span></p>
                </div>
                <div className="w-1/2 ml-10 md:flex flex-row flex-wrap ">
                {quote.quote.products.map(product =>

                    <div key={product.id} className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 py-5">
                        <Link href={`/catalogue/${product.slug}`}>
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.Image.url} alt={product.Title} width="100%" />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link href={`/catalogue/${product.slug}`}>
                                <h5 className="text-xl leading-5 my-0 cursor-pointer">{product.Title}</h5>
                            </Link>
                            <ReactTooltip />
                            <Link href={`/catalogue/${product.slug}`}><a data-tip="View Product" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></a></Link>
                        </div>
                        <small>{product.product_category.Title}</small>
                    </div>
                    )}
                </div>
            </div>

        </Layout>
    )
}


export async function getServerSideProps({ params }) {
    const quote = (await getQuoteById(params.qid)) || []
    return {
        props: { quote }
    }
    
}
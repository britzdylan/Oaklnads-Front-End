
import Layout from '../components/layout'
import HeadSection from '../components/head-section'

export default function QuotePage() {

    return (
        <Layout>
            <HeadSection Title="Request a quote" />
            <div>
                <p>You have 5 items in your cart</p>
                <div className="w-3/4 flex flex-row justify-between items-top bg-gray-200 rounded p-5 mx-auto mb-5">
                    <div className="w-20">
                        <img src="https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-02.jpg" width="100%" height="100%" alt="product title" className="object-cover" />
                    </div>
                    <div className="w-3/4 ml-5">
                        <h3 className="text-xl my-0 ">Product Title</h3>
                        <p>Category</p>
                    </div>
                    <div>
                        <button className="bg-gray-500 p-2 rounded-sm">X</button>
                    </div>

                </div>
                <div className="w-3/4 flex flex-row justify-between items-top bg-gray-200 rounded p-5 mx-auto mb-5">
                    <div className="w-20">
                        <img src="https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-02.jpg" width="100%" height="100%" alt="product title" className="object-cover" />
                    </div>
                    <div className="w-3/4 ml-5">
                        <h3 className="text-xl my-0 ">Product Title</h3>
                        <p>Category</p>
                    </div>
                    <div>
                        <button className="bg-gray-500 p-2 rounded-sm">X</button>
                    </div>

                </div>
                <div className="w-3/4 flex flex-row justify-between items-top bg-gray-200 rounded p-5 mx-auto mb-5">
                    <div className="w-20">
                        <img src="https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-02.jpg" width="100%" height="100%" alt="product title" className="object-cover" />
                    </div>
                    <div className="w-3/4 ml-5">
                        <h3 className="text-xl my-0 ">Product Title</h3>
                        <p>Category</p>
                    </div>
                    <div>
                        <button className="bg-gray-500 p-2 rounded-sm">X</button>
                    </div>

                </div>
                <h3 className="text-xl text-center font-bold">Complete the form to request your quote</h3>
                    <form class="w-3/4 mx-auto pt-6 pb-8 mb-4">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Full Name*
                            </label>
                            <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="name" type="text" placeholder="Your full name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email*
                            </label>
                            <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="email" type="email" placeholder="Your email address" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                Contact number*
                            </label>
                            <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="subject" type="number" placeholder="Your contact number" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                                Tell us a bit about your project?
                            </label>
                            <textarea className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" rows="10" id="message" type="text" placeholder="Your message..." />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                                Request your quote
                            </button>
                        </div>
                    </form>
            </div>
        </Layout>
    )
    
}
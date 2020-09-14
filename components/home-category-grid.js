



export default function HomeGrid() {

    const gridData = [
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-1.jpg",
            span: '1',
            Title: 'Accessories',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-2.jpg",
            span: '2',
            Title: 'Bedroom Suites',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-1.jpg",
            span: '1',
            Title: 'Dining Chairs',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-5.jpg",
            span: '2',
            Title: 'Loung Suites',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-5.jpg",
            span: '2',
            Title: 'Pedastals',
        }
    ];
    return (
        <div className="grid grid-rows-2 grid-cols-4 gap-2 p-10 ">
            {gridData.map(data =>
                <div key={data.Title + data.span} style={{ backgroundColor: '#F3F3F3' }} className={`col-span-6 md:col-span-${data.span} relative cursor-pointer hover:text-gray-600`}>
                    <img className="" src={`${data.src}`} alt={data.Title} />
                    <div className="absolute" style={{ top: "30px", left: "30px" }}>
                        <h4 className="text-xl leading-5 my-0 font-bold">{data.Title}</h4>
                        <p className="leading-4 my-0">Collection</p>
                    </div>
                </div>
            )}
        </div>
    )
}
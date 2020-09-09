



export default function HomeGrid() {

    const gridData = [
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-1.jpg",
            span: '1',
            Title: 'Category Name',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-2.jpg",
            span: '2',
            Title: 'Category Name',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-1.jpg",
            span: '1',
            Title: 'Category Name',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-5.jpg",
            span: '2',
            Title: 'Category Name',
        },
        {
            src: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/banners/h-g-5.jpg",
            span: '2',
            Title: 'Category Name',
        }
    ];
    return (
        <div className="grid grid-rows-2 grid-cols-4 gap-2 p-10 ">
            {gridData.map(data =>
                <div key={data.Title + data.span} style={{ backgroundColor: '#F3F3F3' }} className={`col-span-6 md:col-span-${data.span} relative`}>
                    <img className="" src={`${data.src}`} alt={data.Title} />
                    <div className="absolute" style={{ top: "30px", left: "30px" }}>
                        <h4 className="text-xl font-bold">{data.Title}</h4>
                    </div>
                </div>
            )}
        </div>
    )
}
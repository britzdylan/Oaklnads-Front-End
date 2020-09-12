async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`https://blooming-hamlet-26489.herokuapp.com/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getAllPosts(slug) {
    const data = await fetchAPI(
        `query AllPosts($where: JSON) {
            blogPosts(sort: "date:desc", limit: 10, where: $where) {
            _id
            Title
            PublisedDate
            slug
            Content
            Cover { 
                id
                url
            }
            blog_categories( limit: 5 ) {
                Title
                id
            }
            }
        }`,
        {
            variables: {
                where: {
                    ...({ Published: true }),
                },
            },
        }
    )
    return data
}


export async function getHomePagePosts(slug) {
    const data = await fetchAPI(
        `query HomePosts($where: JSON) {
            blogPosts(sort: "PublisedDate:desc", limit: 3, where: $where) {
            _id
            Title
            PublisedDate
            slug
            Content
            Cover { 
                id
                url
            }
            blog_categories( limit: 5 ) {
                Title
                id
            }
            }
        }`,
        {
            variables: {
                where: {
                    ...({ Published: true }),
                },
            },
        }
    )
    return data
}


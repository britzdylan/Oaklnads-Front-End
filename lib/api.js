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

export async function getAllPosts() { //working
    const data = await fetchAPI(
        `query AllPosts($where: JSON) {
            blogPosts (sort: "PublisedDate:desc", limit: 100, where: $where) {
            _id
            Title
            PublisedDate
            slug
            Content
            excerpt
            Cover { 
                id
                url
            }
            blog_categories ( limit: 1 ) {
                Title
                id
                slug
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


export async function getHomePagePosts() { //working
    const data = await fetchAPI(
        `query HomePosts($where: JSON) {
            blogPosts(sort: "PublisedDate:desc", limit: 3, where: $where) {
            _id
            Title
            PublisedDate
            slug
            Content
            excerpt
            Cover { 
                id
                url
            }
            blog_categories ( limit: 5 ) {
                Title
                id
                slug
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

export async function getAllCategories() { //working
    const data = await fetchAPI(
        `query blogCategories {
            blogCategories {
                Title
                slug
                id
              }
        }`
    )
    return data
}

export async function getPostBySlug(slug) { //working
    const data = await fetchAPI(
        `query postBySlug($where: JSON) {
            blogPosts (where: $where) {
                _id
                Title
                slug
                id
                Cover { 
                    id
                    url
                }
                Content
                Published
                PublisedDate
              }
        }`,
        {
            variables: {
                where: {
                    slug,
                    ...({ Published: true }),
                },
            }
        }
    )
    return data
}


export async function getPostsByCategory(id) {//working
    const data = await fetchAPI(
        `query postByCategory($id: ID!) {
            blogCategory (id: $id) {
                _id
                Title
                slug
                blog_posts {
                    _id
                    Title
                    slug
                    id
                    Cover { 
                        id
                        url
                        }
                    Content
                    Published
                    PublisedDate
                    excerpt
                    blog_categories ( limit: 1 ) {
                        Title
                        id
                        slug
                    }
                }
              }
        }`,
        {
            variables: {
                   id: id
            }
        }
    )
    return data
}



export async function getAllProducts() {//working
    const data = await fetchAPI(
        `query getAllProducts {
            products {
                Title
                slug
                id
                product_category {
                    Title
                    id
                  }
                  Image{
                    url
                    id
                  }
              }
        }`
    )
    return data
}

export async function getAllProductCategories() {//working
    const data = await fetchAPI(
        `query getAllProductCategories{
            productCategories {
                Title
                id
                slug
              }
        }`
    )
    return data
    
}

export async function getProductBySlug(slug) {//working
    const data = await fetchAPI(
        `query productBySlug($where: JSON) {
            products (where: $where) {
                id
                Title
                Description
                slug
                product_category {
                    Title
                    id
                }
                Image{
                    url
                    id
                }
        }
    }`,
        {
            variables: {
                where: {
                    slug,
                    ...({ Published: true }),
                },
            }
        }
    )
    return data
}


export async function getAllProductCategoriesBySlug(slug) {//working
    const data = await fetchAPI(
        `query getAllProductCategories($where: JSON){
            productCategories(where: $where) {
                Title
                id
                slug
                products {
                    Title
                    slug
                    id
                    product_category {
                        Title
                        slug
                    }
                    Image {
                      url
                      id
                    }
                  }
            
              }
        }`,
        {
            variables: {
                where: {
                    slug,
                },
            }
        }
    )
    return data
    
}

















const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})


export const getAllPosts = async () => {
    const allPosts = await client.getEntries({
        content_type: "postModel",
    })
        return allPosts
}

export const getAllPostsSlugs = async () => {
    const posts = await client.getEntries({
        content_type: "postModel",
    })

    let postsSlugs: string[]
    postsSlugs = []

    const listLength = posts.items.length

    for (let i = 0; i < listLength; i++) {
        const a = posts.items[i].fields.slug;
        postsSlugs.push(a)
    }

        return postsSlugs
}

//export const getAllCategory = async () => {
//    const allCategory = await client.getEntries({
//        content_type: "categoryModel",
//    })
//        return allCategory
//}

export const getAllCategorySlugs = async () => {

    const posts = await client.getEntries({
        content_type: "categoryModel",
    })

    let categorySlugs: string[]
    categorySlugs = []

    const listLength = posts.items.length

    for (let i = 0; i < listLength; i++) {
        const a = posts.items[i].fields.categorySlug;
        categorySlugs.push(a)
    }

        return categorySlugs
}

export const getLimitPosts = async (postLimit:number = 10) => {
    const allPosts = await client.getEntries({
        content_type: "postModel",
        limit: postLimit,
    })
        return allPosts
}

export const getPostBySlug = async (slug: string | string[]) => {
    const slugPost = await client.getEntries({
        content_type: "postModel",
        "fields.slug": slug,
    })
        return slugPost.items
}

export const getPostsByCategory = async (category: string | string[]) => {
    const categoryPosts = await client.getEntries({
        content_type: "postModel",
        "fields.category.sys.contentType.sys.id": "categoryModel",
        "fields.category.fields.categorySlug": category,
    })
        return categoryPosts.items
}
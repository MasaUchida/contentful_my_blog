const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})




export const getAllPosts = async () => {
    const testEntry = await client.getEntry('6OgN471JmBXTu4OhFKXkkN')
    // logs the entry metadata
        //console.log(entry.sys)

        console.log(testEntry.fields)

    // logs the field with ID title
        //console.log(testEntry.fields.title)
        return await testEntry.fields
}


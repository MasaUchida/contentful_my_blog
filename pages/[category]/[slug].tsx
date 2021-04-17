import { FC } from 'react';
import { GetStaticProps , InferGetStaticPropsType , GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import remark from 'remark'
import html from 'remark-html'


import Layout from '../../components/layout'
import ContentsPage from '../../components/lv.4/contentspage';
import PortfolioPage from '../../components/lv.4/portfoliopage';

import { getAllPosts , getPostBySlug , getPostsByCategory } from '../../lib/getposts';


const Page: FC = ({field,createdAt,updatedAt,mainText,categoryPostList}:InferGetStaticPropsType<typeof getStaticProps>)  =>　{

    const router = useRouter()
    const pageURI = router.query // queryの返り値{ category: "academic-design" }

    //console.log(field)

    return(
        <Layout>
            {pageURI.category == 'portfolio' ?
                <PortfolioPage
                    portfolioField = {field}
                    portfolioCreatedAt = {createdAt}
                    portfolioUpdatedAt = {updatedAt}
                    portfolioMainText = {mainText}
                    recommendPostList = {categoryPostList}
                    pageSlug = {pageURI.slug}
                />:
                <ContentsPage
                    contentField = {field}
                    contentCreatedAt = {createdAt}
                    contentUpdatedAt = {updatedAt}
                    contentMainText = {mainText}
                />
            }
        </Layout>
    )
}
export default Page

export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getAllPosts()
    const postItems = postList.items

    const paths = postItems.map((item) => {
        return {
            params:{
                    category: item.fields.category.fields.categorySlug,
                    slug: item.fields.slug,
                }
            }
    })

    //pathsがstring[] → [ '/academic-design/markdown', '/ui-ux/post-model-test2' ]
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //console.log(params) //{ category: 'academic-design' , slug: 'markdown' } → { 動的ルーティングファイル名: 'pathsで返ってきたパス' }の構造 ファイル名をslにしたら → { sl: 'markdown' }

    const postSlug = params.slug //params.動的ルーティングファイル名で呼び出す
    const postCategory = params.category

    const post = await getPostBySlug(postSlug)//slugでひっかけて記事の内容を取得
    const categoryPosts = await getPostsByCategory(postCategory)

    //記事の内容を展開
    const postField = post[0].fields
    const postCreatedAt = post[0].sys.createdAt
    const postUpdatedAt = post[0].sys.updatedAt
    const md2hast = await remark().use(html).process(post[0].fields.mainContents)
    const htmlText = md2hast.toString()

    return{
        props: {
            field: postField,
            createdAt: postCreatedAt,
            updatedAt: postUpdatedAt,
            mainText: htmlText,
            categoryPostList: categoryPosts
        },
        revalidate: 5,
    }
}
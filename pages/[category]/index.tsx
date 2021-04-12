import { FC } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps , InferGetStaticPropsType , GetStaticPaths } from 'next'

import Layout from '../../components/layout'
import CardBlock from '../../components/lv.3/cardblock'
import SideBarBlock from '../../components/lv.3/sidebarblock'

import { getPostsByCategory ,  getAllCategorySlugs } from '../../lib/getposts';

import styled from 'styled-components'

const imageUrl = '/post_dummy.png'


const Category: FC = ({postList}:InferGetStaticPropsType<typeof getStaticProps>)  =>　{

    const router = useRouter()
    const pageURI = router.query // 返り値{ category: "academic-design" }

    //console.log(pageURI)
    //console.log(postList)

    let titleText

    switch (pageURI.category) {
        case 'academic-design':
            titleText = '大学とデザイン'
        break;
        case 'tips':
            titleText = 'デザインtips'
        break;
        case 'portfolio':
            titleText = 'ポートフォリオ'
        break;
        case 'ui-ux':
            titleText = 'UI/UXデザイン'
        break;
        default:
            console.log(`スイッチ失敗`);
    }

    return(
        <Layout>
            <KeyVisualSection>
                <Title>{titleText}</Title>
            </KeyVisualSection>
            <MainSection>
                <CardBlock
                    blockWidth = {66}
                    list = {postList}
                />
                <SideBarBlock blockWidth = {33}/>
            </MainSection>
        </Layout>
    )
}
export default Category

export const getStaticPaths: GetStaticPaths = async () => {
    const categoryList = await getAllCategorySlugs()

    const paths = categoryList.map((item) => `/${item}`)

    //pathsがstring[] → [ '/academic-design/markdown', '/ui-ux/post-model-test2' ]
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps :GetStaticProps = async ({params}) => {

    const postList = await getPostsByCategory(`${params.category}`)

    return{
        props: {
            postList,
        }
    }
}


const MainSection = styled.section`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
`
const Title = styled.h1`
    font-size: 32;
    color: #FFFFFF;
`

const KeyVisualSection = styled.section`
    margin-bottom: -80px;
    padding-top: 140px;
    text-align: center;
    height: 320px;
    background-position: center;
    background-size: cover;
    background-image: url(${imageUrl});
`
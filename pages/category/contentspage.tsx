import { FC,Fragment } from 'react';
import {GetStaticProps,InferGetStaticPropsType} from 'next'
import Layout from '../../components/layout'
import Tag from '../../components/lv.2/tag';
import Post from '../../components/lv.2/post'
import Contents from '../../components/lv.2/contents';
import Sidebar from '../../components/lv.2/sidebar'

import { getAllPosts } from '../../lib/getposts';

import styled from 'styled-components';

const imageUrl = '/post_dummy.png'

//const hoge =  getAllPosts()
//
const testContents = `かりいれ`

const Page: FC = ({post}:InferGetStaticPropsType<typeof getStaticProps>)  =>　{

    console.log(post)

    return(
        <Layout>
            <ContentsPageMain>
                <KeyImageSection>
                    <TitleBlock>
                        <h2>タイトルタイトル = {post.title}</h2>
                        <Tag size="LARGE">{post.category}</Tag>
                        <div>
                            <span>記事作成日 yy/mm/dd</span><span>最終更新日 yy/mm/dd</span>
                        </div>
                    </TitleBlock>
                </KeyImageSection>
                <MainSection>
                    <ContentsWrapper>
                        <Contents>
                            {testContents.split('\n').map((str,index) => (<Fragment key={index}>{str}<br /></Fragment>))}
                        </Contents>
                    </ContentsWrapper>
                    <SideBarWrapper>
                        <Sidebar contentsPage/>
                    </SideBarWrapper>
                </MainSection>
                <RecommendSection>
                    <RecommendWrapper>
                        <h2>おすすめの記事</h2>
                            <Post
                                thumbnailUrl = "/post_dummy.png"
                                title = "ほげほげ"
                                exerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です"
                                category = "テスト"
                                linkUrl = "#"
                            />
                            <Post
                                thumbnailUrl = "/post_dummy.png"
                                title = "ほげほげ2"
                                exerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です2"
                                category = "テスト"
                                linkUrl = "#"
                            />
                            <Post
                                thumbnailUrl = "/post_dummy.png"
                                title = "ほげほげ"
                                exerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です"
                                category = "テスト"
                                linkUrl = "#"
                                IslastPost
                            />
                    </RecommendWrapper>
                </RecommendSection>
            </ContentsPageMain>
        </Layout>
    )
}
export default Page


export const getStaticProps :GetStaticProps = async () => {
    const test = await getAllPosts()
    const postTitle = test.title
    const postCategory = test.category.fields.categoryName
    return{
        props: {
            post: {
                title: postTitle,
                category: postCategory,
            }
        }
    }
}


const ContentsPageMain = styled.main`
    margin-bottom: 80px;
`

const KeyImageSection = styled.div`
    position: relative;
    height: 480px;
    background-image: url(${imageUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: -120px;
    z-index: 0;
`

const TitleBlock = styled.div`
    display: inline-block;
    position: absolute;
    top: 128px;
    left: 0;
    padding: 24px 64px 24px 120px;
    background-color: rgba(255,255,255,0.85);
`
const MainSection = styled.section`
    display: flex;
    margin: 0 auto 40px auto;
    max-width: 1200px;
`

const ContentsWrapper = styled.div`
    width: 75%;
    margin-right: 24px;
`

const SideBarWrapper = styled.div`
    width: 25%;
`

const RecommendSection = styled.section`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
`

const RecommendWrapper = styled.div`
    width: 75%;
    padding-right: 24px;
`
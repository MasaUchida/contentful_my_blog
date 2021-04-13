import {FC} from 'react';
import { GetStaticProps , InferGetStaticPropsType } from 'next'

import { getLimitPosts } from '../lib/getposts';

import Layout from '../components/layout'
import Slider from '../components/lv.3/slider'
import PostsBlock from '../components/lv.3/postsblock';
import SideBarBlock from '../components/lv.3/sidebarblock';
//import IconsList from '../components/lv.3/iconslist'

import styled from 'styled-components'


const Home:FC = ({postList,sliderPostList}:InferGetStaticPropsType<typeof getStaticProps>) => {


    //console.log(postList)
    //postList.map((item)=>{console.log(item.fields)})

    return (
        <Layout layoutConf = 'HOME'>
            <main>
                <KeyVisual>
                    <Slider
                        list={sliderPostList}
                    />
                </KeyVisual>
                <MainSection>
                    <PostsBlock list = {postList}/>
                    <SideBarBlock/>
                </MainSection>
            </main>
        </Layout>
    )
}

export default Home;

//  <IconLinkSection>
//      <IconsList/>
//  </IconLinkSection>

export const getStaticProps :GetStaticProps = async () => {

    const postsObject = await getLimitPosts(10)
    const postList = postsObject.items
    const sliderPostsObject = await getLimitPosts(5)
    const sliderPostList = sliderPostsObject.items

    return{
        props: {
            postList,
            sliderPostList
        }
    }
}

const KeyVisual = styled.section`
    width: 100%;
    padding: 7rem 0 6rem 0;
`

const MainSection = styled.section`
    display: flex;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 0 auto 64px auto;
`

const IconLinkSection = styled.section`
    margin-bottom: 80px;
`

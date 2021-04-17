import {FC, useState, useEffect } from 'react';
import { useWindowDimensions } from '../hooks/usewindowdimension';
import { GetStaticProps , InferGetStaticPropsType } from 'next'

import { getLimitPosts } from '../lib/getposts';

import Layout from '../components/layout'
import Slider from '../components/lv.3/slider'
import PostsBlock from '../components/lv.3/postsblock';
import SideBar from '../components/lv.2/sidebar';
//import IconsList from '../components/lv.3/iconslist'

import styled from 'styled-components'
import { SIZE,DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../config/styleValue'


const Home:FC = ({postList,sliderPostList}:InferGetStaticPropsType<typeof getStaticProps>) => {

    //variables
    let num = 0
    let spFlag = false

    //hooks
    let windowWidth = useWindowDimensions()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    //flag

    if (process.browser) num = windowWidth.width
    if( num < SIZE.BORDER ){
        spFlag = !spFlag
    }

    return (
        <Layout layoutConf = 'HOME'>
            <main>
                <KeyVisual>
                    <Slider
                        list={sliderPostList}
                    />
                </KeyVisual>
                <MainSection>
                    <PostsBlock
                        list = {postList}
                        SP = {isClient ? spFlag : false}
                    />
                    <StickyBox>
                        <SideBar/>
                    </StickyBox>
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
        },
        revalidate: 1,
    }
}

const KeyVisual = styled.section`
    width: 100%;
    padding: 5rem 0 5rem 0;
    @media ${DEVICE.BORDER} {
        padding: 7rem 0 6rem 0;
    }
`

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 64px auto;
    @media ${DEVICE.BORDER} {
        max-width: 1200px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: normal;
    }
`

const StickyBox = styled.div`
    height: inherit;
    width: 90%;
    @media ${DEVICE.BORDER} {
        width: 30%;
    }
`

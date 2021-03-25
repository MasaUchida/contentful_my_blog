import {FC} from 'react';
import Layout from '../components/layout'
import Slider from '../components/lv.3/slider'
import PostsBlock from '../components/lv.3/postsblock';
import SideBarBlock from '../components/lv.3/sidebarblock';
import IconsList from '../components/lv.3/iconslist'

import styled from 'styled-components'

const Home:FC = () => {
    return (
        <Layout layoutConf = 'HOME'>
            <main>
                <KeyVisual>
                    <Slider/>
                </KeyVisual>
                <MainSection>
                    <PostsBlock/>
                    <SideBarBlock/>
                </MainSection>
                <IconLinkSection>
                    <IconsList/>
                </IconLinkSection>
            </main>
        </Layout>
    )
}

const KeyVisual = styled.section`
    width: 100%;
    padding: 112px 0 64px 0;
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

export default Home;

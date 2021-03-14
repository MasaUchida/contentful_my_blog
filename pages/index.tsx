import {FC} from 'react';
import Layout from '../components/layout'
import Slider from '../components/lv.3/slider'
import PostsList from '../components/lv.3/postslist';
import Sidebar from '../components/lv.3/sidebar'
import IconLink from '../components/lv.3/iconlink'

import styled from 'styled-components'

const iconBg = 'icon_link_bg.png'

const Home:FC = () => {
    return (
        <Layout>
            <main>
                <KeyVisual>
                    <Slider/>
                </KeyVisual>
                <MainSection>
                    <PostsList/>
                    <Sidebar/>
                </MainSection>
                <h2>マガジン</h2>
                <IconLinkSection>
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                </IconLinkSection>
            </main>
        </Layout>
    )
}

const KeyVisual = styled.section`
    width: 100%;
    margin-bottom: 64px;
`

const MainSection = styled.section`
    display: flex;
    max-width: 1200px;
    margin: 0 auto 64px auto;
`

const IconLinkSection = styled.section`
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${iconBg});
`

export default Home;

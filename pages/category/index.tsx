import { FC } from 'react';
import Layout from '../../components/layout'
import CardBlock from '../../components/lv.3/cardblock'
import SideBarBlock from '../../components/lv.3/sidebarblock'

import styled from 'styled-components';

const imageUrl = '/post_dummy.png'

interface Props {
    hoge: any;
}

const Category: FC<Props> = ({})  =>　{
    return(
        <Layout>
            <KeyVisualSection>
                <Title>テストカテゴリータイトル</Title>
            </KeyVisualSection>
            <MainSection>
                <CardBlock blockWidth = {66}/>
                <SideBarBlock blockWidth = {33}/>
            </MainSection>
        </Layout>
    )
}
export default Category

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
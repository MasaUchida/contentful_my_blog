import { FC } from 'react';

import Tag from '../../components/lv.2/tag';
import Post from '../../components/lv.2/post'
import Sidebar from '../../components/lv.2/sidebar'

import styled from 'styled-components';
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'

const imageUrl = '/post_dummy.png'

interface Props{
    contentField: any;
    contentCreatedAt: any;
    contentUpdatedAt: any;
    contentMainText: any;
    recommendPostList?: [];
    pageSlug?: string | string[];
}

const ContentsPage: FC<Props> = ({
    contentField,
    contentCreatedAt,
    contentUpdatedAt,
    contentMainText,
    recommendPostList,
    pageSlug})  =>　{

    let cutCreatedDate = ''
    let cutUpdatedDate = ''
    if(contentCreatedAt){
        cutCreatedDate = contentCreatedAt.slice(0,10)
        cutCreatedDate = cutCreatedDate.replace(/-/g,'/')
    }
    if(contentUpdatedAt){
        cutUpdatedDate = contentUpdatedAt.slice(0,10)
        cutUpdatedDate = cutUpdatedDate.replace(/-/g,'/')
    }

    return(
        <ContentsPageMain>
            <KeyImageSection>
                <TitleBlock>
                    <h2>{contentField.title}</h2>
                    <Tag size="LARGE">{contentField.category.fields.categoryName}</Tag>
                    <div>
                        <span>記事作成日 {cutCreatedDate} </span><span>最終更新日 {cutUpdatedDate}</span>
                    </div>
                </TitleBlock>
            </KeyImageSection>
            <MainSection>
                <ContentsWrapper>
                        <Contents
                            dangerouslySetInnerHTML ={ {__html: contentMainText} }
                        />
                </ContentsWrapper>
                    <SideBarWrapper>
                        <Sidebar width = {33}/>
                    </SideBarWrapper>
            </MainSection>
            <RecommendSection>
                <RecommendWrapper>
                    <h2>おすすめの記事</h2>
                        <Post
                            thumbnailUrl = "/post_dummy.png"
                            title = "ほげほげ"
                            excerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です"
                            category = "テスト"
                            linkUrl = "#"
                        />
                        <Post
                            thumbnailUrl = "/post_dummy.png"
                            title = "ほげほげ2"
                            excerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です2"
                            category = "テスト"
                            linkUrl = "#"
                        />
                        <Post
                            thumbnailUrl = "/post_dummy.png"
                            title = "ほげほげ"
                            excerpt = "これはコンテンツページの下にあるおすすめポスト用の引用文です"
                            category = "テスト"
                            linkUrl = "#"
                            IslastPost
                        />
                </RecommendWrapper>
            </RecommendSection>
        </ContentsPageMain>
    )
}
export default ContentsPage


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
    position: relative;
    border: solid 1px #DBD2C5;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 0 1rem 2rem 1rem;
    @media ${DEVICE.BORDER} {
        padding: 0 2rem 2rem 2rem;
    }
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

const Contents = styled.div`
    margin-top: -1rem;
    font-size: ${FONT_SIZE.SBASE}px;
    line-height: 2em;
    & h2{
        font-size: ${FONT_SIZE.LMEDIUM}rem;
        margin: 3rem 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: solid 1px #DBD2C5;
        @media ${DEVICE.BORDER}{
            font-size: ${FONT_SIZE.XLARGE}rem;
        }
    }


    & img{
        width: 100%;
    }

    & .flex{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        @media ${DEVICE.BORDER} {
            flex-direction: row;
        }
    }

    & img.in-flex{
        flex: 1;
        width: 100%;
        margin: 0 0 1rem 0;
        @media ${DEVICE.BORDER} {
            width: 60%;
            margin: 0 0 0 2rem ;
        }
    }

    & p.in-flex{
        flex: 1;
    }

    & pre{
        padding: 1rem;
        border-radius: 4px;
        background-color: rgba(0,0,0,0.87);
    }

    & code{
        color: #fff;
    }

    & ul{
        background-color: rgba(0,0,0,0.06);
        border-radius: 4px;
        padding: 1rem 2rem;
        list-style: none;
    }

    & li::before{
        content: "🔥";
        margin-right: 0.5rem;
    }

    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.LBASE}rem;
    }

`
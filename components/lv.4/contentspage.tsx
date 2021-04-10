import { FC } from 'react';

import Tag from '../../components/lv.2/tag';
import Post from '../../components/lv.2/post'
import Contents from '../../components/lv.2/contents';
import Sidebar from '../../components/lv.2/sidebar'


import styled from 'styled-components';

const imageUrl = '/post_dummy.png'

interface Props{
    contentField: any;
    contentCreatedAt: any;
    contentUpdatedAt: any;
    contentMainText: any;
}

const ContentsPage: FC<Props> = ({contentField,contentCreatedAt,contentUpdatedAt,contentMainText})  =>　{
    return(
        <ContentsPageMain>
            <KeyImageSection>
                <TitleBlock>
                    <h2>{contentField.title}</h2>
                    <Tag size="LARGE">{contentField.category.fields.categoryName}</Tag>
                    <div>
                        <span>記事作成日 {contentCreatedAt} </span><span>最終更新日 {contentUpdatedAt}</span>
                    </div>
                </TitleBlock>
            </KeyImageSection>
            <MainSection>
                <ContentsWrapper>
                    <Contents>
                        {/*test.items[0].fields.mainContents.split('\n').map((str,index) => (<Fragment key={index}>{str}<br /></Fragment>))*/}
                        <div
                            dangerouslySetInnerHTML ={
                                {__html: contentMainText}
                            }
                        />
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
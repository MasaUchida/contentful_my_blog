import { FC } from 'react';

import Image from 'next/image'
import RecommendPosts from '../../components/lv.3/recommendposts'
import Contents from '../../components/lv.2/contents';


import styled from 'styled-components';

const defaultUrl = '/post_dummy.png'

interface PortfolioProps{
    portfolioField: any;
    portfolioCreatedAt: any;
    portfolioUpdatedAt: any;
    portfolioMainText: string;
    recommendPostList: [];
    pageSlug: string | string[];
}

const PortfolioPage: FC<PortfolioProps> = ({portfolioField,portfolioCreatedAt,portfolioUpdatedAt,portfolioMainText,recommendPostList,pageSlug})  =>　{


    let cutCreatedDate = ''
    let cutUpdatedDate = ''
    if(portfolioCreatedAt){
        cutCreatedDate = portfolioCreatedAt.slice(0,10)
        cutCreatedDate = cutCreatedDate.replace(/-/g,'/')
    }
    if(portfolioUpdatedAt){
        cutUpdatedDate = portfolioUpdatedAt.slice(0,10)
        cutUpdatedDate = cutUpdatedDate.replace(/-/g,'/')
    }


    const keyImageUrl = portfolioField.thumbnailImage ? portfolioField.thumbnailImage.fields.file.url : defaultUrl

    return(
        <>
            <PortfoliosPageMain>
                <KeyImageSection imageUrl = {keyImageUrl}>
                    <TitleBlock>
                        <WorksTitle>{portfolioField.title}</WorksTitle>
                        <div>
                            <span>記事作成日 {cutCreatedDate} </span><br/>
                            <span>最終更新日 {cutUpdatedDate}</span>
                        </div>
                    </TitleBlock>
                </KeyImageSection>
                <MainSection>
                    <PortfoliosWrapper>
                        <Contents>
                            {/*test.items[0].fields.mainportfolios.split('\n').map((str,index) => (<Fragment key={index}>{str}<br /></Fragment>))*/}
                            <div
                                dangerouslySetInnerHTML ={
                                    {__html: portfolioMainText}
                                }
                            />
                        </Contents>
                    </PortfoliosWrapper>
                </MainSection>
            </PortfoliosPageMain>
            <RecommendPosts
                list = {recommendPostList}
                slug = {pageSlug}
            />
        </>
    )
}
export default PortfolioPage


const PortfoliosPageMain = styled.main`
    margin-bottom: 80px;
`

const KeyImageSection = styled.section <{imageUrl? : string}>`
    position: relative;
    width: 100%;
    height: 800px;
    background-image: url(${({imageUrl}) => imageUrl ? imageUrl : defaultUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: -40px;
    z-index: 0;
`

const TitleBlock = styled.div`
    position: absolute;
    color: #fff;
    background-color: rgba(0,0,0,0.35);
    display: inline-block;
    position: absolute;
    top: 240px;
    left: 0;
    text-align: left;
    padding: 24px;
    z-index: 10;
`

const WorksTitle = styled.h2`
    font-size: 32px;
`

const MainSection = styled.section`
    margin: 0 auto 40px auto;
    max-width: 1200px;
`

const PortfoliosWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`


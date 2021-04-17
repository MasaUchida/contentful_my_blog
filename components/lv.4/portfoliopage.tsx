import { FC,useState,useEffect } from 'react';

import Image from 'next/image'
import RecommendPosts from '../../components/lv.3/recommendposts'
import { useWindowDimensions } from '../../hooks/usewindowdimension';

import styled from 'styled-components';
import { SIZE,DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'

const defaultUrl = '/post_dummy.png'

interface PortfolioProps{
    portfolioField: any;
    portfolioCreatedAt: any;
    portfolioUpdatedAt: any;
    portfolioMainText: string;
    recommendPostList?: [];
    pageSlug?: string | string[];
}

const PortfolioPage: FC<PortfolioProps> = ({
    portfolioField,
    portfolioCreatedAt,
    portfolioUpdatedAt,
    portfolioMainText,
    recommendPostList,
    pageSlug})  =>　{

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
    const keyImageUrl = portfolioField.thumbnailImage ? portfolioField.thumbnailImage.fields.file.url : defaultUrl

    if (process.browser) num = windowWidth.width
    if( num < SIZE.BORDER ){
        spFlag = !spFlag
    }

    //othors
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

    return(
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
                    <ContentsWrapper>
                        <Contents
                            dangerouslySetInnerHTML ={{__html: portfolioMainText}}
                        />
                    </ContentsWrapper>
                </PortfoliosWrapper>
            </MainSection>
            <RecommendPosts
                list = {recommendPostList}
                slug = {pageSlug}
                SP = {isClient ? spFlag : false}
            />
        </PortfoliosPageMain>
    )
}
export default PortfolioPage


const PortfoliosPageMain = styled.main`
    margin-bottom: 80px;
`

const KeyImageSection = styled.section <{imageUrl? : string}>`
    position: relative;
    width: 100%;
    height: 100vw;
    background-image: url(${({imageUrl}) => imageUrl ? imageUrl : defaultUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: -40px;
    z-index: 0;
    @media ${DEVICE.BORDER}{
        height: 800px;
    }
`

const TitleBlock = styled.div`
    position: absolute;
    color: #fff;
    background: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7));
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: left;
    padding: 1.5rem 1.5rem 3.5rem;
    z-index: 10;
    & span{
        font-size: ${FONT_SIZE.MEDIUM};
    }

    @media ${DEVICE.BORDER} {
        display: inline-block;
        top: 240px;
        bottom: auto;
        width: auto;
        padding: 1.5rem;
        background: rgba(0,0,0,0.35);
        & span{
            font-size: ${FONT_SIZE.SMALL};
        }
    }
`

const WorksTitle = styled.h2`
    font-size: ${FONT_SIZE.LARGE}rem;

@media ${DEVICE.BORDER} {
    font-size: ${FONT_SIZE.XXLARGE}rem;
    }
`

const MainSection = styled.section`
    margin: 0 auto 40px auto;
    max-width: 1200px;
`

const PortfoliosWrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    @media ${DEVICE.BORDER} {
        width: 75%;
    }
`

const ContentsWrapper = styled.div`
    position: relative;
    border: solid 1px #DBD2C5;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 0 1rem 2rem 1rem;

    @media ${DEVICE.BORDER} {
        padding: 0 2rem 2rem 2rem;
    }
`

const Contents = styled.div`
    margin-top: -1rem;
    font-size: ${FONT_SIZE.SBASE}rem;
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
import { FC,useState,useEffect } from 'react';
import Image from 'next/image'
import { useWindowDimensions } from '../hooks/usewindowdimension'
import Layout from '../components/layout';
import Card from '../components/lv.2/card';
import { GetStaticProps , InferGetStaticPropsType } from 'next'

import { getPostsByCategory,} from '../lib/getposts';

import styled from 'styled-components';
import { SIZE,DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../config/styleValue'

const myImage = '/my_icon.PNG'
const profileSVG = '/Profile.svg'
const portfolioSVG = '/Portfolio.svg'


const About : FC = ({postList}:InferGetStaticPropsType<typeof getStaticProps>)  =>　{

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


    return(
        <Layout>
            <ProfileSection>
                <ProfileWrapper>
                    <ProfileBg src = {profileSVG}/>
                    <ProfileImageBox>
                        <Figure>
                            <MyProfileImage
                                src={myImage}
                                alt=""
                                height = {160}
                                width = {160}
                                layout = {"responsive"}
                            />
                        </Figure>
                    </ProfileImageBox>
                    <div>
                        <ProfileName>打田雅俊</ProfileName>
                        <ProfileDescriptionWrapper>
                            <ProfileTitle>自己紹介</ProfileTitle>
                            <ProfileDescription>
                                大学から現在までデザイン畑でずっと生活している者です。<br/>
                                大学では美術専門の学部を卒業し、紙・立体のデザインを主に行ってきました。<br/>
                                生産デザイナーとして社会人デビューしたものの、想像以上に新しいことをしない業界でした。<br/>
                                片やどんどん新しい手法や開発を行なっていたUI/UXの世界に転身し、現在に至ります。<br/>
                            </ProfileDescription>
                            <ProfileTitle>経歴</ProfileTitle>
                            <ProfileDescription>
                                筑波大学　芸術専門学群　デザイン課　プロダクトデザインコース　卒業<br/>
                                筑波大学大学院　人間総合科学研究課　芸術専攻　プロダクトデザイン　修了<br/>
                                歯科診療台メーカーのインダストリアルデザイナー　3年<br/>
                                Web・UI/UXデザイナー　2年<br/>
                            </ProfileDescription>
                        </ProfileDescriptionWrapper>
                    </div>
                </ProfileWrapper>
            </ProfileSection>
            <PortfolioSection>
                    <PortfolioWrapper>
                        <PortfolioBg src={portfolioSVG} alt=""/>
                        <PortfolioTitle>ポートフォリオ</PortfolioTitle>
                        <CardsWrapper>
                        <>{postList.map((item,index)=>{
                                return(
                                    <Card
                                        key = {index}
                                        thumbnailUrl={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                                        title = {item.fields.title}
                                        exerpt = {item.fields.excerpt}
                                        category = {item.fields.category.fields.categoryName}
                                        linkUrl = { '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug}
                                        createdAt = {item.sys.createdAt}
                                        cardWidth = {isClient && spFlag ? 90 : 31}
                                    />
                                )
                                }
                            )}
                        </>
                        </CardsWrapper>
                    </PortfolioWrapper>
            </PortfolioSection>
        </Layout>
    )
}
export default About

export const getStaticProps :GetStaticProps = async () => {

    const postList = await getPostsByCategory("portfolio")

    return{
        props: {
            postList,
        },
        revalidate: 5,
    }
}


const ProfileSection = styled.section`
    width: 100%;
    padding: 2rem 0 0;
    margin-bottom: 0;
    text-align: center;
    background-color: #FFFFFF;
    @media ${DEVICE.BORDER} {
        padding: 5rem 0;
        margin-bottom: 3.5rem;
        padding: 2rem 0;
        margin-bottom: 2rem;
    }
`

const ProfileWrapper = styled.div`
    margin: 0 auto;
    padding: 5rem 2rem 0 2rem;
    @media ${DEVICE.BORDER} {
        width: 784px;
    }
`

const ProfileBg = styled.img`
    width: 70%;
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 5;
    @media ${DEVICE.BORDER} {
        width: auto;
        top: 120px;
    }
`

const ProfileImageBox = styled.div`
    width: 100%;
`

const ProfileName = styled.h2`
    position: relative;
    display: inline-block;
    font-size: ${FONT_SIZE.LMEDIUM};
    padding: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: solid 4px #FFC000;
    z-index: 10;
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.XLARGE};
        padding: 1rem 0.5rem;
        margin-bottom: 3.5rem;
    }
`

const ProfileTitle = styled.h3`
    position: relative;
    margin-bottom: 1rem;
    font-size: ${FONT_SIZE.MEDIUM}rem;
    font-weight: 600;
    &::before{
        position: absolute;
        display: block;
        content: '';
        width: 8px;
        height: 8px;
        background-color: #00A79B;
        left: -16px;
        top: 10px;
    }
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.LMEDIUM}rem;
        margin-bottom: 1.5rem;
    }
`

const ProfileDescriptionWrapper = styled.div`
    text-align: left;
    font-size: 15px;
    line-height: 2em;
`

const ProfileDescription = styled.p`
    font-size: ${FONT_SIZE.SBASE}rem;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    border-bottom: solid 1px #DBD2C5;
    @media ${DEVICE.BORDER} {
        font: ${FONT_SIZE.MEDIUM}rem;
        margin-bottom: 4rem;
        padding-bottom: 1.5rem;
    }
`

const Figure = styled.figure`
    position: relative;
    margin: 0 auto;
    height: 7rem;
    width: 7rem;
    z-index: 10;
    @media ${DEVICE.BORDER} {
        height: 10rem;
        width: 10rem;
    }
`

const MyProfileImage = styled(Image)`
    border-radius: 50%;
    margin-bottom: 1rem;
    @media ${DEVICE.BORDER} {
        margin-bottom: 2rem;
    }
`



const PortfolioSection = styled.section`
    padding: 40px 0px;
    margin-bottom: 56px;
    background-color: #FFFFFF;
`

const PortfolioWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    @media ${DEVICE.BORDER} {
        width: 1200px;
    }
`

const PortfolioBg = styled.img`
    width: 110%;
    position: absolute;
    left: 1rem;
    top: -24px;
    z-index: 5;
    @media ${DEVICE.BORDER} {
        width: auto;
        top: -100px;
        left: 0;
    }
`

const PortfolioTitle = styled.h2`
    position: relative;
    font-size: ${FONT_SIZE.LMEDIUM}rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    z-index: 10;
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.XLARGE}rem;
        margin-bottom: 4.5rem;
        padding-left: 0;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media ${DEVICE.BORDER} {
        flex-direction: row;
        align-items: normal;
        flex-wrap: wrap;
    }
`
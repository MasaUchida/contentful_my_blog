import { FC } from 'react';
import Layout from '../components/layout';
import Card from '../components/lv.2/card';
import { GetStaticProps , InferGetStaticPropsType } from 'next'

import { getPostsByCategory,} from '../lib/getposts';

import styled from 'styled-components';

const myImage = '/miffy.png'
const profileSVG = '/Profile.svg'
const portfolioSVG = '/Portfolio.svg'


const About : FC = ({postList}:InferGetStaticPropsType<typeof getStaticProps>)  =>　{

    //console.log(postList)

    return(
        <Layout>
            <ProfileSection>
                <ProfileWrapper>
                    <ProfileBg src = {profileSVG}/>
                    <div>
                        <Figure>
                            <MyProfileImage src={myImage} alt=""/>
                        </Figure>
                    </div>
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
                        <>{postList.map(({fields},index)=>{
                                return(
                                    <Card
                                        key = {index}
                                        thumbnailUrl={fields.thumbnailImage ? fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                                        title = {fields.title}
                                        exerpt = {fields.excerpt}
                                        category = {fields.category.fields.categoryName}
                                        linkUrl = { '/' + fields.category.fields.categorySlug + '/' + fields.slug}
                                        cardWidth = {31}
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
        }
    }
}


const ProfileSection = styled.section`
    padding: 80px 0px;
    margin-bottom: 56px;
    text-align: center;
    background-color: #FFFFFF;
`

const ProfileWrapper = styled.div`
    margin: 0 auto;
    padding-top: 80px;
    width: 784px;
`

const ProfileBg = styled.img`
    position: absolute;
    top: 120px;
    left: 0;
    z-index: 5;
`

const ProfileName = styled.h2`
    display: inline-block;
    font-size: 24px;
    padding: 16px 8px;
    margin-bottom: 56px;
    border-bottom: solid 4px #FFC000;
`

const ProfileTitle = styled.h3`
    position: relative;
    margin-bottom: 24px;
    font-size: 18px;
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
`

const ProfileDescriptionWrapper = styled.div`
    text-align: left;
    font-size: 15px;
    line-height: 2em;
`

const ProfileDescription = styled.p`
    padding-bottom: 24px;
    margin-bottom: 64px;
    border-bottom: solid 1px #DBD2C5;
`

const Figure = styled.figure`
    position: relative;
    margin: 0;
    width: 100%;
    z-index: 10;
`

const MyProfileImage = styled.img`
    border-radius: 50%;
    margin-bottom: 32px;
    height: 160px;
    width: 160px;
`



const PortfolioSection = styled.section`
    padding: 40px 0px;
    margin-bottom: 56px;
    background-color: #FFFFFF;
`

const PortfolioWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 1200px;
`

const PortfolioBg = styled.img`
    position: absolute;
    top: -100px;
    z-index: 5;
`

const PortfolioTitle = styled.h2`
    position: relative;
    font-size: 24px;
    margin-bottom: 72px;
    z-index: 10;
`

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
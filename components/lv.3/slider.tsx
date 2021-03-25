import { FC } from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Autoplay,Navigation,Pagination }from 'swiper'
import styled from 'styled-components';

const imageUrl = 'post_dummy.png'



//import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Autoplay,Navigation,Pagination])


interface SliderPostProps {
    thumbnailUrl?: string;
    title?: string;
    category?: string;
    linkUrl?: string;
}

const Slider: FC<SliderPostProps> = ({thumbnailUrl,title,category,linkUrl})  =>　{
    return(
        <>
            <Swiper
                speed = {600}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,

                }}
                navigation
                pagination={{
                    clickable : true,
                    renderBullet: (index,className) => {
                        return `<span class = ${className}>${index}</span>`
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <MainVisualArticle>
                        <Link href="#">
                            <a>
                                <Category>カテゴリー</Category>
                                <Figure>
                                    <Thumbnail src={imageUrl} alt="#"/>
                                </Figure>
                                <MainTitle>
                                    <Title>仮のテストタイトル1</Title>
                                    <CreateDate>discription</CreateDate>
                                </MainTitle>
                            </a>
                        </Link>
                    </MainVisualArticle>
                </SwiperSlide>
                <SwiperSlide>
                    <MainVisualArticle>
                        <Link href="#">
                            <a>
                                <Category>カテゴリー</Category>
                                <Figure>
                                    <Thumbnail src={imageUrl} alt="#"/>
                                </Figure>
                                <MainTitle>
                                    <Title>仮のテストタイトル2</Title>
                                    <CreateDate>discription</CreateDate>
                                </MainTitle>
                            </a>
                        </Link>
                    </MainVisualArticle>
                </SwiperSlide>
                <SwiperSlide>
                    <MainVisualArticle>
                        <Link href="#">
                            <a>
                                <Category>カテゴリー</Category>
                                <Figure>
                                    <Thumbnail src={imageUrl} alt="#"/>
                                </Figure>
                                <MainTitle>
                                    <Title>仮のテストタイトル3</Title>
                                    <CreateDate>discription</CreateDate>
                                </MainTitle>
                            </a>
                        </Link>
                    </MainVisualArticle>
                </SwiperSlide>
                <SwiperSlide>
                    <MainVisualArticle>
                        <Link href="#">
                            <a>
                                <Category>カテゴリー</Category>
                                <Figure>
                                    <Thumbnail src={imageUrl} alt="#"/>
                                </Figure>
                                <MainTitle>
                                    <Title>仮のテストタイトル4</Title>
                                    <CreateDate>discription</CreateDate>
                                </MainTitle>
                            </a>
                        </Link>

                    </MainVisualArticle>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Slider

const MainVisualArticle = styled.article`
    position: relative;
    margin: 0 auto;
    //width: 960px;
    height: 480px;
    border-radius: 8px;
`
const CustomSliderPagenation=styled.span`
    width: 25%;
    height: 8px;
    background-color: #00A79B;
`

const MainTitle = styled.div`
    position: absolute;
    padding: 20px 32px;
    background-color: #FFF;
    left: 0;
    bottom: 40px;
    &::before{
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        display: block;
        height: 12px;
        width: 12px;
        background-color: #00A79B;
    }
    &::after{
        content: '';
        position: absolute;
        bottom: 4px;
        right: 4px;
        display: block;
        height: 12px;
        width: 12px;
        background-color: #00A79B;
    }
`

const Title = styled.h2`
    font-size: 24px;
`;

const CreateDate = styled.p`
    font-size: 12px;
    color: rgba(0,0,0,0.54);
    margin: 0;
`

const Category = styled.aside`
    color: #FFF;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 16px;
    position: absolute;
    top: 32px;
    right: 32px;
    background-color: #FFC000 ;
`

const Figure = styled.figure`
    margin: 0;
    width: 100%;
    height: 100%;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

import { FC  , useState , useEffect } from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Autoplay,Navigation,Pagination } from 'swiper'
import styled from 'styled-components';

const imageUrl = '/post_dummy.png'

SwiperCore.use([Autoplay,Navigation,Pagination])


interface SliderPostProps {
    list: any[]
}

const Slider: FC<SliderPostProps> = ({list})  =>　{

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <>
            <Swiper
                key = {isClient ? 'client' : 'server'}
                speed = {600}
                spaceBetween={40}
                slidesPerView={1}
                centeredSlides
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable : true,
                    renderBullet: (index,className) => {
                        return `<span class = ${className}></span>`
                    }
                }}
                breakpoints={isClient ? {768: {slidesPerView :1.4}} : { }}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
            >
                {list.map((item,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <MainVisualArticle>
                                <Link href={ '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug} passHref>
                                    <MainVisualLink>
                                        <Category>{item.fields.category.fields.categoryName}</Category>
                                        <Figure>
                                            <Thumbnail src={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : imageUrl} alt="#"/>
                                        </Figure>
                                        <MainTitle>
                                            <Title>{item.fields.title}</Title>
                                            <CreateDate>{item.sys.createdAt}</CreateDate>
                                        </MainTitle>
                                    </MainVisualLink>
                                </Link>
                            </MainVisualArticle>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Slider

const MainVisualArticle = styled.article`
    position: relative;
    margin: 0 auto;
    height: 480px;
    border-radius: 8px;
`

const MainVisualLink = styled.a`
    &:hover{
        color: rgba(0,0,0,0.87);
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.26);
        opacity: 0;
        transition: opacity 0.3s;
    }
    &:hover::before{
        opacity: 1;
    }
`

const MainTitle = styled.div`
    position: absolute;
    padding: 20px 32px;
    background-color: #FFF;
    left: 0;
    bottom: 40px;
    z-index: 10;
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

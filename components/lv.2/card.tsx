import { FC } from 'react';
import Link from 'next/link';

import styled from 'styled-components';


interface cardProps {
    thumbnailUrl: string;
    title: string;
    exerpt: string;
    category: string;
    linkUrl: string;
    createdAt: string;
    IsNoPadding?: boolean;
    cardWidth?: number;
}
const Card: FC<cardProps> = ({thumbnailUrl,title,exerpt,category,linkUrl,createdAt,IsNoPadding,cardWidth})  =>　{

    let cutExerpt = exerpt.slice(0,100)
    if(cutExerpt.length == 100){
        cutExerpt = cutExerpt + "..."
    }

    let cutDate = createdAt.slice(0,10)
    cutDate = cutDate.replace(/-/g,'/')

    return(
        <CardBody width = {cardWidth}>
            <Link href={linkUrl} passHref>
                <LinkWrapper>
                    <ImageBox>
                        <Category>{category}</Category>
                        <Figure>
                            <Thumbnail src={thumbnailUrl} alt=""/>
                        </Figure>
                    </ImageBox>
                    <TextBox>
                        <Title>{title}</Title>
                        <Exerpt>{cutExerpt}</Exerpt>
                            <CardBottomWrapper>
                                <CreateDate>{cutDate}</CreateDate>
                                <CardBottomDecoration/>
                                <DecorationButton>▶︎</DecorationButton>
                            </CardBottomWrapper>
                    </TextBox>
                </LinkWrapper>
            </Link>
        </CardBody>
    )
}
export default Card


const CardBody = styled.article<{width: number}>`
    position: relative;
    overflow: hidden;
    margin-bottom: 24px;
    width: ${({width}) => width || 47 }%;
    height: 460px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 16px rgba(0,0,0,0.12);
`

const LinkWrapper = styled.a`
    text-decoration: none;
    &::after{
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255,255,255,0.5);
        opacity: 0;
        transition: opacity 0.3s;
    }
    &:hover{
        text-decoration: none;
        color: #000;
        cursor: pointer;
    }
    &:hover::after{
        opacity: 1;
    }
`

const ImageBox = styled.div`
    position: relative;
`

const Category = styled.aside`
    color: #FFF;
    font-size: 11px;
    padding: 6px 12px;
    position: absolute;
    top: 16px;
    left: 16px;
    background-color: #FFC000 ;
`

const Figure = styled.figure`
    margin: 0;
    height: 245px;
    overflow: hidden;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const TextBox = styled.div`
    padding: 16px 24px;
    width: 100%;
`;

const Title = styled.h3`
    font-size: 18px;
    margin-bottom: 0.75rem;
`;

const Exerpt = styled.p`
    font-size: 13px;
    line-height: 2em;
`;

const CardBottomWrapper = styled.div`
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 1rem;
`

const CardBottomDecoration = styled.span`
    flex: 1;
    margin: 0 0.5rem;
    display: inline-block;
    content: '';
    height: 1px;
    background-color: #00A79B;
`

const CreateDate = styled.span`
    display: inline-block;
    font-size: 12px;
    line-height: 24px;
    color: #00A79B;
    margin: 0;
`

const DecorationButton = styled.div`
    display: inline-block;
    color: #fff;
    text-align: center;
    line-height: 24px;
    width: 24px;
    height: 24px;
    background-color: #00A79B;
`
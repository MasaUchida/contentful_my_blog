import { FC } from 'react';
import Link from 'next/link';

import styled from 'styled-components';


interface cardProps {
    thumbnailUrl?: string;
    title?: string;
    exerpt?: string;
    category?: string;
    linkUrl?: string;
    IsNoPadding?: boolean;
}
const Card: FC<cardProps> = ({thumbnailUrl,title,exerpt,category,linkUrl,IsNoPadding})  =>　{
    return(
        <CardBody>
            <Link href={linkUrl}>
                <a>
                    <ImageBox>
                        <Category>{category}</Category>
                        <Figure>
                            <Thumbnail src={thumbnailUrl} alt=""/>
                        </Figure>
                    </ImageBox>
                    <TextBox>
                        <Title>{title}</Title>
                        <Exerpt>{exerpt}</Exerpt>
                        <CardBottomWrapper>
                            <CreateDate>yyyy/mm/dd</CreateDate>
                        </CardBottomWrapper>
                            <DecorationButton></DecorationButton>
                    </TextBox>
                </a>
            </Link>
        </CardBody>
    )
}
export default Card


const CardBody = styled.article`
    overflow: hidden;
    margin-bottom: 24px;
    width: 47%;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 16px rgba(0,0,0,0.12);
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
    position: relative;
    padding: 16px 24px;
    width: 100%;
`;

const Title = styled.h3`
    font-size: 18px;
`;

const Exerpt = styled.p`
    font-size: 13px;
`;

const CardBottomWrapper = styled.div`
    display: flex;
    align-items: center;
    &::after{
        display: block;
        content: '';
        height: 1px;
        width: 100%;
        margin: 0 32px 0 8px;
        background-color: #00A79B;
    }
`

const CreateDate = styled.span`
    display: block;
    font-size: 12px;
    line-height: 24px;
    color: rgba(0,0,0,0.54);
    margin: 0;
`

const DecorationButton = styled.div`
    //order: 3;
    position: absolute;
    right: 24px;
    bottom: 16px;
    width: 24px;
    height: 24px;
    background-color: #00A79B;
`
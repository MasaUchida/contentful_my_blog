import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components';

//width height border-radius は外部からの入力を受け付ける
interface PostData {
    thumbnailUrl?: string;
    title?: string;
    exerpt?: string;
    category?: string;
    linkUrl?: string;
    IslastPost?: boolean;
}
const Post: FC<PostData> = ({thumbnailUrl,title,exerpt,category,linkUrl,IslastPost})  =>　{
    return(
        <>
            <Card isLast = {IslastPost}>
                <Link href={linkUrl}>
                    <a>
                        <BoxWrapper>
                            <ImageBox>
                                <Category>{category}</Category>
                                <Figure>
                                    <Thumbnail src={thumbnailUrl} alt=""/>
                                </Figure>
                            </ImageBox>
                            <TextBox>
                                <Title>{title}</Title>
                                <Exerpt>{exerpt}</Exerpt>
                                <DecorationButton></DecorationButton>
                                <CreateDate>yyyy/mm/dd</CreateDate>
                            </TextBox>
                        </BoxWrapper>
                    </a>
                </Link>
            </Card>
        </>
    )
}

export default Post



const Card = styled.article<{isLast: boolean}>`
    position: relative;
    width: 100%;
    margin-bottom: ${({ isLast }) => isLast ? 0 : 24}px;
    border-radius: 8px;
    background-color: #FFF;
    border: solid 1px #DBD2C5;
    overflow: hidden;
    z-index: 5;
`

const BoxWrapper = styled.div`
    display: flex;
`

const ImageBox = styled.div`
    position: relative;
`

const Category = styled.aside`
    color: #FFF;
    font-size: 11px;
    padding: 6px 12px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #FFC000 ;
`

const Figure = styled.figure`
    margin: 0;
    width: 240px;
`;

const Thumbnail = styled.img`
    width: 100%;
    object-fit: cover;
`;

const TextBox = styled.div`
    position: relative;
    padding: 2rem 2rem 0 2rem;
    width: 100%;
`;

const Title = styled.h3`
    font-size: 18px;
`;

const Exerpt = styled.p`
    font-size: 13px;
`;

const CreateDate = styled.p`
    font-size: 12px;
    color: rgba(0,0,0,0.54);
`

const DecorationButton = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 8px;
    bottom: 8px;
    background-color: #00A79B;
`
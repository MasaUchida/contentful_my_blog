import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';

//width height border-radius は外部からの入力を受け付ける
interface PostData {
    thumbnailUrl?: string;
    title?: string;
    excerpt?: string;
    category?: string;
    linkUrl?: string;
    createdAt?: string;
    IslastPost?: boolean;
}


const Post: FC<PostData> = ({thumbnailUrl,title,excerpt,category,linkUrl,createdAt,IslastPost})  =>　{

    let cutExerpt = excerpt.slice(0,100)
    if(cutExerpt.length == 100){
        cutExerpt = cutExerpt + "..."
    }

    let cutDate = createdAt.slice(0,10)
    cutDate = cutDate.replace(/-/g,'/')

    return(
        <>
            <Card isLast = {IslastPost}>
                <Link href={linkUrl} passHref>
                    <LinkWrapper>
                        <BoxWrapper>
                            <ImageBox>
                                <Category>{category}</Category>
                                <Figure>
                                    <Thumbnail src={thumbnailUrl} alt=""/>
                                </Figure>
                            </ImageBox>
                            <TextBox>
                                <Title>{title}</Title>
                                <Excerpt>{cutExerpt}</Excerpt>
                                <DecorationButton>▶︎</DecorationButton>
                                <CreateDate>{cutDate}</CreateDate>
                            </TextBox>
                        </BoxWrapper>
                    </LinkWrapper>
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
    opacity: 1;
    transition: opacity 0.3s;
    &:hover{
        opacity: 0.5;
        text-decoration: none;
    }
`

const LinkWrapper = styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: none;
        color: #000;
    }
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
    height: 100%;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
`;

const TextBox = styled.div`
    position: relative;
    padding: 2rem 2rem 0 2rem;
    width: 100%;
`;

const Title = styled.h3`
    font-size: 18px;
`;

const Excerpt = styled.p`
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
    text-align: center;
    line-height: 24px;
    color: #fff;
    background-color: #00A79B;
`
import React, { FC } from 'react'
import Link from 'next/link'

import styled from 'styled-components';
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'


//width height border-radius は外部からの入力を受け付ける
interface PostData {
    thumbnailUrl?: string;
    title?: string;
    category?: string;
    linkUrl?: string;
    updatedAt?: string;
    IslastPost?: boolean;
}


const SpPost: FC<PostData> = ({thumbnailUrl,title,category,linkUrl,updatedAt,IslastPost})  =>　{

    let cutTitle = title.slice(0,20)
    if(cutTitle.length == 20){
        cutTitle = cutTitle + "..."
    }

    let cutDate = ''
    if(updatedAt){
        cutDate = updatedAt.slice(0,10)
        cutDate = cutDate.replace(/-/g,'/')
    }

    return(
        <>
            <PostBody isLast = {IslastPost}>
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
                                <Title>{cutTitle}</Title>
                                <DecorationBlock>
                                    <UpdateDate>最終更新日：{cutDate !=='' ? cutDate : ''}</UpdateDate>
                                    <DecorationButton>▶︎</DecorationButton>
                                </DecorationBlock>
                            </TextBox>
                        </BoxWrapper>
                    </LinkWrapper>
                </Link>
            </PostBody>
        </>
    )
}

export default SpPost


const PostBody = styled.article<{isLast: boolean}>`
    position: relative;
    width: 100%;
    height: 120px;
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
    height: 100%;
    box-sizing: border-box;
`

const ImageBox = styled.div`
    position: relative;
    flex: 1;
`

const Category = styled.aside`
    color: #FFF;
    font-size: ${FONT_SIZE.XXSMALL}rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    padding: 4px 8px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #FFC000 ;
`

const Figure = styled.figure`
    margin: 0;
    width: 100%;
    height: 100%;
`

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
`;

const TextBox = styled.div`
    position: relative;
    padding: 1rem 1.5rem 0 1.5rem;
    flex: 1;
`;

const Title = styled.h3`
    font-size: ${FONT_SIZE.LBASE}rem;
`;

const DecorationBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 1.5rem;
    right: 8px;
    bottom: 8px;
`

const UpdateDate = styled.p`
    font-size: 12px;
    margin: 0;
    color: rgba(0,0,0,0.54);
`

const DecorationButton = styled.div`
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    background-color: #00A79B;
`

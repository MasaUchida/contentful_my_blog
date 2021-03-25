import { FC } from 'react';
import Link from 'next/link'
import styled from 'styled-components';


interface IconLinkProps {
    iconUrl: string;
    text: string;
    linkUrl: string;
}
const Iconlink: FC<IconLinkProps> = ({iconUrl,text,linkUrl})  =>　{
    return(
        <>
            <IconLinkArticle>
                <Link href={linkUrl}>
                    <a>
                        <BoxWrapper>
                            <ImageBox>
                                <Figure>
                                    <Icon src={iconUrl} alt=""/>
                                </Figure>
                            </ImageBox>
                            <TextBox>
                                <h3>{text}</h3>
                            </TextBox>
                        </BoxWrapper>
                    </a>
                </Link>
            </IconLinkArticle>
        </>
    )
}

export default Iconlink


const IconLinkArticle = styled.article`
    border: solid 1px #FFF;
    width: 240px;
    height: 240px;
`

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextBox = styled.div`

`

const ImageBox = styled.div`

`

const Figure = styled.figure`
    margin: 0;
    width: 64px;
    height: 64px;
    background-color: #FFF;
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
`
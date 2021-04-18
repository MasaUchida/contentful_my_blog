import { FC } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components';
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'

const myImage = '/my_icon.PNG'

interface SideBarProps{
    width?: number;
}

const Sidebar: FC<SideBarProps> = ()  =>　{
    return(
        <SideBarWrapper>
            <div>
                <Figure>
                    <MyProfileImage
                        src={myImage}
                        alt=""
                        height= {120}
                        width= {120}
                    />
                </Figure>
            </div>
            <div>
                <h3>打田雅俊</h3>
                <Bio>大学時代からずっとデザイナー<br/>元インダストリアルデザイナー<br/>現UI/UXデザイナー</Bio>
                <Link href="/about" passHref>
                    <BioLink>
                        自己紹介へ
                    </BioLink>
                </Link>
            </div>
        </SideBarWrapper>
    )
}
export default Sidebar

const SideBarWrapper = styled.div`
    height: auto;
    padding: 40px 0px;
    text-align: center;
    border: solid 1px #DBD2C5;
    background-color: #FFFFFF;
    border-radius: 8px;
    position: sticky;
    top: 100px;
    @media ${DEVICE.BORDER} {
        margin-left: 24px;
    }
`


const Figure = styled.figure`
    margin: 0;
    width: 100%;
`;

const MyProfileImage = styled(Image)`
    border-radius: 50%;
    margin-bottom: 32px;
`

const Bio = styled.p`
    font-size: 13px;
    line-height: 2em;
`

const BioLink = styled.a`
    color: #0056b3;
    text-decoration: underline;
`
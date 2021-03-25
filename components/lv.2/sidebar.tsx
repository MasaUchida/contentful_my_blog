import { FC } from 'react';
import Link from 'next/link'

import styled from 'styled-components';

const myImage = '/miffy.png'

interface SideBarProps{
    contentsPage?: boolean;
}

const Sidebar: FC<SideBarProps> = ({contentsPage})  =>　{
    return(
        <SideBarWrapper props = {contentsPage}>
            <div>
                <Figure>
                    <MyProfileImage src={myImage} alt=""/>
                </Figure>
            </div>
            <div>
                <h3>打田雅俊</h3>
                <p>自己紹介的な文章<br/>自己紹介的な文章<br/>自己紹介的な文章</p>
                <Link href="#">
                    <a>
                        自己紹介へ
                    </a>
                </Link>
            </div>
        </SideBarWrapper>
    )
}
export default Sidebar

const SideBarWrapper = styled.div<{props : boolean}>`
    height: auto;
    padding: 40px 0px;
    text-align: center;
    margin-left: 24px;
    border: solid 1px #DBD2C5;
    background-color: #FFFFFF;
    border-radius: 8px;
    position: sticky;
    top: 100px;
`

const Figure = styled.figure`
    margin: 0;
    width: 100%;
`;

const MyProfileImage = styled.img`
    border-radius: 50%;
    margin-bottom: 32px;
    height: 120px;
    width: 120px;
`
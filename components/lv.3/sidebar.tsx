import { FC } from 'react';
import Link from 'next/link'

import styled from 'styled-components';


const sidebar: FC = ()  =>　{
    return(
        <SideBarWrapper>
            <div>
                <figure>
                    <img src="#" alt=""/>
                </figure>
            </div>
            <div>
                <h3>打田雅俊</h3>
                <p>自己紹介的な文章<br/>自己紹介的な文章<br/>自己紹介的な文章</p>
            </div>
            <Link href="#">
                <a>
                    自己紹介へ
                </a>
            </Link>
        </SideBarWrapper>
    )
}
export default sidebar

const SideBarWrapper = styled.div`
    height: 320px;
    width: 25%;
    text-align: center;
    margin-left: 24px;
    border: solid 1px #DBD2C5;
    border-radius: 8px;
`
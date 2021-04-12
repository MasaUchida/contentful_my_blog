import { FC } from 'react';
import Link from 'next/link'

import styled from 'styled-components';



interface ButtonProps {
    text: string;
    iconUrl?: string;
}
const Button: FC<ButtonProps> = ({text,iconUrl})  =>　{
    return(
        <ButtonBody>
            <Link href="/">
                <a className = "button-link">
                    <ButtonContentsWrapper icon={iconUrl}>
                        {iconUrl && <img src=""/>}
                        <ButtonText>{text}</ButtonText>
                    </ButtonContentsWrapper>
                </a>
            </Link>
        </ButtonBody>
    )
}
export default Button


const ButtonBody = styled.div`
    display: inline-block;
    cursor: pointer;
    border-radius: 8px;
    padding: 18px 24px;
    margin: 32px 0;
    background-color: #00A79B;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 0 16px rgba(0,0,0,0);
    transform: translateY(0);
    transition: 0.3s;
    &:hover{
        text-decoration: none;
        box-shadow: 0 0 16px rgba(0,0,0,0.26);
        transform: translateY(-8%)
    }
`

const ButtonContentsWrapper = styled.div<{icon: string}>`
    display: ${({ icon }) => icon ? 'flex' : 'block'};
`

const ButtonText = styled.p`
    color: #FFF;
    font-size: 13px;
    font-weight: 600;
    margin: 0;
`
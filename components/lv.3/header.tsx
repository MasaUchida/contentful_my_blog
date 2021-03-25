import React,{FC} from 'react'
import Link from 'next/link'

import styled from 'styled-components'

interface HeaderProps {
    headerConf?: 'HOME' | 'POSTPAGE';
}



const Header:FC<HeaderProps> = ({headerConf}) => {

    //const linkTextColor: 'HOME' | 'POSTPAGE' = headerConf;

    return (
        <>
            <HeaderBody version = {headerConf}>
                <Wrapper>
                    <img src="/vercel.svg" alt=""/>
                    <NavWapper>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    美大とデザイン
                                </NavLink>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    UI・UXデザイン
                                </NavLink>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    インダストリアルデザイン
                                </NavLink>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    デザインtips
                                </NavLink>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    自己紹介
                                </NavLink>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#" passHref>
                                <NavLink version = {headerConf}>
                                    お問い合わせ
                                </NavLink>
                            </Link>
                        </Nav>
                    </NavWapper>
                </Wrapper>
            </HeaderBody>
        </>
    )
}

export default Header


const HeaderBody = styled.header<{version : 'HOME' | 'POSTPAGE'}>`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 20;
    width: 100%;
    height: 80px;
    border-bottom: solid 1px ${({version}) => version=='HOME' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.7)' } ;
    background-color: ${({version}) => version=='HOME' ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)' };
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const NavWapper = styled.div`
    line-height: 80px;
    padding-right: 3rem;
`

const Nav = styled.nav`
    display: inline-block;
    padding: 0 1rem;
`

const NavLink = styled.a<{version : 'HOME' | 'POSTPAGE'}>`
    color:${({version}) => version=='HOME' ? 'rgba(0,0,0,0.87)' : 'rgba(255,255,255,1)' };
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
`
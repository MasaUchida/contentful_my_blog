import React,{FC} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const NavWapper = styled.div`
    display: flex;
    align-items: center;
    padding-right: 3rem;
`

const Nav = styled.nav`
    display: inline-block;
    padding: 0 1rem;
`


const Header:FC = () => {
    return (
        <>
            <header>
                <Wrapper>
                    <img src="vercel.svg" alt=""/>
                    <NavWapper>
                        <Nav>
                            <Link href="#">
                                <a>
                                    美大とデザイン
                                </a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#">
                                <a>
                                    UI・UXデザイン
                                </a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#">
                                <a>
                                    インダストリアルデザイン
                                </a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#">
                                <a>
                                    デザインtips
                                </a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#">
                                <a>
                                    自己紹介
                                </a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="#">
                                <a>
                                    お問い合わせ
                                </a>
                            </Link>
                        </Nav>
                    </NavWapper>
                </Wrapper>
            </header>
        </>
    )
}

export default Header

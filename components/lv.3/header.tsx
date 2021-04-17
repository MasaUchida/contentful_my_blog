import React,{FC,useState,useEffect} from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'

interface HeaderProps {
    headerConf?: 'HOME' | 'POSTPAGE';
}


const Header:FC<HeaderProps> = ({headerConf}) => {

    const [scroll, setScroll] = useState(0)
    const [changeStyleFlug, setchangeStyleFlug] = useState(false)
    const changeStyleThreshold = 560

    const onScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScroll(scrollTop);
    }

    useEffect(() => {
        document.addEventListener('scroll',onScroll)

        if(scroll < changeStyleThreshold){
            setchangeStyleFlug(true)
        }else{
            setchangeStyleFlug(false)
        }

        return () => {
            document.removeEventListener('scroll',onScroll)}
        }, [scroll])


    return (
        <>
            <HeaderBody
                version = {headerConf}
                isKeyVisual = {changeStyleFlug}
            >
                <Wrapper>
                    <Link  href="/" passHref>
                        <LogoLink>
                            <Logo version = {headerConf} isKeyVisual = {changeStyleFlug}>Uchida Design</Logo>
                        </LogoLink>
                    </Link>
                    <NavWapper>
                        <Nav>
                            <Link href="/about" passHref>
                                <NavLink
                                    version = {headerConf}
                                    isKeyVisual = {changeStyleFlug}
                                >
                                    About
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


//<Nav>
//    <Link href="/academic-design" passHref>
//        <NavLink version = {headerConf}>
//            美大とデザイン
//        </NavLink>
//    </Link>
//</Nav>
//<Nav>
//<Link href="/tips" passHref>
//    <NavLink
//        version = {headerConf}
//        isKeyVisual = {changeStyleFlug}
//    >
//        デザインtips
//    </NavLink>
//</Link>
//</Nav>
//<Nav>
//    <Link href="/ui-ux" passHref>
//        <NavLink version = {headerConf}>
//            UI・UXデザイン
//        </NavLink>
//    </Link>
//</Nav>
//<Nav>
//    <Link href="#" passHref>
//        <NavLink version = {headerConf}>
//            インダストリアルデザイン
//        </NavLink>
//    </Link>
//</Nav>
//<Nav>
//    <Link href="#" passHref>
//        <NavLink version = {headerConf}>
//            お問い合わせ
//        </NavLink>
//    </Link>
//</Nav>


const HeaderBody = styled.header<{version : 'HOME' | 'POSTPAGE', isKeyVisual : boolean}>`
    display: flex;
    align-items: center;
    position: fixed;
    padding: 0 1rem;
    z-index: 20;
    width: 100%;
    height: 80px;
    border-bottom: solid 1px ${({version}) => version=='HOME' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.7)' } ;
    background-color: ${({version,isKeyVisual}) => version=='HOME' ? isKeyVisual ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)' : isKeyVisual ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.3)' };
    backdrop-filter: blur(5px);
    transition: background-color 0.4s ease-in-out;
    @media ${DEVICE.BORDER} {
        padding: 0 5rem;
    }
`

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    &:hover{
        text-decoration: none;
    }
`

const Logo = styled.h1<{version : 'HOME' | 'POSTPAGE' , isKeyVisual : boolean}>`
    display: flex;
    align-items: center;
    margin: 0;
    font-size: ${FONT_SIZE.XLARGE}rem;
    font-weight: 600;
    color: ${({version,isKeyVisual}) => version == 'HOME' ? 'rgba(0,0,0,0.87)' : isKeyVisual ? 'rgba(0,0,0,0.87)' : 'rgba(255,255,255,1)' };
    &::before{
        display: inline-block;
        content: '';
        width: 40px;
        height: 40px;
        background-color: #FFC000;
        margin-right: 1rem;
    }
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.XXLARGE}rem;
        &::before{
        width: 48px;
        height: 48px;
    }
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const NavWapper = styled.div`
    line-height: 80px;
`

const Nav = styled.nav`
    display: inline-block;
    padding: 0 1rem;
`

const NavLink = styled.a<{version : 'HOME' | 'POSTPAGE' , isKeyVisual : boolean}>`
    color:${({version,isKeyVisual}) => version=='HOME' ? 'rgba(0,0,0,0.87)' : isKeyVisual ? 'rgba(0,0,0,0.87)' : 'rgba(255,255,255,1)'  };
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    &:hover{
        text-decoration: none;
    }
`
import React, {FC} from 'react'
import Link from 'next/link';
import styled from 'styled-components'


const Footer:FC = () => {
    return (
        <>
            <FooterBody>
                <FooterWrapper>
                    <Link href="/" passHref>
                        <FooterIconLink>
                            Uchida Design
                        </FooterIconLink>
                    </Link>
                    <FooterList>
                        <li>
                            <Link href="/about" passHref>
                                <ListLink>
                                    about
                                </ListLink>
                            </Link>
                        </li>
                    </FooterList>
                </FooterWrapper>
            </FooterBody>
        </>
    )
}

export default Footer

const FooterBody = styled.footer`
    margin-top: 5rem;
    padding: 2rem 9rem;
    height: 360px;
    background-color: #FFF9EC;
`

const FooterWrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`

const FooterIconLink = styled.a`
    font-size: 2rem;
    font-weight: 600;
    &:hover{
        text-decoration: none;
        color: inherit;
    }
`

const FooterList = styled.ul`
    display: flex;
    width: 25%;
    padding: 0;
    list-style: none;
`

const ListLink = styled.a`
    &:hover{
        text-decoration: none;
        color: inherit;
    }
`
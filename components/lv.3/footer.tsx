import React, {FC} from 'react'
import styled from 'styled-components'


const Footer:FC = () => {
    return (
        <>
            <FooterBody>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" />
                </a>
            </FooterBody>
        </>
    )
}

export default Footer

const FooterBody = styled.footer`
    height: 360px;
    background-color: #FFF9EC;
`
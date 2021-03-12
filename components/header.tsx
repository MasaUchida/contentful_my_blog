import React,{FC} from 'react'
import Link from 'next/link'

const links = [
    {
        url: '#',
        text: 'A',
    },
    {
        url: '#',
        text: 'B',
    },
    {
        url: '#',
        text: 'C',
    },
    {
        url: '#',
        text: 'D',
    },
    {
        url: '#',
        text: 'E',
    },
]

const Header:FC = () => {
    return (
        <>
            <header>
                <img src="vercel.svg" alt=""/>
                {links.map((link)=>(
                    <Link href={link.url}>
                        <a>
                            {link.text}
                        </a>
                    </Link>
                ))}
            </header>
        </>
    )
}

export default Header

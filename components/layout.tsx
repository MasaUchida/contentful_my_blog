import { FC } from 'react'
import Head from 'next/head'
import Header from './lv.3/header'
import Footer from './lv.3/footer'

interface LayoutProps{
    layoutConf?: 'HOME' | 'POSTPAGE';
}

const Layout: FC<LayoutProps> = ({children,layoutConf})  =>　{
    return(
        <>
            <Head>
                <title>Uchida Design</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="元インダストリアルデザイナー、現UI/UXデザイナーの日々の学びやtipsをお届けするブログ"></meta>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            </Head>
            <Header headerConf = {layoutConf}/>
                {children}
            <Footer/>

        </>
    )
}
export default Layout
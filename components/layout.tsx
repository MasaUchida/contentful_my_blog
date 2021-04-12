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
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header headerConf = {layoutConf}/>
                {children}
            <Footer/>

        </>
    )
}
export default Layout
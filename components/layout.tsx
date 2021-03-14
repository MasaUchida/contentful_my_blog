import { FC } from 'react'
import Head from 'next/head'
import Header from './lv.3/header'
import Footer from './lv.3/footer'



const Layout: FC = ({children})  =>　{
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
                <div>
                    {children}
                </div>
            <Footer/>

        </>
    )
}
export default Layout
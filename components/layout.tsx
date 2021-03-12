import { FC } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'


const Layout: FC = ({children})  =>　{
    return(
        <>
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
                {children}
            <Footer/>
            </div>
        </>
    )
}
export default Layout
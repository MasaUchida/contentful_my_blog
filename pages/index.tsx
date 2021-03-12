import {FC} from 'react';
import Layout from '../components/layout'
import Post from '../components/post'
import Sidebar from '../components/sidebar'
import IconLink from '../components/iconlink'

import styles from '../styles/Home.module.css'


const Home:FC = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <img src="vercel.svg" alt=""/>
                <Post
                    thumbnailUrl="#"
                    title="テストタイトル1"
                    exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                    category="テストカテゴリ"
                    linkUrl="#"
                />
                <Post
                    thumbnailUrl="#"
                    title="テストタイトル2"
                    exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                    category="テストカテゴリ"
                    linkUrl="#"
                />
                <Post
                    thumbnailUrl="#"
                    title="テストタイトル3"
                    exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                    category="テストカテゴリ"
                    linkUrl="#"
                />
                <Sidebar/>
                <div>
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                    <IconLink
                        iconUrl="#"
                        text="アイコンリンクのテストテキスト"
                        linkUrl="#"
                    />
                </div>
            </main>
        </Layout>
    )
}

export default Home;

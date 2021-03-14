import { FC } from 'react';
import Post from '../lv.2/post'

import styled from 'styled-components';


const PostsList: FC = ({})  =>　{
    return(
        <PostsListWrapper>
            <h2>過去の記事</h2>
            <Post
                thumbnailUrl="post_dummy.png"
                title="テストタイトル1"
                exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                category="テストカテゴリ"
                linkUrl="#"
            />
            <Post
                thumbnailUrl="post_dummy.png"
                title="テストタイトル2"
                exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                category="テストカテゴリ"
                linkUrl="#"
            />
            <Post
                thumbnailUrl="post_dummy.png"
                title="テストタイトル3"
                exerpt="テスト文章の差込ですよーテスト文章の差込ですよー"
                category="テストカテゴリ"
                linkUrl="#"
                IslastPost
            />
        </PostsListWrapper>
    )
}

export default PostsList

const PostsListWrapper = styled.div`
    width: 75%;
    margin-right: 24px;
`
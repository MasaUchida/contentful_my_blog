import { FC } from 'react';

import Post from '../lv.2/post';

import styled from 'styled-components';


interface RecommendPostsProps{
    list: [];
    slug: string | string[];
}

const RecommendPosts: FC<RecommendPostsProps> = ({list,slug})  =>　{
    const filteredList = list.filter((a : any)=>{ return a.fields.slug != slug})　//開いた記事そのものとのダブりをフィルタリング

    return(
        <RecommendSection>
            <RecommendWrapper>
                <h2>関連記事</h2>
                    {filteredList.map((post :any,index)=>{
                        const cutExcerpt = `${post.fields.excerpt}`.substr(0,95) + "..."

                        return(
                            <Post
                                key={index}
                                thumbnailUrl = "/post_dummy.png"
                                title = {post.fields.title}
                                excerpt = {cutExcerpt}
                                category = {post.fields.category.fields.categoryName}
                                linkUrl = {`/${post.fields.category.fields.categorySlug}/${post.fields.slug}`}
                            />
                        )
                    })}
            </RecommendWrapper>
        </RecommendSection>
    )
}
export default RecommendPosts



const RecommendSection = styled.section`
    margin: 0 auto;
    max-width: 1200px;
`

const RecommendWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`
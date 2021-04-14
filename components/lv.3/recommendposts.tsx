import { FC } from 'react';

import Post from '../lv.2/post';

import styled from 'styled-components';


interface RecommendPostsProps{
    list: [];
    slug: string | string[];
}

const RecommendPosts: FC<RecommendPostsProps> = ({list,slug})  =>　{
    const filteredList = list.filter((item : any)=>{ return item.fields.slug != slug})　//開いた記事そのものとのダブりをフィルタリング

    return(
        <RecommendSection>
            <RecommendWrapper>
                <h2>関連記事</h2>
                    {filteredList.map((item :any,index)=>{
                        return(
                            <Post
                                key={index}
                                thumbnailUrl = {item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "/post_dummy.png"}
                                title = {item.fields.title}
                                excerpt = {item.fields.excerpt}
                                category = {item.fields.category.fields.categoryName}
                                linkUrl = {`/${item.fields.category.fields.categorySlug}/${item.fields.slug}`}
                                updatedAt = { item.sys.createdAt }
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
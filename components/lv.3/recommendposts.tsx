import { FC } from 'react';

import Post from '../lv.2/post';
import SpPost from '../lv.2/sppost';

import styled from 'styled-components';
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'


interface RecommendPostsProps{
    list: [];
    slug: string | string[];
    SP?: boolean
}

const RecommendPosts: FC<RecommendPostsProps> = ({list,slug,SP})  =>　{
    const filteredList = list.filter((item : any)=>{ return item.fields.slug != slug})　//開いた記事そのものとのダブりをフィルタリング

    return(
        <RecommendSection>
            <RecommendWrapper>
                <RecommendTitle>関連記事</RecommendTitle>
                    {
                    SP ?
                        filteredList.map((item :any,index)=>{
                            return(
                                <SpPost
                                    key={index}
                                    thumbnailUrl = {item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "/post_dummy.png"}
                                    title = {item.fields.title}
                                    category = {item.fields.category.fields.categoryName}
                                    linkUrl = {`/${item.fields.category.fields.categorySlug}/${item.fields.slug}`}
                                    updatedAt = { item.sys.createdAt }
                                />
                            )
                        }):
                        filteredList.map((item :any,index)=>{
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
                        })

                    }
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
    width: 90%;
    margin: 0 auto;
    @media ${DEVICE.BORDER} {
        width: 75%;
    }
`

const RecommendTitle = styled.h2`
    font-size: ${FONT_SIZE.LMEDIUM}rem;
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.XLARGE}rem;
    }
`
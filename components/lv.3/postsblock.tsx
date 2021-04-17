import { FC } from 'react';

import Post from '../lv.2/post'
import SpPost from '../lv.2/sppost';
import Button from '../lv.2/button'

import styled from 'styled-components';
import { DEVICE,FONT_SIZE,FONT_WEIGHT,BORDER_RADIUS,BORDER_WHIGHT,COLOR } from '../../config/styleValue'

interface dataList{
    list: any[];
    SP?: boolean;
}

const PostsBlock: FC<dataList> = ({list,SP})  =>　{
    return(
        <PostsListWrapper>
            <ListTitleBlock>
                <ListTitle>過去の記事</ListTitle>
                <DecorationWord src="Archive.svg" alt=""/>
            </ListTitleBlock>
            {
                SP ?
                    list.map((item,index)=>{
                        return(
                            <SpPost
                                key = {index}
                                thumbnailUrl={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                                title={item.fields.title}
                                category={item.fields.category.fields.categoryName}
                                linkUrl={ '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug}
                                updatedAt ={item.sys.updatedAt}
                            />
                            )
                        }
                    ):
                    list.map((item,index)=>{
                        return(
                            <Post
                                key = {index}
                                thumbnailUrl={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                                title={item.fields.title}
                                excerpt={item.fields.excerpt}
                                category={item.fields.category.fields.categoryName}
                                linkUrl={ '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug}
                                updatedAt ={item.sys.updatedAt}
                            />
                            )
                        }
                    )
            }

        </PostsListWrapper>
    )
}

//<ButtonBlock>
//    <Button text="全ての記事をみる"/>
//</ButtonBlock>

export default PostsBlock


const PostsListWrapper = styled.div`
    width: 90%;
    @media ${DEVICE.BORDER} {
        width: 75%;
        margin-right: 24px;
    }
`

const ListTitleBlock = styled.div`
    position: relative;
`

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &::before{
        position: absolute;
        display: block;
        content: '';
        left: -20%;
        width: 95%;
        height: 1px;
        background-color: #00A79B;
    }
`

const ListTitle = styled.h2`
    font-size: ${FONT_SIZE.LARGE}rem;
    margin-bottom: 1rem;
    @media ${DEVICE.BORDER} {
        font-size: ${FONT_SIZE.XLARGE}rem;
        margin-bottom: 1.5rem;
    }
`

const DecorationWord = styled.img`
    width: 70%;
    position: absolute;
    right: -32px;
    top: -20px;
    z-index: 1;
    @media ${DEVICE.BORDER} {
        width: auto;
        right: -24px;
    }
`
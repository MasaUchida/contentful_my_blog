import { FC } from 'react';

import Post from '../lv.2/post'
import Button from '../lv.2/button'

import styled from 'styled-components';

interface dataList{
    list: any[]
}

const PostsBlock: FC<dataList> = ({list})  =>　{

    //console.log(list)
    //console.log(list[0].fields.thumbnailImage.fields.file.url)

    return(
        <PostsListWrapper>
            <ListTitleBlock>
                <ListTitle>過去の記事</ListTitle>
                <DecorationWord src="Archive.svg" alt=""/>
            </ListTitleBlock>
            <>{list.map((item,index)=>{
                return(
                    <Post
                        key = {index}
                        thumbnailUrl={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                        title={item.fields.title}
                        excerpt={item.fields.excerpt}
                        category={item.fields.category.fields.categoryName}
                        linkUrl={ '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug}
                        createdAt ={item.sys.createdAt}
                    />
                )
                }
            )}</>

        </PostsListWrapper>
    )
}

//<ButtonBlock>
//    <Button text="全ての記事をみる"/>
//</ButtonBlock>

export default PostsBlock


const PostsListWrapper = styled.div`
    width: 75%;
    margin-right: 24px;
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
    font-size: 24px;
    margin-bottom: 24px;
`

const DecorationWord = styled.img`
    position: absolute;
    right: -24px;
    top: -24px;
    z-index: 1;
`
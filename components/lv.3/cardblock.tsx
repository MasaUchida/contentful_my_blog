import { FC } from 'react';
import Card from '../lv.2/card'

import styled from 'styled-components';

interface CardBlockProps{
    blockWidth?: number;
    list?: any[]
}

const CardBlock: FC<CardBlockProps> = ({blockWidth,list})  =>　{
    return(
        <CardWrapper styleWidth = {blockWidth}>
            <>{list.map((item,index)=>{
                return(
                    <Card
                        key = {index}
                        thumbnailUrl={item.fields.thumbnailImage ? item.fields.thumbnailImage.fields.file.url : "post_dummy.png"}
                        title = {item.fields.title}
                        exerpt = {item.fields.excerpt}
                        category = {item.fields.category.fields.categoryName}
                        linkUrl = { '/' + item.fields.category.fields.categorySlug + '/' + item.fields.slug}
                        createdAt = {item.sys.createdAt}
                    />
                )
                }
            )}</>
        </CardWrapper>
    )
}
export default CardBlock

const CardWrapper = styled.div<{styleWidth : number}>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: ${({styleWidth}) => styleWidth || 100}%;
    margin-right: 24px;
`
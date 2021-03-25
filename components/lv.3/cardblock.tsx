import { FC } from 'react';
import Card from '../lv.2/card'

import styled from 'styled-components';

interface CardBlockProps{
    blockWidth?: number;
}

const CardBlock: FC<CardBlockProps> = ({blockWidth})  =>　{
    return(
        <CardWrapper styleWidth = {blockWidth}>
            <Card
                thumbnailUrl="/post_dummy.png"
                title = "カードテストタイトル"
                exerpt = "これはカードテスト用の引用分です。\n改行がうまくいくかすごい心配。\nこれはカードテスト用の引用分です。\n改行がうまくいくかすごい心配"
                category = "カードテストカテゴリ"
                linkUrl = "#"
            />
            <Card
                thumbnailUrl="/post_dummy.png"
                title = "カードテストタイトル"
                exerpt = "これはカードテスト用の引用分です。\n改行がうまくいくかすごい心配。\nこれはカードテスト用の引用分です。\n改行がうまくいくかすごい心配"
                category = "カードテストカテゴリ"
                linkUrl = "#"
                IsNoPadding
            />
            <Card
                thumbnailUrl="/post_dummy.png"
                title = "カードテストタイトル"
                exerpt = "これはカードテスト用の引用分です。\n改行がうまくいくかすごい心配。\nこれはカードテスト用の引用分です。\n改行がうまくいくかすごい心配"
                category = "カードテストカテゴリ"
                linkUrl = "#"
            />
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
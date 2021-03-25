import { FC } from 'react';
import IconLink from '../lv.2/iconlink'

import styled from 'styled-components';

const iconBg = 'icon_link_bg.png'

const iconslist: FC = ({})  =>　{
    return(
        <>
            <ListTitleBlock>
                <ListTitle>マガジン</ListTitle>
                <DecorationWord src="Magazine.svg" alt=""/>
            </ListTitleBlock>
            <IconListContainer>
                <IconsListWrapper>
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
                </IconsListWrapper>
            </IconListContainer>
        </>
    )
}
export default iconslist

const IconListContainer = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
    background-image: url(${iconBg});
    z-index: 5;
`

const IconsListWrapper = styled.div`
    max-width: 1248px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ListTitleBlock = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`

const ListTitle = styled.h2`
    position: relative;
    font-size: 24px;
    margin-bottom: 24px;
    z-index: 5;
`

const DecorationWord = styled.img`
    position: absolute;
    left: -24px;
    top: -64px;
    z-index: 1;
`
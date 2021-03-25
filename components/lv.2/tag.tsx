import { FC } from 'react';
import styled, {css} from 'styled-components';


interface TagProps {
    size : 'LARGE' | 'SMALL';
}
const Tag: FC<TagProps> = ({children,size})  =>　{
    return(
        <TagBody tagSize = {size}>
            <Content>{children}</Content>
        </TagBody>
    )
}
export default Tag


const TagBody = styled.div<{tagSize: 'LARGE' | 'SMALL'}>`
    display: inline-block;
    justify-content: center;
    align-items: center;
    ${({tagSize}) => tagSize=='LARGE' ?
        css`padding: 10px 16px;` :
        css`padding: 6px 12px;`
    }
    font-size: 13px;
    font-weight: 600;
    color: #FFF;
    background-color: #FFC000;
`
const Content = styled.p`
    margin: 0;
`
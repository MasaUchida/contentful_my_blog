import { FC } from 'react';

import styled from 'styled-components';



const Contents: FC = ({children})  =>　{
    return(
        <ContentsWrapper>
            <ContentsText>
                {children}
            </ContentsText>
        </ContentsWrapper>
    )
}
export default Contents

const ContentsWrapper = styled.div`
    position: relative;
    border: solid 1px #DBD2C5;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 32px;
`

const ContentsText = styled.p`
    font-size: 15px;
    line-height: 2em;
`
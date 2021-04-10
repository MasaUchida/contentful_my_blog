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
    padding: 0 2rem 2rem 2rem;
`

const ContentsText = styled.div`
    margin-top: -1rem;
    font-size: 15px;
    line-height: 2em;
`
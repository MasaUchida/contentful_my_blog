import { FC } from 'react';
import Sidebar from '../lv.2/sidebar'

import styled from 'styled-components';


interface sideBarBlockProps {
    isContentsPage?: boolean;
    blockWidth?: number
}
const SideBarBlock: FC<sideBarBlockProps> = ({isContentsPage,blockWidth})  =>　{
    return(
            <SideBarWrapper styleWidth = {blockWidth}>
                <Sidebar contentsPage={isContentsPage}/>
            </SideBarWrapper>
    )
}
export default SideBarBlock

const SideBarWrapper = styled.div<{styleWidth}>`
    width: ${({styleWidth}) => styleWidth || 25}% ;
`
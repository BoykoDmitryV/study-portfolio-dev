import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Works = styled.section`
    background: ${theme.colors.primaryBg};
    position: relative;
    
    @media ${theme.media.mobile} {
        padding: 40px 0px 90px;
    }
`

const WorksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
    
`

export const S = {
    Works,
    WorksContainer,
}
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

const WorksInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 85px;
    
    @media ${theme.media.mobile} {
        flex-direction: row;
        gap: 30px;
        justify-content: space-between;
        padding-bottom: 14px;
    }
`

const Years = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    min-width: 133px;
    font-size: 100px;
    color: ${theme.colors.accent};
`

const TextYears = styled.h2`
    ${font({Fmax: 40, Fmin: 26, family: '"Playfair Display", sans-serif', weight: 700, lineHeight: 1.8})}
`

export const S = {
    WorksInfo,
    Years,
    TextYears,
}

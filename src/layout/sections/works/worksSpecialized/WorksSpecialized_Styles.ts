import {theme} from "../../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../../styles/Common";

const BoxSpecialized = styled.div`
    max-width: 100%;

    @media ${theme.media.tablet} {
        text-align: center;
    }

    @media (min-width: 794px) and (max-width: 1200px) {
        li:first-child {
            max-width: 590px;
            width: 100%;
        }
    }
`

const SmallText = styled.p`
    text-align: center;
    padding-bottom: 15px;
    ${font({Fmax: 40, Fmin: 24, weight: 700, lineHeight: 1.8})} @media ${theme.media.mobile} {
    padding: 60px 0;
}
`

const CardBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    
    @media ${theme.media.tablet} {
        gap: 25px;
    }
`

export const S = {
    BoxSpecialized,
    SmallText,
    CardBox,
}

import {theme} from "../../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

const BoxInformation = styled.div`
    max-width: 195px;
    height: 450px;
    display: flex;
    
    @media ${theme.media.tablet} {
        padding-top: 110px;
        height: 100%;
        ${FlexWrapper} {
            gap: 30px;
        }
    }
`

export const S = {
    BoxInformation
}
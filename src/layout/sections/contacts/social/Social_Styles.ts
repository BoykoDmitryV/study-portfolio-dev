import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme";

const Social = styled.div`
    width: 100%;
`

const SocialTitle = styled.h3`
    ${font({weight: 700, Fmax: 100, Fmin: 50})};
`

const SocialIcons = styled.ul`
    padding-top: 30px;
    max-width: 325px;
    display: flex;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        padding: 60px 0 90px;
    }
`

export const S = {
    Social,
    SocialTitle,
    SocialIcons,
}
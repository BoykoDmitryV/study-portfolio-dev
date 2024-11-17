import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    ${font({weight: 500, Fmax: 20, Fmin: 16, lineHeight: 1.8, color: theme.colors.grey})}
    letter-spacing: 0.02em;
    background-color: ${theme.colors.secondaryBg};
    padding-bottom: 50px;

    @media ${theme.media.tablet} {
        padding: 30px 0;
    }
`

const TextB = styled.b`
    color: ${theme.colors.font};
`

export const S = {
    Footer,
    TextB
}
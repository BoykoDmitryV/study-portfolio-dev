import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    background-color: ${theme.colors.primaryBgOpacity};
    z-index: 9999999;
    top: 0;
    padding: 15px 0;
    @media ${theme.media.tablet} {
        padding: 0;
    }
`

export const S = {
    Header
}


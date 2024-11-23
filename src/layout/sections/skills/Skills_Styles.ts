import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
    background: ${theme.colors.secondaryBg};
    padding: 50px 0;
    overflow: auto;
    position: relative;
`

const IconsBox = styled.div`
    width: 1200px;
    padding: 0 20px;
    & > *:not(:first-child) {
        margin-left: 165px;
    }

    @media ${theme.media.tablet} {
        width: 810px;
        & > *:not(:first-child) {
            margin-left: 50px;
        }
    }
`

export const S = {
    Skills,
    IconsBox,
}

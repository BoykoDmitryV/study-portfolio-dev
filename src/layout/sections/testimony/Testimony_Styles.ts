import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Testimony = styled.section`
    position: relative;
    background: ${theme.colors.thirdBg};
`

const TestimonyBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 769px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        gap: 70px;
    }
    
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`

export const S = {
    Testimony,
    TestimonyBox,
}
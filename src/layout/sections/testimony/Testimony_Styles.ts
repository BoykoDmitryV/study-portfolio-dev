import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Testimony = styled.section`
    background: ${theme.colors.thirdBg};
`

const TestimonyBox = styled.div`
    display: flex;
    justify-content: space-between;
    
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
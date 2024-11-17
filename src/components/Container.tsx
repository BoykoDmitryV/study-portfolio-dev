import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container= styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    
    @media ${theme.media.tablet} {
        padding: 0 20px;
    }
`


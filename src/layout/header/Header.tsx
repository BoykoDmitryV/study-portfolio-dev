import React from "react";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {Container} from "../../components/Container";
import {S} from './Header_Styles'

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu/>
                                    : <DesktopMenu/>}
            </Container>
        </S.Header>
    );
};




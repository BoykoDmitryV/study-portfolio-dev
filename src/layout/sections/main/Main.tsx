import React from "react";
import photo1 from "../../../assets/images/photo-1.webp"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <S.Photo src={photo1} alt=""/>
            <Container>
                <FlexWrapper direction={"column"} wrap={"reverse"}>
                    <S.SmallText>
                        <p>Hello! <br/> I’m Zarror Nibors</p>
                        <Typewriter
                            options={{
                                strings: ['Hello! <br/> I’m Zarror Nibors'],
                                autoStart: true,
                                loop: true,
                                delay: 150,
                            }}
                        />
                    </S.SmallText>
                    <S.BoxContainer>
                        <S.BoxText>
                            I’am freelance <S.ColorText>web developer</S.ColorText> based in Indonesia who loves to craft
                            attractive design
                            experiences for
                            the web.
                        </S.BoxText>
                        <FlexWrapper justify={"space-between"} align={"center"}>
                            <S.ButtonOne>
                                <Icon iconId={"mail"} width={"18px"} height={"14px"} viewBox={"0 0 18 14"}/>
                                <span>Email me</span>
                            </S.ButtonOne>
                            <S.ButtonTwo>
                                <Icon iconId={"download"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                <span>Download CV</span>
                            </S.ButtonTwo>
                        </FlexWrapper>
                    </S.BoxContainer>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

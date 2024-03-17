import React, { useEffect, useState } from "react";
import {
  Alignment,
  CardTitle,
  Icon,
  LayoutBox,
  NavButton,
  StyledBox,
  StyledImage,
  StyledPadding,
  StyledPara,
  TalkContainer,
} from "../styled";
import Footer from "../components/Footer";
import { CHATS } from "../constants";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
const Talk = () => {
  const content = JSON.parse(localStorage?.getItem("story"));
  const clicked = JSON.parse(localStorage?.getItem("clickedContent"));

  const [speech, setSpeech] = useState(null);
  const navigate = useNavigate();

  const setQuestion = (question) => {
    setSpeech(question);
  };

  useEffect(() => {
    if (clicked) {
      setSpeech(null);
      localStorage.setItem("clickedContent", JSON.stringify(false));
    }
  }, [clicked]);

  return (
    <>
      <TalkContainer>
        <NavButton
          onClick={() => navigate("/discover")}
          style={{ width: "24px", margin: "24px 0px 0px 12px" }}
        >
          <Icon src={back} alt="cta1" />
        </NavButton>
        {!speech ? (
          <StyledPadding>
            <StyledBox>
              <LayoutBox
                justifyContent="space-between"
                alignItems="center"
                gap="10px"
              >
                <CardTitle style={{ position: "relative", top: "38px" }}>
                  {content?.title}
                </CardTitle>
                <StyledImage
                  src={content?.image}
                  alt={content?.title}
                  className="style-main-image"
                />
              </LayoutBox>
            </StyledBox>
            {/* <StoryCard content={content} page="story" /> */}
            <Alignment padding="0px 16px">
              <StyledPara>{content?.firstPara}</StyledPara>
            </Alignment>
            <Alignment padding="0px 16px 100px">
              <ul>
                {content?.points?.map((data, index) => {
                  return (
                    <>
                      <li>
                        <StyledPara>{data}</StyledPara>
                      </li>
                    </>
                  );
                })}
              </ul>
            </Alignment>
          </StyledPadding>
        ) : (
          <StyledPadding>
            <LayoutBox justifyContent="flex-end">
              <Alignment
                margin="40px 20px 0px 0px"
                padding="0px 10px"
                style={{ background: "#f5eadc", borderRadius: "12px" }}
              >
                <StyledPara style={{ lineHeight: "0rem" }}>{speech}</StyledPara>
              </Alignment>
            </LayoutBox>
            <LayoutBox justifyContent="flex-start">
              <Alignment
                margin="10px 0px 0px 20px"
                padding="0px 10px"
                style={{
                  background: "#f5eadc",
                  borderRadius: "12px",
                  maxWidth: "210px",
                }}
              >
                <StyledPara>{CHATS?.[speech]}</StyledPara>
              </Alignment>
            </LayoutBox>
          </StyledPadding>
        )}
      </TalkContainer>
      <Footer setQuestion={setQuestion} />
    </>
  );
};

export default Talk;

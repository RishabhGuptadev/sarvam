import React, { useEffect, useState } from "react";
import {
  Alignment,
  HomeContainer,
  Icon,
  LayoutBox,
  MobileContainer,
  NavButton,
  ScrollContainer,
  StyledPara,
  Wrapper,
} from "../styled";
import cta1 from "../assets/cta1.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { CHATS } from "../constants";
import Sidebar from "../components/Sidebar";
import Talk from "./Talk";
import DiscoverStories from "./DiscoverStories";

const Home = () => {
  const navigate = useNavigate();
  const [speech, setSpeech] = useState("hi");
  const [story, setStory] = useState(null);
  const setQuestion = (question) => {
    setSpeech(question);
  };

  return (
    <Wrapper>
      <HomeContainer>
        <Sidebar />
        <ScrollContainer className="left">
          <DiscoverStories />
        </ScrollContainer>
        <ScrollContainer className="right">
          <Talk />
        </ScrollContainer>
      </HomeContainer>
      <MobileContainer>
        <LayoutBox justifyContent="space-between">
          <Alignment margin="32px 0px 0px 16px">
            <NavButton onClick={() => navigate("/discover")}>
              <Icon src={cta1} alt="cta1" />
            </NavButton>
          </Alignment>
          <Alignment margin="32px 16px 0px 0px">
            <LayoutBox gap="12px">
              <NavButton>
                <Icon src={cta1} alt="cta1" />
              </NavButton>
              <NavButton>
                <Icon src={cta1} alt="cta1" />
              </NavButton>
            </LayoutBox>
          </Alignment>
        </LayoutBox>
        <Alignment>
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
        </Alignment>
        <Footer setQuestion={setQuestion} />
      </MobileContainer>
    </Wrapper>
  );
};

export default Home;

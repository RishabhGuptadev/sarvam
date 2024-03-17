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
  TalkContainer,
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
    </Wrapper>
  );
};

export default Home;

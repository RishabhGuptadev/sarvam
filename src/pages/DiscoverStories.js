import React, { useState } from "react";
import {
  Alignment,
  Container,
  DiscoverContainer,
  GridContainer,
  GridItem,
  LayoutBox,
  NavButton,
  ParentContainer,
  StyledTitle,
} from "../styled";
import { RxCross2 } from "react-icons/rx";
import { FaUserLarge } from "react-icons/fa6";
import { Stories } from "../constants";
import StoryCard from "../components/StoryCard";
import { useNavigate } from "react-router-dom";

const DiscoverStories = () => {
  const navigate = useNavigate();
  const greet = () => {
    const timeNow = new Date()?.getHours();
    return timeNow >= 5 && timeNow < 12
      ? "Good Morning"
      : timeNow >= 12 && timeNow < 18
      ? "Good Afternoon"
      : "Good evening";
  };

  const setStory = (storyData) => {
    localStorage?.setItem("story", JSON.stringify(storyData));
    // checkStory(storyData);
    navigate("/talk");
  };

  return (
    <ParentContainer>
      <DiscoverContainer>
        <Container>
          <LayoutBox justifyContent="space-between">
            <NavButton onClick={() => navigate("/")}>
              <RxCross2 size={18} />
            </NavButton>
            <NavButton>
              <FaUserLarge size={18} />
            </NavButton>
          </LayoutBox>
        </Container>

        <Alignment padding="0 0.5rem 0">
          {<StyledTitle>{greet()}</StyledTitle>}
        </Alignment>

        <GridContainer>
          {Object?.entries(Stories)?.map(([_, data]) => {
            return data?.map((content, index) => {
              return (
                <GridItem className={`grid-item-${index}`}>
                  <StoryCard
                    content={content}
                    page="discover"
                    type={index === 2 || index === 4 ? "two" : "one"}
                    imageType={index === 3 || index === 7 ? "big" : null}
                    onClick={() => {
                      setStory(content);
                      localStorage.setItem(
                        "clickedContent",
                        JSON.stringify(true)
                      );
                    }}
                  />
                </GridItem>
              );
            });
          })}
        </GridContainer>
      </DiscoverContainer>
    </ParentContainer>
  );
};

export default DiscoverStories;

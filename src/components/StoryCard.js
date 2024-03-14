import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Alignment,
  CardContainer,
  CardTitle,
  SecondCard,
  StyledImage,
  StyledType2Image,
} from "../styled";

const StoryCard = ({ content, type, imageType, onClick, page }) => {
  const discoverStyles = {
    position: "absolute",
    color: "#fcfaf7",
    fontSize: imageType === "big" ? "24px" : "16px",
    left: "12px",
    lineHeight: "1.3062500000000001rem",
    fontWeight: "800",
    height: imageType === "big" ? "260px" : "122px",
    maxWidth: imageType === "big" ? "270px" : "100px",
  };

  const storyStyles = {
    position: "absolute",
    color: "#fcfaf7",
    fontSize: imageType === "big" ? "24px" : "16px",
    left: "12px",
    lineHeight: "1.3062500000000001rem",
    fontWeight: "800",
    height: imageType === "big" ? "260px" : "122px",
    maxWidth: imageType === "big" ? "270px" : "100px",
  };

  const styleProperties = {
    width: page === "story" ? "158px" : imageType == "big" && "340px",
    height: page === "story" ? "180px" : imageType == "big" && "318px",
    fontSize: page === "story" ? "1.75rem" : "16px",
    lineHeight: page === "story" ? "1.75rem" : "1.3062500000000001rem",
    fontWeight: page === "story" ? "400" : "800",
    maxWidth: page === "story" ? "250px" : "150px",
    letterSpacing: "-.56px",
    position: page === "story" && "relative",
    top: "32px",
    left: "10px",
  };

  return (
    <CardContainer onClick={onClick}>
      {type === "one" ? (
        <>
          <Alignment style={{ position: "relative" }}>
            <CardTitle
              style={page === "discover" ? discoverStyles : storyStyles}
            >
              {content?.title}
            </CardTitle>
          </Alignment>

          <StyledImage>
            <LazyLoadImage
              alt={content?.title}
              src={content?.image}
              effect="opacity"
              style={{
                height: styleProperties?.height,
                width: styleProperties?.width,
              }}
            />
          </StyledImage>
        </>
      ) : (
        <Alignment margin={page === "discover" ? "12px 1px" : "12px"}>
          <SecondCard
            style={{
              padding: "0px 12px",
              borderRadius: "24px",
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              borderColor: "rgb(255 255 255/var(--tw-border-opacity))",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardTitle
              style={{
                fontSize: styleProperties?.fontSize,
                lineHeight: styleProperties?.lineHeight,
                fontWeight: styleProperties?.fontWeight,
                maxWidth: styleProperties?.maxWidth,
                position: styleProperties?.position,
                top: styleProperties?.top,
              }}
            >
              {content?.title}
            </CardTitle>
            <StyledType2Image>
              <LazyLoadImage
                alt={content?.title}
                src={content?.image}
                effect="blur"
                style={{
                  height: styleProperties?.height,
                  width: styleProperties?.width,
                }}
              />
            </StyledType2Image>
          </SecondCard>
        </Alignment>
      )}
    </CardContainer>
  );
};

export default StoryCard;

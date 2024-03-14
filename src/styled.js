import styled from "styled-components";

export const ParentContainer = styled.div`
  background: #f7efe3;

  border-right: 1px solid rgb(237 225 209);
  @media only screen and (max-width: 900px) {
    background: #c3b9ab;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  background: #faf3ea;
  height: 100vh;
`;

export const DiscoverContainer = styled.div`
  background: #faf3ea;
  position: relative;
  top: 0px;
  padding: 0px 24px;
  @media only screen and (max-width: 900px) {
    border-radius: 24px;
    top: 16px;
    padding: 20px 16px;
  }
`;

export const Alignment = styled.div(({ margin, padding }) => ({
  margin,
  padding,
}));

export const LayoutBox = styled.div(
  ({ justifyContent, alignItems, gap, flexDirection }) => ({
    display: "flex",
    justifyContent,
    alignItems,
    gap,
    flexDirection: flexDirection ?? "row",
  })
);

export const NavButton = styled.div`
  background: #ede1d1;
  border: 1px solid #e5e7eb;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledTitle = styled.h4`
  @media only screen and (min-width: 768px) {
    margin: 32px 0px 12px;
    color: #0d3c26;
    font-family: math;
    font-weight: 900;
  }
  font-size: 2.125rem;
  line-height: 2.125rem;
  letter-spacing: -0.68px;
  font-weight: 350;
  font-family: var(--font-alpina-condensed), var(--font-alpina), ui-serif,
    Georgia, Cambria, "Times New Roman", Times, serif;
`;

export const StyledPara = styled.h4`
  font-size: 1.225rem;
  line-height: 2rem;
  letter-spacing: -0.68px;
  font-weight: 350;
  font-family: var(--font-alpina-condensed), var(--font-alpina), ui-serif,
    Georgia, Cambria, "Times New Roman", Times, serif;
`;

export const CardContainer = styled.div(({ height, width }) => ({
  height,
  width,
  overflow: "hidden",
}));

export const StyledImage = styled.div`
  img {
    height: 158px;
    width: 161px;
    border-radius: 24px;
  }
`;

export const StyledType2Image = styled.div`
  img {
    height: 134px;
    width: 134px;
    border-radius: 24px;
  }
`;

export const Title = styled.h4`
  img {
    height: 158px;
    width: 161px;
    border-radius: 24px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.1875rem;
  letter-spacing: -0.19px;
  letter-spacing: -0.68px;
  font-weight: 900;
  font-family: math;
  max-width: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const StyledInput = styled.input`
  padding: 16px 60px 16px 16px;
  width: 100%;
  border-radius: 24px;
  font-size: 20px;
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  size: 100px;
  &:hover {
    border: 1px solid brown;
  }
  &:focus {
    border: 1px solid brown;
  }

  @media only screen and (min-width: 768px) {
    width: 65%;
    margin-left: 0px;
    margin-right: 13%;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  position: relative;
  right: 54px;
  @media only screen and (min-width: 768px) {
    right: 174px;
  }
  &.disable_search {
    background: #faf3ea;
    border-radius: 50%;
    padding: 12px;
    opacity: 0.2;
  }
  &.enable_search {
    background: #038247;
    color: white;
    border-radius: 50%;
    padding: 12px;
    animation: fadeIn 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.8;
      }
      75% {
        opacity: 0.9;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  padding: 0px 100px 0px 20px;
  background: #faf3ea;
  right: -149px;
  width: 62%;
  @media only screen and (max-width: 900px) {
    background: #faf3ea;
    bottom: 0px;
    width: 100%;
    height: 100px;
    right: -114px;
  }
`;

export const StyledFooterTitle = styled.h4`
  font-size: 14px;
  color: #6b6255;
  position: relative;
  right: 60px;
  @media only screen and (max-width: 900px) {
    right: 18px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const SidebarIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SidebarTitle = styled.p`
  font-size: 0.9rem;
  letter-spacing: -0.68px;
  font-weight: 350;
  margin: 4px;
`;

export const SidebarContainer = styled.div`
  display: inline-block;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 11em 2fr;
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 3%;
  }
  grid-row-gap: 10px;
`;

export const GridItem = styled.div`
  &.grid-item-2 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &.grid-item-3 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &.grid-item-4 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &.grid-item-7 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    &.grid-item-3 {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
`;

export const SecondCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const TalkContainer = styled.div`
  position: absolute;
  width: 67%;
  overflow-y: scroll;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  height: 100vh;
  &.left {
    overflow-y: scroll;
  }
  &.right {
    overflow-y: scroll;
  }
`;

export const StyledPadding = styled.div`
  padding: 100px;
  @media only screen and (max-width: 900px) {
    padding: 0px;
  }
`;

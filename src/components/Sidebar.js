import React, { useState } from "react";
import {
  Alignment,
  Icon,
  LayoutBox,
  SidebarContainer,
  SidebarIcon,
  SidebarTitle,
  StyledPara,
  StyledTitle,
} from "../styled";
import cta1 from "../assets/cta1.svg";
import cta2 from "../assets/cta2.png";
import cta3 from "../assets/cta3.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const NAV_ITEMS = [
    {
      icon: cta1,
      title: "Discover",
      link: "/discover",
    },
    {
      icon: cta2,
      title: "Threads",
      link: "/threads",
    },
    {
      icon: cta3,
      title: "Profile",
      link: "/profile",
    },
  ];

  return (
    <SidebarContainer>
      <Alignment
        style={{
          borderRight: "1px solid rgb(237 225 209)",
          height: "100vh",
          position: "sticky",
          top: "0px",
        }}
        padding="1rem"
      >
        {NAV_ITEMS?.map((item) => {
          return (
            <div onClick={() => navigate(item?.link)}>
              <Alignment margin="14px 0px" style={{ cursor: "pointer" }}>
                <LayoutBox
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <SidebarIcon src={item?.icon} alt="cta1" />
                  <SidebarTitle>{item?.title}</SidebarTitle>
                </LayoutBox>
              </Alignment>
            </div>
          );
        })}
      </Alignment>
    </SidebarContainer>
  );
};

export default Sidebar;

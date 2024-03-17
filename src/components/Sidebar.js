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
      link: "/discover",
    },
    {
      icon: cta3,
      title: "Profile",
      link: "/discover",
    },
  ];

  return (
    <SidebarContainer>
      <Alignment
        style={{
          height: "100vh",
          position: "sticky",
          top: "0px",
        }}
      >
        {NAV_ITEMS?.map((item) => {
          return (
            <div
              onClick={(e) => {
                navigate(item?.link);
                setActive(e.target.textContent);
              }}
              className={active === item?.title ? "active common" : "common"}
            >
              <Alignment style={{ cursor: "pointer" }}>
                <LayoutBox
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <SidebarIcon src={item?.icon} alt="cta1" />
                  <SidebarTitle
                    className={active === item?.title ? "active" : null}
                  >
                    {item?.title}
                  </SidebarTitle>
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

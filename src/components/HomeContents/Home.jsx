import { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Resources from "./Resources";
import Calculator from "./Calculator/Calculator";
import Notes from "./Notes/Notes";
import Experimenting from "./Experimenting";
import ReactCourse from "./ReactCourse/ReactCourse";

const Root = styled("div")(() => ({
  marginTop: "16px",
  marginLeft: "32px",
  display: "flex",
  flexDirection: "column",
}));

const TabContainer = styled("div")(() => ({
  overflowY: "auto",
}));

const tabConfig = [
  { id: 0, name: "Study Material" },
  { id: 1, name: "Calculator" },
  { id: 2, name: "Notes" },
  { id: 3, name: "Experimenting" },
  { id: 4, name: "React Course" },
];

export default function Home() {
  const [tab, setTab] = useState(0);
  const tabContentRef = useRef(null);

  useEffect(() => {
    adjustTabContentHeight();
    window.addEventListener("resize", adjustTabContentHeight);
    return () => window.removeEventListener("resize", adjustTabContentHeight);
  }, [tab]);

  const adjustTabContentHeight = () => {
    if (!tabContentRef.current) return;
    const availableHeight =
      window.innerHeight - tabContentRef.current.offsetTop;
    tabContentRef.current.style.height = `${availableHeight}px`;
  };

  return (
    <Root>
      <h3>Hey there!</h3>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(event, val) => setTab(val)}>
          {tabConfig.map((obj) => (
            <Tab key={obj.id} label={obj.name} />
          ))}
        </Tabs>
      </Box>

      <TabContainer ref={tabContentRef}>
        {tab === 0 ? (
          <Resources />
        ) : tab === 1 ? (
          <Calculator />
        ) : tab === 2 ? (
          <Notes />
        ) : tab === 3 ? (
          <Experimenting />
        ) : (
          <ReactCourse />
        )}
      </TabContainer>
    </Root>
  );
}

import { styled } from "@mui/material/styles";
import Ep1and2 from "./Ep1and2";
import Ep3and4and5 from "./Ep3and4and5";
import Ep6and7 from "./Ep6and7";
import Ep8and9and10 from "./Ep8and9and10";
import Ep11and12 from "./Ep11and12";
import ExtraHooks from "./ExtraHooks";

const Root = styled("div")(() => ({
  display: "flex",
  margin: "16px 16px 16px 0px",
  flexDirection: "column",
}));

export default function ReactCourse() {
  return (
    <Root>
      <Ep1and2 />
      <Ep3and4and5 />
      <Ep6and7 />
      <Ep8and9and10 />
      <Ep11and12 />
      <ExtraHooks />
    </Root>
  );
}

import { styled } from "@mui/material/styles";

const GridContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, auto)",
  gap: "10px",
  paddingTop: "16px",
}));

const GridItem = styled("div")(() => ({
  padding: "10px",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  alignItems: "center",
  textAlign: "center",
}));

const op = [
  {
    id: "+",
  },
  {
    id: "-",
  },
  {
    id: "/",
  },
  {
    id: "x",
  },
];

export default function OpDisplay() {
  // const { setOp, curr, setN1, setReset, op: oper, n1, setCurr } = props;
  return (
    <GridContainer>
      {op.map((obj) => {
        return <GridItem onClick={() => {}}>{obj.id}</GridItem>;
      })}
    </GridContainer>
  );
}

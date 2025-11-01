import { styled } from "@mui/material/styles";

const GridContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, auto)",
  gap: "10px",
}));

const GridItem = styled("div")(() => ({
  padding: "10px",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  textAlign: "center",
}));

const num = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
];

export default function NumDisplay(props) {
  const { setCurr, reset, setReset } = props;
  return (
    <GridContainer>
      {num.map((obj) => {
        return (
          <GridItem
            onClick={() => {
              if (reset) {
                setCurr(`${obj.id}`);
                setReset(false);
              } else setCurr((val) => val + obj.id);
            }}
          >
            {obj.id}
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

import styled from "styled-components";

export const StyledSection = styled.section({
  margin: "0 40px",
  padding: "100px 0 20px",
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const StyledDarkSurface = styled.div((props) => ({
  backgroundColor: "#141414",
  border: "1px solid #1F1F1F",
  width: props.width ? props.width : 72,
  height: props.height ? props.height : 72,
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.4s",
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },
}));

export const DarkCard = styled.div({
  overflow: "hidden",
  maxWidth: "100%",
  width: "100%",
  height: "fit-content",
  backgroundColor: "#1A1A1A",
  border: "1px solid #262626",
  padding: 40,
  boxSizing: "border-box",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  h1: {
    color: "#999999",
    fontWeight: 500,
  },
  "@media (max-width: 480px)": {
    padding: 20,
  },
});

export const StyledTag = styled.div({
  backgroundColor: "#141414",
  border: "1px solid #262626",
  padding: "6px 12px",
  borderRadius: 6,
});

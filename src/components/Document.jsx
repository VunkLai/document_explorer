import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const Root = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

const Document = () => {
  return <Root>Document</Root>;
};

export default Document;

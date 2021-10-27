import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import CustomizedTreeView from "./CustomizedTreeView";

const Root = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

const Folder = () => {
  return (
    <Root>
      <CustomizedTreeView />
    </Root>
  );
};

export default Folder;

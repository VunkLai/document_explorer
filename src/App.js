import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";

import NavBar from "./components/NavBar";
import Document from "./components/Document";
import Folder from "./components/Folder";

const Root = styled("div")(({ theme }) => ({
  height: "100vh",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "calc(100% - 64px) !important",
  width: "100%",
  justifyContent: "center",
  alignContent: "stretch",
}));

const Left = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "30%",
}));

const Right = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "70%",
}));

const theme = createTheme({
  palette: {
    // mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root>
        <NavBar />
        <Container>
          <Left>
            <Folder />
          </Left>
          <Divider orientation="vertical" variant="middle" />
          <Right>
            <Document />
          </Right>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default App;

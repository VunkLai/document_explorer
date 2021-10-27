import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import NavBar from "./NavBar";

const Root = styled("div")(({ theme }) => ({
  height: "100vh",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  height: "calc(100% - 64px) !important",
  width: "100%",
  border: "1px solid red",
  justifyContent: "center",
  alignContent: "stretch",
}));

const Item = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "50%",
  border: "1px solid red",
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
          <Item>Folder</Item>
          <Item>Document</Item>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default App;

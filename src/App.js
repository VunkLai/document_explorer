import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";

import NavBar from "./components/NavBar";
import CustomizedTreeView from "./components/CustomizedTreeView";

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
          <CustomizedTreeView />
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default App;

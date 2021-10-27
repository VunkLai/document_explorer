import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MemoryIcon from "@mui/icons-material/Memory";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";

const NavBarRoot = styled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === "light" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === "dark" && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),
  // default: tooltip > snackbar > modal > drawer > appBar > speedDial > mobileStepper
  // zIndex: theme.zIndex.appBar,
  boxShadow: "none",
}));

const NavBar = () => {
  return (
    <NavBarRoot position="sticky">
      <Toolbar>
        <Button color="inherit" href="/" startIcon={<MemoryIcon />}>
          <Typography variant="h5">ApMemory</Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </NavBarRoot>
  );
};

export default NavBar;

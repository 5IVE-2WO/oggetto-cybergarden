import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PeopleIcon from "@mui/icons-material/People";
import Divider from "@mui/material/Divider";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useNavigate } from "react-router-dom";

const pages = ["Люди", "Лента", "Сообщество"];
const settings = ["Выход"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const open = Boolean(anchorElNav);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (switchNavBar, closeNav) => {
    if (closeNav) {
      setAnchorElNav(false);
    }
    switch (switchNavBar) {
      case 1:
        navigate("/users");
        break;
      case 2:
        navigate("/");
        break;
      case 3:
        navigate("/comunity");
        break;
      default:
        break;
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            EasyWay
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorElNav}
              open={open}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu(1);
                }}
              >
                <PeopleIcon
                  fontSize="large"
                  sx={{ margin: "0px 5px 0px 0px" }}
                />
                Люди
              </MenuItem>
              <Divider variant="inset" width="100px" />
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu(2);
                }}
              >
                <DynamicFeedIcon
                  fontSize="large"
                  sx={{ margin: "0px 5px 0px 0px" }}
                />
                Лента
              </MenuItem>
              <Divider variant="inset" width="100px" />
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu(3);
                }}
              >
                <Diversity3Icon
                  fontSize="large"
                  sx={{ margin: "0px 5px 0px 0px" }}
                />
                Сообщество
              </MenuItem>
              <Divider variant="inset" width="100px" />
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            EasyWay
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu(1 * pages.indexOf(page) + 1, false);
                }}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography fontFamily={"Georgia"}>
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "flex",
                  margin: "0px 3vw 0px 0px",
                  padding: "8px 0px 8px 0px",
                }}
              >
                Sign In
              </Button>
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

// components/Navbar.js
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import { useEffect, useState } from "react";

const pages = [
  "Browse Cars",
  "About",
  "Become a host",
  "Blog",
  "Refreal Program",
];
const settings = ["EN", "AR", "HI"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [lang, setLang] = useState("EN");
  const [isUp, setIsUp] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setLang(event.currentTarget);
    setIsUp(true);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setLang(setting);
    setIsUp(false);
    setAnchorElUser(null);
  };

  return (
    <div style={{ height: "80px" }}>
      <AppBar
        position="static"
        style={{
          zIndex: 1,
          height: "80px",
          width: "100%",
          backgroundColor: "white",
          paddingTop: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 18px",
        }}
      >
        <Container maxWidth="100vw" style={{}}>
          <Toolbar
            disableGutters
            style={{ marginTop: "0px", paddingTop: "0px" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 10,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "purple",
                textDecoration: "none",
              }}
            >
              <Image
                src="/images/Logo.svg"
                alt="sharek-logo"
                width={150}
                height={80}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  marginTop: "7px",
                  width: "100%",
                }}
              >
                <Box>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography variant="body1" textAlign="center">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                  <Button
                    sx={{
                      p: "10px 30px",
                      m: "5px 20px",
                      backgroundColor: "wheat",
                      color: "black",
                      ":hover": { color: "black", backgroundColor: "wheat" },
                    }}
                  >
                    {" "}
                    Log In
                  </Button>
                  <br />
                  <Button
                    sx={{
                      p: "10px 30px",
                      m: "5px 20px",
                      backgroundColor: "black",
                      color: "white",
                      ":hover": { color: "black", backgroundColor: "#ccc" },
                    }}
                  >
                    {" "}
                    Sign Up
                  </Button>
                </Box>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "purple",
                textDecoration: "none",
              }}
            >
              <Image
                src="/images/Logo.svg"
                alt="sharek-logo"
                width={150}
                height={80}
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                zIndex: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: "500",
                    textTransform: "none",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ display: "flex" }}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} justifyContent={"center"} >
                    {/* <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, zIndex: 2 }}
                    > */}
                      <LanguageIcon
                        sx={{ color: "black", padding: "1px" }}
                      ></LanguageIcon>
                    {/* </IconButton> */}
                    <Typography zIndex={300} color={"black"} width={"20px"} textAlign={"center"}>
                      {lang}
                    </Typography>
                    {isUp ? (
                      <IconButton
                        onClick={handleCloseNavMenu}
                        sx={{ p: 0, zIndex: 3 }}
                      >
                        <KeyboardArrowUpOutlinedIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{ p: 0, zIndex: 2 }}
                      >
                        <KeyboardArrowDownOutlinedIcon />
                      </IconButton>
                    )}
                  </Box>
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
                    onClose={()=>handleCloseUserMenu(lang)}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleCloseUserMenu(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Box>
                    <Button
                      sx={{
                        zIndex: 2,
                        p: "10px 30px",
                        m: "0 5px",
                        backgroundColor: "transparent",
                        color: "black",
                        ":hover": { color: "black", backgroundColor: "wheat" },
                      }}
                    >
                      {" "}
                      Log In
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        zIndex: 2,
                        p: "10px 30px",
                        m: "0 5px",
                        backgroundColor: "black",
                        color: "white",
                        ":hover": { color: "black", backgroundColor: "wheat" },
                      }}
                    >
                      {" "}
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;


"use client"
import { Box, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#EAF2F7",
  "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    backgroundColor: "#EAF2F7",
  },
  marginTop: "22px",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    width: "280px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const FindCars = () => {
  return (
    <Box
      marginLeft={"180px"}
      sx={{ width: "auto", height: "574px", display: "flex" }}
    >
      {" "}
      <Box position={"relative"} marginTop={"40px"}>
        {" "}
        <img
          src="/images/map/Ellipse1.png"
          alt="map"
          style={{ zIndex: 1, marginLeft: "20px" }}
        />{" "}
        <img
          src="/images/map/EllipseB.png"
          alt="map"
          style={{
            position: "absolute",
            zIndex: 0,
            left: "60px",
            top: "0px",
          }}
        />{" "}
      </Box>{" "}
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
        <Box
          position={"relative"}
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
        >
          {" "}
          <Typography
            variant="h6"
            sx={{ color: "black"}}
          >
            {" "}
            <Box position={"relative"} zIndex={1} fontSize={ "36px"} fontWeight={500}>
              So how will you find cars?{" "}
            </Box>
            <Box
              backgroundColor={"#EAF2F7"}
              width={"430px"}
              height={"36px"}
              position={"absolute"}
              top={"25px"}
              left={"-5px"}
              zIndex={0}
            ></Box>
          </Typography>{" "}
          <Box mt={"20px"} fontSize={"20px"} fontWeight={400}>
            By searching in places near you, whether they be near your place of
            work, home or even the airport. You can now look at cars everywhere
            and see their location real time.
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search cars by location"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>{" "}
      </Box>
    </Box>
  );
};
export default FindCars;

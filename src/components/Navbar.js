import React, { useState } from "react";
import {
  Menu as MenuIcon,
  Search,
  ArrowDropDownOutlined,
  NotificationImportantRounded,
  MailOutlineRounded,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/profile.jpeg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>

          {/*<Box sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems:"stretch"
          }} >
            <Box component="input" sx={{
              height: "auto",
              flex: "1 1 auto",
              minWidth: 1,
              marginBottom: "0",
              border: "0 !important",
              backgroundColor: "#f8f9fc!important",
              fontWeight: "400",
              lineHeight: 1.5,
              color: "#6e707e",
              
            }} ></Box>
          </Box>*/}

          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="0.2rem"
            p="0.1rem 1.5rem"
          width="100% !important"
          >
            <InputBase placeholder="Search..." sx={{
              width:"75% !important",
            }} />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>

        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.2rem">
          <IconButton>
            <NotificationImportantRounded sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton>
            <MailOutlineRounded sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  Rohith
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

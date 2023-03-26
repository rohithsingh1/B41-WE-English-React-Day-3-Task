import React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material';

import { useEffect,useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import FlexBetween from "./FlexBetween";
import {
  
  DashboardRounded,
  Settings,
  BuildRounded,
  FolderRounded,
  InsertChartRounded,
  TableChartRounded,
  ChevronLeft,
  ChevronRightOutlined
} from "@mui/icons-material"


const navItems=[
  {
    text: "Dashboard",
    icon : <DashboardRounded/>
  },
  {
    text:"INTERFACE",
    icon:null
  },
  {
    text: "Components",
    icon:<Settings/>
  },
  {
    text: "Utilities",
    icon:<BuildRounded/>
  },
  {
    text: "ADDONS",
    icon : null
  },
  {
    text: "Pages",
    icon:<FolderRounded/>
  },
  {
    text:"Charts",
    icon:<InsertChartRounded/>
  },
  {
    text: "Tables",
    icon:<TableChartRounded/>
  }
]


function Sidebar({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile
}) {
  const {pathname}=useLocation()
  const [active, setActive]=useState("")
  const navigate=useNavigate()
  const theme=useTheme()
  
  useEffect(() => {
    setActive(pathname.substring(1))// /dashboard
  },[pathname])
  return (
    <Box component="nav" >
      {
        isSidebarOpen&&(
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
             sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
            }}
          >
            <Box width={"100%"}>
              <Box m={"1.5rem"} >
                <FlexBetween color={theme.palette.secondary.main} >
                  <Box
                    display={"flex"}
                    alignItems="center"
                    gap={"0.5rem"} >
                    <Typography variant="h4" fontSize={"1.33rem"} >
                      SB Admin
                    </Typography>
                  </Box>
                  {!isNonMobile&&(
                    <IconButton sx={{
                      cursor:"pointer"
                    }}
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                      <ChevronLeft/>
                     </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <List>
                {
                  navItems.map((items) => {
                    if(!items.icon) {
                      return (
                        <Typography key={items.text}
                          sx={{
                          m:"1rem 0 0.5rem 0.3rem"
                          }}  >
                          {items.text}
                        </Typography>
                      )
                    }
                    const lcText=items.text.toLowerCase();
                    return (
                      <ListItem key={items.text}
                        disablePadding
                        onClick={() => {
                          /*
                           //navigate(`/${lcText}`);
                           */
                          navigate('/dashboard')
                          setActive(lcText);
                        }}
                        sx={{
                          cursor:"pointer",
                          backgroundColor:
                          active === lcText &&
                            theme.palette.secondary[300],
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        }} >
                        <ListItemIcon
                          sx={{
                            color:active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                            ml: "1rem",
                
                          }}  >
                          {items.icon}
                        </ListItemIcon>
                        <ListItemText primary={items.text} />
                        {
                          active===lcText&&(
                            <ChevronRightOutlined sx={{
                              ml:"auto"
                            }} />
                          )
                        }
                       </ListItem>
                    )
                  })
                }
              </List>
            </Box>
           </Drawer>
        )
      }
    </Box>
  )
}

export default Sidebar
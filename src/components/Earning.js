import React from 'react';
import {
  CalendarMonthRounded
} from "@mui/icons-material";
import {
  Box,
  Grid
} from "@mui/material";
import { EarningData } from '../Data';
function Earning() {
  return (
    <React.Fragment>
      <Grid container spacing={2} mt="0.58rem" >
        {
          EarningData.map((data,index) => (
             <Grid key={index} item xs={12} md={6} lg={3} >
          <Box sx={{
            borderLeft: `0.25rem solid ${data.color} !important`,
            paddingBottom: "0.5rem !important",
            paddingTop: "0.5rem !important",
            boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            wordWrap: "break-word",
            backgroundColor: "#fff",
            backgroundClip: "border-box",
            border: "1px solid #e3e6f0",
            borderRadius:"0.35rem"
          }} >
            <Box sx={{
              p: "1.25rem",
              flex:"1 1 auto"
            }} >
              <Box sx={{
                alignItems: "center",
                marginRight: 0,
                marginLeft: 0,
                display: "flex",
                flexWrap: "wrap",
                
              }} >
                <Box sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginRight: "0.5rem !important",
                  flexBasis: 0,
                  flexGrow: 1,
                  maxWidth: "100%",
                  width:"100%",
                }} >
                  <Box sx={{
                    fontSize: "0.7rem",
                    color: `${data.color}!important`,
                    fontWeight: "700 !important",
                    marginBottom: "0.25rem !important",
                    
                      }} >{data.text}</Box>
                  <Box sx={{
                    color: "#5a5c69!important",
                    fontWeight: "700 !important",
                    marginBottom: "0 !important",
                    fontSize: "1.25rem",
                    lineHeight:"1.2"
                      }} >{data.price}</Box>
                </Box>
                <Box sx={{
                  paddingRight: 0,
                  paddingLeft: 0,
                  flex: "0 0 auto",
                  width: "auto",
                  maxWidth: "100%",
                  
                }} >
                  <CalendarMonthRounded sx={{
                    color: "#dddfeb!important",
                    fontWeight: "900",
                    fontSize:"2em"
                  }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  )
}

export default Earning
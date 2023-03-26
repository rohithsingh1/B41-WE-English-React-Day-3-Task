import React from 'react';
import {
  Box,
  Grid
} from "@mui/material";
import { backgroundData } from '../Data';

function ButtonBackground() {
  return (
    <React.Fragment>
      {
        backgroundData.map((data, index) => (
           <Grid key={index} item md={6} sx={{
              marginBottom: "1.5rem !important",
              width: "100%",
              paddingRight: "0.75rem",
              paddingLeft: "0.75rem",
              
          }} >
             <Box sx={{
                color: `${data.mainColor}!important`,
                boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important",
                backgroundColor: `${data.backgroundColor}!important`,
                display: "flex",
                flexDirection: "column",
                backgroundClip: "border-box",
                border: "1px solid #e3e6f0",
                borderRadius:"0.35rem"
              }} >
                <Box sx={{
                  flex: "1 1 auto",
                  padding: "1.25rem",
                  
                }} >{data.title}
                  <Box sx={{
                    color: `${data.subColor}!important`,
                    fontSize: "80%",
                    fontWeight:"400"
            }} >
              {data.backgroundColor}
                  </Box>
                </Box>
              </Box>
            </Grid>
        ))
      }
    </React.Fragment>
  )
}

export default ButtonBackground
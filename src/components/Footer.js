import React from 'react';
import {
  Box
} from "@mui/material";

function Footer() {
  return (
    <React.Fragment>
       <Box component="footer" sx={{
        width: "100%",
        padding: "2rem 0",
        flexShrink: 0,
        backgroundColor: "#fff!important",
        color: "#858796",
        
      }} >
        <Box sx={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          width: "100%",
          margin: "auto",
          color: "#858796",
          
        }} >
          <Box sx={{
            lineHeight: 1,
            fontSize: "0.8rem",
            textAlign: "center !important",
            marginBottom: "auto",
            marginTop: "auto",
            
          }} >
            <Box component="span" >
              Copyright © Your Website 2023
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Footer
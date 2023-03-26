import React from 'react';
import {
  Box,
  Typography,
  Card
} from "@mui/material";


function Illustrations() {
  return (
    <React.Fragment>
        <Card sx={{
            marginBottom: "1.5rem !important",
            boxShadow: "0 .15rem 1.75rem 0 rgba(58,59,69,.15) !important",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            backgroundColor: "#fff",
            backgroundClip: "border-box",
            border: "1px solid #e3e6f0",
            borderRadius: "0.35rem",
          }} >
            <Box sx={{
              padding: "1rem 1.25rem",
              marginBottom: 0,
              backgroundColor: "#f8f9fc",
              borderBottom:"1px solid #e3e6f0"
            }} >
              <Typography variant="h6" sx={{
                color: "#4e73df!important",
                fontWeight: "700 !important",
                margin: "0 !important",
                fontSize: "1rem",
                lineHeight:"1.2"
              }} >Illustrations</Typography>
            </Box>
            <Box sx={{
              flex: "1 1 auto",
              padding:"1.25rem"
            }} >
              <Box sx={{
                textAlign:"center"
              }} >
                <Box component="img" sx={{
                  width: "25rem",
                  paddingLeft: "1.2rem !important",
                  paddingRight: "1.2rem !important",
                  marginTop: "1rem !important",
                  marginBottom: "1rem !important",
                  maxWidth: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  overflowClipMargin: "content-box",
                  overflow:"clip"
            }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" >
              
                </Box>
              </Box>
              <Box component="p" sx={{
                marginTop: "0",
                marginBottom: "1rem",
                color:"#858796 !important"
              }} >
                Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated
                collection of beautiful svg images that you can use completely free and without attribution!
              </Box>
              <Box component="a" target="_blank" href="https://undraw.co/" sx={{
                color: "#4e73df",
                textDecoration: "none",
                backgroundColor:"transparent"
              }} >Browse Illustrations on unDraw →</Box>
            </Box>
          </Card>
    </React.Fragment>
  )
}

export default Illustrations
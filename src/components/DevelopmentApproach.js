import React from 'react';
import {
  Box,
  Typography,
  Card
} from "@mui/material";

function DevelopmentApproach() {
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
              }} >Development Approach</Typography>
            </Box>
            <Box sx={{
              flex: "1 1 auto",
              padding:"1.25rem"
            }} >
              <Box component="p" sx={{
                marginTop: "0",
                marginBottom: "1rem",
                color:"#858796 !important"
              }} >
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS
                bloat and poor page performance. Custom CSS classes are used to create custom components
                and custom utility classes.
              </Box>
               <Box component="p" sx={{
                marginTop: "0",
                marginBottom: "1rem",
                color:"#858796 !important"
              }} >
                Before working with this theme, you should become familiar with the Bootstrap framework,
                especially the utility classes.
              </Box>
            </Box>
          </Card>
    </React.Fragment>
  )
}

export default DevelopmentApproach
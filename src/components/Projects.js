import React from 'react';
import {
  Box,
  Typography,
  Card
} from "@mui/material";
import { projectData } from '../Data';

function Projects() {
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
              backgroundColor: "f8f9fc",
              borderBottom:"1px solid #e3e6f0",
            }} >
              <Typography variant="h6" sx={{
                color: "#4e73df !important",
                fontWeight: "700 !important",
                margin: "0 !important",
                fontSize: "1rem",
                lineHeight:"1.2"
              }} >Projects</Typography>
            </Box>
            <Box sx={{
              flex: "1 1 auto",
              padding: "1.2rem",
              
        }} >
          {
            projectData.map((data, index) => (
              <React.Fragment key={index} >
                 <Typography variant="h4" sx={{
                fontWeight: "700 !important",
                fontSize: "80%",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                color:`${data.color} !important`
              }} >{data.title}
                <Typography variant="body1" sx={{
                  float: "right",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                }} >{data.percentage}%</Typography>
              </Typography>
              <Box sx={{
                width:"100%",
                marginBottom: "1.5rem !important",
                display: "flex",
                height: "1rem",
                overflow: "hidden",
                lineHeight: 0,
                fontSize: "0.75rem",
                backgroundColor: "#eaecf4",
                borderRadius:"0.35rem"
              }} >
                <Box component={"div"} role={"progressbar"} aria-valuenow={data.percentage} aria-valuemin="0" aria-valuemax="100" sx={{
                  width: `${data.percentage}%`,
                  background:`${data.color}!important`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace:"nowrap",
                }} ></Box>
              </Box>
              </React.Fragment>
            ))
          }
             

               {/*<Typography variant="h4" sx={{
                fontWeight: "700 !important",
                fontSize: "80%",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                color:"#858796 !important"
              }} >Sales Tracking
                <Typography variant="body1" sx={{
                  float: "right",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                }} >40%</Typography>
              </Typography>
              <Box sx={{
                width:"100%",
                marginBottom: "1.5rem !important",
                display: "flex",
                height: "1rem",
                overflow: "hidden",
                lineHeight: 0,
                fontSize: "0.75rem",
                backgroundColor: "#eaecf4",
                borderRadius:"0.35rem"
              }} >
                <Box component={"div"} role={"progressbar"} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" sx={{
                  width: "40%",
                  backgroundColor: "#f6c23e !important",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition:"width 0.6s ease"
                }} ></Box>
              </Box>*/}

               {/*<Typography variant="h4" sx={{
                fontWeight: "700 !important",
                fontSize: "80%",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                 color:"#858796 !important"
              }} >Customer Database
                 <Typography variant="body1" sx={{
                  float: "right",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                }} >60%</Typography>
              </Typography>
              <Box sx={{
                width:"100%",
                marginBottom: "1.5rem !important",
                display: "flex",
                height: "1rem",
                overflow: "hidden",
                lineHeight: 0,
                fontSize: "0.75rem",
                backgroundColor: "#eaecf4",
                borderRadius:"0.35rem"
              }} >
                <Box component={"div"} role={"progressbar"} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" sx={{
                  width: "60%",
                  backgroundColor: "#4e73df",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition:"width 0.6s ease"
                }} ></Box>
              </Box>

               <Typography variant="h4" sx={{
                fontWeight: "700 !important",
                fontSize: "80%",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                color:"#858796 !important"
              }} >Payout Details
                <Typography variant="body1" sx={{
                  float: "right",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                }} >80%</Typography>
              </Typography>
              <Box sx={{
                width:"100%",
                marginBottom: "1.5rem !important",
                display: "flex",
                height: "1rem",
                overflow: "hidden",
                lineHeight: 0,
                fontSize: "0.75rem",
                backgroundColor: "#eaecf4",
                borderRadius:"0.35rem"
              }} >
                <Box component={"div"} role={"progressbar"} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" sx={{
                  width: "80%",
                  backgroundColor: "#36b9cc !important",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition:"width 0.6s ease"
                }} ></Box>
              </Box>

               <Typography variant="h4" sx={{
                fontWeight: "700 !important",
                fontSize: "80%",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                color:"#858796 !important"
              }} >Account Setup
                <Typography variant="body1" sx={{
                  float: "right",
                marginBottom: "0.5rem",
                lineHeight: "1.2",
                }} >complete!</Typography>
              </Typography>
              <Box sx={{
                width:"100%",
                marginBottom: "1.5rem !important",
                display: "flex",
                height: "1rem",
                overflow: "hidden",
                lineHeight: 0,
                fontSize: "0.75rem",
                backgroundColor: "#eaecf4",
                borderRadius:"0.35rem"
              }} >
                <Box component={"div"} role={"progressbar"} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" sx={{
                  width: "100%",
                  backgroundColor: "#1cc88a !important",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: "#fff",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition:"width 0.6s ease"
                }} ></Box>
              </Box>*/}

            </Box>
          </Card>
    </React.Fragment>
  )
}

export default Projects
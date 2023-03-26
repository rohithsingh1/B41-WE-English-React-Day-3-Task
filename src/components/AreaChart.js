import React from 'react';
import {
  MoreVertRounded
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton
} from "@mui/material";
import Chart from "react-apexcharts";
import { AreaChartData } from '../Data';

function AreaChart() {
  return (
    <React.Fragment>
       <Card sx={{
            marginRight:"0.5rem !important",
            marginBottom: "1.5rem !important",
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
              paddingBottom: "1rem !important",
              paddingTop: "1rem !important",
              alignItems: "center !important",
              justifyContent: "space-between !important",
              flexDirection: "row !important",
              display: "flex !important",
              padding: ".75rem 1.25rem",
              marginBottom: "0",
              backgroundColor: "#f8f9fc",
              borderBottom: "1px solid #e3e6f0",
              
            }} >
              <Typography variant="h6" sx={{
                color: "#4e73df!important",
                fontWeight: "700 !important",
                margin: "0 !important",
                fontSize: "1rem",
                lineHeight:"1.2"
              }} >Earning Overview</Typography>
              <IconButton>
                <MoreVertRounded sx={{
                  color:"black"
                }} />
              </IconButton>
            </Box>
            <CardContent sx={{
              flex: "1 1 auto",
              padding:"1.25rem"
            }} >
              <Box sx={{
                height: "20rem",
                width:"100%",
              }} >
            <Chart type="area" height={"300px"}
              series={AreaChartData.areaChartSeries}
              options={AreaChartData.areaChartOptions} />
              </Box>
            </CardContent>
          </Card>
    </React.Fragment>
  )
}

export default AreaChart
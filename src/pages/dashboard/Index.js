import React from 'react';
import {
  DownloadOutlined
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid
} from "@mui/material";
import Earning from '../../components/Earning';
import AreaChart from '../../components/AreaChart';
import Donut from '../../components/Donut';
import Projects from '../../components/Projects';
import ButtonBackground from '../../components/ButtonBackground';
import Illustrations from '../../components/Illustrations';
import DevelopmentApproach from '../../components/DevelopmentApproach';
import Footer from '../../components/Footer';


function Index() {
  
  return (
    <Box m={"1.5rem"} >

      <Box sx={{
        marginBottom: "1.5rem !important",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        color:"#858796"
      }} >
        <Box component="h1" sx={{
          color: "#fff !important",
          marginBottom: "0 !important",
          fontSize: "1.75rem",
          fontWeight: "400",
          lineHeight:1.2
        }} >Dashboard</Box>
        <Button sx={{
          cursor: "pointer",
          boxShadow: "0 .125rem .25rem 0 rgba(58,59,69,.2)!important",
          display: "inline-block",
          padding: "0.25rem 0.5rem",
          fontSize: "1.1rem",
          lineHeight: 1.2,
          borderRadius: "0.2rem",
          color: "#fff",
          backgroundColor: "#4e73df",
          borderColor: "#4e73df",
          fontWeight: "bold",
          textAlign: "center",
          verticalAlign: "middle",
          border: "1px solid transparent",
          
        }} >
          <DownloadOutlined sx={{
            fontWeight: "900",
            marginRight:"0.25rem"
          }} />
          Generate Report
        </Button>
      </Box>

      <Earning />
      
      <Grid container mt="0.58rem" >

        <Grid item xs={12} md={12} lg={7} >
         <AreaChart/>
        </Grid>

        <Grid item xs={12} md={12} lg={5} >
          <Donut/>
        </Grid>

      </Grid>

      <Grid container spacing={2} mt="0.58rem" >

        <Grid item xs={12} md={12} lg={6} >
         <Projects/>
        </Grid>

        <Grid item xs={12} md={12} lg={6} sx={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-0.75rem",
            marginLeft: "-0.75rem",
            
          }} >
         <ButtonBackground/>
        </Grid>

        <Grid item xs={12} md={12} lg={6} >
          <Illustrations/>
        </Grid>

        <Grid item xs={12} md={12} lg={6}  >
          <DevelopmentApproach/>
        </Grid>
        
      </Grid>

     <Footer/>
    </Box>
  )
}

export default Index















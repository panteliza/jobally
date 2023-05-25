import React from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import Header2 from "../Header2";
import InternCard from "../InternMain/InternCard";
import SearchBar2 from "../SearchBar2/searchbar2";
import Middle from "../../middle/middle";


export default function Jobs() {
  return (
    < ThemeProvider theme={theme} >
      <Header2 />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar2 />
          <InternCard/>
          
        </Grid>
      </Grid>
    </ThemeProvider >
  )
};
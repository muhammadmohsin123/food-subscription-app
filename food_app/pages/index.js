import axios from "axios";
import { useEffect, useState } from "react";

import { Container, Grid, Paper, Typography } from "@mui/material/";
import FoodTable from "../components/food-table/foodTable";
export default function Home() {
  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 12, mb: 4 }}>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                // flexDirection: "column",
                height: 50,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography>Weekly Menu</Typography>
              {/* <Orders /> */}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FoodTable />
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </div>
  );
}

//Getting data from json

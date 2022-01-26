import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FoodTable from "./foodTable";
export default function FoodTableList() {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
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
  );
}

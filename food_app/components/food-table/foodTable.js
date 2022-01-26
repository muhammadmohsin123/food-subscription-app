import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../public/data.json";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    data[
      "7-spices-carribean-restaurant-new-york"
    ].items[0].entries.items[0].entries.items.map((el) => el.name),
    159,
    6.0,
    24,
    4.0
  ),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const days = ["Mon", "Tues", "Wed", "Thur", "Fri"];
export default function FoodTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Days</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align='right'>Price</StyledTableCell>
            <StyledTableCell align='right'>Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[
            "7-spices-carribean-restaurant-new-york"
          ].items[0].entries.items[0].entries.items.map((el, i) => (
            <StyledTableRow key={el.name}>
              {
                <>
                  <StyledTableCell component='th' scope='row'>
                    {days[i]}
                  </StyledTableCell>

                  <StyledTableCell component='th' scope='row'>
                    {el.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{el.price}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {el.description}
                  </StyledTableCell>
                </>
              }

              {/* <StyledTableCell align='right'>{row.calories}</StyledTableCell>
              <StyledTableCell align='right'>{row.fat}</StyledTableCell>
              <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
              <StyledTableCell align='right'>{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

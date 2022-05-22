import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ExpensesList() {
  const [state, setState] = React.useState({
    data: [],
    loaded: false,
    placeholder: "Loading"
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/cost/")
      .then(response => {
        if (response.status > 400) {
          return setState({ ...state, placeholder: "Something went wrong!" });
        }
        return response.json();
      })
      .then(data => {
        setState({
            ...state,
            data,
            loaded: true
        });
      });
  }, [])

    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>store_name</TableCell>
                <TableCell align="right">purchase_on</TableCell>
                <TableCell align="right">price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.data.map((contact: any) => (
                <TableRow
                  key={contact.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {contact.store_name}
                  </TableCell>
                  <TableCell align="right">{contact.purchase_on}</TableCell>
                  <TableCell align="right">{contact.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}

export default ExpensesList;

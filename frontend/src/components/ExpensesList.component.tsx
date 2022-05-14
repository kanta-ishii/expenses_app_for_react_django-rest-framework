import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {};
type State = {
  data: any,
  loaded: boolean,
  placeholder: string
};

class ExpensesList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/cost/")
      .then(response => {
        if (response.status > 400) {
          return this.setState({ placeholder: "Something went wrong!" });
        }
        return response.json();
      })
      .then(data => {
        this.setState({
            data,
            loaded: true
        });
      });
  }

  render() {
    return (
      <div>
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
              {this.state.data.map((contact: any) => (
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
      </div>
    );
  }
}

export default ExpensesList;

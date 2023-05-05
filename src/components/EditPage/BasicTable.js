import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { useState,useEffect} from 'react';
import axios from 'axios'
import { Typography} from '@mui/material';
import { Link } from 'react-router-dom';

export default function BasicTable() {

    const [baseObj, setBaseObj] = useState([]);
  

    
 
 useEffect(() => {
  const url="http://localhost:3004/party";
 axios({
    meth2od: "get",
    url: url
  })
    .then(res => {
      console.log(res.data);
      setBaseObj(res.data)

      // optionally update the state or show a success message
    })
    .catch(err => {
      console.error(err);
      // show an error message if something went wrong
    })
  }, []);


  return (
    <>
    <Box marginTop={10}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Id</TableCell>
              <TableCell align='right'>Party Code</TableCell>
              <TableCell align='right'>Party Name</TableCell>
              <TableCell align='right'>Pan No</TableCell>
              <TableCell align='right'>Tan No</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {baseObj.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{row.id}</TableCell>
                <TableCell align='right'>{row.partyname}</TableCell>
                <TableCell align='right'>{row.partycode}</TableCell>
                <TableCell align='right'>{row.pannumber}</TableCell>
                <TableCell align='right'>{row.tannumber}</TableCell>
                <TableCell><Typography component={Link} to="/party" sx={{color:"black" }}><i class="bi bi-pencil-square"></i></Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </Box>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllService = () => {

    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageService(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("You would like to delete?")
        if (proceed) {
            fetch(`https://fast-cliffs-19766.herokuapp.com/services/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = manageService.filter(order => order._id !== id)
                        setManageService(remaining)
                    }
                })
        }
    }
    return (
        <TableContainer component={Paper}>
            <Typography className="my-3" variant="h4">Manage Services</Typography>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Service Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {manageService.map((row) => (
                        <TableRow key={row._id}>

                            <TableCell sx={{ width: 250 }} align="left">{row.title}</TableCell>
                            <TableCell sx={{ width: 250 }} align="left">{row.price}.99$</TableCell>
                            <TableCell sx={{ width: 350 }} align="left">{row.description}
                                <p>{row.feOne}</p>
                                <p>{row.feTwo}</p>
                                <p>{row.feThree}</p>
                                <p>{row.feFour}</p>
                            </TableCell>

                            <TableCell align="left">
                                <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
};


export default ManageAllService;
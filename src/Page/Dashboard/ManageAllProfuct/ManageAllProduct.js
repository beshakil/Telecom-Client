import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllProduct = () => {

    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("You would like to delete?")
        if (proceed) {
            fetch(`https://fast-cliffs-19766.herokuapp.com/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = manageProduct.filter(order => order._id !== id)
                        setManageProduct(remaining)
                    }
                })
        }
    }
    return (
        <TableContainer component={Paper}>
            <Typography className="my-3" variant="h4">Manage Products</Typography>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Items Image</TableCell>
                        <TableCell align="left">Items Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {manageProduct.map((row) => (
                        <TableRow key={row._id}>

                            <TableCell sx={{ width: 150 }} align="left">
                                <img className="h-24 w-24 " src={`data:image/png;base64,${row?.image}`} alt=""></img>
                            </TableCell>
                            <TableCell sx={{ width: 250 }} align="left">{row.title}</TableCell>
                            <TableCell sx={{ width: 150 }} align="left">{row.price}.99$</TableCell>
                            <TableCell sx={{ width: 350 }} align="left">{row.description.slice(0, 115)}</TableCell>

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

export default ManageAllProduct;
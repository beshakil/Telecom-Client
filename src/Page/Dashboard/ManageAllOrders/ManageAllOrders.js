import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import { Button, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrders = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/orders/all')
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("You would like to delete?")
        if (proceed) {
            fetch(`https://fast-cliffs-19766.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orderData.filter(order => order._id !== id)
                        setOrderData(remaining)
                    }
                })
        }
    }
    const handleConfirm = (id) => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch('https://fast-cliffs-19766.herokuapp.com/orders/all')
                        .then(res => res.json())
                        .then(data => setOrderData(data))
                    alert("Order Confirm updated");
                }
            })
    }

    return (

        <TableContainer component={Paper}>
            <Typography className="my-3" variant="h4">Manage orders</Typography>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product/Service Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Customer Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Payment</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Delete Order</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData.map((row) => (
                        <TableRow key={row._id}>

                            <TableCell sx={{ width: 150 }} align="left">{row.orderName}</TableCell>
                            <TableCell sx={{ width: 150 }} align="left">{row.price}.99$</TableCell>
                            <TableCell sx={{ width: 200 }} align="left">{row.title}</TableCell>
                            <TableCell sx={{ width: 200 }} align="left">{row.email}</TableCell>
                            <TableCell sx={{ width: 200 }} align="left">{row.address}</TableCell>

                            <TableCell sx={{ width: 200 }} align="left">{row.payment ? 'Paid' :
                                <Button variant="contained" className="">Not Paid</Button>
                            }</TableCell>



                            <TableCell sx={{ width: 50 }} align="center">
                                {
                                    row.status === 200 ? <Button sx={{ mx: 2, color: "green" }}>Confirmed</Button> : <Button type="submit" onClick={() => handleConfirm(row._id)} variant="contained" sx={{ mx: 2, background: "" }}>Confirm</Button>
                                }

                            </TableCell>

                            <TableCell align="left">

                                {
                                    <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">{row?.status === 200 ? "Cancel" : "Delete"}</Button>
                                }

                            </TableCell>
                        </TableRow>


                    ))}
                </TableBody>

            </Table>
        </TableContainer >
    );

};

export default ManageAllOrders;

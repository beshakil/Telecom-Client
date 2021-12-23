import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const { user } = useAuth();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [user?.email])

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

    return (
        <div>
            <TableContainer component={Paper}>
                <Typography className="my-3" variant="h4">My orders</Typography>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Items Name</TableCell>
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
                        {orderData?.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell sx={{ width: 150 }} align="left">{row.orderName}</TableCell>
                                <TableCell sx={{ width: 150 }} align="left">{row.price}.99$</TableCell>
                                <TableCell sx={{ width: 200 }} align="left">{row.title}</TableCell>
                                <TableCell sx={{ width: 200 }} align="left">{row.email}</TableCell>
                                <TableCell sx={{ width: 200 }} align="left">{row.address}</TableCell>

                                <TableCell sx={{ width: 200 }} align="left">{row.payment ? 'Paid' :
                                    <Link to={`/dashboard/payment/${row._id}`}> <Button variant="contained" className="">Pay</Button> </Link>
                                }</TableCell>


                                <TableCell sx={{ width: 50 }} align="center">
                                    {
                                        row.status === 200 ? <Button sx={{ color: "green" }}>Confirm</Button>
                                            : <Button sx={{ color: "#FF8C00" }}> Pending</Button>
                                    }
                                </TableCell>

                                <TableCell align="left">
                                    {
                                        row.status === 200 ? <Button disabled variant="contained">Delete</Button> : <Button onClick={() => handleDelete(row._id)} sx={{ background: "#B21807" }} variant="contained">Delete</Button>
                                    }
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;
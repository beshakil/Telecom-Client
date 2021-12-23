import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const ManageAdmin = () => {
    const { user } = useAuth();

    const [manageAdmin, setManageAdmin] = useState([])
    // const admin = manageAdmin.filter(item => item.email === user.email)

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/users?role=admin')
            .then(res => res.json())
            .then(data => setManageAdmin(data))
    }, [user?.email])

    return (
        <div className="">
            <div className="container pt-5 pb-5">

                < div className="text-center" >
                    <h1 className='pb-4 text-2xl'>Total Admin: <span className="span"> {manageAdmin.length}</span></h1>
                </div >

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto p-8 mt-5 mb-5">
                    {manageAdmin.map((row) => (
                        <div className="content" key={row._id}>
                            <h3 className="text-2xl pt-3 m-0 font-bold text-gray-800 hover:text-indigo-600">{row.displayName}</h3>
                            <p className="text-md text-gray-800 pb-5">{row.email}</p>
                            {/* <div>
                                <Button type="submit" onClick={() => handleConfirm(row._id)} variant="contained" sx={{ mx: 2, background: "" }}>Delete Admin</Button>
                            </div> */}
                        </div>
                    ))}
                </div>
                {/* {success && <Alert severity="success">Review Delete Cancel Successfully</Alert>} */}
            </div >
        </div >
    );
};

export default ManageAdmin;
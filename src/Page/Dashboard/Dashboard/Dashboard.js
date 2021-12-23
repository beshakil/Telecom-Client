import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, Outlet } from 'react-router-dom'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ReviewsIcon from '@mui/icons-material/Reviews';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 260;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#1F2937' }}>
            <div style={{ backgroundColor: '#1F2937' }} className="text-white">
                <div>
                    <p className="p-4 text-2xl"> <Link to="/home">Classic Telecom</Link></p>
                </div>
                {/* <Toolbar /> */}
                <Divider style={{ backgroundColor: 'white' }} />

                <div className="">
                    <Link to="/dashboard/dashboardHome"><p className="p-3 text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <DashboardCustomizeIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Dashboard</span> </p></Link>
                </div>
                <div className="">
                    <Link to="/dashboard/myOrder"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <BookmarkAddIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">My Order</span> </p></Link>
                </div>
                {/* <div className="">
                <Link to="/home"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <AccountBalanceWalletIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Payment</span> </p></Link>
            </div> */}
                <div className="">
                    <Link to="/dashboard/myallReview"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <ReviewsIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">My All Review</span> </p></Link>
                </div>
                <div className="">
                    <Link to="/dashboard/createReview"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <RateReviewIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Create New Review</span> </p></Link>
                </div>
                <div className="">
                    <Link to="/dashboard/myAccount"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <AccountCircleIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">My Account</span> </p></Link>
                </div>
                <hr />



                {admin && <div>
                    <div className="">
                        <Link to="/dashboard/manageAllOrder"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <ShoppingCartIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Manage All Orders</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/makeAdmin"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <AdminPanelSettingsIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Make Admin</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/manageAdmin"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <SupervisorAccountIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Manage Admin</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/addNewService"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <HomeRepairServiceIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Add New Service</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/manageAllService"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <AutoDeleteIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Manage All Service</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/addNewProduct"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <AddBusinessIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Add New Product</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/manageAllProduct"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <DeleteSweepIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Manage All Product</span> </p></Link>
                    </div>
                    <div className="">
                        <Link to="/dashboard/manageReview"><p className="p-3 text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <ReviewsIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-3">Manage Review</span> </p></Link>
                    </div>
                    <hr />
                </div>}

                <div className="">
                    <Link to="/home"><p className="p-3  text-lg text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <LogoutIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <button className="pl-3" onClick={logout}>Logout</button> </p></Link>
                </div>

                <Divider />
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ backgroundColor: '#1F2937' }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <p className="p-3 text-xl text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <Link to="/home">Home</Link></p>
                    </div>
                    <div>
                        <p className="p-3 text-xl text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <Link to="/products">Products</Link></p>
                    </div>
                    <div>
                        <p className="p-3 text-xl text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"> <Link to="/services">Services</Link></p>
                    </div>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    style={{ backgroundColor: '#1F2937' }}
                    open
                >
                    {drawer}
                </Drawer>


            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}

            >
                <Toolbar />
                <Outlet ></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
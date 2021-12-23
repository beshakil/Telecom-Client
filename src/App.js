
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Page/Home/Home/Home';
import Login from './Page/Home/Login/Login/Login';
import Register from './Page/Home/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Page/Home/AboutUs/AboutUs'
import ContractUs from './Page/Home/ContractUs/ContractUs'
import PrivateRoute from './Page/Home/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Page/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Page/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Page/Home/Login/AdminRoute/AdminRoute';
import AddNewProduct from './Page/Dashboard/AddNewProduct/AddNewProduct';
import Products from './Page/Products/Products';
import AddNewService from './Page/Dashboard/AddNewService/AddNewService';
import Services from './Page/Services/Services';
import Movies from './Page/Movies/Movies';
import ProductDetails from './Page/ProductDetails/ProductDetails';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
import MyOrder from './Page/Dashboard/MyOrder/MyOrder';
import ManageAllOrders from './Page/Dashboard/ManageAllOrders/ManageAllOrders';
import CreateReview from './Page/Dashboard/CreateReview/CreateReview';
import MyAllReview from './Page/Dashboard/MyAllReview/MyAllReview';
import ManageReview from './Page/Dashboard/ManageReview/ManageReview';
import ManageAllProduct from './Page/Dashboard/ManageAllProfuct/ManageAllProduct';
import ManageAllService from './Page/Dashboard/ManageAllService/ManageAllService';
import ManageAdmin from './Page/Dashboard/ManageAdmin/ManageAdmin';
import MyAccount from './Page/Dashboard/MyAccount/MyAccount';
import DashboardHome from './Page/Dashboard/DashboardHome/DashboardHome';
import Payment from './Page/Dashboard/Payment/Payment';


function App() {

  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>

            <Route exact path="/productDetails/:productId" element={<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>}></Route>
            <Route exact path="/serviceDetails/:serviceId" element={<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>}></Route>

            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/contractUs" element={<ContractUs></ContractUs>}></Route>

            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route path={`/dashboard/dashboardHome`} element={<DashboardHome></DashboardHome>}></Route>
              <Route path={`/dashboard/myOrder`} element={<MyOrder></MyOrder>}></Route>
              <Route path={`/dashboard/payment/:payId`} element={<Payment></Payment>}></Route>
              <Route path={`/dashboard/myallReview`} element={<MyAllReview></MyAllReview>}></Route>
              <Route path={`/dashboard/createReview`} element={<CreateReview></CreateReview>}></Route>
              <Route path={`/dashboard/myAccount`} element={<MyAccount></MyAccount>}></Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}></Route>
              <Route path={`/dashboard/manageAdmin`} element={<AdminRoute><ManageAdmin></ManageAdmin></AdminRoute>}></Route>
              <Route path={`/dashboard/addNewProduct`} element={<AdminRoute><AddNewProduct></AddNewProduct></AdminRoute>}></Route>
              <Route path={`/dashboard/addNewService`} element={<AdminRoute><AddNewService></AddNewService></AdminRoute>}></Route>
              <Route path={`/dashboard/manageAllService`} element={<AdminRoute><ManageAllService></ManageAllService></AdminRoute>}></Route>
              <Route path={`/dashboard/manageAllOrder`} element={<AdminRoute><ManageAllOrders></ManageAllOrders></AdminRoute>}></Route>
              <Route path={`/dashboard/manageAllProduct`} element={<AdminRoute><ManageAllProduct></ManageAllProduct></AdminRoute>}></Route>
              <Route path={`/dashboard/manageReview`} element={<AdminRoute><ManageReview></ManageReview></AdminRoute>}></Route>
            </Route>



          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

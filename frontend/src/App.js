import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


// pages & components
// import Home from './pages/Home'
import Product from './pages/Product'
import AdminNavbar from './components/Navbar/AdminNavbar'
import UserNavbar from './components/Navbar/UserNavbar'
import AddEmployee from './components/Employee/AddEmployee'
import Login from "./components/LoginandSignUp/loginComponent";
import SignUp from "./components/LoginandSignUp/signupcomponent";
import UserDetails from "./components/User/userDetails";
import UserHome from './pages/userHome'
import HomePage from './pages/HomePage'
import ShowEmployee from './components/Employee/ShowSaleAgenttoCustomer'
import AddBranch from './components/Branch/AddBranch'
import ShowBranches from './components/Branch/ShowBranch'
import AddSupplier from './components/Supplier/AddSupplier'

// import Employee from './pages/Employee'
axios.defaults.baseURL =  "http://localhost:4000"

// axios.defaults.baseURL =  "http://localhost:4000/api/employees"
// axios.defaults.baseURL =  "http://localhost:4000/api/branches"


function App() {
  const location = useLocation()
  const currentRoute = location.pathname
  const adminRoutes = [
    "/employee",
    "/products",
    "/userDetails",
    "/branch",
    "/supplier"
  ]
  const userRoutes = [
    "/home",
    "/showEmployee",
    "/showBranches"
  ]
  
  const shouldShowNavAdmin = adminRoutes.includes(currentRoute)
  const shouldShowNavUser = userRoutes.includes(currentRoute)


  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      
      {shouldShowNavAdmin && <AdminNavbar/>}
      {shouldShowNavUser && <UserNavbar/>}
         
         <div className="pages">
          <Routes>
             <Route
               exact
               path="/home"
               element={isLoggedIn == "true" ?  <HomePage/>  : <Login />}
             />
             <Route path="/userDetails" element={<UserDetails/>} />
             <Route path="/supplier" element={<AddSupplier/>} />
             <Route path="/employee" element={<AddEmployee/>} />
             <Route path="/branch" element={<AddBranch/>} />
             <Route path="/showEmployee" element={<ShowEmployee/>} />
             <Route path="/showBranches" element={<ShowBranches/>} />
             {/* <Route path="/" element={<Home />}/> */}
             <Route path="/products" element={<Product />}/>
             <Route path="/" element={<Login />} />
             <Route path="/sign-up" element={<SignUp />} />
             <Route path="/userHome" element={<UserHome />} />
          </Routes>
        </div>
     
    </div>
  );
}

export default App;
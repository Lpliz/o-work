import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import {Container,Row,Col} from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Menu from "./components/Menu";
import {BrowserRouter ,Routes , Route} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Showalltech from "./components/Showalltech";
import TechnicianSignup from './components/Addtech';
import CustSignup from './components/AddCust';
import Login from './components/LoginComp';
import MainHome from './components/MainHome';
import About from './components/Aboutus';
import CustDash from './components/CustomerDash';
import TechDash from './components/TechnicianDash';
import Citydash from './components/Citydash';
import Service_dash from './components/Service_dash';
import MainCustDash from './components/MainCustdash';
import Dashboard from './components/Dashboardd';
import Review from './components/Reviews';
import Myorders from './components/Myorder';
import GiveratingApp from './components/Ratinggiving';
import AdminDash from './components/Admindash';
import Query from './components/Faqs';
import Contact from './components/Contact';
function App() {
  
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainHome/>}  />
      <Route path='/api/technician/signup' element={<TechnicianSignup />} />
      <Route path='/api/customer/signup' element={<CustSignup />} />
      <Route path='/api/login' element={<Login />} />
      <Route path='/aboutus' element={<About/>} />
      <Route path='/api/customer/:email' element={<CustDash/>} />
      <Route path='/api/technician/:email' element={<TechDash/>} />
      <Route path='/api/customer/ser/:email' element={<Service_dash />} />
      <Route path='/api/customer/dash/:email/:service' element={< Dashboard />} />
      <Route path='/api/customer/dash/:email/:service' element={< Dashboard />} />
      <Route path='/api/reviews/:email' element={< Review />} />
      <Route path='/api/orders/:email' element={< Myorders />} />
      <Route path='/api/addreview/:custemail/:techemail' element={< GiveratingApp />} />
      <Route path='/api/admin/:email' element={< AdminDash />} />
      <Route path='/api/faqs' element={< Query />} />
      <Route path='/api/contactus' element={< Contact />} />
    </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;

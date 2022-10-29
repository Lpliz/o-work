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
    </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;

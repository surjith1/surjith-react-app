import { Link } from "react-router-dom";
import { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SideBar = (props)=> {
    const [inactive, setInActive] = useState(false);
    return (
        <div className={`bg-primary left ${inactive ? "inactive" :""}`}>
        <nav  className="navbar">
        <h2><i className="fas fa-laugh-wink"></i><span className="title-admin">SB ADMIN<sup>2</sup></span></h2>
        <ul className="nav-bar-cus">
        <li className="nav-item"><i className="fas fa-fw fa-tachometer-alt"></i><Link to="/">Dashboard</Link></li>
        <li className="nav-item dropdown">
        <h6 className="opa-50">INTERFACE</h6>
        
        <button  className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-fw fa-cog"></i> Components</button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <h6 className="text-center opa-50">CUSTOM COMPONENTS</h6>
        <li className="dropdown-item"><Link to="/button">Button</Link></li>
        <li className="dropdown-item"><Link to="/cards">Cards</Link></li>
        </ul>
        </li>
        <li className="nav-item dropdown">
       
        <button  className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
        aria-expanded="false"><i className="fas fa-fw fa-wrench"></i> <span> Utilities</span></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <h6 className="text-center opa-50">CUSTOM UTILITIES</h6>
        <li className="dropdown-item"><Link to="/color">Color</Link></li>
        <li className="dropdown-item"><Link to="/border">Borders</Link></li>
        <li className="dropdown-item"><Link to="/animation">Animations</Link></li>
        <li className="dropdown-item"><Link to="/other">Other</Link></li>
        </ul>
        </li>
        
        <li className="nav-item dropdown">
        <h6 className="opa-50">ADDONS</h6>
        <button  className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
aria-expanded="false"><i className="fas fa-fw fa-folder"></i> <span>Pages</span></button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<h6 className="text-center opa-50">LOGIN SCREENS</h6>
<li className="dropdown-item"><Link to="/login">Login</Link></li>
<li className="dropdown-item"><Link to="/register">Register</Link></li>
<li className="dropdown-item"><Link to="/forgotpassword">Forgot Password</Link></li>
<h6 className="text-center opa-50">LOGIN SCREENS</h6>
<li className="dropdown-item"><Link to="/error">404 Pages</Link></li>
<li className="dropdown-item"><Link to="/blank">Blank Pages</Link></li>
</ul>
        </li>
        <li className="nav-item"> <i className="fas fa-fw fa-chart-area"></i> <Link to="/chart">Charts</Link></li>
        <li className="nav-item"> <i className="fas fa-fw fa-table"></i> <Link to="/table">Tables</Link></li>
        </ul>
        </nav>
        <div className="text-center d-flex justify-content-center">
    <button onClick={()=>setInActive(!inactive)} className="rounded-circle border-0" id="sidebarToggle"></button>
</div>
        </div>
        
    );
};
export default SideBar;
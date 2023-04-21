import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Number Wizz</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#0746a3',
          borderRadius: '8px' 
        }}>New Invoice</Link> 
        <Link to="/approvedInvoices" style={{ 
          color: 'white', 
          backgroundColor: '#4CB95A',
          borderRadius: '8px' 
        }}>Approved</Link>
        <Link to="/drafts" style={{ 
          color: 'white', 
          backgroundColor: '#c95021',
          borderRadius: '8px' 
        }}>Drafts</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
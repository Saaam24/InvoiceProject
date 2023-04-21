import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Drafts from './Drafts';
import React from 'react';
import AppInvoices from './AppInvoices';


function App() {
  return (
    <BrowserRouter>
     <div className="App"> 
     <div className="content">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/approvedInvoices" element ={<AppInvoices />} />
      <Route path="/drafts" element={<Drafts />} />
    </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

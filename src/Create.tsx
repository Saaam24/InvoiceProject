import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [contact, setContact] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();


const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
     const invoice = {invoiceNumber, contact, amount, draft: false}
     
     navigate("/")

    fetch('https://localhost:7289/api/invoice', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice)
    }).then(() => {
        console.log('new invoice added');
      })
    }
    
    const handleGoDrafts = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
       const invoices = {invoiceNumber, contact, amount, draft: true}
       
       navigate("/drafts")
  
      fetch('https://localhost:7289/api/invoice', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoices)
      }).then(() => {
          console.log('draft added');
        })
      }
      

      
  return (
    <div className="create">
      <h2>Add a New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>Invoice number:</label>
        <input 
          type="text" 
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <label>Contact:</label>
        <textarea
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></textarea>
        <label>Invoice Amount:</label>
        <input 
        type="number"
        value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button>Add Invoice</button>
      </form>  
      <div className="draftsbtn">
        <button onClick={handleGoDrafts}> Save as Draft</button>
      </div>
    </div>
  );
}
 
export default Create;
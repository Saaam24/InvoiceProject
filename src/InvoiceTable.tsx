

import React from "react";


const InvoiceTable = ({ data}: {data: any }) =>{
    return (
      <div className="invoice-table">
        <tbody>
        <tr>
          <th>Invoice Number</th>
          <th>Contact</th>
          <th>Amount</th>
          <th>Invoice Status</th>
        </tr>
        {data.map((invoices: any, i: any) => (
          <tr key={i}>
            <td>{invoices.invoiceNumber}</td>
            <td>{invoices.contact}</td>
            <td>{invoices.amount}</td>
            <th>{invoices.draft ? 'Draft' : 'Approved' } </th>
          </tr>
        ))}
      </tbody>
          </div>
        )}

  export default InvoiceTable;

   
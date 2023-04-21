// import React from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const InvoiceDetails = () => {
//   const {id} = useParams()
//   const { data: invoice, error, isPending } = useFetch('https://localhost:7289/api/invoice' + id);

//   return (
//     <div className="invoice-details">
//        { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { invoice && (
//         <article>
//           <h2>Invoice number: { invoice.invoiceNumber }</h2>
//           <p>Contact: { invoice.contact }</p>
//           <div>Invoice Amount: { invoice.amount }</div>
//         </article>
//       )}
//     </div>
//   );
// }
 
// export default InvoiceDetails;


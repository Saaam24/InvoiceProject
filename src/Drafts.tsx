import React from "react";
import InvoiceTable from "./InvoiceTable";
import useFetch from "./useFetch";

const Drafts = () => {
  const { data: invoices, isPending, error} = useFetch('https://localhost:7289/api/invoice')
  const draftInvoices = invoices.filter(invoice => invoice.draft);

  return (
    <div className="draft">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { invoices && <InvoiceTable data={draftInvoices} />}
    </div>
  )
}
 
export default Drafts;

import React from "react";
import InvoiceTable from "./InvoiceTable";
import useFetch from "./useFetch";

const Home = () => {
  const { data: invoices, isPending, error  } = useFetch('https://localhost:7289/api/invoice')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { invoices && <InvoiceTable data={invoices} />}
    </div>
  );
}
 
export default Home;
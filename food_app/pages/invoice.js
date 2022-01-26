import React from "react";
import InvoicePage from "../components/invoice/components/InvoicePage";

function Invoice() {
  return (
    <div className='app'>
      <h1 className='center fs-30'>React Invoice Generator</h1>
      <InvoicePage />
    </div>
  );
}

export default Invoice;

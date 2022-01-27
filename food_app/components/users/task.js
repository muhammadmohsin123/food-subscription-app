// import classes from "./Task.module.css";
import { Icon } from "@shopify/polaris";
import { ReceiptMajor } from "@shopify/polaris-icons";

import React from "react";

export default function Task(props) {
  return (
    <div className='container-task'>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            marginLeft: "16px",
          }}
        >
          <p className='text-task'>TOTAL TASKS</p>
          <p className='text-2-task'>25</p>
        </div>
      </div>
      <div className={`circle ${props.backgroundColor}`}>
        <Icon source={ReceiptMajor} color={props.color} />
      </div>
    </div>
  );
}

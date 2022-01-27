import React from "react";
// import classes from "./TablePrimery.module.css";
import {
  Card,
  DataTable,
  Page,
  Avatar,
  ResourceItem,
  TextStyle,
  ResourceList,
  Badge,
} from "@shopify/polaris";
function TaskSummery() {
  const rows = [
    [
      "Mohsin",
      "$875.00",
      "progress bar",
      "Avatar",
      <Badge status='critical'>High</Badge>,
    ],
    [
      "Mohsin",
      "$230.00",
      "progress bar",
      "Avatar",
      <Badge status='warning'>High</Badge>,
    ],
    [
      "Mohsin",
      "$445.00",
      "progress bar",
      "Avatar",
      <Badge status='success'>High</Badge>,
    ],
  ];
  return (
    <div>
      <h1 className='text-table'>Task Summery</h1>

      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "numeric",
            "numeric",
            "numeric",
          ]}
          headings={["Product", "Price", "Task bar", "Team", "Priority"]}
          rows={rows}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
    </div>
  );
}

export default TaskSummery;

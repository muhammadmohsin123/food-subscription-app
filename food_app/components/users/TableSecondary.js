import React from "react";
import {
  Card,
  DataTable,
  Page,
  Avatar,
  ResourceItem,
  TextStyle,
  ResourceList,
  Stack,
  Badge,
} from "@shopify/polaris";
// import classes from "./TableSecondry.module.css";
// import { Card, DataTable, Page } from "@shopify/polaris";
function TableSecondary() {
  const rows = [
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,
      "$875.00",
      <Badge status='critical'>Pending</Badge>,
    ],
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,
      "$875.00",
      <Badge status='success'>Approved</Badge>,
    ],
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,
      "$875.00",
      <Badge status='success'>Approved</Badge>,
    ],
  ];
  return (
    <div style={{ width: "360px" }}>
      <h1 className='text-table'>Subscribed Users</h1>

      <Card>
        <DataTable
          columnContentTypes={["text", "Text", "Text"]}
          headings={["Name", "Bill", "Invoice Status"]}
          rows={rows}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
    </div>
  );
}

export default TableSecondary;

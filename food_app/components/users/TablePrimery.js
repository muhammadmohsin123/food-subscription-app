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
  Stack,
  Badge,
} from "@shopify/polaris";
function TablePrimery() {
  const rows = [
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,
      "mohsin@gmail.com",
      124689,
      <Badge status='success'>Approved</Badge>,
    ],
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,

      "mohsin@gmail.com",
      124533,
      <Badge status='warning'>Rejected</Badge>,
    ],
    [
      <Stack>
        <Avatar source='mohsin.jpeg' />
        <TextStyle variation='strong'>Mohsin</TextStyle>
      </Stack>,

      "mohsin@gmail.com",
      124518,
      <Badge status='success'>Approved</Badge>,
    ],
  ];

  return (
    <div>
      <h1 className='text-table'>Users Info</h1>

      <Card>
        <DataTable
          columnContentTypes={["text", "text", "text", "numeric", "text"]}
          headings={["Name", "Email", "Invoice No", "Invoice Status"]}
          rows={rows}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
    </div>
  );
}

export default TablePrimery;

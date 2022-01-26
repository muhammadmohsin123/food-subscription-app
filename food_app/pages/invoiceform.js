import {
  useIndexResourceState,
  Card,
  IndexTable,
  TextStyle,
  Page,
} from "@shopify/polaris";
import Grid from "@mui/material/Grid";
import AppBarComponent from "../components/reuseable/AppBar";
import { Typography } from "@mui/material";

function InvoiceForm() {
  const customers = [
    {
      id: "3413",
      url: "customers/341",
      name: "Mae Jemison",
      location: "Decatur, USA",
      orders: 20,
      amountSpent: "$2,400",
    },
    {
      id: "2563",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 30,
      amountSpent: "$140",
    },
    {
      id: "2534",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 40,
      amountSpent: "$140",
    },
    {
      id: "5636",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 50,
      amountSpent: "$140",
    },
    {
      id: "2569",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 60,
      amountSpent: "$140",
    },
    {
      id: "2513",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 70,
      amountSpent: "$140",
    },
  ];
  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const promotedBulkActions = [
    {
      content: "Edit customers",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];
  const bulkActions = [
    {
      content: "Approve",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Decline",
      onAction: () => console.log("Todo: implement bulk remove tags"),
    },
    {
      content: "Delete invoice",
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ];

  const rowMarkup = customers.map(
    ({ id, name, location, orders, amountSpent }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation='strong'>{name}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{location}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <>
      <AppBarComponent />

      <Grid
        container
        alignContent='center'
        // sx={{ width: "100%", height: "100%" }}
        justifyContent='center'
      >
        <Grid item lg={12}>
          <Typography
            variant='h3'
            sx={{ textAlign: "center", color: "blue", marginBottom: "40px" }}
          >
            Invo Invoices
          </Typography>
        </Grid>
        <Grid item lg={12} sx={12}>
          <Card>
            <IndexTable
              resourceName={resourceName}
              itemCount={customers.length}
              selectedItemsCount={
                allResourcesSelected ? "All" : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              bulkActions={bulkActions}
              promotedBulkActions={promotedBulkActions}
              headings={[
                { title: "Name" },
                { title: "Location" },
                { title: "Invoice No" },
                { title: "Bill" },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
export default InvoiceForm;

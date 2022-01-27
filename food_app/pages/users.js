import { Layout, Page } from "@shopify/polaris";
import Cards from "../components/users/Cards";
import Task from "../components/users/task";
import TablePrimery from "../components/users/TablePrimery";
import TableSecondary from "../components/users/TableSecondary";
import TaskSummery from "../components/users/Task-Summary";
function Users() {
  return (
    <Page
      // title="Polaris"
      fullWidth
      // breadcrumbs={breadcrumbs}
      // primaryAction={primaryAction}
      // secondaryActions={secondaryActions}
    >
      <Layout>
        {/* <Layout.Section /> */}
        <Layout.Section>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Cards color='background-blue' color2='background-green' />
            <Cards color='background-yellow' color2='background-red' />
            {/* <CardsAbsent /> */}

            <Task color='critical' backgroundColor='circle-pink' />
            <Task color='success' backgroundColor='circle-green' />
          </div>
        </Layout.Section>

        <Layout.Section>
          <TablePrimery />
        </Layout.Section>
        <Layout.Section secondary>
          <TableSecondary />
        </Layout.Section>
        <Layout.Section>
          <TaskSummery />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
export default Users;

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "@shopify/polaris";
import { theme } from "../utils";
import "@shopify/polaris/build/esm/styles.css";
import "../utils/styles.css";
import Layout from "../components/Layout";
import "../components/invoice/scss/main.scss";
const themes = createTheme();
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppProvider i18n={{}} theme={theme}>
          <ThemeProvider theme={themes}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

import HeaderComponent from "./reuseable/AppBar";
import { useRouter } from "next/router";

function Layout({ children }) {
  const { pathname } = useRouter();
  return !["/login", "/signup"].includes(pathname) ? (
    <HeaderComponent>{children}</HeaderComponent>
  ) : (
    children
  );
}

export default Layout;

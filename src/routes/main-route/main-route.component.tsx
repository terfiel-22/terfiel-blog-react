import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import { PageWrapper } from "./main-route.styles";

export default function MainRoute() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </>
  );
}

import { Container } from "@mui/material";
import BreadCrumb from "../../components/breadcrumb";
import PageTitle from "../../components/pageTitle";

const HomePage = () => {
  return (
    <Container
      maxWidth="lg"
      className=" text-right justify-start items-center"
      sx={{ width: "100%", textAlign: "right", direction: "rtl" }}
    >
      <PageTitle title="حساب کاربری" />
      <BreadCrumb />
      <div className="mt-10"></div>
    </Container>
  );
};

export default HomePage;

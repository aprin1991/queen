import { Container, Typography } from "@mui/material";
import BreadCrumb from "../../components/breadcrumb";
import PageTitle from "../../components/pageTitle";
import AddNewItem from "./components/AddNewItem";

const HomePage = () => {
  return (
    <Container maxWidth="lg" className="">
      <PageTitle title="حساب کاربری" />
      <BreadCrumb />
      <div className="mt-4 bg-slate-800 w-full h-64 rounded-md p-4">
        <Typography variant="h6" color="" className="opacity-60 mb-4">
          مسیرهای ارتباطی
        </Typography>
        <AddNewItem />
      </div>
    </Container>
  );
};

export default HomePage;

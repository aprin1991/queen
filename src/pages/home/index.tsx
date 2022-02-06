import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BreadCrumb from "../../components/breadcrumb";
import PageTitle from "../../components/pageTitle";
import Information from "./components/Information";
import Communications from "./components/Communications";
import { ContactProp } from "./types";
import ConfirmDialog from "./components/ConfirmDialog";
import { Request, URLS } from "../../api";
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Array<ContactProp> | any>([]);
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState({} as ContactProp);
  const [removedItem, setRemovedItem] = useState<ContactProp>(
    {} as ContactProp
  );
  useEffect(() => {
    getSocials();
  }, []);
  const saveItem = (item: ContactProp) => {
    getSocials();
    //setItems([...items, item]);
  };
  const getSocials = async () => {
    const response = await Request.get(URLS.Socials);
    if (response) {
      setItems(response);
    }
  };
  const handleRemoveItem = (item: ContactProp) => {
    setRemovedItem(item);
    setOpen(true);
  };
  const dismiss = () => {
    setOpen(false);
    clearRemovedItem();
  };
  const confirmedRemove = async () => {
    setOpen(false);

    const removeItem = await Request.delete(URLS.Socials, {
      params: { id: removedItem?.id },
    });
    if (removeItem) {
      getSocials();
      clearRemovedItem();
    }
  };
  const clearRemovedItem = () => {
    setRemovedItem({ social_id: "", social_type: "", social_link: "", id: "" });
    setEditItem({ social_id: "", social_type: "", social_link: "", id: "" });
    setEditMode(false);
  };
  const handleEditItem = (item: ContactProp) => {
    setEditItem(item);
    setEditMode(true);
  };
  const handleCancelEdit = () => {
    clearRemovedItem();
    setEditMode(false);
  };
  const saveEdit = (item: ContactProp) => {
    setItems(
      items?.map((el: ContactProp) =>
        el?.social_id === item?.prevId ? item : el
      )
    );
  };
  return (
    <Container maxWidth="lg" className="">
      <PageTitle title="حساب کاربری" />
      <BreadCrumb />
      <div className="mt-4 bg-slate-800 w-full rounded-md p-4">
        <Typography variant="h6" color="" className="opacity-60 mb-4">
          مسیرهای ارتباطی
        </Typography>
        <Information
          isEditMode={editMode}
          editItem={editItem}
          save={saveItem}
          cancelEdit={handleCancelEdit}
          saveEdit={saveEdit}
        />
        {items?.length > 0 && (
          <Communications
            data={items}
            removeItem={handleRemoveItem}
            edit={handleEditItem}
          />
        )}
      </div>
      <ConfirmDialog
        show={open}
        close={dismiss}
        confirmedRemove={confirmedRemove}
        item={removedItem}
      />
    </Container>
  );
};

export default HomePage;

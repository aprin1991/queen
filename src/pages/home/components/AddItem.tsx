import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Request, URLS } from "../../../api";
import { ContactProp } from "../types";
import toast from "./../../../components/toast";
type IProps = {
  expand: Function;
  save: Function;
  cancelEdit: Function;
  saveEdit: Function;
  editItem: ContactProp;
  isEditMode: boolean;
};
const AddItem: React.FC<IProps> = ({
  expand,
  save,
  editItem,
  isEditMode,
  cancelEdit,
  saveEdit,
}) => {
  const [state, setState] = useState({
    social_type: "",
    social_link: "",
    social_id: "",
    id: "",
  });
  useEffect(() => {
    setState(editItem);
  }, [editItem]);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const resetForm = () => {
    expand();
    isEditMode && cancelEdit();
    setState({
      social_type: "",
      social_link: "",
      social_id: "",
      id: "",
    });
  };
  const saveItem = async () => {
    const { social_type, social_link, social_id, id } = state;
    if (isEditMode) {
      saveEdit({
        social_type,
        social_link,
        social_id,
        prevId: editItem?.social_id,
      });
      // await Request.get(URLS.SocialItem(id));
      await Request.patch(URLS.Socials, { id });
    } else {
      save({
        social_type,
        social_link,
        social_id,
      });
      const addNewSocial = await Request.post(URLS.Socials, {
        social_type,
        social_link,
        social_id,
      });
      if (addNewSocial) {
        toast("success", "با موفقیت اضافه شد");
      }
    }
    resetForm();
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="w-full">
          <FormControl fullWidth>
            <InputLabel id="type-label" dir="rtl">
              نوع *
            </InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="social_type"
              value={state?.social_type}
              label="نوع *"
              onChange={handleChange}
            >
              <MenuItem value={"instagram"}>اینستاگرام</MenuItem>
              <MenuItem value={"facebook"}>فیس بوک</MenuItem>
              <MenuItem value={"telegram"}>تلگرام</MenuItem>
              <MenuItem value={"twitter"}>توییتر</MenuItem>
              <MenuItem value={"linkedin"}>لینکداین</MenuItem>
              <MenuItem value={"website"}>وب سایت</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              name="social_link"
              value={state?.social_link}
              onChange={handleChange}
              label="لینک"
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              name="social_id"
              value={state?.social_id}
              onChange={handleChange}
              label="آی دی ( ID )"
              variant="outlined"
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-end mt-6 form-btn">
        <Button variant="outlined" className="" onClick={resetForm}>
          انصراف
        </Button>
        <Button
          variant="contained"
          color="warning"
          className="px-10 mr-6 btn-save"
          onClick={saveItem}
        >
          {isEditMode ? "ویرایش مسیر ارتباطی" : "ثبت مسیر ارتباطی"}
        </Button>
      </div>
    </>
  );
};

export default AddItem;

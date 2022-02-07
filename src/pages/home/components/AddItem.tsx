import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Request, URLS } from "../../../api";
import { AddProps, ContactProp } from "../types";
import toast from "./../../../components/toast";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";

const AddItem: React.FC<AddProps> = ({
  expand,
  save,
  editItem,
  isEditMode,
  cancelEdit,
  saveEdit,
  itemsList,
}) => {
  const formik = useFormik({
    initialValues: {
      social_type: "",
      social_link: "",
      social_id: "",
      id: "",
    },
    validationSchema: Yup.object({
      social_type: Yup.string().required("نوع را وارد نمایید"),
      social_link: Yup.string()
        .url("لینک را به درستی وارد نمایید")
        .required("لینک را وارد نمایید"),
      social_id: Yup.string().required("آی دی را وارد نمایید"),
    }),
    onSubmit: (values) => {
      saveItem(values);
    },
  });

  useEffect(() => {
    const { social_link, social_id, social_type, id } = editItem;
    formik.setFieldValue("social_link", social_link);
    formik.setFieldValue("social_id", social_id);
    formik.setFieldValue("social_type", social_type);
    formik.setFieldValue("id", id);
  }, [editItem]);

  const resetForm = () => {
    expand();
    isEditMode && cancelEdit();
  };
  function checkExist(social_id: string, social_type: string) {
    const find = itemsList?.find(
      (el: ContactProp) =>
        el?.social_id === social_id && el?.social_type === social_type
    );
    return find;
  }
  const saveItem = async (values: any) => {
    const { social_type, social_link, social_id, id } = values;
    if (isEditMode) {
      saveEdit({
        social_type,
        social_link,
        social_id,
        id,
      });
    } else {
      if (checkExist(social_id, social_type)) {
        toast("error", "این شناسه کاربری قبلا ثبت شده است");
      } else {
        const addNewSocial = await Request.post(URLS.Socials, {
          social_type,
          social_link,
          social_id,
        });
        if (addNewSocial) {
          save();
          toast("success", "با موفقیت اضافه شد");
        }
        resetForm();
      }
    }
    formik.setFieldValue("social_link", "");
    formik.setFieldValue("social_id", "");
    formik.setFieldValue("social_type", "");
  };

  const { errors } = formik;

  return (
    <form onSubmit={formik.handleSubmit}>
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
              label="نوع *"
              onChange={formik.handleChange}
              value={formik.values.social_type}
            >
              <MenuItem value={"instagram"}>اینستاگرام</MenuItem>
              <MenuItem value={"facebook"}>فیس بوک</MenuItem>
              <MenuItem value={"telegram"}>تلگرام</MenuItem>
              <MenuItem value={"twitter"}>توییتر</MenuItem>
              <MenuItem value={"linkedin"}>لینکداین</MenuItem>
              <MenuItem value={"website"}>وب سایت</MenuItem>
            </Select>
          </FormControl>
          {errors.social_type && (
            <Typography
              id="outlined-basic"
              color="error"
              sx={{ fontsize: "10px !important", mt: 1 }}
            >
              {errors.social_type}
            </Typography>
          )}
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              name="social_link"
              label="لینک"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.social_link}
            />
          </FormControl>
          {errors.social_link && (
            <Typography
              id="outlined-basic"
              color="error"
              sx={{ fontsize: "10px !important", mt: 1 }}
            >
              {errors.social_link}
            </Typography>
          )}
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              name="social_id"
              onChange={formik.handleChange}
              value={formik.values.social_id}
              label="آی دی ( ID )"
              variant="outlined"
            />
          </FormControl>
          {errors.social_id && (
            <Typography
              id="outlined-basic"
              color="error"
              sx={{ fontsize: "10px !important", mt: 1 }}
            >
              {errors.social_id}
            </Typography>
          )}
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
          // onClick={saveItem}
          type="submit"
        >
          {isEditMode ? "ویرایش مسیر ارتباطی" : "ثبت مسیر ارتباطی"}
        </Button>
      </div>
    </form>
  );
};

export default AddItem;

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddItem = () => {
  const [state, setState] = useState({
    type: "",
    link: "",
    id: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      <div className="w-full">
        <FormControl fullWidth>
          <InputLabel id="type-label" dir="rtl">
            نوع *
          </InputLabel>
          <Select
            labelId="type-label"
            id="type"
            name="type"
            value={state?.type}
            label="نوع *"
            onChange={handleChange}
          >
            <MenuItem value={1}>اینستاگرام</MenuItem>
            <MenuItem value={2}>فیس بوک</MenuItem>
            <MenuItem value={3}>تلگرام</MenuItem>
            <MenuItem value={4}>توییتر</MenuItem>
            <MenuItem value={5}>لینکداین</MenuItem>
            <MenuItem value={6}>وب سایت</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-full">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            name="link"
            value={state?.link}
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
            name="id"
            value={state?.id}
            onChange={handleChange}
            label="آی دی ( ID )"
            variant="outlined"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default AddItem;

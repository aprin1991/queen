import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { ContactProp } from "../types";
type IProps = {
  show: boolean;
  close: Function;
  confirmedRemove: Function;
  item: ContactProp;
};
export default function ConfirmDialog({
  show = false,
  close,
  confirmedRemove,
  item,
}: IProps) {
  const [confirmed, setConfirmed] = useState("");

  const handleClose = () => {
    close();
    setConfirmed("");
  };
  const handleRemove = () => {
    confirmed === "تایید" && confirmedRemove();
    setConfirmed("");
  };
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        sx={{ backgroundColor: "primary" }}
      >
        <DialogTitle color="primary" sx={{ fontSize: "15px" }}>
          آیا از تصمیم خودمطمئن هستید؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            برای حذف مسیر ارتباطی{" "}
            <span className="ltr text-left inline-block">
              {item?.social_id}
            </span>{" "}
            لطفا تایید را بنویسید
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="تایید"
            type="text"
            fullWidth
            onChange={(e) => setConfirmed(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={() => close()}>
            انصراف
          </Button>
          <Button
            color="warning"
            disabled={confirmed !== "تایید"}
            onClick={handleRemove}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

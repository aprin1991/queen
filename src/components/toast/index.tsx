import React from "react";
import { toast } from "react-toastify";

const ToastMessage = (type: string, message: any) =>
  //@ts-ignore

  toast[type](
    <div style={{ display: "flex", color: "white" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>
  );

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;

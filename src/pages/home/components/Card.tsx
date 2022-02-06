import React, { useCallback } from "react";
import { CartProps } from "./../types";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Card: React.FC<CartProps> = ({ item, removeItem, edit }) => {
  const renderItem = useCallback(() => {
    let image, title;
    const type = item?.social_type || "twitter";
    switch (type) {
      case "instagram":
        image = <InstagramIcon sx={{ color: "#fff" }} />;
        title = "اینستاگرام";
        break;
      case "facebook":
        image = <FacebookIcon sx={{ color: "#fff" }} />;
        title = "فیس بوک";
        break;
      case "telegram":
        image = <TelegramIcon sx={{ color: "#fff" }} />;
        title = "تلگرام";
        break;
      case "twitter":
        image = <TwitterIcon sx={{ color: "#fff" }} />;
        title = "توئیتر";
        break;
      case "linkedin":
        image = <LinkedInIcon sx={{ color: "#fff" }} />;
        title = "لینکداین";
        break;
      case "website":
        image = <LanguageIcon sx={{ color: "#fff" }} />;
        title = "وب سایت";
        break;
      default:
        break;
    }
    return (
      <div className="flex justify-start items-center ml-4">
        {image}
        <h6 className="text-white text-xs font-normal my-0 mr-2">{title}</h6>
      </div>
    );
  }, [item]);
  return (
    <div
      className="flex justify-between items-center rounded-md mb-2 px-4 py-2"
      style={{ background: "#384450" }}
    >
      <div className="flex-grow flex justify-start items-center text-sm">
        {renderItem()}
        <div className="flex justify-start items-center ml-4 text-white">
          <span className=" text-xs opacity-60 ml-2">آی دی ( ID )</span>
          <span>{item?.social_id}</span>
        </div>
        <div className="flex justify-start items-center text-white">
          <span className=" text-xs opacity-60 ml-2">لینک</span>
          <span>{item?.social_link}</span>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="warning"
          className="ml-2"
          onClick={() => edit(item)}
        >
          <EditIcon />
          <span className="text-xs mr-2">ویرایش</span>
        </IconButton>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="error"
          className="ml-2"
          onClick={() => removeItem(item)}
        >
          <DeleteIcon />
          <span className="text-xs mr-2">حذف</span>
        </IconButton>
      </div>
    </div>
  );
};

export default React.memo(Card);

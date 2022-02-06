import toast from "./../components/toast";
const errorHandler = async (err: any) => {
  return new Promise(() => {
    toast("error", "خطایی رخ داده است ، مجددا تلاش نمایید");
    throw err;
  });
};
export default errorHandler;

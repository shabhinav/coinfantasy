import axios from "axios";

export const searchPrice = () =>
  axios.get(
    process.env.REACT_APP_BASE_URL +
      "/cryptocurrency/listings/latest?CMC_PRO_API_KEY=8871740f-e824-497e-8540-b5019c5d5192"
  );

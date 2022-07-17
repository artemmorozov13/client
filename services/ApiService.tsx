import axios from "axios";
import { constants } from "buffer";
import { rowsPerPage } from "settings";
import { baseUrl } from "./config";

class ApiService {
  getTableRows = async (offset = 0) => {
    const url = `${baseUrl}/rows/${offset}`;
    return await axios
      .get(url)
      .then((res: any) => res.data)
      .catch((err: any) => err);
  };

  getTableRowsByFilters = async (
    offset = 0,
    column = null,
    operator = null,
    value = null
  ) => {
    const url = `${baseUrl}/rows/${column}/${value}/${operator}/${offset}`;
    console.log(url);
    return await axios
      .get(url)
      .then((res: any) => res.data)
      .catch((err: any) => err);
  };
}

export default new ApiService();

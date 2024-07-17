import base from "../http";

const DataServices = {
  getData: (url) => {
    base.get(url).then((response) => {
      // success Data response
      return response.data;
    });
  },
  postData: (url, data) => {
    base.post(url, data).then((response) => {
      // success Data response
      return response.data;
    });
  },
  DeleteData: (url) => {
    base.delete(url).then((response) => {
      // success Data response
      return response.data;
    });
  },
};
export default DataServices;

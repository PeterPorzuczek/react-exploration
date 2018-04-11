import Axios, { CancelToken, Cancel } from "axios";
import API from "./const";

const $http = (() => {
  const axios = Axios.create({
    baseURL: `${API.BASE}${API.VERSION}`
  });
  const cancelable = [];

  function createCancelOption() {
    return {
      cancelToken: new CancelToken(cancel => {
        cancelable.push(cancel);
      })
    };
  }

  function wrapCatch(func) {
    return func.catch(thrown => {
      // TODO Proper error handling
      // eslint-disable-next-line
      !(thrown instanceof Cancel) && console.log(thrown);
    });
  }

  function cancelAllRequests() {
    cancelable.forEach(cancel => cancel());
  }

  async function getItem(id) {
    const response = await wrapCatch(
      axios.get(`${API.BEERS_GET}/${id}`, createCancelOption())
    );
    return response && response.data;
  }

  async function getPage(page, perPage) {
    const response = await wrapCatch(
      axios.get(`${API.BEERS_PAGINATION(page, perPage)}`, createCancelOption())
    );
    return response && response.data;
  }

  async function getRelated(ibu, abv, ebc) {
    const ibuRes = await wrapCatch(
      axios.get(`${API.BEERS_RELATED_IBU(ibu)}`, createCancelOption())
    );
    const ebcRes = await wrapCatch(
      axios.get(`${API.BEERS_RELATED_EBC(ebc)}`, createCancelOption())
    );
    const abvRes = await wrapCatch(
      axios.get(`${API.BEERS_RELATED_ABV(abv)}`, createCancelOption())
    );
    return (
      ibuRes &&
      ebcRes &&
      abvRes && { ibu: ibuRes.data, abv: abvRes.data, ebc: ebcRes.data }
    );
  }

  return {
    cancelAllRequests,
    getItem,
    getPage,
    getRelated
  };
})();

export default $http;

const API = {
  BASE: "https://api.punkapi.com",
  VERSION: "/v2",
  BEERS_GET: "/beers",
  PAGING: (page, perPage) =>
    "" +
    `?page=${page === undefined ? 0 : page}` +
    `&per_page=${perPage === undefined ? 0 : perPage}`,
  BEERS_PAGINATION: (pageNumber, pageSize) =>
    `${API.BEERS_GET}${API.PAGING(pageNumber, pageSize)}`,
  VAL_PREPARE: val => Math.floor(val),
  BEERS_RELATED_IBU: ibu => `${API.BEERS_GET}?ibu_gt=${API.VAL_PREPARE(ibu)}`,
  BEERS_RELATED_ABV: abv => `${API.BEERS_GET}?abv_gt=${API.VAL_PREPARE(abv)}`,
  BEERS_RELATED_EBC: ebc => `${API.BEERS_GET}?ebc_gt=${API.VAL_PREPARE(ebc)}`
};

export default API;

import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

export const apiUrl = "http://localhost:3001";
const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("accessToken");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export const authLogin = (endpoint: string, params: any) => {
  return httpClient(`${apiUrl}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(params),
  }).then((response) => ({ response }));
};

export const authRefresh = (endpoint: string, params: any) => {};

//APIs
//Merchant
const getAllMerchant: string = "merchant/getMerchant/getAll";
const createMerchant: string = "merchant/add/addMerchant";

function API(method: string, accessor: string) {
  if (method === "getList") {
    if (accessor === "merchant") {
      return getAllMerchant;
    }
  } else if (method === "create") {
    if (accessor === "merchant"){
      return createMerchant;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: (endpoint: string, params: any) => {
    console.log(endpoint);
    var apiEndpoint = API("getList", endpoint);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${apiEndpoint}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: 1,
    }));
  },
  getOne: (endpoint: string, params: any) =>
    httpClient(`${apiUrl}/${endpoint}/${params.id}`).then(({ json }) => ({
      data: json,
    })),
  getMany: (endpoint: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${endpoint}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  getManyReference: (endpoint: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${endpoint}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: 1,
    }));
  },
  update: (endpoint: string, params: any) =>
    httpClient(`${apiUrl}/${endpoint}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),
  updateMany: (endpoint: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${endpoint}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  create: (endpoint: string, params: any) => {
    var apiEndpoint = API("create", endpoint);
    return httpClient(`${apiUrl}/${apiEndpoint}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  deleteMany: (endpoint: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${endpoint}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  delete: (endpoint: string, params: any) =>
    httpClient(`${apiUrl}/${endpoint}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),
};

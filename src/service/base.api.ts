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
const updateMerchant: string = "merchant/toUpdate/updateMerchant";
//Users
const getAllUsers: string = "users/getAllUsers";
const getUserById: string = "users/getUserById";
const createUser: string = "users/addUser";
const updateUser: string = "users/updateUser";
const getAllRoles: string = "roles/getallrole";
//Branch
const getAllBranches: string = "branches/getBranches/getAll";
const addBranch: string = "branches/addBranches/add";

function API(method: string, accessor: string) {
  if (method === "getList") {
    if (accessor === "merchant") {
      return getAllMerchant;
    } else if (accessor === "users") {
      return getAllUsers;
    } else if (accessor === "roles") {
      return getAllRoles;
    } else if (accessor === "branch") {
      return getAllBranches;
    }
  } else if (method === "getMany") {
    if (accessor === "roles") {
      return getAllRoles;
    }
  } else if (method === "create") {
    if (accessor === "merchant") {
      return createMerchant;
    } else if (accessor === "users") {
      return createUser;
    } else if (accessor === "branch") {
      return addBranch;
    }
  } else if (method === "update") {
    if (accessor === "merchant") {
      return updateMerchant;
    } else if (accessor === "users") {
      return updateUser;
    }
  } else if (method === "getOne") {
    if (accessor === "users") {
      return getUserById;
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
      total: json.length,
    }));
  },
  getOne: (endpoint: string, params: any) => {
    var apiEndpoint = API("getOne", endpoint);
    return httpClient(`${apiUrl}/${apiEndpoint}/${params.id}`).then(
      ({ json }) => ({
        data: json,
      })
    );
  },
  getMany: (endpoint: string, params: any) => {
    console.log(endpoint);
    var apiEndpoint = API("getMany", endpoint);
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${apiEndpoint}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({
      data: json,
      total: json.length,
    }));
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
      total: json.length,
    }));
  },
  update: (endpoint: string, params: any) => {
    var apiEndpoint = API("update", endpoint);
    console.log(params);
    return httpClient(`${apiUrl}/${apiEndpoint}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: params.data }));
  },
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

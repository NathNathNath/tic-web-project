import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const Headers = () => {
  return {
    "Content-Type": "application/json",
  };
};

export const authLogin = (endpoint: string, params: any) => {
    return httpClient(`${apiUrl}/${endpoint}`, {
        headers: Headers(),
        method: 'POST',
        body: JSON.stringify(params.data),
    }).then(({ json }) => ({
        data: { ...params.data},
    }));
};

export const authRefresh = (endpoint: string, params: any) => {};

export const getMany = (endpoint: string, params: any) => {};

export const getOne = (endpoint: string, params: any) => {};

export const addOne = (endpoint: string, params: any) => {};

export const updateOne = (endpoint: string, params: any) => {};

export const deleteOne = (endpoint: string, params: any) => {};

export const addMany = (endpoint: string, params: any) => {};

export const deleteMany = (endpoint: string, params: any) => {};

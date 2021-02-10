import { AuthProvider } from "react-admin";
import { authLogin, authRefresh } from "../service/base.api";
const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    return authLogin("login", {
      username: username,
      password: password,
    }).then((data) => {
      if (data.response.json.accessToken) {
        localStorage.setItem("user", username);
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("accessToken", data.response.json.accessToken);
        localStorage.setItem("refreshToken", data.response.json.refreshToken);

        return Promise.resolve();
      } else {
        localStorage.setItem("authenticated", "false");
        return Promise.reject();
      }
    });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    localStorage.setItem("authenticated", "false");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    return status === 401 || status === 403
      ? Promise.reject()
      : Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("authenticated") === "true"
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    return Promise.resolve(role);
  },
  getIdentity: () => {
    return Promise.resolve({
      id: localStorage.getItem("login") as string,
      fullName: localStorage.getItem("user") as string,
      avatar: localStorage.getItem("avatar") as string,
    });
  },
};
export default authProvider;

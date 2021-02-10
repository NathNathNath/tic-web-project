import { AuthProvider } from "react-admin";
import { authLogin, authRefresh } from "../service/base.api";
import api from "../service/base.api";
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
    localStorage.setItem("authenticated", "false");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    return status === 401 || status === 403
      ? Promise.reject()
      : Promise.resolve();
  },
  checkAuth: () => {
    api.getMany("roles", {}).then((res) => {
      var roles = "";
      var rolesAssigned = JSON.parse(JSON.stringify(res.data));
      rolesAssigned.forEach((roleAssign: any) => {
        if (roleAssign.userModel.username === localStorage.getItem("user")) {
          if (roleAssign.userId === roleAssign.userModel.id) {
            roles += roleAssign.roleModel.code + ";";
          }
        }
      });
      localStorage.setItem("role", roles);
    });

    authRefresh("refresh-token", {}).then((res) => {
      var accessToken = res.data.json.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("authenticated", "true");
    });

    return localStorage.getItem("authenticated") === "true"
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    return role === "" ? Promise.resolve("SA") : Promise.resolve(role);
  },
  getIdentity: () => {
    return Promise.resolve({
      id: localStorage.getItem("login") as string,
      fullName: localStorage.getItem("user") as string,
      //avatar: localStorage.getItem("avatar") as string,
    });
  },
};
export default authProvider;

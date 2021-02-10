import {Md5} from "md5-typescript";

// Convert Password into MD5
const convertMD = (Password: any) => { 
    Password = Md5.init(Password);
    return Password;
}
const endPointChecker = (endpoint: any, params: any) =>
{
    if(endpoint === "users")
    {
        params.data.password = Md5.init(JSON.stringify(params.data.password));
    }
    return params;
}

export default{
    convertMD,
    endPointChecker
}

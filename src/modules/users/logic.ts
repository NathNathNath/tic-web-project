import {Md5} from "md5-typescript";

// Convert Password into MD5
const convertMD = (Password: any) => { 
    Password = Md5.init(Password);
    return Password;
}

export default{
    convertMD
}


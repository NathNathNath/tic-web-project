import { ReduxState, Record, Identifier } from "react-admin";
export interface LoginForm {
  username?: string;
  password?: string;
}

export interface Merchant extends Record {
  id: Identifier;
  business_name: string;
  business_type: string;
}

export interface Branch extends Record {
  id: Identifier;
  business_name: string;
  business_type: string;
}

export interface Menu extends Record {
  id: Identifier;
  image_path: string;
}
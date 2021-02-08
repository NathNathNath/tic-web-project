import { ReduxState, Record, Identifier } from "react-admin";
export interface LoginForm {
  username?: string;
  password?: string;
}

export interface Merchant extends Record {
  id: Identifier;
  businessName: string;
  businessType: string;
}

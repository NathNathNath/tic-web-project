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

export interface Branches extends Record {
  id: Identifier;
  name: string;
  merchant_id: string;
  qrcode_path: string;
  licenses: number;
  bill_type: string;
  validated: boolean;
  is_active: boolean;
  radius: number;
  lat: number;
  long: number;
  merchant_email_address: string;
}

export interface Branches extends Record {
  id: Identifier;
  name: string;
  merchant_id: string;
  qrcode_path: string;
  licenses: number;
  bill_type: string;
  validated: boolean;
  is_active: boolean;
  radius: number;
  lat: number;
  long: number;
  merchant_email_address: string;
}
export interface Menu extends Record {
  id: Identifier;
}

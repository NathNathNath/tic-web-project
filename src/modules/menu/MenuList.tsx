import * as React from "react";
import { FC } from "react";
import {
  List,
  ListProps,
  Datagrid,
  TextField,
  NumberInput,
  TextInput,
  DateField,
  ReferenceField,
  NumberField,
  Filter,
  FilterProps,
  DateInput,
  useListContext,
  BooleanInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "../../util/interface";
import MenuDetails from "./MenuDetails";

const ListFilters = (props: Omit<FilterProps, "children">) => (
  <Filter {...props}>
    <DateInput label="Date" source="createdAt" />
    <NumberInput label="ID" source="id" />
    <TextInput label="Name" source="name" />
    <TextInput label="Merchant Id" source="merchant_id" />
    <BooleanInput label="Active" source="is_active" />
  </Filter>
);

const useStyles = makeStyles((theme) => ({
  hiddenOnSmallScreens: {
    display: "table-cell",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const MenuList: FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List
      {...props}
      filters={<ListFilters />}
      perPage={25}
      sort={{ field: "date", order: "desc" }}
    >
      <Datagrid rowClick="expand" expand={<MenuDetails />}>
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Merchant ID" source="merchant_id" />
        <TextField label="QR Code" source="qrcode_path" />
        <TextField label="Licenses" source="licenses" />
        <TextField label="Bill Type" source="bill_type" />
        <TextField label="Validated" source="validated" />
        <TextField label="Active" source="is_active" />
        <TextField label="Radius" source="radius" />
        <TextField label="Latitude" source="lat" />
        <TextField label="Longitude" source="long" />
        <TextField label="Merchant E-mail" source="merchant_email_address" />
      </Datagrid>
    </List>
  );
};

export default MenuList;

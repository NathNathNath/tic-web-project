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
        <TextField label="Image Path" source="image_path" />
        <TextField label="MerchantID" source="merchant_id" />
        <TextField label="Description" source="description" />
      </Datagrid>
    </List>
  );
};

export default MenuList;

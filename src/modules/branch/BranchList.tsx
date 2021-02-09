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
  EditButton,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { Branch } from "../../util/interface";
import BranchDetails from "./BranchDetails";

const ListFilters = (props: Omit<FilterProps, "children">) => (
  <Filter {...props}>
    <DateInput source="createdAt" />
    <DateInput source="date_lte" />
    <NumberInput label="id" source="id" />
    <TextInput source="name" />
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

const BranchList: FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List
      {...props}
      filters={<ListFilters />}
      perPage={25}
      sort={{ field: "updatedAt", order: "desc" }}
    >
      <Datagrid rowClick="expand">
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Merchant ID" source="merchant_id" />
        <TextField label="QR Code" source="qrcode_path" />
        <TextField label="Licenses" source="licenses" />
        <TextField label="Radius" source="radius" />
        <TextField label="Latitude" source="lat" />
        <TextField label="Longitude" source="long" />
        <TextField label="Merchant E-mail" source="merchant_email_address" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default BranchList;

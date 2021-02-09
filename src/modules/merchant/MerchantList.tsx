import * as React from "react";
import { FC } from "react";
import {
  List,
  ListProps,
  Datagrid,
  TextField,
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
import MerchantDetails from "./MerchantDetails";

const ListFilters = (props: Omit<FilterProps, "children">) => (
  <Filter {...props}>
    <DateInput source="date_gte" />
    <DateInput source="date_lte" />
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

const MerchantList: FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List
      {...props}
      filters={<ListFilters />}
      perPage={5}
      sort={{ field: "updatedAt", order: "desc" }}
    >
      <Datagrid rowClick="expand">
        <TextField source="business_name" />
        <TextField source="business_type" />
        <TextField source="merchant_id" />
        <TextField source="business_type" />
        <TextField source="licenses" />
        <TextField source="branches" />
        <TextField source="contact_person" />
        <TextField source="contact_number" />
        <TextField source="merchant_email_address" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default MerchantList;

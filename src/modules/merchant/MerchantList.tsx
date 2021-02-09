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
      perPage={25}
      sort={{ field: "date", order: "desc" }}
    >
      <Datagrid rowClick="expand">
        <TextField label="Business Name" source="business_name" />
        <TextField label="Business Type" source="business_type" />
        <TextField label="Merchant ID" source="merchant_id" />
        <TextField label="Licenses" source="licenses" />
        <TextField label="Branches" source="branches" />
        <TextField label="Contact Person" source="contact_person" />
        <TextField label="Contact Number" source="contact_number" />
        <TextField label="Merchant E-mail" source="merchant_email_address" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default MerchantList;

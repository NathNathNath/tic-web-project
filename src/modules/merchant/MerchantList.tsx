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
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import AddMerchant from "./AddMerchant";
import { Merchant } from "../../util/interface";

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
  //const { data, ids } = useListContext<Merchant>();

  return (
    <List
      {...props}
      filters={<ListFilters />}
      perPage={25}
      sort={{ field: "date", order: "desc" }}
    >
      <Datagrid rowClick="expand" expand={<AddMerchant />}>
        <TextField source="business_name" />
      </Datagrid>
    </List>
  );
};

export default MerchantList;

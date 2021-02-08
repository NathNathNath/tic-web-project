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

const UserList: FC<ListProps> = (props) => {
  return (
    <List {...props} perPage={25} sort={{ field: "date", order: "desc" }}>
      <Datagrid rowClick="expand">
        <TextField source="username" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;

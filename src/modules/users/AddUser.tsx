import * as React from "react";
import { FC } from "react";
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
  CreateProps,
} from "react-admin";
import { Grid, InputAdornment, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const AddUser: FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Nickname"
            source="username"
            validate={required()}
          />
          <TextInput
            label="Password"
            source="password"
            validate={required()}
            type="password"
          />
          <TextInput source="isactive" defaultValue="true" disabled />
          <TextInput source="superadmin" defaultValue="false" disabled />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default AddUser;

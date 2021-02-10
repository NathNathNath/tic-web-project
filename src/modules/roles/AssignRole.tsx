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

const AssignRole: FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Role Assignment">
          <ReferenceInput
            label="Nickname"
            source="userId"
            reference="userSelect"
            validate={required()}
          >
            <SelectInput optionText="username" />
          </ReferenceInput>
          <ReferenceInput
            label="Role"
            source="role"
            reference="roleSelect"
            validate={required()}
          >
            <SelectInput optionText="name" />
          </ReferenceInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default AssignRole;

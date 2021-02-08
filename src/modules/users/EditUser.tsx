import * as React from "react";
import { FC } from "react";
import {
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
  EditProps,
  Edit,
} from "react-admin";
import { Grid, InputAdornment, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const EditUser: FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Nickname"
            source="username"
            validate={required()}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default EditUser;

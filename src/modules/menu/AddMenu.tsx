import * as React from "react";
import {createRef} from 'react'
import { FC } from "react";
import Dropzone from 'react-dropzone';
import {
  Create,
  FormTab,
  NumberInput,
  BooleanInput,
  FileInput,
  FileField,
  ImageField,
  TabbedForm,
  TextInput,
  required,
  CreateProps,
} from "react-admin";
import { Grid, InputAdornment, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
});

const AddMenu: FC<CreateProps> = (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Name"
            source="name"
            fullWidth
            validate={required()}
          />
        <TextInput label="Description" source="description" fullWidth/>
        <TextInput label="Merchant ID" source="merchant_id" fullWidth/>
        <TextInput source="is_active" defaultValue="true" disabled/>
        <FileInput source="image_path" label="Related files" dropzone>
            <FileField source="src" title="title" />
        </FileInput>
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default AddMenu;

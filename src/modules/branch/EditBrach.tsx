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
  BooleanInput,
  CreateProps,
  Edit,
  SaveButton,
  EditProps,
} from "react-admin";
import { Grid, InputAdornment, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Branch } from "../../util/interface";

interface TitleProps {
    record?: Branch;
  }
  
  const Title: FC<TitleProps> = ({ record }) => {
    return record ? <span>{record.business_name}</span> : null;
  };

const useStyles = makeStyles({
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
});


const EditBranch: FC<EditProps> = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} >
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Name"
            source="name"
            fullWidth
            validate={required()}
          />
          <TextInput label="Description" source="description" fullWidth validate={required()} />
          <TextInput label="Merchant ID" source="merchant_id" fullWidth />
          <TextInput label="QR Code" source="qrcode_path" fullWidth />
          <NumberInput label="Licenses" source="licenses" />
          <TextInput label="Bill Type" source="bill_type" />
          <BooleanInput label="Validated" source="validated" />
          <TextInput source="is_active" defaultValue="true" disabled/>
          <TextInput label="Merchant E-mail" source="merchant_email_address" type="email" />
        </FormTab>
        <FormTab label="Coordinates">
          <NumberInput label="Radius" source="radius" validate={required()} />
          <NumberInput label="Latitude" source="lat" validate={required()} />
          <NumberInput label="Longitude" source="long" validate={required()} />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default EditBranch;

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
  CreateProps,
  Edit,
  SaveButton,
  EditProps,
  email,Toolbar,
} from "react-admin";
import { Grid, InputAdornment, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Merchant } from "../../util/interface";

const useStyles = makeStyles({
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
});

interface TitleProps {
  record?: Merchant;
}
const validateEmail = email();
const Title: FC<TitleProps> = ({ record }) => {
  return record ? <span>{record.business_name}</span> : null;
};

const EditMerchant: FC<EditProps> = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} title={<Title />} >
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Business Name"
            source="business_name"
            fullWidth
            validate={required()}
          />
          <TextInput
            label="Description"
            source="description"
            fullWidth
            validate={required()}
          />
          <TextInput label="Merchant ID" source="merchant_id" fullWidth />
          <TextInput label="Business Type" source="business_type" fullWidth />
          <TextInput label="Contact Person" source="contact_person" />
          <NumberInput label="Contact Number" source="contact_number" />
          <TextInput label="Email Address" source="merchant_email_address" validate={validateEmail} />
          <TextInput source="is_active" defaultValue="true" disabled />
        </FormTab>
        <FormTab label="License">
          <NumberInput
            label="No. of Talk Licenses"
            source="licenses"
            validate={required()}
          />
          <NumberInput
            label="No. of Branches"
            source="branches"
            validate={required()}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default EditMerchant;

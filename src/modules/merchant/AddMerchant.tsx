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

const useStyles = makeStyles({
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
});

const _merchID = () =>{ var _ranValue = Math.floor(Math.random() *90000) + 10000; return _ranValue; };
const AddMerchant: FC<CreateProps> = (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Information">
          <TextInput
            autoFocus
            label="Business Name"
            source="business_name"
            fullWidth
            validate={required()}
          />
          <TextInput label="Description" source="description" fullWidth validate={required()} />
          <TextInput label="Merchant ID" source="merchant_id" defaultValue={_merchID()} fullWidth disabled/>
          <TextInput label="Business Type" source="business_type" fullWidth />
          <TextInput label="Contact Person" source="contact_person" />
          <NumberInput label="Contact Number" source="contact_number" />
          <TextInput label="Email Address" source="merchant_email_address" />
          <TextInput source="is_active" defaultValue="true" disabled/>
        </FormTab>
        <FormTab label="License">
          <NumberInput label="No. of Talk Licenses" source="licenses" validate={required()} />
          <NumberInput label="No. of Branches" source="branches" validate={required()} />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default AddMerchant;

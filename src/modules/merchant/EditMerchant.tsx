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
  BooleanInput,
  DeleteButton,
  CloneButton,
  SortButton,
} from "react-admin";
import { Grid, IconButton, InputAdornment, StepButton, Toolbar, Typography } from "@material-ui/core";
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

const Title: FC<TitleProps> = ({ record }) => {
  return record ? <span>{record.business_name}</span> : null;
};

// const test:any = ()=> {
//   console.log('THIS IS A TEST')
// } 

// const CustomToolbar = (props: any) => (
  
//   <Toolbar >
//       <SaveButton {...props} mutationMode='pessimistic'/>
//       <SaveButton {...props} label='Activate' onClick={test} />
//   </Toolbar>
// );

const EditMerchant: FC<EditProps> = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} title={<Title />} >
      <TabbedForm>
        <FormTab label="Information" >
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
          <TextInput label="Contact Number" source="contact_number" />
          <TextInput label="Email Address" source="merchant_email_address" />
          <BooleanInput source="is_active"  label='Activate'/>
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

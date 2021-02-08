import * as React from "react";
import { FC } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  useShowController,
  ReferenceField,
  TextField,
  FieldProps,
} from "react-admin";

const useStyles = makeStyles({
  root: { width: 600, margin: "auto" },
  spacer: { height: 20 },
  invoices: { margin: "10px 0" },
});

const MerchantDetails = (props: any) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Posters Galore
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MerchantDetails;

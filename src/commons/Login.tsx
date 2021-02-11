import "dotenv/config";
import React, { FC, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Notification, useTranslate, useLogin, useNotify } from "react-admin";
import { Field, withTypes } from "react-final-form";
import { LoginForm } from "../util/interface";
import { useLocation } from "react-router-dom";
import { LockOpen } from "@material-ui/icons";
var PACKAGE = require("./../../package.json");
var version = PACKAGE.version;
var version_prefix = process.env.REACT_APP_VERSION_SUFFIX;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    //background: "url(https://source.unsplash.com/random/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  card: {
    minWidth: 300,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
  },
  avatar: {
    margin: "1em",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },
  hint: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
  },
  form: {
    padding: "0 1em 1em 1em",
  },
  input: {
    marginTop: "1em",
  },
  actions: {
    padding: "0 1em 1em 1em",
  },
  version: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    marginBottom: "1em",
  },
  title: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    marginBottom: "1em",
    fontSize: 30,
  },
  container: {
    padding: "10em",
  },
}));

const { Form } = withTypes<LoginForm>();

const renderInput = ({
  meta: { touched, error } = { touched: false, error: undefined },
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    //error={!!(touched && error)}
    //helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const Login: FC = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const classes = useStyles();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation<{ nextPathname: string } | null>();

  const handleSubmit = (auth: LoginForm) => {
    setLoading(true);
    login(auth, location.state ? location.state.nextPathname : "/")
      .then(() => {
        console.log("Welcome!");
      })
      .catch((error: Error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          "warning",
          {
            _:
              typeof error === "string"
                ? error
                : error && error.message
                ? error.message
                : undefined,
          }
        );
      });
  };

  const validate = (values: LoginForm) => {
    const errors: LoginForm = {};
    if (!values.username) {
      errors.username = "Required field.";
    }
    if (!values.password) {
      errors.username = "Required field.";
    }
    return errors;
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <div className={classes.container}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={classes.main}>
              <span className={classes.title}>
                Talk Innovations Corporation
              </span>
              <Card className={classes.card}>
                <div className={classes.avatar}>
                  <Avatar className={classes.icon}>
                    <LockOpen />
                  </Avatar>
                </div>
                <div className={classes.form}>
                  <div className={classes.input}>
                    <Field
                      autoFocus
                      name="username"
                      // @ts-ignore
                      component={renderInput}
                      label={"Username"}
                      disabled={loading}
                    />
                  </div>
                  <div className={classes.input}>
                    <Field
                      name="password"
                      // @ts-ignore
                      component={renderInput}
                      label={"Password"}
                      type="password"
                      disabled={loading}
                    />
                  </div>
                </div>
                <CardActions className={classes.actions}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                  >
                    {loading && <CircularProgress size={25} thickness={5} />}
                    {!loading && "Login"}
                  </Button>
                </CardActions>
              </Card>
              <Notification />
              <br />
              <span className={classes.version}>
                v.{version}-{version_prefix}
              </span>
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default Login;

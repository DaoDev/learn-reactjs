import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputField";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "components/form-controls/PasswordFiled";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name.")
      .test(
        "should has at least two words", // name
        "Please enter at least two words.", // measage
        // dieu kien (ham test)
        (values) => {
          return values.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address."),
    password: yup
      .string()
      .required("Please enter ypur password")
      .min(6, "Please enter at least 6 characters"),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log('Todo form: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="FullName" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;

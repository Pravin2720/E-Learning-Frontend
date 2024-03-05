import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-form";
import { useRecoilValue } from "recoil";
import { userAtom, userStatusSelector } from "states/user/user.atoms";

import { handleRedirect, validateEmail, handleFormError } from "utils";
import axios from "utils/axios.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "../auth.module.scss";
const css = classnames.bind(styles);

const InputField = CustomLazy(
  import(/* webpackChunkName: "InputField" */ "components/input_field/input_field.component"),
);
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const SignUp = () => {
  const history = useHistory();
  const return_to_path = React.useMemo(() => {
    const query = new URLSearchParams(history.location.search);
    return query.has("returnurl") && decodeURIComponent(query.get("returnurl"));
  }, [history.location.search]);
  const query = new URLSearchParams(history.location.search);
  const login_url = ["/login", query.toString()].join("?");
  // const logout_url = ["/logout", query.toString()].join("?");

  const [emailIsValid, setEmailIsValid] = React.useState(false);

  const userStatus = useRecoilValue(userStatusSelector);
  const userData = useRecoilValue(userAtom);
  const defaultValues = React.useMemo(
    () => ({ email: "", password: "", first_name: "", last_name: "", newsletter: false }),
    [],
  );
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async (values, instance) => {
      handleFormError(instance, async () => {
        const { first_name, last_name, email, password, newsletter } = values;
        const response = await axios.post("/auth/signup", {
          first_name,
          last_name,
          email,
          password,
          newsletter,
        });
        if (response.status === 200) history.push(login_url);
        else throw response;
      });
    },
    validate: async (values, instance) => {
      const checkEmpty = (value) => !value.trim();
      const checkPassword = (value) => {
        if (!value.trim()) return "Password is required";
        if (value.length < 8) return "Password must have minimum length of 8";
      };

      // ─────────────────────────────────────────────────────────────────

      const { first_name, password } = values;

      let fnError = null;
      if (instance.getFieldMeta("first_name").isTouched) {
        fnError = checkEmpty(first_name) ? "First Name is required" : null;
        instance.setFieldMeta("first_name", { error: fnError });
      }

      let pError = null;
      if (instance.getFieldMeta("password").isTouched) {
        pError = checkPassword(password);
        instance.setFieldMeta("password", { error: pError });
      }

      // if last_name has an error after submitting, remove error when field is touched
      const lnMeta = instance.getFieldMeta("last_name");
      if (lnMeta.error && lnMeta.isTouched) {
        instance.setFieldMeta("last_name", { error: null });
      }

      return fnError || emailIsValid || pError ? true : false;
    },
    debugForm: false,
  });

  React.useEffect(() => {
    const timeoutID = setTimeout(async () => {
      if (userStatus) {
        let return_url = return_to_path || "/";
        handleRedirect(history, return_url);
      }
    }, 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [history, return_to_path, userStatus]);

  return (
    <ErrorBoundary>
      {userStatus ? (
        <div>
          Logged in as <span className={css("textHighlighted")}>{userData.email}</span>
        </div>
      ) : (
        <>
          <div>
            <h4 className={css("title4")}>Sign up</h4>
            <p className={css("paragraph", "textDull")}>Start learning about finance with Valuationary !!</p>
          </div>
          <Form className={css("form")}>
            <InputField
              type="text"
              field="first_name"
              placeholder="First Name"
              autoComplete="given-name"
              className={css("paragraph")}
              iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/UserOutline.svg"
              iconAlt="UserOutline"
            />
            <InputField
              type="text"
              field="last_name"
              placeholder="Last Name"
              autoComplete="family-name"
              className={css("paragraph")}
              iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/UserOutline.svg"
              iconAlt="UserOutline"
            />
            <InputField
              type="email"
              field="email"
              placeholder="Email"
              autoComplete="email"
              className={css("paragraph")}
              validate={async (value, instance) => {
                if (!value.trim()) return "Email is required";
                if (!validateEmail(value)) return "Please enter a valid email address";

                return instance.debounce(async () => {
                  const response = await axios.post("/utils/validate/email", { email: value });
                  setEmailIsValid(response.status === 200);
                  if (response.status !== 204) return "Email is already registered!";
                  return false;
                }, 500);
              }}
              iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Mail.svg"
              iconAlt="Mail"
            />
            <InputField
              type="password"
              field="password"
              placeholder="Password"
              autoComplete="new-password"
              className={css("paragraph")}
              iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Lock.svg"
              iconAlt="Lock"
            />
            <InputField
              type="checkbox"
              field="newsletter"
              containerClassName={css("caption", "textDull")}
              id="sign_up_form_newsletter"
              label="I’m in for emails with exciting discounts and personalized recommendations."
            />
            {error ? <strong>{error}</strong> : null}
            <input
              type="submit"
              className={css("reset-button", "button", "button__style--solid", "button__size--compact")}
              disabled={!canSubmit || isSubmitting}
              value="Sign up"
            />
            <PlaceHolder>
              <p className={css("caption--small", "textDull")}>
                By signing up, you agree to our&nbsp;
                <Link navigateTo="/terms-and-conditions" className={css("reset-link", "textHighlighted")}>
                  Terms of Use
                </Link>
                &nbsp;and&nbsp;
                <Link navigateTo="/privacy-policy" className={css("reset-link", "textHighlighted")}>
                  Privacy Policy
                </Link>
              </p>
            </PlaceHolder>
            <hr style={{ opacity: 0.1, marginTop: "1.8rem" }} />
          </Form>
          <div className={css("caption", "textDull")}>
            Already have an account ?
            <PlaceHolder>
              <Link
                navigateTo={login_url}
                className={css("reset-link", "textBright")}
                style={{ textDecoration: "underline", fontWeight: 600, marginLeft: "0.8rem" }}
              >
                Sign&nbsp;in
              </Link>
            </PlaceHolder>
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default SignUp;

import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-form";

import { useRecoilValue } from "recoil";
import { userAtom, userStatusSelector } from "states/user/user.atoms";
import { useSyncCart } from "utils/cart.util";

import { validateEmail, handleRedirect, handleFormError } from "utils";
import axios from "utils/axios.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import LinearLoader from "components/loader/loader.component";

import classnames from "classnames/bind";
import styles from "../auth.module.scss";
const css = classnames.bind(styles);

const InputField = CustomLazy(
  import(/* webpackChunkName: "InputField" */ "components/input_field/input_field.component"),
);

const ForgotPassword = () => {
  const history = useHistory();

  const { return_to_path, phase } = React.useMemo(() => {
    const query = new URLSearchParams(history.location.search);
    return {
      return_to_path: query.has("returnurl") && decodeURIComponent(query.get("returnurl")),
      phase: query.has("phase") && decodeURIComponent(query.get("phase")),
    };
  }, [history.location.search]);

  const userStatus = useRecoilValue(userStatusSelector);
  const userData = useRecoilValue(userAtom);
  const syncCart = useSyncCart();

  React.useEffect(() => {
    var timeoutID;
    if (userStatus) {
      (async () => {
        let return_url = return_to_path || "/";
        if (return_to_path && return_to_path.includes(import.meta.env.VITE__VIDEO_PLATFORM_URL)) {
          const {
            data: { payload },
          } = await axios.post("/auth/sso", {});
          return_url = [return_to_path, ["ssoToken", payload].join("=")].join(return_to_path.includes("?") ? "&" : "?");
        }
        timeoutID = setTimeout(() => handleRedirect(history, return_url), 3000);
        await syncCart();
      })();
    }
    return () => {
      if (timeoutID) clearTimeout(timeoutID);
    };
  }, [history, return_to_path, syncCart, userStatus]);

  return (
    <ErrorBoundary>
      {userStatus ? (
        <div>
          Logging in as <span className={css("textHighlighted")}>{userData.email}</span>
          {return_to_path && (
            <>
              <br />
              <br />
              Redirecting to <span className={css("textHighlighted")}>{return_to_path}</span>
            </>
          )}
        </div>
      ) : !!phase && phase === "reset" ? (
        <ResetPassword />
      ) : (
        <SendResetLink />
      )}
    </ErrorBoundary>
  );
};

export default ForgotPassword;

const ResetPassword = () => {
  const history = useHistory();

  const { email, code } = React.useMemo(() => {
    const query = new URLSearchParams(history.location.search);
    return {
      email: query.has("email") && decodeURIComponent(query.get("email")),
      code: query.has("code") && decodeURIComponent(query.get("code")),
    };
  }, [history.location.search]);

  const defaultValues = React.useMemo(() => ({ password: "", password_retyped: "" }), []);
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async (values, instance) => {
      const { password } = values;

      await handleFormError(instance, async () => {
        const response = await axios.put("/auth/passwordReset", { email, password, code });
        if (response?.status === 200) handleRedirect(history, "/login");
        else throw response;
      });
    },
    validate: async (values, instance) => {
      const checkErrors = (value) => {
        if (!value?.trim()) return "Password is required";
        if (value?.length < 8) return "Password must have minimum length of 8";
        return null;
      };

      const { password } = values;
      const pError = checkErrors(password);
      instance.setFieldMeta("password", { isTouched: true, error: pError });

      const { password_retyped } = values;
      const pRetypedError = checkErrors(password_retyped);
      const pMatchError = password !== password_retyped ? "Password does not match" : null;
      instance.setFieldMeta("password_retyped", { isTouched: true, error: pRetypedError || pMatchError });

      return pError || pRetypedError || pMatchError ? true : false;
    },
    debugForm: false,
  });

  return (
    <ErrorBoundary>
      <div className={css("titleContainer")}>
        <h4 className={css("title4")}>Reset your password!</h4>
        <p className={css("paragraph", "textDull")}>
          Enter a new password and submit to update it as your account password.
        </p>
      </div>
      <Form className={css("form")}>
        <InputField
          required
          type="password"
          field="password"
          placeholder={"Enter a new password"}
          autoComplete={"new-password"}
          className={css("paragraph")}
          iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Lock.svg"
          iconAlt="Lock"
        />
        <InputField
          required
          type="password"
          field="password_retyped"
          placeholder={"Confirm new password"}
          autoComplete="off"
          className={css("paragraph")}
          iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Lock.svg"
          iconAlt="Lock"
        />
        {error ? <strong>{error}</strong> : null}
        {isSubmitting ? (
          <div className={css("button__size--compact")}>
            <LinearLoader />
          </div>
        ) : (
          <input
            type="submit"
            className={css("reset-button", "button", "button__style--solid", "button__size--compact")}
            disabled={!canSubmit}
            value="Set Password"
          />
        )}
      </Form>
    </ErrorBoundary>
  );
};

const SendResetLink = () => {
  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [emailIsSent, setEmailIsSent] = React.useState(false);

  const defaultValues = React.useMemo(() => ({ email: "" }), []);
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async (values, instance) => {
      const { email } = values;

      await handleFormError(instance, async () => {
        const response = await axios.post("/auth/passwordReset", { email });
        if (response?.status === 200) {
          setEmailIsSent(true);
        } else throw response;
      });
    },
    validate: () => !emailIsValid,
    debugForm: false,
  });

  return (
    <ErrorBoundary>
      <div className={css("titleContainer")}>
        <h4 className={css("title4")}>Forgot your password?</h4>
        <p className={css("paragraph", "textDull")}>
          Enter the email address that you used when creating your account and we will send you a link to reset your
          password.
        </p>
      </div>
      {emailIsSent ? (
        <p className={css("successMessage")}>
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/BadgeCheck.svg"
            alt="Success"
            width="48px"
            height="48px"
          />
          An email has been sent.
        </p>
      ) : (
        <Form className={css("form")}>
          <InputField
            required
            type="email"
            field="email"
            placeholder="Email"
            autoComplete="username email"
            className={css("paragraph")}
            validate={async (value, instance) => {
              if (!value.trim()) return "Email is required";
              if (!validateEmail(value)) return "Please enter a valid email address";

              return instance.debounce(async () => {
                const { status } = await axios.post("/utils/validate/email", { email: value });
                setEmailIsValid(status === 200);
                if (status === 204) return "Email is not registered";
                return false;
              }, 500);
            }}
            iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Mail.svg"
            iconAlt="Mail"
          />
          {error ? <strong>{error}</strong> : null}
          {isSubmitting ? (
            <div className={css("button__size--compact")}>
              <LinearLoader />
            </div>
          ) : (
            <input
              type="submit"
              className={css("reset-button", "button", "button__style--solid", "button__size--compact")}
              disabled={!canSubmit}
              value="Submit"
            />
          )}
        </Form>
      )}
    </ErrorBoundary>
  );
};

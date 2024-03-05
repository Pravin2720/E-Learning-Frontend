import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-form";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { userAtom, userStatusSelector } from "states/user/user.atoms";
import { useSyncCart } from "utils/cart.util";

import { callIfDocReady, validateEmail, handleRedirect, handleFormError } from "utils";
import axios from "utils/axios.util";
import CustomLazy from "utils/custom_lazy.util";
import loadScript from "utils/load_script.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import LinearLoader from "components/loader/loader.component";

import classnames from "classnames/bind";
import styles from "../auth.module.scss";
const css = classnames.bind(styles);

const InputField = CustomLazy(
  import(/* webpackChunkName: "InputField" */ "components/input_field/input_field.component"),
);
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const GoogleLoginButton = () => {
  const setUser = useSetRecoilState(userAtom);
  const userStatus = useRecoilValue(userStatusSelector);

  const handleGoogleLogin = React.useCallback(
    async (googleData) => {
      // console.log("googleData", googleData);
      const { status, headers } = await axios.post("/auth/google", {
        credential: googleData?.credential || googleData?.tokenId,
      });
      const authorization = headers.authorization ?? "";
      const access_token = authorization.startsWith("bearer") ? authorization.split("bearer ")[1] ?? null : null;
      const reauthorization = headers.reauthorization ?? "";
      const refresh_token = reauthorization.startsWith("bearer") ? reauthorization.split("bearer ")[1] ?? null : null;
      if (status === 200 && access_token) {
        localStorage.setItem("user_auth_access_token", access_token);
        localStorage.setItem("user_auth_refresh_token", refresh_token);
        const { email, first_name, last_name, roles, permissions } = JSON.parse(
          window.atob(access_token.split(".")[1] ?? ""),
        );
        setUser({ email, first_name, last_name, roles, permissions });
      }
    },
    [setUser],
  );

  React.useEffect(() => {
    const googleLoginInit = async () => {
      const script = await loadScript("https://accounts.google.com/gsi/client", true, true, null, () => {
        window?.google?.accounts.id.initialize({
          client_id: import.meta.env.VITE__GOOGLE_CLIENT_ID,
          callback: handleGoogleLogin,
          context: "signin",
          ux_mode: "popup",
          auto_select: false,
        });
        if (!userStatus) {
          console.log("calling google auth prompt");
          window?.google?.accounts.id.prompt();
        }
        if (window.location.pathname === "/login") {
          window?.google?.accounts.id.renderButton(document.getElementById("google_sign_in_btn_parent"), {
            type: "standard",
            shape: "rectangular",
            theme: "filled_blue",
            text: "signin_with",
            size: "large",
            logo_alignment: "left",
          });
        }
      });
      if (!script) alert("failed to load google sign in client");
    };
    const cleanupGoogleLogin = callIfDocReady(googleLoginInit);
    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel();
      if (typeof cleanupGoogleLogin === "function") cleanupGoogleLogin();
    };
  }, [handleGoogleLogin, userStatus]);

  return <div id="google_sign_in_btn_parent"></div>;
};

const Login = () => {
  const history = useHistory();
  const return_to_path = React.useMemo(() => {
    const query = new URLSearchParams(history.location.search);
    return query.has("returnurl") && decodeURIComponent(query.get("returnurl"));
  }, [history.location.search]);
  const query = new URLSearchParams(history.location.search);
  const forgot_url = ["/reset", query.toString()].join("?");
  const signup_url = ["/signup", query.toString()].join("?");

  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [hasPassword, setHasPassword] = React.useState(true);

  const userStatus = useRecoilValue(userStatusSelector);
  const [userData, setUser] = useRecoilState(userAtom);
  const syncCart = useSyncCart();
  const defaultValues = React.useMemo(() => ({ email: "", password: "", password_retyped: "" }), []);
  const {
    Form,
    meta: { isSubmitting, canSubmit, error },
  } = useForm({
    defaultValues: defaultValues,
    onSubmit: async (values, instance) => {
      const { email, password, password_retyped } = values;

      await handleFormError(instance, async () => {
        if (!hasPassword) {
          const response = await axios.put("/auth/credential", { email, password, password_retyped });
          if (response.status === 200) setHasPassword(true);
          else throw response;
        }
      });

      await handleFormError(instance, async () => {
        const response = await axios.post("/auth/login", { email, password });
        const { status, headers } = response;
        const authorization = headers.authorization ?? "";
        const access_token = authorization.startsWith("bearer") ? authorization.split("bearer ")[1] ?? null : null;
        const reauthorization = headers.reauthorization ?? "";
        const refresh_token = reauthorization.startsWith("bearer") ? reauthorization.split("bearer ")[1] ?? null : null;
        if (status === 200 && access_token) {
          localStorage.setItem("user_auth_access_token", access_token);
          localStorage.setItem("user_auth_refresh_token", refresh_token);
          const { email, first_name, last_name, roles, permissions } = JSON.parse(
            window.atob(access_token.split(".")[1] ?? ""),
          );
          setUser({ email, first_name, last_name, roles, permissions });
        } else throw response;
      });
    },
    validate: async (values, instance) => {
      if (!emailIsValid) return true;

      const checkErrors = (value) => {
        if (!value?.trim()) return "Password is required";
        if (value?.length < 8) return "Password must have minimum length of 8";
        return null;
      };

      const { password } = values;
      const pError = checkErrors(password);
      instance.setFieldMeta("password", { isTouched: true, error: pError });

      if (!hasPassword) {
        const { password_retyped } = values;
        const pRetypedError = checkErrors(password_retyped);
        const pMatchError = password !== password_retyped ? "Password does not match" : null;
        instance.setFieldMeta("password_retyped", { isTouched: true, error: pRetypedError || pMatchError });

        return pError || pRetypedError || pMatchError ? true : false;
      }
      return pError ? true : false;
    },
    debugForm: false,
  });

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
        <>
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
        </>
      ) : (
        <>
          <div>
            <h4 className={css("title4")}>Welcome!</h4>
            <p className={css("paragraph", "textDull")}>Log into your Valuationary account!</p>
          </div>
          <Form className={css("form")}>
            <div className={css("idpButtons")}>{!userStatus && <GoogleLoginButton />}</div>
            <hr className={css("horizontalSeparator", "caption")} data-content="or" />
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
                  const { status, data } = await axios.post("/utils/validate/email", { email: value });
                  setEmailIsValid(status === 200);
                  status === 200 && setHasPassword(Boolean(data?.hasPassword));
                  if (status === 204) return "Email is not registered";
                  return false;
                }, 500);
              }}
              iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Mail.svg"
              iconAlt="Mail"
            />
            {emailIsValid && (
              <>
                <InputField
                  required
                  type="password"
                  field="password"
                  placeholder={hasPassword ? "Enter your current password" : "Enter your new password"}
                  autoComplete={hasPassword ? "current-password" : "new-password"}
                  className={css("paragraph")}
                  iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Lock.svg"
                  iconAlt="Lock"
                />
                {!hasPassword && (
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
                )}
              </>
            )}
            <PlaceHolder>
              <Link navigateTo={forgot_url} className={css("reset-link", "caption", "forgotPassword")}>
                Forgot Password ?
              </Link>
            </PlaceHolder>
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
                value={hasPassword ? "Login" : "Set Password"}
              />
            )}
          </Form>
          <div className={css("caption", "textDull")}>
            Don't have an account ?
            <PlaceHolder>
              <Link
                navigateTo={signup_url}
                className={css("reset-link")}
                style={{ textDecoration: "underline", fontWeight: 600, marginLeft: "0.8rem" }}
              >
                Sign&nbsp;up&nbsp;now
              </Link>
            </PlaceHolder>
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default Login;

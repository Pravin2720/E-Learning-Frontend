import React from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";

import { redirectionOpenAtom } from "states/redirection/redirection.atoms";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import PlaceHolder from "utils/placeholders.util";

import ForgotPassword from "./components/forgot_password.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
// import SignUp from "./components/signup.component";

import classnames from "classnames/bind";
import styles from "./auth.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));

const Auth = () => {
  const history = useHistory();

  const isLogin = history.location.pathname === "/login";
  const isSignUp = history.location.pathname === "/signup";
  const isLogout = history.location.pathname === "/logout";
  const isForgotPassword = history.location.pathname === "/reset";

  const [showRM, setShowRM] = useRecoilState(redirectionOpenAtom);

  React.useEffect(() => isSignUp && !showRM && setShowRM(true), [isSignUp, setShowRM, showRM]);

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout hideFooter>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <div className={css("container")}>
              <div className={css("dialog")}>
                <div className={css("wrapper")}>
                  {isLogin && (
                    <React.Suspense fallback={<PlaceHolder />}>
                      <Login />
                    </React.Suspense>
                  )}
                  {/* {isSignUp && (
                    <React.Suspense fallback={<PlaceHolder />}>
                      <SignUp />
                    </React.Suspense>
                  )} */}
                  {isLogout && (
                    <React.Suspense fallback={<PlaceHolder />}>
                      <Logout />
                    </React.Suspense>
                  )}
                  {isForgotPassword && (
                    <React.Suspense fallback={<PlaceHolder />}>
                      <ForgotPassword />
                    </React.Suspense>
                  )}
                </div>
              </div>
            </div>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Auth;

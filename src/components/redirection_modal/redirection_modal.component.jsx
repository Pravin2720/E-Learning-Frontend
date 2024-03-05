import React from "react";
import ReactModal from "react-modal";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Link from "components/link/link.component";

import { redirectionOpenAtom } from "states/redirection/redirection.atoms";

import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./redirection_modal.module.scss";
const css = classnames.bind(styles);

const Modal = CustomLazy(import(/* webpackChunkName: "Modal" */ "components/modal/modal.component"));

const RedirectionModal = () => {
  const history = useHistory();

  const isLogin = history.location.pathname === "/login";
  const isSignUp = history.location.pathname === "/signup";
  const isLogout = history.location.pathname === "/logout";
  const isForgotPassword = history.location.pathname === "/reset";

  const showRM = useRecoilValue(redirectionOpenAtom);
  const setShowRM = useSetRecoilState(redirectionOpenAtom);
  const closeRM = React.useCallback(() => {
    isSignUp && history.push("/");
    setShowRM(false);
  }, [history, isSignUp, setShowRM]);

  React.useEffect(() => ReactModal.setAppElement("#root"));

  if (isLogin || isLogout || isForgotPassword) return <></>;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Modal show={showRM} close={closeRM} className={css("customContent", "modal")}>
        <ErrorBoundary>
          <h1 className={css("title4", "textDullDark", "modal__header")}>
            <img
              className={css("header__image")}
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/logo/valuationary_ht.svg"
              alt="Valuationary"
              width="276px"
              height="52px"
            />
            <span style={{ whiteSpace: "nowrap" }}>is now</span>
            <img
              className={css("header__image")}
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/logo/upsurge_ht.svg"
              alt="Upsurge"
              width="209px"
              height="52px"
            />
          </h1>
          <p className={css("textDullDark")}>
            Valuationary is now Upsurge, a new Learning Platform with certification courses on trading, stock markets,
            investment banking, crypto, insurance, and many more! Upsurge is the right place for you to begin your
            journey to become a finance expert.
          </p>
          <div className={css("modal__buttons")}>
            <Link
              navigateTo="https://www.upsurge.club"
              className={css("reset-link", "button", "button__style--solid", "button__size--sm")}
            >
              Experience Upsurge.club
            </Link>
            <span className="textDullDark caption">or</span>
            <button
              className={css("reset-button", "button", "button__style--stripped", "button__size--sm", "textBright")}
              style={{ paddingBlock: "0" }}
              onClick={closeRM}
            >
              <u>continue using valuationary</u>
            </button>
          </div>
        </ErrorBoundary>
      </Modal>
    </React.Suspense>
  );
};

export default RedirectionModal;

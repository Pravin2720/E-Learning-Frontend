import React from "react";
import { useRecoilValue } from "recoil";
import { userStatusSelector } from "states/user/user.atoms";
import axios from "utils/axios.util";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import { alignOption } from "components/navigation_menu/navigation_menu.constants";

import classnames from "classnames/bind";
import styles from "../header.module.scss";
const css = classnames.bind(styles);

const NavigationMenu = CustomLazy(
  import(/* webpackChunkName: "NavigationMenu" */ "components/navigation_menu/navigation_menu.component"),
);
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const Profile = ({ position }) => {
  const userStatus = useRecoilValue(userStatusSelector);
  const query = new URLSearchParams("returnurl=" + encodeURIComponent(window.location.pathname));
  let login_url = ["/login", query.toString()].join("?");
  let logout_url = ["/logout", query.toString()].join("?");

  const profileLinks = [
    // { label: "My Profile", navigateTo: "/profile" },
    {
      label: "My Courses",
      navigateTo: import.meta.env.VITE__MY_COURSES_URL || "https://school.valuationary.com/enrollments",
      preventDefault: true,
      onClick: async (event) => {
        const href = event.target.nodeName === "A" ? event.target.href : event.target.parentElement.href;
        const {
          data: { payload },
        } = await axios.post("/auth/sso", {});
        let query_with_sso = new URLSearchParams(window.location.search);
        query_with_sso.set("ssoToken", payload);
        const url = [href, query_with_sso.toString()].join("?");
        window.location = url;
      },
    },
    { label: "Sign Out", navigateTo: logout_url },
  ];

  if (["/login", "/logout", "/signup"].includes(window.location.pathname)) return <></>;

  return (
    <ErrorBoundary>
      {userStatus ? (
        <NavigationMenu
          navigateTo="/"
          subLinks={profileLinks}
          preventDefault
          disabled={window.location.pathname === "/login"}
          align={alignOption.Right}
        >
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/User.svg"
            alt="User"
            width="28px"
            height="28px"
            style={{ display: "block", width: "2.8rem", objectFit: "none" }}
          />
          <img
            src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ArrowDown.svg"
            alt="ArrowDown"
            width="16px"
            height="16px"
            style={{ display: "block", width: "1.6rem", alignSelf: "center" }}
          />
        </NavigationMenu>
      ) : (
        <Link
          navigateTo={login_url}
          className={css("reset-link", "button", "button__size--lean", "button__style--outlined")}
          style={{ color: "#fff", alignSelf: position }}
          disabled={window.location.pathname === "/login"}
        >
          Login
        </Link>
      )}
    </ErrorBoundary>
  );
};

export default Profile;

import React from "react";
import { useHistory } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartOpenAtom, cartStatsSelector } from "states/cart/cart.atoms";
import { notificationClosedAtom } from "states/notification/notification.atoms";
import { redirectionOpenAtom } from "states/redirection/redirection.atoms";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import useMediaQuery from "utils/media_query.util";
import PlaceHolder from "utils/placeholders.util";

import { alignOption } from "components/navigation_menu/navigation_menu.constants";

import classnames from "classnames/bind";
import styles from "./header.module.scss";
const css = classnames.bind(styles);

const NavigationMenu = CustomLazy(
  import(/* webpackChunkName: "NavigationMenu" */ "components/navigation_menu/navigation_menu.component"),
);
const Profile = CustomLazy(import(/* webpackChunkName: "Profile" */ "./components/profile.component"));

const Header = ({ linkGroups }) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = React.useState(false);
  const isPhone = useMediaQuery("(max-width: 56.25em)");
  const notificationClosed = useRecoilValue(notificationClosedAtom);

  React.useEffect(() => {
    console.log("showMenu", showMenu);
  }, [showMenu]);

  const NavigationLinks =
    linkGroups &&
    linkGroups.map((linkGroup, index) => {
      return (
        <PlaceHolder key={index} width="10rem">
          <NavigationMenu
            {...linkGroup}
            navLink={!isPhone}
            menuClose={() => setShowMenu(false)}
            align={alignOption.Center}
          />
        </PlaceHolder>
      );
    });

  return (
    <ErrorBoundary>
      <header
        id="navbar"
        className={css("navbar", "navbar__bg", {
          navbar__menu: isPhone,
          "navbar__menu--open": isPhone && showMenu,
          notification__visible: !notificationClosed,
        })}
      >
        <div className={css("header", "content-max-width-alignment")}>
          <div className={css("logo")}>
            <img
              src="/logo.svg"
              alt="Valuationary Logo"
              width="82px"
              height="68px"
              className={css("logo__image")}
              onClick={() => history.location.pathname !== "/" && history.push("/")}
            />
          </div>
          <nav className={css("navigationLinks")}>
            {isPhone ? (
              <>
                <div className={css("window")}>
                  <div className={css("window__container", "navigationLinks__mobileLayout")}>{NavigationLinks}</div>
                </div>
                <PlaceHolder>
                  <Profile position="end" />
                </PlaceHolder>
              </>
            ) : (
              NavigationLinks
            )}
          </nav>
          <div className={css("profile")}>
            <CartIcon />
            <PlaceHolder width="10rem">{!isPhone && <Profile />}</PlaceHolder>
          </div>
          {isPhone && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
        </div>
      </header>
    </ErrorBoundary>
  );
};

export default Header;

const CartIcon = () => {
  const setCartOpen = useSetRecoilState(cartOpenAtom);
  const cartStats = useRecoilValue(cartStatsSelector);

  const setRedirectionModal = useSetRecoilState(redirectionOpenAtom);
  return (
    <ErrorBoundary>
      <button
        style={{ color: "#fff" }}
        className={css("reset-button", "cartIcon")}
        data-count={cartStats.count}
        onClick={() => setRedirectionModal(true) && setCartOpen(true)}
      >
        <img
          src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/ShoppingCart.svg"
          alt="ShoppingCart"
          width="28px"
          height="28px"
          style={{ display: "block" }}
        />
      </button>
    </ErrorBoundary>
  );
};

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <ErrorBoundary>
      <a
        href="/"
        className={css("reset-link", "menu", { "menu--open": showMenu })}
        // onClickCapture={() => {
        //   console.log("hamburger onClickCapture");
        //   console.timeLog("hamburger");
        // }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowMenu(!showMenu);
          // console.log("hamburger onClick");
          // console.timeEnd("hamburger");
        }}
        // onTouchStartCapture={() => {
        //   console.log("hamburger onTouchStartCapture");
        //   console.time("hamburger");
        // }}
        // onTouchStart={() => {
        //   console.log("hamburger onTouchStart");
        //   console.timeLog("hamburger");
        // }}
        // onTouchEndCapture={() => {
        //   console.log("hamburger onTouchEndCapture");
        //   console.timeLog("hamburger");
        // }}
        // onTouchEnd={() => {
        //   console.log("hamburger onTouchEnd");
        //   console.timeLog("hamburger");
        // }}
      >
        <span className={css("menu__icon--top")}></span>
        <span className={css("menu__icon--middle")}></span>
        <span className={css("menu__icon--bottom")}></span>
      </a>
    </ErrorBoundary>
  );
};

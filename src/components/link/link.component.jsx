import React from "react";
import { Link as ReactRouterDomLink, NavLink as ReactRouterDomNavLink } from "react-router-dom";
import ErrorBoundary from "utils/error_boundary.util";

const Link = ({
  navigateTo,
  className,
  style,
  label,
  disabled,
  preventDefault,
  stopPropagation,
  onClick,
  navLink,
  children,
}) => {
  function onClickWrapper(e) {
    if (window.location.pathname === navigateTo.split("?")[0]) e.preventDefault();
    if (disabled) e.preventDefault();
    if (preventDefault) e.preventDefault();
    if (stopPropagation) e.stopPropagation();
    if (onClick && typeof onClick === "function") onClick(e);
  }

  const Component = navLink ? ReactRouterDomNavLink : ReactRouterDomLink;
  return navigateTo && navigateTo.startsWith("/") ? (
    <ErrorBoundary>
      <Component to={navigateTo} className={className} style={style} onClick={onClickWrapper}>
        {label && <span>{label}</span>}
        {children}
      </Component>
    </ErrorBoundary>
  ) : (
    <ErrorBoundary>
      <a
        target="_blank"
        rel="noreferrer"
        href={navigateTo}
        className={className}
        style={style}
        onClick={onClickWrapper}
      >
        {label && <span>{label}</span>}
        {children}
      </a>
    </ErrorBoundary>
  );
};

export default Link;

import React from "react";

const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},

  paneluser: null,
  panellogin: () => {},
  panellogout: () => {},
});

function AuthContextDefault() {
  let existingUserData = localStorage.getItem("user_data");
  existingUserData = existingUserData ? JSON.parse(existingUserData) : null;
  const [user, setUser] = React.useState(existingUserData);

  const handleLogin = (loginDetails, callback = () => {}) => {
    setUser(loginDetails);
    localStorage.setItem("user_data", JSON.stringify(loginDetails));
    callback();
  };

  const handleLogout = (callback = () => {}) => {
    setUser(null);
    localStorage.removeItem("user_data");
    callback();
  };

  // ================================================================================================

  let existingPanelUserData = localStorage.getItem("panel_user_data");
  existingPanelUserData = existingPanelUserData ? JSON.parse(existingPanelUserData) : null;
  const [panelUser, setPanelUser] = React.useState(existingPanelUserData);

  const handlePanelLogin = (loginDetails, callback = () => {}) => {
    setPanelUser(loginDetails);
    localStorage.setItem("panel_user_data", JSON.stringify(loginDetails));
    callback();
  };

  const handlePanelLogout = (callback = () => {}) => {
    setPanelUser(null);
    localStorage.removeItem("panel_user_data");
    callback();
  };

  // ================================================================================================

  return {
    user: user,
    login: handleLogin,
    logout: handleLogout,
    paneluser: panelUser,
    panellogin: handlePanelLogin,
    panellogout: handlePanelLogout,
  };
}

export function AuthProvider({ children }) {
  const auth = AuthContextDefault();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return React.useContext(AuthContext);
}

export default useAuthContext;

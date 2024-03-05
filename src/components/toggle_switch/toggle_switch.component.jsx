import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import ErrorBoundary from "utils/error_boundary.util";

const ToggleSwitch = ({ value, onChange }) => {
  const [isOn, setIsOn] = React.useState(value);

  return (
    <ErrorBoundary>
      <div
        className={css(styles.switch, isOn ? styles.switchIsOn : styles.switchIsOff)}
        onClick={() => {
          setIsOn(!isOn);
          onChange(!isOn);
        }}
      >
        <div className={css(styles.toggleButton, isOn ? styles.toggleOnRight : styles.toggleOnLeft)}></div>
      </div>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  switch: {
    position: "relative",
    width: "3.2rem",
    height: "1.6rem",
    borderRadius: "0.8rem",
    transition: "background-color 250ms ease-out",
    zIndex: 1,
    margin: "0.8rem",
  },
  toggleButton: {
    position: "absolute",
    width: "1.6rem",
    height: "1.6rem",
    borderRadius: "0.8rem",
    transition: "transform 250ms ease-in-out",
    zIndex: 3,
    // border: "0.05rem solid #353535",
    // top: "-0.05rem"
  },
  switchIsOn: {
    backgroundColor: colors.white,
  },
  switchIsOff: {
    backgroundColor: colors.black,
  },
  toggleOnLeft: {
    transform: "translateX(0)",
    backgroundColor: "#ffffff",
  },
  toggleOnRight: {
    transform: "translateX(1.6rem)",
    backgroundColor: colors.black,
  },
});

export default ToggleSwitch;

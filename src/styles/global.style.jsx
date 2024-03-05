import { StyleSheet } from "aphrodite-jss";

export const colors = {
  primary: "#3157E1",
  secondary: "#6F89EA",
  tertiary: "#C1CDF6",
  highlight: "#06D6A0",
  textPrimary: "#001A49",
  textSecondary: "#4F596A",
  textSecondaryLight: "#f0f0f0",
  white: "#ffffff",
  white2: "#F8F7FB",
  black: "#000000",
  adminPrimaryColor: "#C4C4C4",
};

export const globalStyles = StyleSheet.create({
  contentMaxWidthAlignment: {
    maxWidth: "152rem",
    marginLeft: "auto",
    marginRight: "auto",
    "@media only screen and (max-width: 79.16666666666667em)": {
      maxWidth: "90vw",
    },
  },
  resetLinkCSS: {
    textDecoration: "none",
    color: "inherit",
  },
  resetButtonCSS: {
    border: "none",
    color: "inherit",
    font: "inherit",
    cursor: "pointer",
  },
  linkWithImg: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    "&>img": {
      width: "1.6rem",
      marginRight: "0.8rem",
      height: "auto",
    },
  },
  aspectRatioBoxWrapper: {
    width: "100%",
    position: "relative",
  },
  aspectRatioBox: {
    position: "relative",
    width: "100%",
    "&::before": {
      content: "''",
      width: "1px",
      marginLeft: "-1px",
      float: "left",
      height: "0",
      paddingTop: "56.25%",
    },
    "&::after": {
      content: "''",
      display: "table",
      cleat: "both",
    },
  },
  aspectRatioBoxSquare: {
    position: "relative",
    width: "100%",
    "&::before": {
      content: "''",
      width: "1px",
      marginLeft: "-1px",
      float: "left",
      height: "0",
      paddingTop: "100%",
    },
    "&::after": {
      content: "''",
      display: "table",
      cleat: "both",
    },
  },
});

export const modalStyle = {
  overlay: {
    zIndex: "10",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(1px)",
  },
  content: {
    zIndex: "101",
    position: "absolute",
    // maxHeight: "60vh",
    height: "60vh",
    width: "80vw",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.primary,
    color: colors.white2,
    border: "none",
    borderRadius: "0.8rem",
    borderTopLeftRadius: "4rem",
    borderBottomRightRadius: "4rem",
    boxShadow: `0.2rem -0.2rem 0 0.2rem ${colors.white2}, 0 0 0 0.4rem ${colors.tertiary}, 0 4rem 10rem -4rem rgba(0, 0, 0, 0.7)`,
  },
};

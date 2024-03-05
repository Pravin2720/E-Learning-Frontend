import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import ErrorBoundary from "utils/error_boundary.util";

const categoryEnum = {
  Category1: "Category1",
  Category2: "Category2",
  Category3: "Category3",
  Category4: "Category4",
};

const SelectDropDown = ({ selectStyle, value, onChange }) => {
  return (
    <ErrorBoundary>
      <select
        className={css(styles.select, selectStyle)}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value);
        }}
      >
        <option value={categoryEnum.Category1}>{categoryEnum.Category1}</option>
        <option value={categoryEnum.Category2}>{categoryEnum.Category2}</option>
        <option value={categoryEnum.Category3}>{categoryEnum.Category3}</option>
        <option value={categoryEnum.Category4}>{categoryEnum.Category4}</option>
      </select>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  select: {
    backgroundColor: colors.adminPrimaryColor,
    padding: 8,
  },
});

export default SelectDropDown;

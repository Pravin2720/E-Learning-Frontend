import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./checklist.module.scss";
const css = classnames.bind(styles);

const CheckList = ({ item_list }) => {
  return (
    <ErrorBoundary>
      <div className={css("checklist")}>
        {item_list.map((i, index) => {
          return (
            <div className={css("item")} key={index}>
              <img
                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Check.svg"
                alt="check"
                className={css("checkIcon")}
              />
              <span className={css("paragraph", "textDull")}>{i}</span>
            </div>
          );
        })}
      </div>
    </ErrorBoundary>
  );
};

export default CheckList;

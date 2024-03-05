import React from "react";

const Trigger = ({ onLoad, onComplete, children }) => {
  React.useEffect(() => {
    if (typeof onLoad === "function") {
      // console.log("called onLoad");
      onLoad();
    }

    return () => {
      if (typeof onComplete === "function") {
        // console.log("called onComplete");
        onComplete();
      }
    };
  }, [onComplete, onLoad]);

  return children ? children : <div>Loading...</div>;
};

export default Trigger;

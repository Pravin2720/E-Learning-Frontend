import React from "react";

const CustomLazy = (imp, delay = 0) => {
  return React.lazy(async () => {
    const results = await Promise.all([imp, new Promise((resolve) => setTimeout(resolve, delay))]);
    return results[0];
  });
};

export default CustomLazy;

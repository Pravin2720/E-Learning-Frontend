import React from "react";
import LinearLoader from "components/loader/loader.component";
import Trigger from "./trigger.util";

export const Dimmensions = {
  Navbar: { width: "100vw", height: "100vh" },
  Header: { width: "100vw", height: "15rem" },
  Footer: { width: "100vw", height: "59.5rem" },
  Section: { width: "100vw", height: "100vh" },
};

export const LoadingPlaceHolder = ({ fallback, children }) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      {loading ? fallback : <></>}
      <React.Suspense fallback={<Trigger onLoad={() => setLoading(true)} onComplete={() => setLoading(false)} />}>
        {children}
      </React.Suspense>
    </>
  );
};

const PlaceHolder = ({ width, height, mlzero, cover, children }) => {
  return (
    <React.Suspense
      fallback={
        <LinearLoader
          style={{ width: width || "100%", height: height || "max(100%, 0.5rem)" }}
          cover={cover}
          mlzero={mlzero}
        />
      }
    >
      {children}
    </React.Suspense>
  );
};

export default PlaceHolder;

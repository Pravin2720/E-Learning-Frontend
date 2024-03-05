import React from "react";
import Link from "components/link/link.component";
import ErrorBoundary from "utils/error_boundary.util";

export default function UnderConstruction() {
  return (
    <ErrorBoundary>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          placeContent: "center",
          placeItems: "center",
          backgroundColor: "#1E2128",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            placeContent: "center",
            placeItems: "center",
            gridGap: "3.2rem",
            maxWidth: "50rem",
          }}
        >
          <h1 className="title1">Under Construction</h1>
          <h3 className="title3">Please visit later...</h3>
          <p className="paragraph" style={{ color: "#B8B9BB" }}>
            The page you are looking for is still in making. You can either return to the previous page or visit our
            homepage.
          </p>
          <Link
            navigateTo="/"
            className="reset-link button button__style--solid button__size--sm "
            style={{ marginTop: "1.6rem" }}
          >
            Go back to homepage
          </Link>
        </div>
      </div>
    </ErrorBoundary>
  );
}

import React from "react";
import Link from "components/link/link.component";
import ErrorBoundary from "utils/error_boundary.util";

export default function PageNotFound() {
  document.title = "Page Not Found";

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
        <img
          src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/404/svg/FallingCoins.svgz"
          alt="Falling Coins Left"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0.04",
            height: "auto",
            width: "min(42rem, 45vw)",
            transform: "rotateY(180deg)",
          }}
        />
        <img
          src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/404/svg/FallingCoins.svgz"
          alt="Falling Coins Right"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            opacity: "0.04",
            height: "auto",
            width: "min(42rem, 45vw)",
          }}
        />
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
          <h1
            className="title1"
            style={{ lineHeight: "20rem", fontSize: "18rem", display: "flex", alignItems: "center" }}
          >
            4
            <img
              src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/404/png/Coin_124x124.png"
              alt="zero"
              width="124px"
              height="124px"
              style={{ display: "block", height: "12.4rem", width: "12.4rem", margin: "0 2px" }}
            />
            4
          </h1>
          <h3 className="title3">Page not found</h3>
          <p className="paragraph" style={{ color: "#B8B9BB" }}>
            The page you are looking for does not exist or moved somewhere else. You can either return to the previous
            page or visit our homepage.
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

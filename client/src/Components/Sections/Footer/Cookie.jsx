import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const Cookie = () => {
  return (
    <>
      <CookieConsent
        className="font-abc"
        style={{}}
        buttonText="Accept"
        buttonStyle={{
          color: "#000",
          background: "orange",
          borderRadius: 4,
        }}
      >
        <p className="font-abc">
          We use cookies to improve the site and its user experience. See our{" "}
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          for more By continuing to use the site, you agree to the use of
          cookies. You can always disable cookies in your browser settings.
        </p>
      </CookieConsent>
    </>
  );
};

export default Cookie;

import React from "react";
import { useHistory } from "react-router";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";
import PlaceHolder from "utils/placeholders.util";

import classnames from "classnames/bind";
import styles from "./footer.module.scss";
const css = classnames.bind(styles);

const Newsletter = CustomLazy(
  import(/* webpackChunkName: "Newsletter" */ "components/newsletter/newsletter.component"),
);
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));

const socialLinks = [
  {
    alt: "instagram icon",
    image: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/InstagramIcon.svg",
    navigateTo: "https://www.instagram.com/valuationary/?hl=en",
  },
  {
    alt: "facebook icon",
    image: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/FacebookIcon.svg",
    navigateTo: "https://www.facebook.com/valuationary",
  },
  {
    alt: "linkedin icon",
    image: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/LinkedInIcon.svg",
    navigateTo: "https://www.linkedin.com/company/valuationary/",
  },
  {
    alt: "spotify icon",
    image: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/SpotifyIcon.svg",
    navigateTo: "https://open.spotify.com/show/7nUQTmf6EqLeyORhO3wDSW",
  },
  {
    alt: "youtube icon",
    image: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/YoutubeIcon.svg",
    navigateTo: "https://www.youtube.com/channel/UCQQojT_AmVWGb4Eg-QniuBA",
  },
];

const Footer = () => {
  const history = useHistory();

  const allLinkGroups = [
    {
      label: "Company",
      subLinks: [
        { label: "About Us", navigateTo: "/about" },
        {
          label: "Help & Support",
          navigateTo: "mailto://connect@valuationary.com",
        },
        {
          label: "Privacy Policy",
          navigateTo: "/privacy-policy",
        },
        {
          label: "Terms & Conditions",
          navigateTo: "/terms-and-conditions",
        },
        {
          label: "FAQs",
          navigateTo: "/faqs",
        },
      ],
    },
    {
      label: "Quick links",
      subLinks: [
        { label: "Home", navigateTo: "/" },
        { label: "Job Programs", navigateTo: "/programs" },
        { label: "Career Courses", navigateTo: "/courses" },
        { label: "Instructors", navigateTo: "/instructors" },
      ],
    },
    {
      label: "Resources",
      subLinks: [
        { label: "Blogs", navigateTo: "/blogs" },
        { label: "Podcasts", navigateTo: "/podcasts" },
        { label: "Templates", navigateTo: "/templates" },
        { label: "Knowledge Library", navigateTo: "/knowledge-library" },
      ],
    },
    {
      label: "Contact us",
      class: "textUnderline",
      subLinks: [
        { label: "(+91) 812-845-8215", navigateTo: "tel:+918128458215" },
        { label: "connect@valuationary.com", navigateTo: "mailto://connect@valuationary.com" },
      ],
    },
  ];

  return (
    <ErrorBoundary>
      <footer className={css("footer")}>
        <div className={css("footer__layout", "content-max-width-alignment")}>
          <div className={css("logo")}>
            <img
              src="/logo.svg"
              alt="Valuationary Logo"
              width="134px"
              height="109px"
              className={css("logo__image")}
              onClick={() => {
                if (history.location.pathname !== "/") history.push("/");
              }}
            />
          </div>
          <div className={css("links", "links__layout")}>
            <div className={css("links__socialIcons")}>
              <label className={css("subtitle")}>Follow us</label>
              <div className={css("socialIcons")}>
                <PlaceHolder width="35rem" mlzero>
                  {socialLinks &&
                    socialLinks.map((link, index) => {
                      return (
                        <Link {...link} key={index} className={css("reset-link", "socialIcon")}>
                          <img
                            src={link.image}
                            width="37px"
                            height="37px"
                            alt={link.alt}
                            className={css("socialIcon")}
                            loading="lazy"
                          />
                        </Link>
                      );
                    })}
                </PlaceHolder>
              </div>
            </div>
            <div className={css("links__newsletter")}>
              <label className={css("subtitle")} style={{ display: "flex" }}>
                Subscribe to our newsletter
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/WaveHand.svg"
                  alt="WaveHand"
                  width="36px"
                  height="36px"
                  style={{ width: "3.6rem", height: "3.6rem" }}
                />
              </label>
              <PlaceHolder height="6.6rem" mlzero>
                <Newsletter />
              </PlaceHolder>
            </div>
            {allLinkGroups &&
              allLinkGroups.map((linkGroup, index) => {
                return (
                  <div key={index} className={css("links__group")}>
                    <label className={css("subtitle")}>{linkGroup.label}</label>
                    {linkGroup.subLinks &&
                      linkGroup.subLinks.map((link, index) => {
                        return (
                          <div className={css("link", linkGroup.class)} key={index}>
                            <PlaceHolder width="20rem" mlzero>
                              <Link className={css("reset-link")} {...link} />
                            </PlaceHolder>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={css("copyright")}>&copy; 2021 Valuationary Edtech Pvt. Ltd. All rights reserved.</div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;

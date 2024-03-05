import React from "react";
import ErrorBoundary from "utils/error_boundary.util";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartListAtom, cartOpenAtom, itemInCartAtomFamily } from "states/cart/cart.atoms";
import { redirectionOpenAtom } from "states/redirection/redirection.atoms";

import { useSyncCart } from "utils/cart.util";
import useMediaQuery from "utils/media_query.util";

import Link from "components/link/link.component";
import Modal from "components/modal/modal.component";
import StarRating from "components/star_rating/star_rating.component";
import VideoInterface from "components/video_interface/video_interface.component";
import YouTubeEmbed from "components/youtube_embed/youtube_embed.component";

import classnames from "classnames/bind";
import styles from "./banner.module.scss";
const css = classnames.bind(styles);

//
// ─── PLAY GRADIENT ICON ─────────────────────────────────────────────────────────
//

const PlayGradient = () => (
  <svg width="30" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.998.4a9.6 9.6 0 0 1 9.6 9.6 9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 9.6-9.6zM9.464 13.4a1.2 1.2 0 0 1-1.866-.999V7.6a1.2 1.2 0 0 1 1.866-.998l3.6 2.4a1.2 1.2 0 0 1 0 1.997l-3.6 2.4z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient id="a" x1="-2.398" y1="10" x2="21.462" y2="10" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3157E1" />
        <stop offset="1" stopColor="#06D6A0" />
      </linearGradient>
    </defs>
  </svg>
);

//
// ─── PERK ───────────────────────────────────────────────────────────────────────
//

const Perk = ({ text }) => (
  <div className={css("perk")}>
    <img
      src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Check.svg"
      alt="check"
      className={css("checkIcon")}
    />
    <span className={css("paragraph", "textDull")}>{text}</span>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────────

const Banner = ({
  title,
  ratings,
  short_description,
  markup_price,
  offer_price,
  perks,
  categories,
  slug,
  entity,
  poster_url,
  youtube_embed,
  video_sources,
  pre_launch,
  launch_date,
  pre_launch_offers,
  refund_policy,
  has_workshop,
  workshop_date,
  workshop_time,
  show_banner_tag = true,
}) => {
  const isCFA = categories.find((v) => v.startsWith("cfa"));
  const isCFALevel1 = categories.find((v) => v.startsWith("cfa_level_1"));
  const isCFALevel2 = categories.find((v) => v.startsWith("cfa_level_2"));
  const isBundle = categories.find((v) => v.startsWith("bundle"));
  const isCourse = categories.find((v) => v.startsWith("course"));

  const itemInCart = useRecoilValue(itemInCartAtomFamily({ entity_id: slug, entity_type: entity }));
  const cartItems = useRecoilValue(cartListAtom);
  const syncCart = useSyncCart();
  const setShowCart = useSetRecoilState(cartOpenAtom);
  const setRedirectionModal = useSetRecoilState(redirectionOpenAtom);

  const addToCart = async (e) => {
    if (!itemInCart) {
      e.target.setAttribute("disabled", "disabled");
      await syncCart([...cartItems, { entity_id: slug, entity_type: entity }]);
      e.target.removeAttribute("disabled");
    }
    setShowCart(true);
  };

  const [showIntro, setShowIntro] = React.useState(false);
  const isPhone = useMediaQuery("(max-width: 68.75em)");

  return (
    <ErrorBoundary>
      <div className={css("banner")}>
        <div className={css("banner__left")}>
          {!pre_launch && show_banner_tag && (
            <div className={css("chip", "caption", "textDull", "banner__chip")}>
              {(isBundle && "Bundle") ||
                (isCFA && ((isCFALevel1 && "CFA Level 1") || (isCFALevel2 && "CFA Level 2") || "CFA")) ||
                (isCourse && "Career course")}
            </div>
          )}
          <h1 className={css("title2", "banner__title")}>{title}</h1>
          {ratings && (
            <div className={css("banner__ratings")}>
              <StarRating
                value={ratings}
                additional_text={slug === "art-of-picking-multibagger-stocks" && "(100 ratings from early users)"}
                star_class_override={css("star")}
                text_class_override={css("paragraph--poppins")}
              />
            </div>
          )}
          <p className={css("subtitle", "textDull", "banner__description")}>{short_description}</p>
          {pre_launch && Array.isArray(pre_launch_offers) && (
            <div className={css("banner__offer")}>
              <label className={css("subtitle")}>Pre-launch offer :</label>
              <div className={css("perks")}>
                {pre_launch_offers.map((i, index) => (
                  <Perk key={index} text={i} />
                ))}
              </div>
            </div>
          )}
          {(workshop_date || workshop_time) && (
            <div className={css("workshop", "textBold", "textPoppins")}>
              <Link navigateTo={`/workshop/${slug}`} className={css("reset-link", "chip")}>
                <p className={css("workshop__text")}>
                  <img
                    src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/StatusOnline.svg"
                    alt="live"
                    width="32px"
                    height="32px"
                    className={css("workshop__icon")}
                  />
                  <span>LIVE WORKSHOP</span>
                </p>
              </Link>
              <p className={css("workshop__datetime")}>
                <span className={css("workshop__datetime--date")}>{workshop_date}</span>
                <span className={css("workshop__datetime--time")}>{workshop_time}</span>
              </p>
            </div>
          )}
          {/* {Array.isArray(perks) && (
            <div className={css("perks")}>
              {perks.map((i, index) => (
                <Perk key={index} text={i} />
              ))}
            </div>
          )} */}
          <div className={css("banner__price")}>
            {!isNaN(offer_price) && (
              <div className={css("title3", "tag__wrapper")}>
                <span className={css("textDMSans")}>₹ </span> {offer_price}
                {pre_launch && <span className={css("caption", "tag")}> (Pre-launch price)</span>}
                {has_workshop && <span className={css("caption", "tag")}>Live Workshop + Course Combo:</span>}
              </div>
            )}
            {markup_price && (
              <div className={css(isNaN(offer_price) ? "title3" : ["subtitle", "textDull", "textLineThrough"])}>
                <span className={css("textDMSans")}>₹ </span> {markup_price}
              </div>
            )}
          </div>
          <div className={css("banner__buttons")}>
            <button
              onClick={() => setRedirectionModal(true) && addToCart()}
              style={{ color: "#fff" }}
              className={css("reset-button", "button", "button__style--solid", "button__size--lg")}
            >
              {itemInCart ? "Already in Cart! Proceed to Payment" : "Add to cart"}
            </button>
            {/* <button className={css("button", "button__style--solid", "button__size--sm")}>Buy Now</button> */}
            {(youtube_embed || video_sources) && !showIntro && (
              <div className={css("button__highlight--lg")}>
                <button
                  className={css("reset-button", "button", "button__style--black", "button__size--lg")}
                  onClick={() => setShowIntro(true)}
                >
                  <PlayGradient />
                  Watch intro
                </button>
              </div>
            )}
          </div>
          <div>
            {refund_policy && <p className={css("paragraph--poppins")}>No questions asked 3 day refund policy</p>}
            {pre_launch && launch_date && (
              <span className={css("paragraph", "textDull")}>
                The course will be visible after the launch date -
                <div className={css("chip", "textBright")}>{launch_date}</div>
              </span>
            )}
          </div>
        </div>
        {(youtube_embed || video_sources) && showIntro && (
          <div className={css("banner__right")}>
            {isPhone ? (
              <IntroVideo {...{ poster_url, youtube_embed, video_sources }} />
            ) : (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Modal show={showIntro} close={() => setShowIntro(false)} className={css("customContent")}>
                  <IntroVideo {...{ poster_url, youtube_embed, video_sources }} />
                </Modal>
              </React.Suspense>
            )}
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

const IntroVideo = ({ poster_url, youtube_embed, video_sources }) => {
  return (
    <ErrorBoundary>
      {youtube_embed ? (
        <YouTubeEmbed src={youtube_embed} />
      ) : (
        <div className={css("video", "aspect-ratio-box-wrapper")}>
          <VideoInterface
            id={`${window.location.pathname.replaceAll("/", "_")}_video`}
            poster={poster_url}
            aspectratio={16 / 9}
            width="533px"
            height="373px"
            sources={video_sources}
          />
        </div>
      )}
    </ErrorBoundary>
  );
};

export default Banner;

import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";

import ErrorBoundary from "utils/error_boundary.util";
// import { getNetworkType } from "utils";

import classnames from "classnames/bind";
import styles from "./video_interface.module.scss";
const css = classnames.bind(styles);

// const timeoutMap = {
//   "4g": 10000,
//   "3g": 20000,
// };
// const networkType = getNetworkType();
// const timeout_ms = timeoutMap[networkType] || 30000;
// const autoplay_suggested = timeoutMap[networkType] !== undefined;

const VideoInterface = ({ id, poster, aspectratio, width, height, children, sources, onReady }) => {
  // var autoplay_user_preference = JSON.parse(localStorage.getItem(`${id}_autoplay`));
  // if (typeof autoplay_user_preference !== "boolean") autoplay_user_preference = false;

  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const options = React.useMemo(() => ({ autoplay: false, controls: true, responsive: true, fill: true }), []);

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, { ...options, sources }, () => {
        console.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [onReady, options, sources, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <ErrorBoundary>
      <div
        id={id}
        className={css("videoInterface", aspectratio === 1 ? "aspect-ratio-box-square" : "aspect-ratio-box")}
        style={{ aspectRatio: `calc(${aspectratio})/1` }}
        data-vjs-player
      >
        <video
          ref={videoRef}
          style={{ aspectRatio: `calc(${aspectratio})/1` }}
          className={css("video-js vjs-big-play-centered")}
          playsInline
          controlsList="nodownload"
          poster={poster}
          width={width}
          height={height}
        >
          {children}
          Your browser is not supported!
        </video>
      </div>
    </ErrorBoundary>
  );
};

VideoInterface.defaultProps = {
  aspectratio: 16 / 9,
};
export default VideoInterface;

// const VideoInterface = ({ id, poster, aspectratio, width, height, children }) => {
//   var autoplay_user_preference = JSON.parse(localStorage.getItem(`${id}_autoplay`));
//   if (typeof autoplay_user_preference !== "boolean") autoplay_user_preference = true;

//   const [paused, setPaused] = React.useState(true);
//   const [mute, setMute] = React.useState(true);
//   const [autoPlay, setAutoPlay] = React.useState(autoplay_user_preference);
//   const [isLoading, setLoading] = React.useState(true);
//   const ref = React.useRef(null);

//   //
//   // PLAY
//   //
//   const play_btn_fn = () => {
//     const video_target = document.querySelector(`#${id} > video`);
//     if (video_target) {
//       if (video_target.currentSrc) {
//         const cur_paused_value = video_target.paused;
//         video_target.paused ? video_target.play() : video_target.pause();
//         setPaused(!cur_paused_value);
//       } else {
//         source_load_fn();
//         video_target.play();
//         if (isLoading) setLoading(false);
//       }
//     }
//   };
//   //
//   // MUTE
//   //
//   const mute_btn_fn = () => {
//     const video_target = document.querySelector(`#${id} > video`);
//     if (video_target) {
//       const cur_muted_value = video_target.muted;
//       video_target.muted = !cur_muted_value;
//       setMute(!cur_muted_value);
//     }
//   };
//   //
//   // AUTOPLAY
//   //
//   const autoplay_btn_fn = () => {
//     localStorage.setItem(`${id}_autoplay`, !autoPlay);
//     setAutoPlay(!autoPlay);
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const video_autoplay_fn = () => {
//     const video_target = document.querySelector(`#${id} > video`);
//     if (video_target && video_target.paused && autoplay_user_preference && autoplay_suggested) {
//       video_target.play();
//       if (isLoading) setLoading(false);
//     }
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const source_load_fn = () => {
//     const video_target = document.querySelector(`#${id} > video`);
//     video_target.autoplay = false;
//     video_target.preload = "none";
//     const video_sources = video_target.querySelectorAll("source[data-src]");
//     Array.from(video_sources).forEach((source) => {
//       let src = source.getAttribute("data-src");
//       source.setAttribute("src", src);
//       source.removeAttribute("data-src");
//     });
//     if (video_sources.length > 0) {
//       video_target.load();
//       if (isLoading) setLoading(false);
//     }
//   };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const loadPoster = () => {
//     const video_target = document.querySelector(`#${id} > video`);
//     let poster = video_target.getAttribute("data-poster");
//     if (poster) {
//       video_target.setAttribute("poster", poster);
//       video_target.removeAttribute("data-poster");
//       if (isLoading) setLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     const video_target = document.querySelector(`#${id} > video`);
//     video_target.autoplay = false;
//     video_target.preload = "none";
//     let event_attached = false;

//     if (document.readyState === "complete") {
//       loadPoster();
//     } else {
//       window.addEventListener("load", loadPoster);
//       event_attached = true;
//     }
//     let source_load_to_id = setTimeout(source_load_fn, timeout_ms / 2 + 1000);
//     let autoplay_to_id = setTimeout(video_autoplay_fn, timeout_ms / 2 + 2000);

//     return () => {
//       if (source_load_to_id) clearTimeout(source_load_to_id);
//       if (autoplay_to_id) clearTimeout(autoplay_to_id);
//       if (event_attached) window.removeEventListener("load", loadPoster);
//     };
//   }, [autoplay_user_preference, id, loadPoster, source_load_fn, video_autoplay_fn]);

//   React.useEffect(() => {
//     const resizeFunc = () => {
//       if (!ref.current) return;
//       window.test = ref.current;
//       const target = ref.current;
//       target.removeAttribute("width");
//       target.removeAttribute("height");

//       const target_style = getComputedStyle(target);

//       target.setAttribute("width", target_style.width);
//       target.setAttribute("height", parseFloat(target_style.width) / aspectratio + "px");
//     };
//     window.addEventListener("resize", resizeFunc, { passive: true });
//     resizeFunc();
//     return () => {
//       window.removeEventListener("resize", resizeFunc);
//     };
//   }, [aspectratio]);

//   return (
//     <ErrorBoundary>
//       <div
//         id={id}
//         className={css("videoInterface", aspectratio === 1 ? "aspect-ratio-box-square" : "aspect-ratio-box")}
//         style={{ aspectRatio: `calc(${aspectratio})/1` }}
//       >
//         <div className={css("videoInterface__controls")}>
//           <button className={css("reset-button", "control__btn")} onClick={play_btn_fn}>
//             {paused ? "Play" : "Pause"}
//           </button>
//           <button className={css("reset-button", "control__btn")} onClick={mute_btn_fn}>
//             {mute ? "Unmute" : "Mute"}
//           </button>
//           <button
//             className={css("reset-button", "control__btn")}
//             style={{ marginLeft: "auto" }}
//             onClick={autoplay_btn_fn}
//           >
//             {autoPlay ? "Autoplay: ON" : "Autoplay: OFF"}
//           </button>
//         </div>
//         <video
//           ref={ref}
//           style={{ aspectRatio: `calc(${aspectratio})/1` }}
//           className={css("videoInterface__element")}
//           autoPlay
//           muted
//           playsInline
//           controls={!paused}
//           controlsList="nodownload"
//           onPlay={() => setPaused(false)}
//           onPlaying={() => setPaused(false)}
//           onPause={() => setPaused(true)}
//           onVolumeChange={(e) => setMute(e.target.muted)}
//           data-poster={poster}
//           width={width}
//           height={height}
//         >
//           {children}
//           Your browser is not supported!
//         </video>
//         {isLoading && <div className={css("videoInterface__overlay")}>Loading...</div>}
//       </div>
//     </ErrorBoundary>
//   );
// };

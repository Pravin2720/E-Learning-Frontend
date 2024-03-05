import React from "react";
import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./podcasts.module.scss";
const css = classnames.bind(styles);

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const SpotifyEmbed = CustomLazy(
  import(/* webpackChunkName: "SpotifyEmbed" */ "components/spotify_embed/spotify_embed.component"),
);
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const PodcastsPage = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <VerticalLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Section className={css("podcasts")}>
              <div className={css("podcasts__header")}>
                Unfiltered Finance
                <iframe
                  title="Spotify follow button"
                  src="https://open.spotify.com/follow/1/?uri=spotify:user:tf2cgvn24rbegt90r2iv6uwdi&size=basic&theme=light&show-count=0"
                  width="92px"
                  height="26px"
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                />
              </div>
              <div className={css("podcasts__header--content")}></div>
              <div>
                {MockData.podcasts &&
                  MockData.podcasts.map((podcast, index) => {
                    return (
                      <div className={css("podcast")} key={index}>
                        <div className={css("podcast__title")}>{podcast.title}</div>
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <SpotifyEmbed src={podcast.url} />
                        </React.Suspense>
                        {podcast.description && (
                          <div className={css("podcast__description")}>{podcast.description}</div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default PodcastsPage;

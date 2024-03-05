import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import MockData from "data/index";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const YouTubeEmbed = CustomLazy(
  import(/* webpackChunkName: "YouTubeEmbed" */ "components/youtube_embed/youtube_embed.component"),
);
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const KnowledgeLibraryPage = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <VerticalLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Section className={[styles.libraryContainer]}>
              <div className={css(styles.header)}>Knowledge Library</div>
              <div className={css(styles.headerContent)}></div>
              <div>
                {MockData.playlists &&
                  MockData.playlists.map((playlist, index) => {
                    return (
                      <div className={css(styles.playlistWrapper)} key={index}>
                        <div className={css(styles.playlistTitle)}>{playlist.title}</div>
                        <div className={css(styles.video)}>
                          <React.Suspense fallback={<div>Loading...</div>}>
                            <YouTubeEmbed src={playlist.url} />
                          </React.Suspense>
                        </div>
                        {playlist.description && (
                          <div className={css(styles.playlistDescription)}>{playlist.description}</div>
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

const styles = StyleSheet.create({
  libraryContainer: {
    marginBottom: "25rem",
    "@media only screen and (max-width: 56.25em)": {
      marginBottom: "20rem",
    },
  },
  playlistWrapper: {
    display: "grid",
    gridAutoFlow: "rows",
    gridGap: "1rem",
    marginBottom: "6rem",
  },
  header: {
    position: "relative",
    textAlign: "center",
    fontFamily: "DM Sans, Poppins, sans-serif",
    fontSize: "8rem",
    lineHeight: "11rem",
    letterSpacing: "-0.2rem",
    fontWeight: "700",
    marginBottom: "6rem",
    "@media only screen and (max-width: 50em)": {
      fontSize: "5.75rem",
      letterSpacing: "0",
    },
  },
  headerContent: {
    maxWidth: "50%",
    margin: "0 auto",
    marginTop: "3rem",
    textAlign: "center",
    fontSize: "2rem",
    lineHeight: "3rem",
    color: colors.textSecondary,
  },
  playlistDescription: {
    marginTop: "2rem",
    fontSize: "2.2rem",
    lineHeight: "3.4rem",
    color: colors.textSecondary,
  },
  playlistTitle: {
    fontFamily: "DM Sans, Poppins, sans-serif",
    margin: "0 auto",
    fontSize: "3.6rem",
    lineHeight: "4.2rem",
    fontWeight: "700",
    marginTop: "4.2rem",
  },
  video: {
    display: "grid",
    gridGap: "4rem",
    gridAutoFlow: "column",
    "& > iframe": {
      width: "100%",
    },
  },
});

export default KnowledgeLibraryPage;

import React from "react";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

import classnames from "classnames/bind";
import styles from "./instructors.module.scss";
const css = classnames.bind(styles);

const Interweave = CustomLazy(import(/* webpackChunkName: "Interweave" */ "interweave"));
const Link = CustomLazy(import(/* webpackChunkName: "Link" */ "components/link/link.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const Instructors = ({ instructors }) => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className={css("instructors")}>
          {instructors &&
            instructors.map((instructor, index) => {
              return (
                <div className={css("instructors__card")} key={index}>
                  <div className={css("card__icon", { empty__icon: !instructor.icon_url })} key={index}>
                    {instructor.icon_url ? (
                      <img
                        className={css("image")}
                        srcSet={instructor.icon_url}
                        height="328px"
                        width="337.5px"
                        alt={instructor.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className={css("image")}>&nbsp;</div>
                    )}
                  </div>
                  <div className={css("card__caption")}>
                    <div className={css("subtitle--poppins", "name")}>
                      {instructor.name}
                      {instructor.linkedin_url && (
                        <div className={css("profile")}>
                          <React.Suspense fallback={<div>Loading...</div>}>
                            <Link navigateTo={instructor.linkedin_url}>
                              <img
                                className={css("image")}
                                src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/social/LinkedInIcon.svg"
                                width="40px"
                                height="40px"
                                alt="linkedin profile"
                                loading="lazy"
                              />
                            </Link>
                          </React.Suspense>
                        </div>
                      )}
                    </div>
                    <div className={css("caption", "designation")}>
                      <React.Suspense fallback={<div>Loading...</div>}>
                        <Interweave content={instructor.designation} />
                      </React.Suspense>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Instructors;

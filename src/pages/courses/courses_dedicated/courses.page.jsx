import React from "react";
import { useHistory, useParams } from "react-router-dom";
// import { useForm } from "react-form";
import MockData from "data/index";

import ErrorBoundary from "utils/error_boundary.util";
import { GlobalLoaderTrigger } from "utils/loader.util";
import PlaceHolder from "utils/placeholders.util";

import VerticalLayout from "layouts/vertical.layout";
// import InputField from "components/input_field/input_field.component";
import Section from "components/section/section.component";

import CardListUtilities from "./sections/card_list_utitlities/card_list_utitlities.component";

import classnames from "classnames/bind";
import styles from "./courses.module.scss";
const css = classnames.bind(styles);

const Courses = () => {
  // const defaultValues = React.useMemo(() => ({ search: "" }), []);
  // const { Form } = useForm({ defaultValues, debugForm: false });

  const history = useHistory();
  const { id: level } = useParams();
  const courses = React.useMemo(() => (level ? MockData.cfa_courses[level] ?? [] : MockData.pure_courses), [level]);
  const isCFA = history.location.pathname.startsWith("/cfa");

  if (isCFA && (isNaN(level) || (level && level > 3))) {
    history.replace("/404");
    return <></>;
  }
  document.title = isCFA ? `CFA Level-${level}` : "Career Courses";

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<GlobalLoaderTrigger />}>
        <VerticalLayout>
          <React.Suspense fallback={<GlobalLoaderTrigger />}>
            <Section
              title={isCFA ? `CFA Level-${level}` : "Explore all courses"}
              description={
                isCFA && level === "1" ? (
                  <>
                    In association with <br />
                    <span className={css("title4", "textGradient")}>Panoramic Education</span>
                  </>
                ) : null
              }
              description_class_override={css("description")}
              className={css("courses-container")}
            >
              {/* <Form className={css("searchBox")}>
                <InputField
                  type="text"
                  field="search"
                  placeholder="Search"
                  containerClassName={css("searchBox__inputWrapper")}
                  className={css("searchBox__input", "paragraph")}
                  iconSrc="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Search.svg"
                  iconAlt="Search"
                />
              </Form> */}

              <PlaceHolder>
                <CardListUtilities list={courses} />
              </PlaceHolder>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Courses;

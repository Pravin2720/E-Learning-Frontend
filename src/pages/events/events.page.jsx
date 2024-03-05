import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

const VerticalLayout = CustomLazy(import(/* webpackChunkName: "VerticalLayout" */ "layouts/vertical.layout"));
const EventsList = CustomLazy(import(/* webpackChunkName: "EventsList" */ "./sections/events_list.component"));
const Section = CustomLazy(import(/* webpackChunkName: "Section" */ "components/section/section.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const Events = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <VerticalLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Section>
              <div className={css(styles.headerText)}>Upcoming Events</div>
              <React.Suspense fallback={<div>Loading...</div>}>
                <EventsList eventList={cloneData} />
              </React.Suspense>
              <div className={css(styles.viewPreviousEvents)}>View previous events &gt;&gt; &gt;&gt;</div>
            </Section>
          </React.Suspense>
        </VerticalLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: "3.6rem",
    lineHeight: "4.2rem",
    fontWeight: "700",
    margin: "4.2rem 0",
  },
  viewPreviousEvents: {
    fontSize: "2.4rem",
    textAlign: "center",
    lineHeight: "2.4rem",
    fontWeight: "700",
    color: colors.primary,
    margin: "3.2rem 0 12.8rem 0",
  },
});

export default Events;

const cloneData = [
  {
    title: "How Zerodha make money?",
    date: "24th April 2021",
    time: "12:30 PM",
    isEventPaid: false,
    registrationFee: "FREE",
    seats: "150",
    speaker: "Pankaj Bajaj",
  },
  {
    title: "OYO vs Airbnb",
    date: "24th April 2021",
    time: "12:30 PM",
    isEventPaid: true,
    registrationFee: "50",
    seats: "150",
    speaker: "Pankaj Bajaj",
  },
  {
    title: "How to make a career in fintech?",
    date: "24th April 2021",
    time: "12:30 PM",
    isEventPaid: false,
    registrationFee: "FREE",
    seats: "150",
    speaker: "Pankaj Bajaj",
  },
  {
    title: "OYO vs Airbnb",
    date: "24th April 2021",
    time: "12:30 PM",
    isEventPaid: false,
    registrationFee: "FREE",
    seats: "150",
    speaker: "Pankaj Bajaj",
  },
  {
    title: "OYO vs Airbnb",
    date: "24th April 2021",
    time: "12:30 PM",
    isEventPaid: false,
    registrationFee: "FREE",
    seats: "150",
    speaker: "Pankaj Bajaj",
  },
];

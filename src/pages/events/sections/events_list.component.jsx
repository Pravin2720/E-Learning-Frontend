import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import ErrorBoundary from "utils/error_boundary.util";

const gridConstructor = (row, column, array) => {
  const array2d = [];
  for (let i = 0; i < row; i += 1) {
    array2d[i] = [];
    for (let j = 0; j < column; j += 1) {
      array2d[i][j] = array[i * column + j];
    }
  }
  return array2d;
};

const PropertyValue = (props) => (
  <ErrorBoundary>
    <div className={css(styles.textStyle)}>
      {props.property}
      <span className={css(styles.boldText)}> - {props.value}</span>
    </div>
  </ErrorBoundary>
);

const EventsCard = (props) => {
  if (!props.title) return null;
  return (
    <ErrorBoundary>
      <div className={css(styles.eventsCard)}>
        <div className={css(styles.titleText)}>{props.title}</div>
        <div className={css(styles.displayFlex)}>
          <PropertyValue property="Date" value={props.date} />
          <PropertyValue property="Registration" value={props.isEventPaid ? props.registrationFee : "FREE"} />
        </div>
        <div className={css(styles.displayFlex)}>
          <PropertyValue property="Time" value={props.time} />
          <PropertyValue property="Total Seats" value={props.seats} />
        </div>
        <div className={css(styles.displayFlex)}>
          <PropertyValue property="Speaker" value={props.speaker} />
          <div className={css(styles.viewDetailsButton, styles.textStyle)}>View Details</div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const EventsList = (props) => {
  const rows = props.eventList.length / 2;
  const eventListGrid = gridConstructor(rows, 2, props.eventList);
  return (
    <ErrorBoundary>
      <div>
        {eventListGrid.map((eventListRow) => {
          return (
            <div className={css(styles.displayFlex)}>
              {eventListRow.map((data) => (
                <EventsCard {...data} />
              ))}
            </div>
          );
        })}
      </div>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  eventsCard: {
    width: "48%",
    padding: "3.2rem",
    backgroundColor: colors.secondary,
    margin: "0.8rem",
    borderRadius: "2rem",
  },
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  topicText: {
    fontSize: "2.4rem",
    fontWeight: "700",
    lineHeight: "2.4rem",
  },
  textStyle: {
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    marginTop: "1.6rem",
  },
  boldText: {
    fontWeight: "700",
  },
  viewDetailsButton: {
    padding: "1.2rem 2.4rem",
    borderRadius: "0.8rem",
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: "700",
  },
});

export default EventsList;

import React from "react";
import { StyleSheet, css } from "aphrodite-jss";
import { colors } from "styles/global.style";
import CustomLazy from "utils/custom_lazy.util";
import ErrorBoundary from "utils/error_boundary.util";

const CardList = CustomLazy(import(/* webpackChunkName: "CardList" */ "components/card_list/card_list.component"));
// const LinearLoader = CustomLazy(import(/* webpackChunkName: "LinearLoader" */ "components/loader/loader.component"));

const Filter = ({ title, filters, dataList, sort, extra }) => {
  const [selectedFilters, setSelectedFilters] = React.useState([]);

  var filteredDataList = [];

  function applyFilter(filter_value) {
    if (dataList.length <= 0) return;
    let result = dataList.filter((item) => {
      return item.tags && item.tags.length > 0 && item.tags.includes(filter_value);
    });
    filteredDataList = [...filteredDataList, ...result];
  }

  if (selectedFilters.length > 0) {
    filteredDataList = [];
    selectedFilters.forEach(applyFilter);
  } else filteredDataList = [...dataList];

  filteredDataList = filteredDataList.filter((v, i, a) => a.indexOf(v) === i);
  filteredDataList.sort((a, b) => {
    //  order attr
    if (a.order && b.order) {
      if (a.order > b.order) return 1;
      if (a.order < b.order) return -1;
    }
    return 0;
  });
  if (sort) {
    filteredDataList.sort((a, b) => {
      //  featured first
      if (a.is_featured > 0 && b.is_featured > 0) {
        if (a.is_featured > b.is_featured) return 1;
        if (a.is_featured < b.is_featured) return -1;
      }

      // tags alphabatically
      if (a.tags.length > 0 && b.tags.length > 0) {
        if (a.tags[0].toLowerCase() > b.tags[0].toLowerCase()) return 1;
        if (a.tags[0].toLowerCase() < b.tags[0].toLowerCase()) return -1;
      }

      // categories alphabatically
      if (a.categories.length > 0 && b.categories.length > 0) {
        if (a.categories[0].toLowerCase() > b.categories[0].toLowerCase()) return 1;
        if (a.categories[0].toLowerCase() < b.categories[0].toLowerCase()) return -1;
      }

      // Price High to Low
      if (a.offer_price.length > 0 && b.offer_price.length > 0) {
        if (parseInt(a.offer_price) > parseInt(b.offer_price)) return -1;
        if (parseInt(a.offer_price) < parseInt(b.offer_price)) return 1;
      }

      if (a.markup_price.length > 0 && b.markup_price.length > 0) {
        if (parseInt(a.markup_price) > parseInt(b.markup_price)) return -1;
        if (parseInt(a.markup_price) < parseInt(b.markup_price)) return 1;
      }

      // best value per video
      if (a.videos.length > 0 && b.videos.length > 0) {
        let priceA = 0;
        let priceB = 0;
        if (a.markup_price.length > 0 && b.markup_price.length > 0) {
          priceA = a.markup_price;
          priceB = b.markup_price;
        }
        if (a.offer_price.length > 0 && b.offer_price.length > 0) {
          priceA = a.offer_price;
          priceB = b.offer_price;
        }

        if (parseFloat(priceA) / parseFloat(a.videos) > parseFloat(priceB) / parseFloat(b.videos)) {
          return 1;
        }
        if (parseFloat(priceA) / parseFloat(a.videos) < parseFloat(priceB) / parseFloat(b.videos)) {
          return -1;
        }
      }

      // titles alphbatically
      if (a.title.length > 0 && b.title.length > 0) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      }

      return 0;
    });
  }

  return (
    <ErrorBoundary>
      <div className={css(styles.contentWrapper)}>
        <div className={css(styles.filterCol)}>
          <div id="filter_sticky" className={css(styles.filterWrapper)}>
            {filters.length > 0 && (
              <div className={css(styles.textStyle, styles.filterResults)}>{filteredDataList.length} results</div>
            )}
            <div>
              <div className={css(styles.textStyle, styles.filterHeaderText)}>{title ? title : "Filter"}</div>
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <div className={css(styles.displayFlex)} key={index}>
                    <input
                      id={index}
                      type="checkbox"
                      className={css(styles.checkboxStyle)}
                      onChange={(e) => {
                        let newFilters = selectedFilters.filter((item) => item !== filter);
                        if (e.target.checked === true) newFilters.push(filter);
                        setSelectedFilters(newFilters);
                      }}
                    />
                    <label htmlFor={index} className={css(styles.textStyle)} style={{ userSelect: "none" }}>
                      {filter}
                    </label>
                  </div>
                ))}
            </div>
            <div>{extra && React.cloneElement(extra)}</div>
          </div>
        </div>
        <div className={css(styles.listCol)}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <CardList list={filteredDataList} />
          </React.Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  displayFlex: {
    display: "flex",
    alignItems: "center",
  },
  textStyle: {
    fontSize: "1.8rem",
    lineHeight: "2rem",
    margin: "0.8rem 0 0.8rem 0",
  },
  filterWrapper: {
    top: "20rem",
    height: "100%",
    backgroundColor: colors.white2,
    padding: "2.4rem",
    borderRadius: "2rem",
    boxShadow:
      "0 0.8rem 0.8rem -0.8rem rgba(0,0,0,0.12), 0 0.4rem 0.8rem -0.4rem rgba(0,0,0,0.08), 0 2.4rem 3.2rem -0.8rem rgba(0,0,0,0.04)",
    // boxShadow: "0 8px 8px -8px rgba(0,0,0,0.24), 0 4px 8px -4px rgba(0,0,0,0.16), 0 24px 32px -8px rgba(0,0,0,0.08)",

    "@media only screen and (max-width: 62.5em)": {
      minHeight: "0",
      marginBottom: "4rem",
    },
  },
  checkboxStyle: {
    marginRight: "0.8rem",
  },
  filterResults: {
    fontWeight: "500",
    marginBottom: "4rem",
  },
  filterHeaderText: {
    fontWeight: "700",
  },

  contentWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateRows: "[filter-start list-start] 1fr [filter-end list-end]",
    gridTemplateColumns: "[filter-start] 30rem [filter-end list-start] 1fr [list-end]",
    gridColumnGap: "4rem",

    "@media only screen and (max-width: 62.5em)": {
      gridTemplateRows: "[filter-start] auto [filter-end list-start] auto [list-end]",
      gridTemplateColumns: "[filter-start list-start] 1fr [filter-end list-end]",
    },
  },
  filterCol: {
    gridRow: "filter-start / filter-end",
    gridColumn: "filter-start / filter-end",
    height: "fit-content",
  },
  listCol: {
    gridRow: "list-start / list-end",
    gridColumn: "list-start / list-end",
  },
});

export default Filter;

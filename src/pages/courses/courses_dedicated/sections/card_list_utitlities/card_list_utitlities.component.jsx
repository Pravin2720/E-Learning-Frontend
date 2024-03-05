import React from "react";

import ErrorBoundary from "utils/error_boundary.util";
import useMediaQuery from "utils/media_query.util";
import { SORT_TYPE } from "utils/sort.util";

import CardList from "components/card_list/card_list.component";

import classnames from "classnames/bind";
import styles from "./card_list_utitlities.module.scss";
const css = classnames.bind(styles);

const CardListUtilities = ({ list }) => {
  const [layout, setLayout] = React.useState("grid");
  const isMobileScreen = useMediaQuery("(max-width: 68.75em)");
  // eslint-disable-next-line no-unused-vars
  const [currentSort, setCurrentSort] = React.useState("featured");
  const sortedList = React.useMemo(() => {
    let list_to_sort = [...list];
    return list_to_sort.sort((a, b) => {
      if (a.hasOwnProperty("coming_soon") && a.coming_soon) return 1;
      if (b.hasOwnProperty("coming_soon") && b.coming_soon) return -1;

      return SORT_TYPE[currentSort.split("-")[0]](a, b);
    });
  }, [currentSort, list]);

  return (
    <ErrorBoundary>
      <div className={css("filter")}>
        <div className={css("filter__options")}>
          {!isMobileScreen && (
            <div className={css("icon")} onClick={() => setLayout(layout === "list" ? "grid" : "list")}>
              {layout === "list" ? (
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Grid.svg"
                  alt="Grid"
                />
              ) : (
                <img
                  src="https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/List.svg"
                  alt="List"
                />
              )}
            </div>
          )}
          {/* <div>
            <select name="sortOptions" value={currentSort} onChange={(e) => setCurrentSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div> */}
        </div>
        <CardList layout={isMobileScreen ? "grid" : layout} list={sortedList} />
      </div>
    </ErrorBoundary>
  );
};

export default CardListUtilities;

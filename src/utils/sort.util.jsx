export const SORT_ORDER = Object.freeze({ ASC: 1, DESC: -1 });

function _sortByAttr(a, b, attr, order, parse) {
  // console.log("_sortByAttr", { attr, order, parse }, attr in a, attr in b);
  if (!(attr in a && attr in b)) return 0;
  // if attr in present in both objects
  const pva = parse(a[attr]);
  const pvb = parse(b[attr]);
  return pva > pvb ? order : pva < pvb ? -order : 0;
}

function _sortByGivenOrder(a, b, order_list) {
  const reverse_order_list = Array.from(order_list).reverse();

  let sortStatus = 0;
  while (sortStatus === 0) {
    const { attr, order = SORT_ORDER.ASC, parse = (v) => v } = reverse_order_list.pop();
    // console.log("_sortByGivenOrder", "sorting by", { attr, order, parse });
    sortStatus = _sortByAttr(a, b, attr, order, parse);
    // console.log("_sortByGivenOrder", { sortStatus });
    if (sortStatus !== 0) break;
    if (reverse_order_list.length === 0) break;
  }

  return sortStatus;
}

export const SORT_TYPE = Object.freeze({
  featured: (a, b) =>
    _sortByGivenOrder(a, b, [
      { attr: "is_featured", order: SORT_ORDER.DESC },
      { attr: "order", order: SORT_ORDER.ASC },
    ]),
  "title-asc": (a, b) =>
    _sortByGivenOrder(a, b, [{ attr: "title", order: SORT_ORDER.ASC, parse: (v) => v.toLowerCase() }]),
  "title-desc": (a, b) =>
    _sortByGivenOrder(a, b, [{ attr: "title", order: SORT_ORDER.DESC, parse: (v) => v.toLowerCase() }]),
  "price-asc": (a, b) =>
    _sortByGivenOrder(a, b, [
      { attr: "offer_price", order: SORT_ORDER.ASC, parse: (v) => v.toLowerCase() },
      { attr: "markup_price", order: SORT_ORDER.ASC, parse: (v) => v.toLowerCase() },
    ]),
  "price-desc": (a, b) =>
    _sortByGivenOrder(a, b, [
      { attr: "offer_price", order: SORT_ORDER.DESC, parse: (v) => parseInt(v) },
      { attr: "markup_price", order: SORT_ORDER.DESC, parse: (v) => parseInt(v) },
    ]),
});

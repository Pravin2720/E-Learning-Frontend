import { instructors } from "data/instructors.data";

const workshop = {
  title: "",
  slug: "",
  is_featured: false,
  order: Number.MAX_SAFE_INTEGER,
  workshop_date: "",
  workshop_time: "",
  short_description: "",
  long_description: "",
  image_url: "",
  bg_image_url: "",
  markup_price: "",
  offer_price: "",
  categories: ["workshop", "workshop-course"],
  instructors: [],
  creator_id: "",
};

const workshops = {
  // "art-of-picking-multibagger-stocks": {
  //   title: "Art of picking multibagger stocks",
  //   slug: "art-of-picking-multibagger-stocks",
  //   is_featured: 2,
  //   order: 1,
  //   workshop_date: "February 12th, 2022",
  //   workshop_time: "Sat, 12:00-2:00PM IST",
  //   short_description:
  //     "Get a chance to discuss the major financial and economic trends of the future and how the dynamics of the Indian Investing Space is changing.",
  //   long_description:
  //     "Get a chance to discuss the major financial and economic trends of the future and how the dynamics of the Indian Investing Space is changing.",
  //   image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/art-of-picking-multibagger-stocks.webp 400w",
  //   bg_image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/arvind-sir.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/arvind-sir.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/arvind-sir.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/arvind-sir.webp 400w",
  //   grid_image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/art-of-picking-multibagger-stocks.webp 422w",
  //   markup_price: "1000",
  //   offer_price: "0",
  //   categories: ["workshop"],
  //   instructors: ["arvind-kothari"],
  //   spayee_product_id: "TODO",
  //   learnings: [
  //     "Learn how Mid Cap & Small Cap Investing can outperform Large Caps without falling into a trap.",
  //     "Discuss what drove Arvind Sir to multibaggers like HLE Glasscoat and decode his thought process.",
  //     "Get a chance to communicate directly to the Best Smallcase Manager and take your investing journey to another level.",
  //   ],
  // },
};

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: C O U R S E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

for (let id in workshops) {
  if (!workshops[id].order) workshops[id].order = workshop.order;

  let populated_instructors = [];
  for (let instructor of workshops[id].instructors) {
    populated_instructors.push(instructors[instructor]);
  }
  workshops[id].instructors = populated_instructors;

  if (workshops[id].offer_price)
    workshops[id].discount = Math.round(
      100 * (1.0 - parseInt(workshops[id].offer_price) / parseInt(workshops[id].markup_price)),
    );

  if (!workshops[id].coming_soon) workshops[id].itemLink = "/workshop/" + id;
}

export { workshop, workshops };

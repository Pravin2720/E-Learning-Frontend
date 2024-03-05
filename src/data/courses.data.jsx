import { instructors } from "data/instructors.data";
import { chapters } from "data/chapters.data";
import { course_summary } from "data/course_summary.data";
import { fillTemplate } from "utils";
import { shortDateFormatter } from "utils/dayjs.util";

const course_tags = [
  "Corporate Banking",
  "Investment Banking",
  "Venture Capital / Private Equity (VC/PE)",
  "Management Consulting",
  "Investment management",
  "Equity Research",
  "Entrepreneurship (Founders)",
];

const course = {
  title: "",
  slug: "",
  is_featured: false,
  has_workshop: false,
  workshop_date: "",
  workshop_time: "",
  order: Number.MAX_SAFE_INTEGER,
  tags: [],
  short_description: "",
  long_description: "",
  image_url: "",
  markup_price: "",
  offer_price: "",
  discount: "",
  payment_url: "",
  perks: "Deciding",
  videos: "0",
  duration: "",
  requirements: "",
  audience: "",
  categories: ["course"],
  instructors: [],
  chapters: [],
  reviews: [],
  creator_id: "",
};

const courses = {
  "everything-you-need-to-know-about-insurance": {
    title: "Everything you need to know about Insurance",
    slug: "everything-you-need-to-know-about-insurance",
    is_featured: false,
    pre_launch: true,
    order: 2,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "An end to end guide focusing on fundamentals of insurance and reinsurance and everything required to learn about risk mitigation using insurance.",
    long_description: "",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/everything-you-need-to-know-about-insurance.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/everything-you-need-to-know-about-insurance.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/everything-you-need-to-know-about-insurance.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/everything-you-need-to-know-about-insurance.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/everything-you-need-to-know-about-insurance.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/everything-you-need-to-know-about-insurance.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    launch_date: shortDateFormatter("2022/05/30"),
    videos: "0",
    duration: "",
    downloadables: "",
    ratings: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    spayee_product_id: "TODO",
    learnings: [],
  },
  "international-investing-101-diversify-globally": {
    title: "International Investing 101: Diversify Globally",
    slug: "international-investing-101-diversify-globally",
    is_featured: false,
    pre_launch: true,
    order: 2,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "Know how to invest in stocks all over the world to capture the high growth potential offered abroad and gain from Rupee depreciation.",
    long_description: "TODO",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/international-investing-101-diversify-globally.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/international-investing-101-diversify-globally.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/international-investing-101-diversify-globally.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/international-investing-101-diversify-globally.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/international-investing-101-diversify-globally.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/international-investing-101-diversify-globally.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    launch_date: shortDateFormatter("2022/06/06"),
    videos: "0",
    duration: "",
    downloadables: "",
    ratings: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    spayee_product_id: "TODO",
    learnings: [],
  },
  "ultimate-guide-to-startup-investing": {
    title: "Ultimate Guide to Startup Investing",
    slug: "ultimate-guide-to-startup-investing",
    is_featured: false,
    pre_launch: true,
    order: 2,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "An all-inclusive step by step guide on how to value high growing startups, evaluate the risk associated and how much capital to allocate.",
    long_description: "TODO",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/ultimate-guide-to-startup-investing.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/ultimate-guide-to-startup-investing.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/ultimate-guide-to-startup-investing.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/ultimate-guide-to-startup-investing.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/ultimate-guide-to-startup-investing.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/ultimate-guide-to-startup-investing.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    launch_date: shortDateFormatter("2022/06/13"),
    videos: "0",
    duration: "",
    downloadables: "",
    ratings: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    spayee_product_id: "TODO",
    learnings: [],
  },
  "crypto-masterclass-a-step-by-step-guide": {
    title: "Crypto Masterclass: A step by step guide",
    slug: "crypto-masterclass-a-step-by-step-guide",
    is_featured: false,
    pre_launch: true,
    order: 2,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "Learn how cryptocurrencies, blockchain and crypto investing work. A practical guide on analysing, investing and building your crypto portfolio.",
    long_description: "TODO",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/crypto-masterclass-a-step-by-step-guide.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/crypto-masterclass-a-step-by-step-guide.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/crypto-masterclass-a-step-by-step-guide.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/crypto-masterclass-a-step-by-step-guide.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/crypto-masterclass-a-step-by-step-guide.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/crypto-masterclass-a-step-by-step-guide.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    launch_date: shortDateFormatter("2022/06/20"),
    videos: "0",
    duration: "",
    downloadables: "",
    ratings: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    spayee_product_id: "TODO",
    learnings: [],
  },
  "the-little-course-on-stock-market": {
    title: "The Little Course on Stock Market",
    slug: "the-little-course-on-stock-market",
    is_featured: false,
    pre_launch: true,
    order: 2,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "Acquire your knowledge on how to analyse your investments, diversify your portfolio and manage investment risks by learning the basics of stock market.",
    long_description: "TODO",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/the-little-course-on-stock-market.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/the-little-course-on-stock-market.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/the-little-course-on-stock-market.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/the-little-course-on-stock-market.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/the-little-course-on-stock-market.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/the-little-course-on-stock-market.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    launch_date: shortDateFormatter("2022/06/27"),
    videos: "0",
    duration: "",
    downloadables: "",
    ratings: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    spayee_product_id: "TODO",
    learnings: [],
  },
  "art-of-picking-multibagger-stocks": {
    title: "Art of picking multibagger stocks",
    slug: "art-of-picking-multibagger-stocks",
    best_seller: true,
    show_banner_tag: false,
    is_featured: 4,
    order: 4,
    tags: [1, 2, 3, 4, 5, 6, 7],
    certificate_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/courses/art-of-picking-multibagger-stocks/art-of-picking-multibagger-stocks-certificate.webp",
    short_description:
      "An all-inclusive step by step guide on how to identify multi-bagger stocks and creating a winning portfolio.",
    long_description:
      "More often than not, everyone beginning their journey in the stock markets is always advised to stay invested in large cap stocks and keep a distance from small and midcap stocks. However, with this course we'll prove you how this notion is wrong and how did Arvind Kothari made a stellar 135.16% return and by taking the road less travelled. This course in detail, will take you through how can one create wealth by investing in mid and small cap stocks by going through case studies and proven strategies.",
    youtube_embed: "https://www.youtube.com/embed/vHdp9Lx3ZYM",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/art-of-picking-multibagger-stocks.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/arvind-sir.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/arvind-sir.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/arvind-sir.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/arvind-sir.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/art-of-picking-multibagger-stocks.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    coupon: "Discount coupon\nworth ₹3300 on\nNiveshaay's smallcase",
    pre_launch_offers: ["Exclusive Coupon of Niveshaay's Smallcase(worth ₹1500)", "Live session with Arvind Kothari"],
    launch_date: shortDateFormatter("2022/01/20"),
    videos: "6",
    duration: "2 hrs 23 mins",
    downloadables: "",
    ratings: "4.9",
    requirements: "",
    audience:
      "This course is for anyone who:<ol><li>Anyone who aspires to learn the secrets of generational wealth creation.</li><li>Wants to start their investment journey and is clueless about what to do.</li><li>Investors who want to learn techniques about investment analysis and portfolio management.</li></ol>",
    categories: ["course"],
    instructors: ["arvind-kothari"],
    spayee_product_id: "61d2a1360cf27d7b9dcda6d3",
    learnings: [
      "Nuances of investing in financial markets",
      "Deep dive on wealth creation via value investing",
      "Spotting multi-baggers in small and mid cap",
      "Trend spotting and stock picking",
      "Constructing a market winning portfolio",
    ],
  },
  "technical-analysis-derivatives": {
    title: "Technical Analysis - Derivatives (Hindi)",
    slug: "technical-analysis-derivatives",
    is_featured: 4,
    order: 7,
    pre_launch: false,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description: "A Practical Guide to derivatives, from reading to earning.",
    long_description:
      "This course will tell you the basics of derivatives theoretically and practically. The purpose is to learn and then to earn. After going through this course, you will be able to enter planned trades, manage the risk and earn a reasonable return on your hard-earned money. This course is for education purposes. You must study and watch the market carefully, analyze risk and return, and take paper trade before entering into live trading. The strategies shown are not recommendations.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/technical-analysis-derivatives.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/technical-analysis-derivatives.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/technical-analysis-derivatives.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/technical-analysis-derivatives.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/technical-analysis-derivatives.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/technical-analysis-derivatives.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    perks: [
      "Live on-demand doubt session with instructor",
      "Industry recognised certificate",
      "Access to elite 'Valued' community",
      "Premium downloadable resources/templates",
      "Bonus sessions on financial planning and wealth creation",
    ],
    videos: "12",
    duration: "2 hrs 46 mins",
    downloadables: "",
    requirements: "",
    audience: "",
    categories: ["course"],
    instructors: [],
    thinkific_course_id: 1504750,
    spayee_product_id: "61978f3f0cf2b4019173a8a7",
    learnings: [
      "Learn different types of derivatives and all the terms related to it.",
      "Understand complex concepts like Hedging, Futures and Options.",
      "Learn the difference between future price & spot price.",
      "Identify and select which strategy works best for you.",
      "Get an insight of how practical trading actually works.",
    ],
  },
  "technical-analysis-cash-equity": {
    title: "Technical Analysis - Cash Equity",
    slug: "technical-analysis-cash-equity",
    is_featured: 4,
    order: 6,
    pre_launch: false,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description:
      "Get to know all the secrets on why technical analysis plays a key role in making investment decisions",
    long_description:
      "Technical Analysis is the process of analysing stock price and volume action to understand the overall market sentiment. With this skillset, one can make informed trading and investment decisions, and embark the journey of wealth creation over the long run. The course covers the important concepts which one can use to identify momentum stocks.\nThis course is designed and facilitated by professionally trained experts who have been analysing markets for last few years to make informed and rewarding trading / investment decisions.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/technical-analysis-cash-equity.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/technical-analysis-cash-equity.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/technical-analysis-cash-equity.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/technical-analysis-cash-equity.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/technical-analysis-cash-equity.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/technical-analysis-cash-equity.webp 422w",
    markup_price: "2000",
    offer_price: "500",
    enrollments: "",
    perks: [
      "Self paced lectures",
      `Access to elite "Valued" community`,
      "Lifetime access",
      "Industry recognized certificates",
      "Live on demand doubt sessions",
      "Premium downloadable resources",
    ],
    videos: "20",
    duration: "3 hrs 18 mins",
    downloadables: "",
    requirements: "Basic understanding of stock market is required",
    audience:
      "Anyone who wants to learn and apply Technical analysis efficiently. Anyone who is trading in stock markets and is managing portfolio",
    categories: ["course"],
    instructors: [],
    thinkific_course_id: 1527594,
    learnings: [
      "Learn how psychology plays a key role in trading",
      "Understand why there are resistance, trends and gaps",
      "Identify & analyse different types of candlesticks and chart patterns",
      "Learn Dow Theory, Fibonacci application, RSI and much more!!",
    ],
  },
  // "python-for-finance": {
  //   title: "Python for Finance",
  //   slug: "python-for-finance",
  //   is_featured: true,
  //   best_seller: true,
  //   order: 9,
  //   pre_launch: false,
  //   tags: [1, 2, 3, 4, 5, 6, 7],
  //   short_description: "Learn one of the smartest ways on how to decode the exit- entry strategies of stock market.",
  //   long_description:
  //     'Fintech is a growing technological industry having AI applications to serve the customers with the best of financial services. With the current market scenario of increasing crypto-currencies, bitcoins and a lot of companies investing in the financial sector, the importance of data has increased. It is very important to be updated and understand trends and it\'s often difficult to deal with huge datasets in excel. So, introducing you to the "PYTHON FOR FINANCE" Course which is a beginner level course to help you understand the basics of python, indentation and how and why to use alongside with learning few important topics like Time value Money and stocks using python. At the end, we would be having a project which helps you to understand the importance of tech in finance.',
  //   image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/python-for-finance.webp 400w",
  //   bg_image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/python-for-finance.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/python-for-finance.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/python-for-finance.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/python-for-finance.webp 400w",
  //   grid_image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/python-for-finance.webp 422w",
  //   markup_price: "600",
  //   offer_price: "125",
  //   enrollments: "",
  //   perks: [
  //     "Self paced lectures",
  //     "Hands on projects and portfolio building",
  //     "Lifetime access",
  //     "Industry recognized certificates",
  //     "Live on demand doubt sessions",
  //     "Premium downloadable resources",
  //   ],
  //   videos: "15",
  //   duration: "2 hrs 54 mins",
  //   downloadables: "",
  //   requirements: "Prior knowledge of python is NOT mandatory.",
  //   audience:
  //     "<ol><li>This is for everyone who are interested in finance and investments.</li><li>Programmers who want to specialize in finance</li><li>Finance graduates and professionals who want to upskill their knowledge in Python</li></ol>",
  //   categories: ["course"],
  //   instructors: ["manpreet-budhraja"],
  //   thinkific_course_id: 1494736,
  //   learnings: [
  //     "Learn how to install python.",
  //     "Learn various data types like strings, booleans and operators",
  //     "Build a powerful programme by learning in built data structures",
  //     "Learn how Python can be used for Time value of money and equity analysis",
  //   ],
  // },
  // "finance-for-founders": {
  //   title: "Finance for Founders",
  //   slug: "finance-for-founders",
  //   order: 3,
  //   pre_launch: false,
  //   tags: [3, 4, 7],
  //   short_description: "A successful founder can either bootstrap his/her way or raise external funds to blitzscale.",
  //   long_description:
  //     "A successful founder can either bootstrap his/her way or raise external funds to blitzscale. The choice is quite personal but greatly affects start-ups road and timeline of success. So which is better for you? Learn the art and practice of raising funds from successful founders and VCs. Please read the lesson plan for more details.",
  //   image_url: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/finance-for-founders.webp 400w",
  //   markup_price: "4000",
  //   offer_price: "1200",
  //   enrollments: "500+",
  //   perks: [
  //     "Live on-demand doubt session with instructor",
  //     "Industry recognized certificate",
  //     'Access to elite "Valued" community',
  //     "Premium Downloadable Resources/Templates",
  //   ],
  //   videos: "16",
  //   duration: "",
  //   requirements:
  //     'Two core ingredients<ul style="list-style-type: none;"><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Entrepreneurial spirit</li><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Enthusiasm to learn</li></ul>',
  //   audience:
  //     "Entrepreneurs who wants to learn the art of fundraising from successful startup founder and Venture Capitalists (VC)!",
  //   categories: ["course"],
  //   instructors: ["maneesh-srivastava", "suraj-juneja", "raunak-singhvi", "anand-dalmia", "pratik-bajaj"],
  // },
  "beginner-s-guide-to-investing": {
    title: "Beginners Guide to Investing",
    slug: "beginner-s-guide-to-investing",
    best_seller: true,
    is_featured: 4,
    order: 4,
    pre_launch: false,
    tags: [5, 6, 7],
    short_description: "A complete beginners guide from scratch as to How you can build your own Financial Plan",
    long_description:
      "Warren Buffett's greatest skill is not investing but investing early. This course will make your money work for you, to make you financially independent. i.e. not having to worry about money. The course is designed to bring you from knowing nothing about investing to knowing well enough to build your own financial plan. In the course, you will learn about savings, investing, insurance and tax planning and associated hacks and thumb rules. You'll also learn the power of compounding and how you can build & grow your wealth with a disciplined investment approach by taking exposures in various asset classes",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/beginner-s-guide-to-investing.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/beginner-s-guide-to-investing.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/beginner-s-guide-to-investing.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/beginner-s-guide-to-investing.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/beginner-s-guide-to-investing.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/beginner-s-guide-to-investing.webp 422w",
    youtube_embed: "https://www.youtube.com/embed/NoLxTo2WjG0",
    markup_price: "1600",
    offer_price: "400",
    enrollments: "500+",
    perks: [
      "Live on-demand doubt sessions",
      "Extensive content library",
      "Lifetime access",
      "Industry recognized certificates",
      "(How many hrs of videos?)",
      "Self paced lectures",
      "Premium downloadable resources",
    ],
    videos: "20",
    duration: "3 hrs 41 mins",
    downloadables: "4 PDFs",
    requirements: "Two core ingredients<ol><li>Investing spirit</li><li>Enthusiasm to learn</li></ol>",
    audience:
      "<ol><li>This course is for beginners who know absolutely nothing about the stock market and don't know where and how to get started with it.</li><li>If you are looking for an advanced learning of investment planning, then this course is not for you.</li></ol>",
    categories: ["course"],
    instructors: ["kunal-shah", "shruti-panda", "nirav-karkera", "abhishek-soni"],
    thinkific_course_id: "",
    learnings: [
      "Learn how you can save your money so that it works for you",
      "Learn how to create portfolio and earn profits in the market",
      "Learn about insurance and tax planning",
      "Learn how to build a solid retirement plan",
      "Much More!!!!",
    ],
  },
  "stock-market": {
    title: "Stock Market Strategies",
    slug: "stock-market",
    is_featured: 4,
    order: 5,
    pre_launch: false,
    tags: [5, 6],
    short_description: "Learn one of the smartest ways on how to decode the exit- entry strategies of stock market.",
    long_description:
      "Everyone will tell you which stocks to pick but no one advices when to exit. Equity investing is more about exits than entry. This course is one of the smartest ways to decode the entry-exit strategies which great investors have implemented and achieved success with.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/stock-market-strategies.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/stock-market-strategies.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/stock-market-strategies.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/stock-market-strategies.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/stock-market-strategies.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/stock-market-strategies.webp 422w",
    markup_price: "1600",
    offer_price: "400",
    enrollments: "500+",
    perks: [
      "Self paced lectures",
      `Access to elite "Valued" community`,
      "Lifetime access",
      "Industry recognized certificates",
      "Live on demand doubt sessions",
      "Premium downloadable resources",
    ],
    videos: "7",
    duration: "3 hrs 7 mins",
    downloadables: "",
    requirements: "Two core ingredients<ol><li>Investing spirit</li><li>Enthusiasm for stock market</li></ul>",
    audience:
      "Someone who is passionate & enthusiastic about stock market. Someone who is actively investing or wished to invest in stock market. Beginner level traders looking for advanced techniques",
    categories: ["course"],
    instructors: ["pratik-bajaj", "kunal-shah"],
    thinkific_course_id: "",
    learnings: [
      "Learn how to analyse your portfolio with different trading strategies",
      "Get to know about re-balancing & various exit strategies",
      "Learn how a trade is executed",
      "Learn how equity strategy is applied",
      "Along with these learn all the hacks related to Annual Report Reading",
    ],
  },
  "portfolio-management-with-entry-exit-strategies": {
    title: "Portfolio Management",
    slug: "portfolio-management-with-entry-exit-strategies",
    is_featured: 4,
    order: 2,
    pre_launch: false,
    tags: [3, 4, 5, 6],
    short_description:
      "Acquire your knowledge on how to analyse your investments, diversify your portfolio and manage investment risks by learning Portfolio Management",
    long_description:
      "Portfolio management is more about managing risks than returns. In this course, one will understand in detail how to quantify the risk appetite and return objective of the investor, to make an elaborate financial plan. Comprehensive analysis of assets classes- Equity, Bonds, Real Estate & Gold and how to allocate capital amongst them using the best principles of diversification. Then we discuss 2 successful equity picking strategies along with exit strategies. Then we discuss how to practically invest. Please go through lesson plans for more details.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/portfolio-management.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/portfolio-management.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/portfolio-management.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/portfolio-management.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/portfolio-management.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/portfolio-management.webp 422w",
    markup_price: "6000",
    offer_price: "1500",
    enrollments: "1000+",
    perks: [
      "Self paced lectures",
      `Access to elite "Valued" community`,
      "Lifetime access",
      "Industry recognized certificates",
      "Live on demand doubt sessions",
      "Premium downloadable resources",
    ],
    videos: "22",
    duration: "7 hrs 53 mins",
    downloadables: "",
    requirements:
      "No prior knowledge is required. Three core ingredients<ol><li>Investing spirit</li><li>Enthusiasm to learn</li><li>Career focus</li></ol>",
    audience:
      "<ol><li>Anyone who wants to become a research analyst or portfolio manager.</li><li>Students who want to learn techniques about investment analysis and portfolio management.</li><li>Students who want to learn techniques about investment analysis and portfolio management.</li></ol>",
    categories: ["course"],
    instructors: ["pratik-bajaj", "kunal-shah", "mandar-naik"],
    thinkific_course_id: "",
    learnings: [
      "Learn how to open a demat account and punch trades.",
      "Allocate your capital by using the best principles of diversification.",
      "Learn about equity strategy, mutual funds, exit strategy.",
      "Much More!!",
    ],
  },
  "financial-modeling-business-valuations": {
    title: "Financial Modeling & Business Valuations",
    slug: "financial-modeling-business-valuations",
    best_seller: true,
    is_featured: 4,
    order: 1,
    pre_launch: false,
    tags: [1, 2, 3, 4, 5, 6],
    short_description:
      "An all-inclusive step by step guide with all the essential techniques required to build business and financial models.",
    long_description:
      "Financial modelling is a process of forecasting financial performance of a company and business valuation is a way of calculating the fair value of that company. With this skillset, one can understand the company's business and figure out its ideal value. We also discuss M&A transactions and start-up valuations. These concepts are applied in the fields of Investment Banking for coming out with IPOs or raising capital; by Venture Capital firms to invest in start-ups and by Asset Management Companies (AMCs) to make investing decisions.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/financial-modelling-business-valuations.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/financial-modelling-business-valuations.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/financial-modelling-business-valuations.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/financial-modelling-business-valuations.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/financial-modelling-business-valuations.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/financial-modelling-business-valuations.webp 422w",
    markup_price: "8000",
    offer_price: "2000",
    enrollments: "1000+",
    perks: [
      "Self paced lectures",
      "Lifetime access",
      "Live on-demand doubt session with instructor",
      "Industry recognized certificate",
      'Access to elite "Valued" community',
      "Premium Downloadable Resources/Templates",
    ],
    learnings: [
      "Learn the importance of financial modelling and business valuation",
      "Learn all the industrial secrets regarding Mergers & Acquisitions",
      "Get a powerful grip over how to forecast income statement, balance sheet and cashflow statement",
      "Become an expert on how and when to use different valuation methods.",
      "Learn how to analyse and translate financial data on Excel.",
    ],
    videos: "30",
    duration: "9 hrs 58 mins",
    downloadables: "",
    requirements:
      "Three core ingredients<br /><ol><li>Basic knowledge of financial statements- Income statement, Balance Sheet & Cash flow statement</li><li>Enthusiasm to learn</li><li>Career focus</li></ol>",
    audience:
      "Anyone who wants to make a career in the following fields:<ol><li>Investment Banking associate</li><li>Analyst in Venture Capitalist & Private Equity firms</li><li>Research analyst at Asset Management Companies (AMCs)</li></ol>",
    categories: ["course"],
    instructors: ["pratik-bajaj", "kunal-shah", "maneesh-srivastava"],
    thinkific_course_id: "",
  },
  // "financial-modeling-business-valuations-synopsis": {
  //   title: "Financial Modeling & Business Valuations Synopsis",
  //   slug: "financial-modeling-business-valuations-synopsis",
  //   thinkific: "Synopsis",
  //   order: 6,
  //   pre_launch: false,
  //   tags: [1, 2, 3, 4, 5, 6, 7],
  //   short_description:
  //     "Been a while you created your last financial model? Let's quickly brush up the art of creating Financial Models and applying valuation metrics in a very concise manner.",
  //   long_description:
  //     'At valuationary, we feel that "financial modeling & business valuation" is an art of converting growth stories into meaningful numbers. In this course, we discuss all the concepts of FMBV in a brief manner while building a hypothetical model. It\'s a shortened version of our FMBV course which builds a real financial model in an comprehensive manner. If you are not short on time, we highly recommend enrolling for the flagship program.',
  //   image_url:
  //     "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/financial-modeling-business-valuations-synopsis.webp 400w",
  //   markup_price: "1000",
  //   offer_price: "499",
  //   enrollments: "500+",
  //   videos: "7",
  //   duration: "",
  //   requirements:
  //     'Three core ingredients<ul style="list-style-type: none;"><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Basic knowledge of financial statements- Income statement, Balance Sheet & Cash flow statement</li><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Enthusiasm to learn</li><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Career focus</li></ul>',
  //   audience:
  //     "This is for all who wants to get a flavor of financial modeling and business valuation. If dearth of time has been an issue, this synopsis is best for you.",
  //   categories: ["course"],
  //   instructors: ["pratik-bajaj", "kunal-shah"],
  // },
  "excel-for-finance": {
    title: "Excel for Finance",
    slug: "excel-for-finance",
    is_featured: true,
    best_seller: true,
    order: 100,
    pre_launch: false,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description: "Know how to use Microsoft Excel efficiently and effectively in the field of Finance",
    long_description:
      "Excel is an important tool that can help finance professionals create reports, analyze data, and prepare financial strategies. Excel is an invaluable source of financial data analysis and most probably will be your best analytical tool until the end of your career. It is important to know how to use excel efficiently and effectively. Data manipulation, formatting and advanced formulae are few things we'll be discussing in this course on- Excel for Finance.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/excel-for-finance.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/excel-for-finance.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/excel-for-finance.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/excel-for-finance.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/excel-for-finance.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/excel-for-finance.webp 422w",
    markup_price: "1000",
    offer_price: "250",
    enrollments: "1000+",
    perks: [
      "Self paced lectures",
      "Extensive content library",
      "Lifetime access",
      "Industry recognized certificates",
      `Access to elite "Valued" community`,
      "Premium downloadable resources",
      "Live on demand doubt sessions",
    ],
    videos: "36",
    duration: "2 hrs 46 mins",
    downloadables: "",
    requirements:
      "Three core ingredients<ol><li>Enthusiasm to learn</li><li>Career focus</li><li>No prior knowledge is required.</li></ul>",
    audience:
      "This is for everyone from beginner to pro. Although you may have a basic knowledge of Excel, you might not know about specialized functions that can make your job easier.",
    categories: ["course"],
    instructors: ["mridula-devrani"],
    thinkific_course_id: 1537812,
    learnings: [
      "Learn the most important functions and formulae of excel",
      "Build a powerful understanding on financial setups and data analysis",
      "Learn dynamic charting and graphs",
      "Learn the time value of money by basic and advance functions",
    ],
  },
  "resume-building-and-interview-prep": {
    title: "Resume Building & Interview Prep",
    slug: "resume-building-and-interview-prep",
    is_featured: false,
    order: 1,
    tags: [1, 2, 3, 4, 5, 6, 7],
    short_description: "Get your Dream Job by building a mindblowing Resume and aceing the Interview round",
    long_description:
      "This course is your one-stop solution to Resume building, Interview preparation & guesstimates solving. Learn it all from the veteran in Corporate & Soft Skills Training, CA Pooja Maloo.\n\nPooja is a Chartered Accountant and an Internationally Certified Trainer (American Tesol). This course has been curated to provide practical solutions and strategies to ace the screening procedure with ease. She has over 12 years of experience in this field and has been instrumental in developing interview tactics and strategies for more than 50,000 job seekers.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x298/resume-building-interview-prep.webp 400w",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/1132x876/resume-building-interview-prep.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/900x696/resume-building-interview-prep.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/600x464/resume-building-interview-prep.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/400x309/resume-building-interview-prep.webp 400w",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/webp/422x260/resume-building-interview-prep.webp 422w",
    poster_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/poster/webp/resume_building_promo_poster_480x480.webp",
    video_sources: [
      {
        src: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/videos/resume_building_promo_480_custom.m4v",
        type: "video/mp4",
      },
    ],
    markup_price: "1000",
    offer_price: "250",
    enrollments: "500+",
    perks: [
      "One-time personalized resume screening",
      "Lifetime access",
      "Premium Downloadable templates",
      "Guesstimates questions and HR & Technical Interview Material",
    ],
    videos: "12",
    duration: "2 hrs 58 mins",
    downloadables: "",
    requirements:
      "We don't expect candidates to have any prior knowledge or expertise in the domain apart from basic understanding of English.",
    audience:
      "Any Graduate or Job-Seeker who wishes to ace resume building & interview preparation and land up to his or her dream job. Candidates who are in the early stage of their career and want to progress faster.",
    categories: ["course"],
    instructors: ["pooja-maloo"],
    thinkific_course_id: 1443517,
    learnings: [
      "Learn how to build a powerful resume",
      "Learn how to create an impactful impression in the Interview round",
      "Get to know about all the Dos and Don'ts of Resume Building",
      "Learn how to crack common HR & technical questions",
      "And Much More!!",
    ],
  },
  "ethical-professional-standards": {
    title: "Ethical & Professional Standards",
    slug: "ethical-professional-standards",
    pre_launch: false,
    tags: ["CFA Level 1", "15-20%"],
    short_description: "Topic Weight: 15-20%",
    long_description:
      "CFA Institute works extensively to impart the right values, ethics, and professional conduct to work in the financial industry. They include the detailed version of the CFA Institute Code of Ethics and Standards of Professional Conduct and Global Investment Performance Standards (GIPS®) to provoke ethical decision making and professionalism amongst the candidates. The depth of subject will equip the candidates to identify misconduct, be ethical in their work, understand the challenges and take proper decision henceforth.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_grid_min.svgz",
    markup_price: "1999",
    offer_price: "999",
    videos: "8",
    duration: "1 hrs 35 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["pratik-bajaj"],
  },
  "quantitative-methods": {
    title: "Quantitative Methods",
    slug: "quantitative-methods",
    pre_launch: false,
    tags: ["CFA Level 1", "8-12%"],
    short_description: "Topic Weight: 8-12%",
    long_description:
      "The mathematical and quantitative aspects of the finance and investment industry are covered here. The candidates are trained to approach the problems using statistical tools and analyze them thoroughly. In-depth knowledge of time value of money, hypothesis, regression analysis, return distributions are included in the curriculum from the very basics.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_grid_min.svgz",
    markup_price: "3749",
    offer_price: "2499",
    videos: "67",
    duration: "14 hrs 57 mins",
    downloadables: "2 PDFs",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["kunal-shah"],
  },
  "economics-cfa-level-1": {
    title: "Economics",
    slug: "economics-cfa-level-1",
    pre_launch: false,
    tags: ["CFA Level 1", "8-12%"],
    short_description: "Topic Weight: 8-12%",
    long_description:
      "This subject covers the conceptual knowledge of demand and supply for firms and consumers. The curriculum includes both microeconomics and macroeconomics. Concepts like growth factors, aggregate income and output measurements, business cycle's effects on economic activity, are included to make candidates comfortable with day-to-day economics.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_grid_min.svgz",
    markup_price: "3499",
    offer_price: "1999",
    videos: "72",
    duration: "17 hrs 18 mins",
    downloadables: "7 PDFs",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["pulkit-jajodia"],
  },
  "financial-reporting-analysis": {
    title: "Financial Reporting Analysis",
    slug: "financial-reporting-analysis",
    pre_launch: false,
    tags: ["CFA Level 1", "13-17%"],
    short_description: "Topic Weight: 13-17%",
    long_description:
      "This subject lays down an important foundation for the candidates planning to enter the investment and banking industry. Detailed explanation on financial statements, inventories and their accounting, taxes, long term assets, revenue recognition is added along with the proper ways to identify methods under both US GAAP and IFRS. A thorough guide is created on how to understand and analyze financial statements, disclosures and notes.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_grid_min.svgz",
    markup_price: "3749",
    offer_price: "2499",
    videos: "38",
    duration: "7 hrs 3 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["pratik-bajaj"],
  },
  "corporate-issuers-cfa-level-1": {
    title: "Corporate Issuers",
    slug: "corporate-issuers-cfa-level-1",
    tags: ["CFA Level 1", "8-12%"],
    short_description: "Topic Weight: 8-12%",
    long_description:
      "This subject gives a microscopic view into decision making in investing and financing problems, the idea of corporate governance and an understanding of stakeholder management. The concepts of working capital, leverage, internal rate of return, net present value are explained in a way that can be used regularly. It also includes a little of the impact of environmental and social considerations in the investing process.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_grid_min.svgz",
    markup_price: "2249",
    offer_price: "1499",
    videos: "25",
    duration: "8 hrs 0 mins",
    downloadables: "3 PDFs",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["rishabh-dakalia"],
  },
  "equity-investments": {
    title: "Equity Investments",
    slug: "equity-investments",
    pre_launch: false,
    tags: ["CFA Level 1", "10-12%"],
    short_description: "Topic Weight: 10-12%",
    long_description:
      "A practical insight into Equity investments, indexes, security markets and helping candidates to analyze the public companies to decide on investing. Valuation models are taught to know if the company is undervalued or overvalued. An outlook of the global market is given through this curriculum.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_grid_min.svgz",
    markup_price: "3749",
    offer_price: "2499",
    videos: "52",
    duration: "7 hrs 9 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["kunal-shah", "rishabh-dakalia"],
  },
  "fixed-income": {
    title: "Fixed Income",
    slug: "fixed-income",
    pre_launch: false,
    tags: ["CFA Level 1", "10-12%"],
    short_description: "Topic Weight: 10-12%",
    long_description:
      "The subject adds the introduction of fixed income securities, tools, their valuation, risk factors, and yield measures. Various methods of yields, values of securities, risk and return of bonds, principles of credit analysis and asset-backed securities.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_grid_min.svgz",
    markup_price: "3499",
    offer_price: "1999",
    videos: "58",
    duration: "11 hrs 14 mins",
    downloadables: "6 PDFs",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["rishabh-dakalia"],
  },
  "derivatives-cfa-level-1": {
    title: "Derivatives",
    slug: "derivatives-cfa-level-1",
    pre_launch: false,
    tags: ["CFA Level 1", "5-8%"],
    short_description: "Topic Weight: 5-8%",
    long_description:
      "This topic gives an in-depth knowledge of derivatives and their markets. Basics of futures, swaps, options and forwards are given with their features and valuation methods. Pricing and valuation of the tools and their drivers are explained and decision making about the instrument being undervalued and overvalued.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_grid_min.svgz",
    markup_price: "2249",
    offer_price: "1499",
    videos: "21",
    duration: "3 hrs 42 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["kunal-shah"],
  },
  "alternative-investments": {
    title: "Alternative Investments",
    slug: "alternative-investments",
    pre_launch: false,
    tags: ["CFA Level 1", "5-8%"],
    short_description: "Topic Weight: 5-8%",
    long_description:
      "Instruments other than equity and bonds are explained, like real estate, venture capital, hedge fund, private equity, commodities and infrastructure. Methods of valuation, diversification, risk and returns of instruments are taught. Candidates understand these instruments and their workings due to changes in the economy.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_grid_min.svgz",
    markup_price: "1749",
    offer_price: "999",
    videos: "5",
    duration: "2 hrs 59 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["kunal-shah"],
  },
  "portfolio-management-cfa-level-1": {
    title: "Portfolio Management",
    slug: "portfolio-management-cfa-level-1",
    pre_launch: false,
    tags: ["CFA Level 1", "5-8%"],
    short_description: "Topic Weight: 5-8%",
    long_description:
      "Through concepts of modern pricing theory, capital asset pricing model, risk and return of portfolio construction, diversification ways, Portfolio Management is taught. This topic teaches for individual and institutional solutions regarding the investment decision, allocation strategy and risk and returns measurements.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_grid_min.svgz",
    markup_price: "2249",
    offer_price: "1499",
    videos: "22",
    duration: "3 hrs 41 mins",
    downloadables: "1 PDF",
    enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_1"],
    instructors: ["pratik-bajaj"],
  },
  "ethical-professional-standards-cfa-level-2": {
    title: "Ethical & Professional Standards",
    slug: "ethical-professional-standards-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "10-15%"],
    short_description: "Topic Weight: 10-15%",
    long_description:
      "CFA Institute works extensively to impart the right values, ethics, and professional conduct to work in the financial industry. They include the detailed version of the CFA Institute Code of Ethics and Standards of Professional Conduct and Global Investment Performance Standards (GIPS®) to provoke ethical decision making and professionalism amongst the candidates. The depth of subject will equip the candidates to identify misconduct, be ethical in their work, understand the challenges and take proper decision henceforth.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/ethical_&_professional_standards_cfa_grid_min.svgz",
    markup_price: "1000",
    // offer_price: "",
    videos: "0",
    // duration: "1 hrs 35 mins",
    // downloadables: "1 PDF",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["pratik-bajaj"],
  },
  "quantitative-methods-cfa-level-2": {
    title: "Quantitative Methods",
    slug: "quantitative-methods-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "5-10%"],
    short_description: "Topic Weight: 5-10%",
    long_description:
      "The mathematical and quantitative aspects of the finance and investment industry are covered here. The candidates are trained to approach the problems using statistical tools and analyze them thoroughly. In-depth knowledge of time value of money, hypothesis, regression analysis, return distributions are included in the curriculum from the very basics.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/quantitative_methods_cfa_grid_min.svgz",
    markup_price: "3000",
    // offer_price: "",
    videos: "0",
    // duration: "14 hrs 57 mins",
    // downloadables: "2 PDFs",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "economics-cfa-level-2": {
    title: "Economics",
    slug: "economics-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "5-10%"],
    short_description: "Topic Weight: 5-10%",
    long_description:
      "This subject covers the conceptual knowledge of demand and supply for firms and consumers. The curriculum includes both microeconomics and macroeconomics. Concepts like growth factors, aggregate income and output measurements, business cycle's effects on economic activity, are included to make candidates comfortable with day-to-day economics.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/economics_cfa_grid_min.svgz",
    markup_price: "2000",
    // offer_price: "",
    videos: "0",
    // duration: "17 hrs 18 mins",
    // downloadables: "7 PDFs",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "financial-reporting-analysis-cfa-level-2": {
    title: "Financial Reporting Analysis",
    slug: "financial-reporting-analysis-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "10-15%"],
    short_description: "Topic Weight: 10-15%",
    long_description:
      "This subject lays down an important foundation for the candidates planning to enter the investment and banking industry. Detailed explanation on financial statements, inventories and their accounting, taxes, long term assets, revenue recognition is added along with the proper ways to identify methods under both US GAAP and IFRS. A thorough guide is created on how to understand and analyze financial statements, disclosures and notes.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/financial_reporting_analysis_cfa_grid_min.svgz",
    markup_price: "3000",
    // offer_price: "",
    videos: "0",
    // duration: "7 hrs 3 mins",
    // downloadables: "1 PDF",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["pratik-bajaj"],
  },
  "corporate-issuers-cfa-level-2": {
    title: "Corporate Issuers",
    slug: "corporate-issuers-cfa-level-2",
    tags: ["CFA Level 2", "5-10%"],
    short_description: "Topic Weight: 5-10%",
    long_description:
      "This subject gives a microscopic view into decision making in investing and financing problems, the idea of corporate governance and an understanding of stakeholder management. The concepts of working capital, leverage, internal rate of return, net present value are explained in a way that can be used regularly. It also includes a little of the impact of environmental and social considerations in the investing process.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/corporate_issuers_cfa_grid_min.svgz",
    markup_price: "2000",
    // offer_price: "",
    videos: "14",
    duration: "3 hrs 37 mins",
    // downloadables: "5 PDFs",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "equity-investments-cfa-level-2": {
    title: "Equity Investments",
    slug: "equity-investments-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "10-15%"],
    short_description: "Topic Weight: 10-15%",
    long_description:
      "A practical insight into Equity investments, indexes, security markets and helping candidates to analyze the public companies to decide on investing. Valuation models are taught to know if the company is undervalued or overvalued. An outlook of the global market is given through this curriculum.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/equity_investments_cfa_grid_min.svgz",
    markup_price: "3000",
    // offer_price: "",
    videos: "0",
    // duration: "7 hrs 9 mins",
    // downloadables: "1 PDF",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["ashish-periwal"],
  },
  "fixed-income-cfa-level-2": {
    title: "Fixed Income",
    slug: "fixed-income-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "10-15%"],
    short_description: "Topic Weight: 10-15%",
    long_description:
      "The subject adds the introduction of fixed income securities, tools, their valuation, risk factors, and yield measures. Various methods of yields, values of securities, risk and return of bonds, principles of credit analysis and asset-backed securities.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/fixed_income_cfa_grid_min.svgz",
    markup_price: "2500",
    // offer_price: "",
    videos: "0",
    // duration: "11 hrs 14 mins",
    // downloadables: "6 PDFs",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "derivatives-cfa-level-2": {
    title: "Derivatives",
    slug: "derivatives-cfa-level-2",
    order: 1,
    tags: ["CFA Level 2", "5-10%"],
    short_description: "Topic Weight: 5-10%",
    long_description:
      "This topic gives an in-depth knowledge of derivatives and their markets. Basics of futures, swaps, options and forwards are given with their features and valuation methods. Pricing and valuation of the tools and their drivers are explained and decision making about the instrument being undervalued and overvalued.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/derivatives_cfa_grid_min.svgz",
    markup_price: "2500",
    offer_price: "0",
    videos: "29",
    duration: "5 hrs 49 mins",
    downloadables: "",
    enrollments: "",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "alternative-investments-cfa-level-2": {
    title: "Alternative Investments",
    slug: "alternative-investments-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "5-10%"],
    short_description: "Topic Weight: 5-10%",
    long_description:
      "Instruments other than equity and bonds are explained, like real estate, venture capital, hedge fund, private equity, commodities and infrastructure. Methods of valuation, diversification, risk and returns of instruments are taught. Candidates understand these instruments and their workings due to changes in the economy.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/alternative_investments_cfa_grid_min.svgz",
    markup_price: "2000",
    // offer_price: "",
    videos: "0",
    // duration: "2 hrs 59 mins",
    // downloadables: "1 PDF",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
  "portfolio-management-cfa-level-2": {
    title: "Portfolio Management",
    slug: "portfolio-management-cfa-level-2",
    coming_soon: true,
    tags: ["CFA Level 2", "5-15%"],
    short_description: "Topic Weight: 5-15%",
    long_description:
      "Through concepts of modern pricing theory, capital asset pricing model, risk and return of portfolio construction, diversification ways, Portfolio Management is taught. This topic teaches for individual and institutional solutions regarding the investment decision, allocation strategy and risk and returns measurements.",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_min.svgz",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_min.svgz",
    grid_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/course-thumbs/svgz/portfolio_management_cfa_grid_min.svgz",
    markup_price: "2500",
    // offer_price: "",
    videos: "0",
    // duration: "3 hrs 41 mins",
    // downloadables: "1 PDF",
    // enrollments: "300+",
    requirements: "",
    audience: "",
    categories: ["cfa", "cfa_level_2"],
    instructors: ["kunal-shah"],
  },
};

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: C O U R S E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

for (let id in courses) {
  if (!courses[id].order) courses[id].order = course.order;
  courses[id].chapters = chapters[id];
  courses[id].pre_requisites = "No degree or prior knowledge in finance required";

  if (courses[id].categories.indexOf("cfa") >= 0) {
    courses[id].perks = [
      "Live on-demand doubt session with instructor",
      "Learn from CFA charterholders with years of work-experience",
      "Softcopy of summarized notes",
      "Subject test modules",
      "Focus on practical application aligned with CFA exam",
      'Access to elite "Valued" community',
      "Premium Downloadable Resources/Templates",
    ];
  }
  if (courses[id].categories.indexOf("course") >= 0) {
    if (!courses[id].perks)
      courses[id].perks = [
        "Live on-demand doubt session with instructor",
        "Industry recognized certificate",
        'Access to elite "Valued" community',
        "Premium Downloadable Resources/Templates",
      ];

    let updated_tags = [];
    for (let tagID in courses[id].tags) {
      updated_tags.push(course_tags[tagID]);
    }
    courses[id].tags = updated_tags;
    courses[id].completion_certificate = true;
  }

  if (!courses[id].certificate_url) {
    courses[id].certificate_url =
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/courses/Certificate.webp";
  }

  let summary = [];
  if (!courses[id].lifetime_access) courses[id].lifetime_access = true;
  if (!courses[id].completion_certificate) courses[id].completion_certificate = false;
  if (!courses[id].access_on_devices) courses[id].access_on_devices = "mobile and web";

  for (const [key, value] of Object.entries(course_summary)) {
    if (courses[id][key]) summary.push({ ...value, title: fillTemplate(value.title, courses[id]) });
  }
  courses[id].summary = summary;

  let populated_instructors = [];
  for (let instructor of courses[id].instructors) {
    populated_instructors.push(instructors[instructor]);
  }
  courses[id].instructors = populated_instructors;

  if (!courses[id].videos) {
    let totalVideos = 0;
    for (let chapter of courses[id].chapters) {
      totalVideos += chapter.sub_items.length > 0 ? chapter.sub_items.length : 1;
    }
    courses[id].videos = totalVideos;
  }
  if (courses[id].offer_price)
    courses[id].discount = Math.round(
      100 * (1.0 - parseInt(courses[id].offer_price) / parseInt(courses[id].markup_price)),
    );

  if (!courses[id].coming_soon) courses[id].itemLink = "/course/" + id;
  if (!courses[id].reviews) courses[id].reviews = [];
}

export { course_tags, course, courses };

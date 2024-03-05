import { shortDateFormatter } from "utils/dayjs.util";
import { instructors } from "data/instructors.data";
import { reviews } from "data/reviews.data";

var featured_reviews = [];
for (let review of reviews) {
  if (review.is_featured === true && !review.course_id) featured_reviews.push(review);
}

export const programs = {
  // "credit-analyst": {
  //   title: "Become a Credit Analyst",
  //   role: "Credit Analyst",
  //   long_description:
  //     "Valuationary’s Credit Management Program helps freshers and working professionals to get into Credit Management with top banks in India.",
  //   slug: "credit-analyst",
  //   image_url: "",
  //   tripetto_url: "https://tripetto.app/run/5RLM1FEEDO",
  //   tags: ["Job Guarantee", "40% Avg salary hike", "8.5 lacs average salary offered"],
  //   duration_in_weeks: "8",
  //   daily_commitment: "1.5",
  //   pre_requisites: "Should be a CA (Number of attempts do not matter) or MBA (with commerce background).",
  //   requirements: "Basic knowledge of Finance and have completed their CA or MBA.",
  //   audience: "Anyone looking for a job change or start their career and have completed CA or MBA.",
  //   remaining_capacity: "5",
  //   total_capacity: "20",
  //   fees_fixed: "₹ 10,000",
  //   fees_variable: "20% of your first 6 months salary",
  //   batch_start_date: shortDateFormatter("2021/09/01"),
  //   // registration_last_date: shortDateFormatter("2021/08/29"),
  //   instructors: ["ajay-surana"],
  //   curriculum: [],
  //   reviews: [...featured_reviews],
  //   steps: [],
  //   duration: "19 hrs 52 mins",
  //   downloadables: "6 PDFs, 2 Excel Sheets",
  //   role_information:
  //     "Credit Analysts are responsible for overseeing the credit granting process for Banks, NBFCs, Housing finance companies (HFCs), Micro finance companies, Fintech firms, etc. Their job is to optimize credit and reduce bad debt losses by maintaining the credit policy. They do this by assessing the creditworthiness of potential customers and conducting periodic reviews of existing customers. <br /><br />Credit Analyst's primary responsibilities includes but are not limited to:<ol><li>Evaluating the creditworthiness of potential customers.</li><li>Creating credit scoring models for risk assessments.</li><li>Approving and rejecting loans based on available data.</li><li>Calculating and setting loan interest rates.</li><li>Negotiating the terms of the loan with new clients.</li><li>Ensuring all loans and lending procedures comply with regulations.</li><li>Maintaining records of all company loans.</li><li>Monitoring loan payments and bad debts.</li></ol>",
  // },
  "hedge-fund-accountant": {
    title: "Become a Hedge Fund Accountant",
    role: "Hedge Fund Accountant",
    long_description:
      "Valuationary’s Hedge Fund Accounting Program helps freshers and working professionals to get into Fund Accounting with top hedge fund services in India.",
    slug: "hedge-fund-accountant",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/600x464/hedge_fund_accountant.webp",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/1132x876/hedge_fund_accountant.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/900x696/hedge_fund_accountant.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/600x464/hedge_fund_accountant.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/400x309/hedge_fund_accountant.webp 400w",
    brochure_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/job-program-docs/hedge_fund_accounting_brochure.pdf",
    tripetto_url: "https://tripetto.app/run/5RLM1FEEDO",
    tags: [
      {
        tag: "Job Guarantee",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Briefcase.svg",
      },
      {
        tag: "40% Avg salary hike",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/TrendingUp.svg",
      },
      {
        tag: "8 lacs average salary offered",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/CurrencyRupee.svg",
      },
    ],
    avg_salary_hike: "40",
    avg_salary_offered: "8 lakhs",
    duration_in_months: "Two",
    duration_in_weeks: "8",
    daily_commitment: "1.5",
    eligibility: "CMA, M.Com,\nCA, MBA",
    pre_requisites:
      '<ul style="list-style-type: none;"><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />Should be a CMA / M.Com / CA / MBA (with accounting background).</li><li><img src="/images/ArrowDown.svg" width="12px" height="12px" alt="toggle" style="transform: rotate(-90deg); margin-right: 1rem;" />CA drop-outs with a pedigree of accounting are eligible.</li></ul>',
    requirements:
      "<ol><li>Basic knowledge of finance.</li><li>CA drop-outs with a pedigree of accounting are eligible.</li></ol>",
    audience:
      "Anyone looking for a job change or start their career and have completed CA / CMA / M.Com / MBA (with accounting background). CA drop-outs with a pedigree of accounting are eligible",
    remaining_capacity: "",
    total_capacity: "30",
    fees_fixed: "₹ 10,000",
    fees_variable: "20% of your first 6 months salary",
    batch_start_date: shortDateFormatter("2021/11/22"),
    registration_last_date: shortDateFormatter("2021/11/20"),
    instructors: ["palak-jerajani"],
    curriculum: [],
    reviews: [...featured_reviews],
    steps: [],
    duration: "21 hrs 19 mins",
    downloadables: "3 PDFs, 2 Excel Sheets",
    role_information:
      "Hedge Fund Accountants are primarily responsible for accounting & valuation of investments made by Hedge Funds. The hedge fund accountant shall oversee the movement of funds, review the status of the portfolio on a regular basis and use statistical tools to feed & analyse data regularly.<br /><br />Hedge Fund Accountants's primary responsibilities includes but not limited to: <ol><li>Managing and maintaining the hedge fund accounts</li><li>Monitoring the total amount of money flow in the organization and of the investment portfolios</li><li>Calculating the value of the fund's assets and analyzing it according to the market value</li><li>Preparing the monthly profit and loss statement of hedge fund account</li><li>Using statistical software preferred by the accounting company and feed data regularly</li><li>Managing the cash flow and oversee the movement and its frequency</li></ol>",
    learnings: [
      "Learn all the fundamentals of Hedge Funds",
      "Get to know about the importance of Portfolio Accounting",
      "Learn about cash equity, swaps, future & options, FX and bonds",
      "Get a powerful grip over investor allocations",
      "Solve and apply these concepts on real life case studies",
      "Lastly you would be prepared for the Interview process",
    ],
  },
  "research-analyst": {
    title: "Become a Research Analyst",
    role: "Research Analyst",
    long_description:
      "Valuationary’s Research Analyst Program helps freshers and working professionals to get into research analyst field with top firms in India.",
    slug: "research-analyst",
    image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/600x464/research_analyst.webp",
    bg_image_url:
      "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/1132x876/research_analyst.webp 1132w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/900x696/research_analyst.webp 900w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/600x464/research_analyst.webp 600w, https://valuationary-react-static.s3.ap-south-1.amazonaws.com/program-thumbs/webp/400x309/research_analyst.webp 400w",
    tripetto_url: "https://tripetto.app/run/XEKL3M1Z3I",
    tags: [
      {
        tag: "Job Guarantee",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Briefcase.svg",
      },
      {
        tag: "40% Avg salary hike",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/TrendingUp.svg",
      },
      {
        tag: "9 lacs average salary offered",
        icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/CurrencyRupee.svg",
      },
    ],
    avg_salary_hike: "40",
    avg_salary_offered: "9 lakhs",
    duration_in_months: "Two",
    duration_in_weeks: "8",
    daily_commitment: "1.5",
    pre_requisites: "Should be a CA (Number of attempts do not matter) or MBA (with commerce background).",
    requirements: "Basic knowledge of Finance and have completed their CA or MBA.",
    audience: "Anyone looking for a job change or start their career and have completed CA or MBA.",
    remaining_capacity: "5",
    total_capacity: "20",
    fees_fixed: "₹ 10,000",
    fees_variable: "20% of your first 6 months salary",
    batch_start_date: "",
    registration_last_date: "",
    instructors: [],
    curriculum: [],
    reviews: [...featured_reviews],
    steps: [],
    duration: "",
    downloadables: "",
    role_information:
      "A research analyst performs research, collects and analyzes information, and uses the data to solve problems and improve the decision-making and efficiency of a business. The research analyst studies the data and presents his or her recommendations to the leadership team at Investment Banks, Portfolio Management firms, Buy-side/ Sell-side equity research firms, VC/PE firms, Hedge funds, AIFs and also industries in general. <br /><br />Research Analyst's primary responsibilities includes but are not limited to:<ol><li>Analyzing past operations' results and performing variance analyses.</li><li>Identifying and analyzing trends and forecasts and recommending improvements to the business processes.</li><li>Researching market trends, analyzing data from competitors, and analyzing the business's operations, expenditures, and customer retention to identify patterns of potential issues or improvements or for recommending stocks.</li><li>Using data analysis and interpretations to guide the decision-making of the business, including investment opportunities, asset allocation, fundraising, etc.</li><li>Using operations data to develop pricing models and identify areas for improvement.</li><li>Using statistical, economic, and data modeling techniques and tools.</li><li>Organizing and analyzing data, creating charts and graphs, and presenting your findings to the leadership team.</li></ol>",
  },
};

const curriculums = {
  "credit-analyst": [
    {
      title: "Week 1 - Introduction to Credit Risk Management",
      sub_items: [
        {
          title: "What are risks in financial/lending business",
          sub_items: [
            "Lending/Financing - Process of resource allocation to drive economic growth",
            "Financial intermediaries- Business of borrowing & lending money",
            "Maturity transformation - Liquidity & Interest rate risk ",
            "Risk of non-payment by the borrower- Credit risk ",
          ],
        },
        {
          title: "What is credit risk",
          sub_items: [
            "Definition",
            "Types of credit risk ( Default, Concentration, Country )",
            "Impact and interrelations with other risks",
            "Credit risk mitigants",
          ],
        },
        {
          title: "Component of Credit risk",
          sub_items: ["4C of personal credit risk", "Business/Company risk", "Country risk"],
        },
        {
          title: "Risk/Return Analysis",
          sub_items: [
            "Concept of risk & return",
            "Expected loss/ Unexpected loss",
            "Credit risk & Pricing",
            "Credit spreads",
          ],
        },
        {
          title: "Credit Policy/ Lending norms",
          sub_items: [
            "Need of credit policy/Overview of credit policy",
            "Credit decisioning policy",
            "Credit concentration",
            "Credit mitigation",
            "Credit review policy",
          ],
        },
      ],
    },
    {
      title: "Week 2 - Credit Risk Assessment",
      sub_items: [
        {
          title: "How is credit risk measured",
          sub_items: [
            "Judgement",
            "Qualitative & Quantitative score card",
            "Use of External ratings",
            "Advanced credit risk modelling",
          ],
        },
        {
          title: "Credit Scorecard",
          sub_items: ["What is a credit scorecard", "Components of credit scorecard", "Type of credit scorecards"],
        },
        {
          title: "Qualitative factors",
          sub_items: ["Importance of qualitative factors", "Management", "Industry", "Quality of information"],
        },
        {
          title: "Quantitative factors",
          sub_items: [
            "Key quantitative factors",
            "Financial statement analysis",
            "Cash flow analysis",
            "Credit mitigants analysis",
          ],
        },
        {
          title: "External Factors",
          sub_items: ["Key macroeconomic factors", "Regulatory factors", "Other factors"],
        },
      ],
    },
    {
      title: "Week 3 - Understanding key terms for credit risk",
      sub_items: [
        {
          title: "PD",
          sub_items: [
            "What is probability of default",
            "How is probability of default computed",
            "Extending credit score card/ external rating to PD",
          ],
        },
        {
          title: "LGD/EAD",
          sub_items: [
            "What is LGD",
            "How is LGD Computed",
            "What is EAD",
            "How is EAD computed",
            "Relation between PD/LGD/EAD",
          ],
        },
        {
          title: "Expected Loss/Unexpected loss",
          sub_items: [
            "What is expected loss",
            "What is unexpected loss",
            "How is expected loss and unexpected loss is used in credit decisioning, credit policy and capital policy",
          ],
        },
        {
          title: "Overview of Basel Norms",
          sub_items: [
            "What is Basel II norms for banks",
            "Basel II Capital Norms",
            "Standardized Vs Advanced approaches",
            "Upcoming changes in Basel II",
          ],
        },
        {
          title: "NPA/Provisioning/IFRS9",
          sub_items: [
            "What is NPA",
            "Impact of credit risk on financial statements",
            "Loan loss provisioning requirements under IFRS9",
            "Impact of IFRS 9 on credit pricing",
          ],
        },
      ],
    },
    {
      title: "Week 4 - Credit Risk Monitoring",
      sub_items: [
        {
          title: "Role of credit monitoring",
          sub_items: [
            "Importance of credit monitoring",
            "Tools for credit monitoring",
            "Portfolio Monitoring/ early warning indicator analysis/Trend analysis",
            "Credit monitoring a source for improving credit score models and other",
          ],
        },
        {
          title: "Data Collection & Analysis",
          sub_items: [
            "Type of data required for credit modelling & credit monitoring",
            "Tools used for data collection & analysis",
            "Objective of data collection & analysis",
          ],
        },
        {
          title: "Portfolio Analysis",
          sub_items: [
            "Portfolio Performance Analysis",
            "Scenarios Analysis",
            "Stress testing/Outlier events",
            "Identification of suspect accounts",
            "Feedback to credit policy",
          ],
        },
        {
          title: "Early warning indicators",
          sub_items: [
            "What are key risk indicators",
            "Leading/Lagging indicators",
            "Common credit risk early indicators",
            "Defining threshold and warning mechanism for credit review",
          ],
        },
        {
          title: "Credit review",
          sub_items: [
            "Importance of credit review",
            "Process for Reviewing risky/bad accounts",
            "Stressing an exposure",
            "Identifying action items",
            " Feedback to credit policy",
          ],
        },
      ],
    },
    {
      title: "Week 5 - Experiential learning- Case study (1/2)",
      sub_items: ["Solving real-life case study based on above learnings"],
    },
    {
      title: "Week 6 - Experiential learning- Case study (2/2)",
      sub_items: ["Solving real-life case study based on above learnings"],
    },
    {
      title: "Week 7 - Interview Preparation (1/2)",
      sub_items: ["Resume Building", "Telephonic Interview(Mock): HR & Technical"],
    },
    {
      title: "Week 8 - Interview Preparation (2/2)",
      sub_items: ["Group Discussion", "Personal Interview(Mock)"],
    },
  ],
  "research-analyst": [
    // { title: "Week 1", sub_items: [] },
    // { title: "Week 2", sub_items: [] },
    // { title: "Week 3", sub_items: [] },
    // { title: "Week 4", sub_items: [] },
    // { title: "Week 5", sub_items: [] },
    // { title: "Week 6", sub_items: [] },
    // { title: "Week 7", sub_items: [] },
    // { title: "Week 8", sub_items: [] },
  ],
  "hedge-fund-accountant": [
    {
      title: "Week 1 - Introduction to Hedge Funds",
      sub_items: [
        {
          title: "What are hedge funds and different types of hedge fund structures",
          sub_items: [
            "Master-feeder, mini-masters & stand alone; Onshore & offshore feeders",
            "Flow of capital and profit in a Master feeder structure",
          ],
        },
        {
          title: "What is the role of fund administration and why do hedge funds need third party administrators",
          sub_items: [
            "Different touch points like Investor services team, Fund accounting- reconciliation, pricing and investor allocations and financial statements preparation. role- Protecting Investor interests, transparency of investments, regulatory requirement check",
          ],
        },
        {
          title: "Portfolio accounting (GAV)",
          sub_items: [
            "What makes up the GAV of the fund- three key factors in fund accounting- Pricing, Positions & Balances reconciliations & accruals",
            "Why pricing is important and the effect on NAV",
            "Trading vs non trading accruals (What are the different types on non-trading accruals like Audit fees, Director fees, Legal fees, Organizational costs- amortization per US GAAP)",
          ],
        },
        {
          title: " Investor allocations (NAV)",
          sub_items: ["Partnership accounting (LP) vs Share accounting (Ltd)"],
        },
      ],
    },
    {
      title: "Week 2 - Portfolio Accounting",
      sub_items: [
        {
          title: " Recording capital entries",
          sub_items: ["On day 1 dealing day recording capital, recording capital in advance"],
        },
        {
          title: "Trading Accruals",
          sub_items: [
            "Broker & swap financing. What are different types of accruals such as interest, stock lending fee, rebates & swap financing expenses.",
          ],
        },
        {
          title: "Pricing",
          sub_items: [
            "Close price vs Trade price- checking client's OM and Valuation policy. Importance of getting set up right.",
          ],
        },
        {
          title: "Reconciliations",
          sub_items: [
            "Who is a prime broker/custodian for client? What do we reconcile and why- positions, balances trades & dividends",
            "Additional recons such as client to admin books position level or three-way recon between client, admin & custodian",
          ],
        },
      ],
    },
    {
      title: "Week 3 - Products",
      sub_items: [
        {
          title: "Cash Equity",
          sub_items: [
            "Impact on admin books and common corporate actions such as dividends, stock split, bonus",
            "Impact on tax lot cost adjustment for stock split and bonus",
            "Ex-date, record date, pay date",
          ],
        },
        {
          title: "Swaps",
          sub_items: [
            "Recording swaps in admin books, Notional product thus only App/Dep is considered as MV",
            "Non base Swaps and how the FX is managed Different methods of taxlot relief and why there could be a difference in swap cost between admin and custodian",
            "Recording corporate actions for swaps",
            "Cash dividend vs stock dividend- different method of recording swap dividends for stock elections",
          ],
        },
        {
          title: "Futures & Options",
          sub_items: [
            "Movement of variation margin and daily movement per MtM",
            "Movement on option premium and adjustment when there is exercise/ assignment",
          ],
        },
        {
          title: "FX",
          sub_items: [
            "Spot vs Forward, why there is a need to get the classification right and its impact on pricing. Some clients auto spots to reduce the risk of non base ccy in the books",
            "Interpolation and valuation of a forward between two dates",
          ],
        },
        {
          title: "Bonds",
          sub_items: [
            "Fixed coupon, floating coupon & treasury bonds, recording purchase & sale interest and moving to accrued interest",
          ],
        },
      ],
    },
    {
      title: "Week 4 - Investor Allocations",
      sub_items: [
        {
          title: "Different terms",
          sub_items: [
            "Management fee, Inventive fees, HWM, LCF, ISFT, Resetting of HWM, crystallization & frequency. Difference between hedge fund and mutual fund accounting, dealing date, valuation date",
            "Proration of HWM for redemptions",
            "Reading the Offering memorandum and important terms such as legal name, entity type, fee rates etc.",
          ],
        },
        {
          title: "Flow of PnL and calculation of investment in Master ratio",
          sub_items: [
            "special allocations, IPO and specific expenses, calculation of blended WH rate and special allocation of PnL",
          ],
        },
        {
          title: "Management & Incentive Fees",
          sub_items: [
            "Types of management fees, in advance & arrears and calculation of NAV as GAV- Incentive fee",
            "Hurdles and calculating fees with hurdle & side letters",
          ],
        },
        {
          title: "Transfers between share classes",
          sub_items: [
            "Crystallizing and non-crystallizing transfers",
            "What are side pockets and side pocket transfers",
          ],
        },
      ],
    },
    {
      title: "Week 5 - Experiential learning- Case study (1/2)",
      sub_items: ["Solving real-life case study based on above learnings"],
    },
    {
      title: "Week 6 - Experiential learning- Case study (2/2)",
      sub_items: ["Solving real-life case study based on above learnings"],
    },
    {
      title: "Week 7 - Interview Preparation (1/2)",
      sub_items: ["Resume Building", "Telephonic Interview(Mock): HR & Technical"],
    },
    {
      title: "Week 8 - Interview Preparation (2/2)",
      sub_items: ["Group Discussion", "Personal Interview(Mock)"],
    },
  ],
};

//
// ──────────────────────────────────────────────────────── I ──────────
//   :::::: P R O G R A M S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────
//

for (let id in programs) {
  if (programs[id].daily_commitment) {
    programs[id].tags.unshift({
      tag: `${programs[id].daily_commitment} hrs/day`,
      icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Clock.svg",
    });
  }
  if (programs[id].duration_in_weeks) {
    programs[id].tags.unshift({
      tag: `${programs[id].duration_in_weeks} weeks`,
      icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Calendar.svg",
    });
  }
  programs[id].itemLink = "/program/" + id;

  let populated_instructors = [];
  for (let instructor of programs[id].instructors) {
    populated_instructors.push(instructors[instructor]);
  }
  programs[id].instructors = populated_instructors;
  programs[id].curriculum = curriculums[id];
  programs[id].youtube_embed = "https://www.youtube.com/embed/xKcguxB843M";
}

// eslint-disable-next-line no-unused-vars
const overview_steps = {
  durationInWeeks: "duration_in_weeks",
  dailyCommitment: "daily_commitment",
  totalCapacity: "total_capacity",
  averageSalaryOffered: "avergae_salary_offered",
  averageSalaryHike: "average_salary_hike",
};

export const overviewSteps = ({
  duration_in_weeks,
  daily_commitment,
  total_capacity,
  avg_salary_hike,
  avg_salary_offered,
}) => [
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/DesktopComputer.svg",
    title: "100%",
    subtitle: "Online learning",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Calendar.svg",
    title: `${duration_in_weeks || 0} weeks`,
    subtitle: "Average completion time",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Collection.svg",
    title: total_capacity || 0,
    subtitle: "Total batch size ",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Clock.svg",
    title: `${daily_commitment || 0} hrs`,
    subtitle: "Learn every day",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/CurrencyRupee.svg",
    title: `${avg_salary_offered}`,
    subtitle: "Average salary offered",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/TrendingUp.svg",
    title: `${avg_salary_hike}%`,
    subtitle: "Average salary hike",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Briefcase.svg",
    title: "100%",
    subtitle: "Job guaranteed",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Award.svg",
    title: "Certificate",
    subtitle: "Verify your financial skills",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/Expert.svg",
    title: "Industry experts",
    subtitle: "Learn from the best",
  },
  {
    icon: "https://valuationary-react-static.s3.ap-south-1.amazonaws.com/assets/icons/NoFees.svg",
    title: "No Upfront Fees",
    subtitle: "Pay only when we you get placed.",
  },
];

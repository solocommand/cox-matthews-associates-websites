const topics = [
  { href: '/african-american', label: 'African-American' },
  { href: '/asian-american-pacific-islander', label: 'Asian American Pacific Islander' },
  { href: '/campus-climate', label: 'Campus Climate' },
  { href: '/covid-19', label: 'COVID-19' },
  { href: '/disabilties', label: 'Disabilties' },
  { href: '/faculty-issues', label: 'Faculty Issues' },
  { href: '/hbcus', label: 'HBCUs' },
  { href: '/international', label: 'International ' },
  { href: '/latinx', label: 'Latinx' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/lgbtq+', label: 'LGBTQ+' },
  { href: '/msis', label: 'MSIs' },
  { href: '/native-americans', label: 'Native Americans' },
  { href: '/recruitment-retention', label: 'Recruitment & Retention' },
  { href: '/social-justice', label: 'Social Justice' },
  { href: '/sports', label: 'Sports' },
  { href: '/stem', label: 'STEM' },
  { href: '/student-issues', label: 'Student Issues' },
  { href: '/tenure', label: 'Tenure' },
  { href: '/women', label: 'Women' },
];

const resources = [
  { href: '/community-colleges', label: 'Community Colleges' },
  { href: '/military', label: 'Military' },
  { href: '/health', label: 'Health' },
  { href: '/sponsored-content', label: 'Sponsored Content' },
  { href: '/latest-news', label: 'Latest News' },
  { href: '/opinion', label: 'Opinion' },
  { href: '/reports-data', label: 'Reports & Data' },
  { href: '/from-the-magazine', label: 'From the Magazine' },
  { href: '/jobs', label: 'Jobs' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/newsletters', label: 'Newsletters' },
];

const mobileMenu = {
  primary: [
    ...topics,
  ],
  secondary: [
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      { href: '/latest-news', label: 'News' },
      { href: '/opinion', label: 'Opinion' },
      { href: '/campus-climate', label: 'Campus Climate' },
      { href: '/international', label: 'International' },
      { href: '/disabilities', label: 'Disabilities' },
      { href: '/sports', label: 'Sports' },
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    midColumn: {
      items: [
        ...topics,
      ],
    },
    rightColumn: {
      items: [
        ...resources,
      ],
    },
  },
  footer: {
    items: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};

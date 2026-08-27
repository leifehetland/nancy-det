// ---------------------------------------------------------------------------
// Davis Executive Training — single source of truth for all site copy.
//
// Every string rendered anywhere in the app lives here. To revise wording,
// edit this file only; no page or component holds hard-coded copy.
//
// NOTE: `phone` and `email` below are placeholders carried over from the
// design reference. Swap them for Nancy's real contact details before launch.
// ---------------------------------------------------------------------------

export const site = {
  name: "Davis Executive Training",
  shortName: "DET",
  tagline: "Improve Job Performance",
  subTagline: "Public Speaking & Leadership Mastery",
  bannerLead: "Executive Communication & Presentation Workshops",
  bannerAccent: "Build Success, Manage Better, Sell More",
  phone: "(800) 555-DET1",
  phoneHref: "tel:1-800-555-3381",
  email: "info@davisexecutivetraining.com",
  emailHref: "mailto:info@davisexecutivetraining.com",
  locations: "Atlanta, GA & Birmingham, AL Regional Training Facilities",
  hq: "Headquarters: Atlanta & Birmingham Corporate Training Centers",
  hours: "Monday - Friday: 8:00 AM – 6:00 PM EST",
  description:
    "Davis Executive Training empowers executives, managers, and sales professionals with powerful face-to-face communication, public speaking, and presentation skills.",
};

export const nav = [
  { label: "DET Home", href: "/" },
  { label: "Training", href: "/training" },
  { label: "Executive Training", href: "/executive-training" },
  { label: "Financial Services", href: "/financial-services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  eyebrow: "Executive Communication Mastery",
  titleLead: "Build",
  titleAccent: "Success",
  subtitle: "Manage Better, Sell More",
  intro:
    "The ability to think on one's feet is perhaps the major distinguishing characteristic of fast-track performers in today's competitive, communication-conscious environment!",
  primaryCta: { label: "Contact Us Today To Learn More", href: "/contact" },
  secondaryCta: { label: "Explore Workshops", href: "/training" },
  heroCaption: {
    title: "Interactive Workshops & Video Coaching",
    text: "Small group formats with constructive feedback from industry experts.",
  },
};

export const howWeHelp = {
  heading: "How We Help",
  intro:
    "Proven core training methodologies designed to yield immediate workplace performance results.",
  items: [
    {
      icon: "award" as const,
      title: "Learn",
      text: "We teach techniques to control anxiety. You will speak effectively before any size group. Learn powerful communication skills you can hit the ground running with immediately!",
    },
    {
      icon: "trend" as const,
      title: "Sharpen Skills",
      text: "In challenging economies, it is very important for companies to provide training that will sharpen the skills of their managers and sales executives. “Outperform your competitors!”",
    },
    {
      icon: "video" as const,
      title: "Individual Coaching",
      text: "Our workshops feature a small group format, constructive interaction with other participants, individual coaching from workshop leaders and video feedback.",
    },
    {
      icon: "users" as const,
      title: "Communicate Better",
      text: "A major portion of one's effectiveness lies in their ability to inform, influence, persuade and motivate. You must be highly skillful in face-to-face communication, making presentations and speaking in public.",
    },
  ],
};

export const betterApproach = {
  heading: "A Better Approach",
  text: "At Davis Executive Training, our workshops feature a small group format, constructive interaction with other participants, individual coaching from workshop leaders and video feedback.",
  cta: { label: "Sign Up For Workshops", href: "/contact" },
};

export const goodCompany = {
  heading: "You're in Good Company",
  intro:
    "Here is a partial listing of companies and organizations whose executives, managers, and sales people have benefited from the practical training taught in our workshops:",
  clients: [
    "American Express",
    "Radiator Specialty Co.",
    "Ducks Unlimited",
    "IBM",
    "AT&T",
    "Apple, Inc.",
    "Hertz Corp.",
    "General Electric",
    "Merrill Lynch",
    "Boise Cascade Corp.",
    "AXA / Equitable",
    "Jaycees",
    "Raymond James",
    "Southern Bell",
    "Wachovia",
    "Dow Chemical",
    "Motorola",
    "A.G. Edwards",
    "UBS Securities",
    "Delta Airlines",
    "Sperry",
    "Pacific Life",
    "Church of the Highlands",
    "U.S. Postal Service",
    "Protective Life",
    "Sun America",
    "International Paper",
    "Smith Barney",
    "AmSouth",
    "Bank One",
    "Pro Equities",
    "First Protective",
    "Royal Cup Coffee",
  ],
};

export const testimonialSection = {
  heading: "Testimonials",
  intro: "Read how our participants transformed their speaking and sales confidence.",
};

export const testimonials = [
  {
    quote:
      "I have been attending corporate seminars arranged by AT&T for about 10 years now, and none were more exciting than or as mentally stimulating as yours. In selling my product, I have to communicate concisely in face-to-face sales contacts every day. It is important that I make each phrase count. I found the ideas and techniques both enlightening and on target. It raised my confidence level and made selling a little bit more fun.",
    name: "Martin Sondey",
    role: "AT&T",
  },
  {
    quote:
      "Moe, I want to express to you what a pleasure it was taking your workshop on presentation skills. I was surprised to learn the many fine points involved in conducting seminars. I feel much more confident in my ability to increase business through seminars and speaking opportunities.",
    name: "William Stanton",
    role: "Financial Planner – Atlanta, GA",
  },
  {
    quote:
      "Your workshops have proven to be instrumental in helping me deliver presentations with confidence and poise. After implementing your techniques, presentations have become fun. This workshop helped me become a better representative of the U.S. Postal Service.",
    name: "Elaine W. Conner",
    role: "Postmaster – United Postal Service",
  },
  {
    quote:
      "The video replay aspect of your program places it above any communicative skills workshop I have taken or looked into. I am a much more confident speaker now that I have taken the course.",
    name: "Jacques Aebli III",
    role: "Planned Management Corporation",
  },
];

export const mission = {
  eyebrow: "Mission Statement",
  statement:
    "To provide effective face-to-face communications training that will give you the same advantages top executives have known for years.",
  support:
    "Elevate your presentation impact, manage executive presence, and sharpen sales conversions with customized coaching.",
  cta: { label: "Get Started With DET Today", href: "/contact" },
};

// ---------------------------------------------------------------------------
// Training (overview hub)
//
// Copy on this page follows davisexecutivetraining.com, which is the
// authoritative source for wording.
// ---------------------------------------------------------------------------

export const training = {
  hero: {
    eyebrow: "Davis Executive Training Programs",
    title: "Davis Executive Training Courses",
    subtitle:
      "At DET we provide training programs developed for Executives in all areas of business and programs targeted for the financial services industry.",
  },
  heading: "Practical Communication Workshops",
  paragraphs: [
    "A major portion of one's effectiveness lies in their ability to inform, influence, persuade and motivate. You must be highly skillful in face to face communication, making presentations and speaking in public.",
    "Our workshops feature a small group format, constructive interaction with other participants, individual coaching from workshop leaders and video feedback.",
  ],
  // The two program families the live site organizes training around.
  tracks: [
    {
      icon: "briefcase" as const,
      title: "Executive Training",
      text: "We're proud to offer three areas of training for business executives. We have a program that will fit your needs.",
      href: "/executive-training",
    },
    {
      icon: "dollar" as const,
      title: "Financial Services Training",
      text: "Wholesaler Commando Training. These workshops are specifically designed for financial wholesalers. Planners, Brokers and Agents must make presentations that motivate clients and prospects.",
      href: "/financial-services",
    },
  ],
  pillars: [
    {
      icon: "mic" as const,
      title: "Control Anxiety and Inhibition",
      text: "We teach techniques to control anxiety. You will speak effectively before any size group, with skills you can hit the ground running with immediately.",
    },
    {
      icon: "video" as const,
      title: "Video Feedback",
      text: "Talks are video recorded and played back, so you learn from seeing yourself on replay alongside individual coaching from the instructor.",
    },
    {
      icon: "chat" as const,
      title: "Question and Answer Sessions",
      text: "Learn to conduct and control question and answer sessions, and to heighten interest whenever you speak.",
    },
    {
      icon: "target" as const,
      title: "Sell Yourself and Your Ideas",
      text: "Improve job performance and production by learning to inform, influence, persuade and motivate in face to face communication.",
    },
  ],
  gainsHeading: "Benefits From Our Training Include",
  // Verbatim benefits list from the live Executive Training page.
  gains: [
    "Sell yourself and your ideas",
    "Speak effectively before any size group",
    "Improve job performance and production",
    "Control anxiety and inhibition",
    "Avoid death by PowerPoint",
    "Heighten interest when you speak",
    "Conduct and control question and answer sessions",
  ],
  specs: {
    heading: "Workshop Specifications",
    items: [
      {
        icon: "users" as const,
        title: "Format",
        text: "Small group format with constructive interaction between participants. Custom in-house workshops are limited to a maximum of 12 participants; open enrollment workshops run 5-12.",
      },
      {
        icon: "clock" as const,
        title: "Seminar Length",
        text: "The seminar format runs 1-3 hours. Workshops are scheduled to suit your organization.",
      },
      {
        icon: "video" as const,
        title: "Interactive Element",
        text: "Participants give four short talks. Two are video recorded and played back for group critique and individual coaching.",
      },
    ],
    cta: { label: "Contact Us To Learn More", href: "/contact" },
  },
  inHouse: {
    heading: "Custom In-House Workshops",
    text: "This customized in-house participatory workshop is available on-site and can be tailored to the needs of your organization and the skill level of your team.",
    cta: { label: "Inquire for Team Training", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Executive Training
//
// The three program descriptions below are verbatim from
// davisexecutivetraining.com/executive-training/.
// ---------------------------------------------------------------------------

export const executiveTraining = {
  hero: {
    eyebrow: "Executive Training Options",
    title: "Executive Level Training & Presence",
    subtitle:
      "At Davis Executive Training, we provide three options to take advantage of this life changing education.",
  },
  badge: "Executive Edge",
  heading: "The Distinguishing Characteristic of Fast-Track Performers",
  paragraphs: [
    "The ability to think on one's feet is perhaps the major distinguishing characteristic of fast-track performers in today's competitive, communication conscious environment!",
    "A major portion of one's effectiveness lies in their ability to inform, influence, persuade and motivate. You must be highly skillful in face to face communication, making presentations and speaking in public.",
  ],
  outcomes: {
    heading: "Benefits From Our Training",
    items: [
      "Sell yourself and your ideas",
      "Speak effectively before any size group",
      "Improve job performance and production",
      "Control anxiety and inhibition",
      "Avoid death by PowerPoint",
      "Heighten interest when you speak",
      "Conduct and control question and answer sessions",
    ],
    cta: { label: "Contact Us To Learn More", href: "/contact" },
  },
  modulesHeading: "Three Ways To Train With DET",
  modules: [
    {
      title: "Seminar",
      subtitle: "How To Deliver Effective Presentations",
      paragraphs: [
        "This 1-3 hour seminar is structured to concentrate on the physical skills required to make professional presentations.",
        "The seminar teaches skills that can be put into use immediately! It is fun, entertaining, fast paced and very informative. 6 to 12 volunteers are selected from the audience to participate.",
        "It is beneficial for managers, trainers, employees and sales people. This would be a perfect session for attendees of a corporate conference. It would be unique as a break-out session at a big conference. This session can also be delivered as an informative speech without audience participation.",
      ],
    },
    {
      title: "Custom Workshop",
      subtitle: "The Art Of Making Powerful Effective Presentations",
      paragraphs: [
        "The workshop teaches the physical skills required to make professional presentations.",
        "Audience size: This “customized” in-house participatory workshop is limited to a maximum of 12 participants.",
      ],
    },
    {
      title: "Open Enrollment",
      subtitle: "The Art Of Making Powerful Effective Presentations",
      paragraphs: [
        "Open enrollment workshops are open to participants from different companies and organizations. Participant size: 5-12 participants.",
        "During this workshop, all participants give four short talks. Two of the talks are video recorded and played back. Participants learn from critiques by the group, seeing themselves on video replay and individual coaching from the instructor.",
        "The workshop is ideal for executives, management and sales personnel that are required to make important presentations, speeches and talks.",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Financial Services
//
// Copy verbatim from davisexecutivetraining.com/financial-services/.
// ---------------------------------------------------------------------------

export const financialServices = {
  hero: {
    eyebrow: "Specialized Industry Training",
    title: "Financial Services Training",
    subtitle:
      "Communication and presentation skills training for planners, brokers, agents and wholesalers.",
  },
  badge: "Planners · Brokers · Agents",
  heading: "Communication Skills For Financial Sales Professionals",
  pullQuote: {
    quote:
      "Never before in the history of the financial services industry has the ability to communicate confidently and effectively been more important. Whether talking to clients and prospects one on one or in groups, this is the time and opportunity to establish yourself as a consummate professional!",
    attribution: null,
  },
  paragraphs: [
    "No industry has a greater requirement to be professional, proficient and effective in face to face communications than financial services sales professionals! Every day, planners, brokers and agents conduct meetings with clients and prospects one on one or in groups. They must make presentations that motivate clients and prospects to take action and implement suitable financial solutions to meet personal goals and objectives.",
    "This curriculum was built by DET co-founder Moe Davis, a 25 year veteran of the securities and insurance industries who began his career as a financial consultant with Merrill Lynch. Workshops are led today by Nancy Davis, using the program he developed.",
  ],
  outcomes: {
    heading: "You Will Learn How To",
    items: [
      "Speak effectively before any size group",
      "Be perceived as a total professional",
      "Sell yourself and your ideas",
      "Improve job performance and increase production",
      "Control anxiety and inhibition",
      "Conduct and control question and answer sessions",
    ],
    cta: { label: "Contact Us To Learn More", href: "/contact" },
  },
  wholesaler: {
    eyebrow: "Financial Industry – Wholesaler",
    heading: "Wholesaler Commando Training",
    quote:
      "Highly successful financial wholesalers represent a variety of styles and personality types. The one thing they have in common is the ability to deliver powerful compelling presentations every day! They make presentations that motivate brokers, planners and agents to take action, understand how the investment products work, where they are a suitable fit, and present them with confidence and conviction to clients and prospects.",
    quoteAttribution: "Moe Davis",
    paragraphs: [
      "Most wholesaling organizations recognize the need for training. In many cases however the training is too generic, too time consuming, too expensive and less effective than advertised.",
      "Davis Executive Training offers an alternative: Wholesaler Commando Training. These workshops are specifically designed for financial wholesalers. They are available anywhere on-site and can be customized to meet the needs of your organization and the skill level of your wholesaling team.",
    ],
    listHeading: "Workshops include:",
    list: [
      "Training modules that teach specific presentation skills wholesalers need",
      "How to avoid “Death by PowerPoint”",
      "Small group format",
      "Individual coaching",
      "Video feedback",
    ],
    closing:
      "These workshops teach skills your wholesalers can hit the ground running with the next day and every day! The program was developed by DET co-founder Moe Davis over a 25 year career in the financial services industry, and is delivered today by Nancy Davis.",
  },
  institutions: {
    heading: "Financial Institutions Trained By DET",
    intro:
      "Advisors and executive leadership from these financial organizations have benefited from the practical training taught in our workshops:",
    items: [
      "Merrill Lynch",
      "American Express",
      "AXA / Equitable",
      "Raymond James",
      "Wachovia",
      "A.G. Edwards",
      "UBS Securities",
      "Pacific Life",
      "Protective Life",
      "Sun America",
      "Smith Barney",
      "AmSouth",
      "Bank One",
      "Pro Equities",
      "First Protective",
    ],
  },
};

// ---------------------------------------------------------------------------
// About
//
// Founder bios follow davisexecutivetraining.com/about-us/.
// ---------------------------------------------------------------------------

export const about = {
  hero: {
    eyebrow: "About Davis Executive Training",
    title: "Helping Your Business Build Success",
    subtitle:
      "Develop your path to greatness with face to face communications training built on decades of executive and financial services experience.",
  },
  badge: "Proven Legacy",
  heading: "Giving You The Edge Top Executives Have Known For Years",
  paragraphs: [
    "Davis Executive Training provides effective face to face communications training for executives, managers and sales professionals. Our workshops feature a small group format, constructive interaction with other participants, individual coaching from workshop leaders and video feedback.",
    "In challenging economies, it is very important for companies to provide training that will sharpen the skills of their managers and sales executives, so they can outperform their competitors.",
  ],
  cta: { label: "Contact Us Today To Learn More", href: "/contact" },
  missionCard: {
    heading: "Our Mission",
    quote:
      "To provide effective face to face communications training that will give you the same advantages top executives have known for years.",
    stats: [
      { label: "Small Group Format", detail: "Maximized practice & feedback" },
      { label: "Video Feedback", detail: "Visual performance review" },
    ],
  },
  peopleHeading: "The People Behind DET",
  people: [
    {
      name: "Nancy B. Davis",
      role: "Founder, Davis Executive Training",
      quote: null,
      memorial: false,
      paragraphs: [
        "Nancy established Davis Executive Training in 1988 and has built recognition as a charismatic and results-oriented trainer, coach and guest speaker specializing in executive communication and sales training. She leads the company today.",
        "Responding to repeated client requests for earlier access to such instruction, she launched youth-focused training in 1996, creating programming that strengthens public speaking and listening through direct communication practice.",
      ],
    },
    {
      name: "Eugene Moor “Moe” Davis",
      role: "Co-founder · 1946 — 2026",
      quote:
        "Experience has convinced me that people who learn to communicate better automatically do a better job of managing and selling.",
      // Renders the "In Memoriam" link at the foot of this card.
      memorial: true,
      paragraphs: [
        "Moe co-founded Davis Executive Training with Nancy and brought an unusually wide business background to the training room — construction, music management, and a long career in securities and insurance that began as a financial consultant with Merrill Lynch.",
        "He designed the company's wholesaler and financial-services curriculum and led those workshops personally for many years. Moe passed away in July 2026.",
      ],
    },
  ],
  whyHeading: "Why Executive Teams Choose DET",
  why: [
    {
      icon: "users" as const,
      title: "Small Group Format",
      text: "Our workshops feature a small group format and constructive interaction with other participants, so everyone presents and receives feedback.",
    },
    {
      icon: "book" as const,
      title: "Skills You Can Use Immediately",
      text: "Learn powerful communication skills you can hit the ground running with immediately, not abstract theory.",
    },
    {
      icon: "building" as const,
      title: "Trusted By Leading Organizations",
      text: "Executives, managers and sales people from American Express, IBM, AT&T, Apple, General Electric, Merrill Lynch and the U.S. Postal Service have trained with DET.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  hero: {
    eyebrow: "Connect With Davis Executive Training",
    title: "Contact Us Today To Learn More",
    subtitle:
      "Schedule an executive training workshop for your team or inquire about upcoming open-enrollment seminar dates.",
  },
  form: {
    heading: "Workshop Inquiry Form",
    intro:
      "Please fill out the form below and a DET training coordinator will contact you promptly.",
    submit: "Submit Inquiry",
    programs: [
      "Executive Training Workshop",
      "Seminar – How To Deliver Effective Presentations",
      "Custom Workshop – The Art Of Making Powerful Effective Presentations",
      "Open Enrollment – The Art Of Making Powerful Effective Presentations",
      "Financial Services – Wholesaler Commando Training",
      "Planners, Brokers & Agents",
      "No Program Yet",
    ],
  },
  hqHeading: "Corporate Headquarters",
  guarantee: {
    heading: "Quick Response Guarantee",
    text: "We respond to all corporate training inquiries within 24 business hours to help you coordinate schedules and syllabus options.",
  },
};

// ---------------------------------------------------------------------------
// In Memoriam — Eugene Moor "Moe" Davis
//
// Written from the obituary his family published on Legacy.com, in our own
// words rather than reproduced from it. Nancy should review and reword freely;
// this is her page more than anyone's.
//
// Deliberately omitted: the obituary's passage about his sobriety and his AA
// sponsorship. It belongs to the family to place, not to a business site.
// If they want it here, add it as a paragraph in `life.paragraphs`.
// ---------------------------------------------------------------------------

export const memorial = {
  href: "/in-memoriam",
  navLabel: "In Memoriam",
  eyebrow: "In Memoriam",
  name: "Eugene Moor “Moe” Davis",
  shortName: "Moe Davis",
  dates: "June 16, 1946 — July 11, 2026",
  role: "Co-founder, Davis Executive Training",

  intro:
    "Moe Davis spent his working life convincing people they were more persuasive than they believed. He co-founded Davis Executive Training with his wife, Nancy, and for decades he stood at the front of rooms full of executives, wholesalers and sales teams and taught them how to be heard.",

  // His own words, as they have long appeared on the company's About page.
  quote:
    "Experience has convinced me that people who learn to communicate better automatically do a better job of managing and selling.",

  life: {
    heading: "A Life In Many Chapters",
    paragraphs: [
      "Moe was born on June 16, 1946 in Jacksonville, Florida, to Ruth and George Davis. He lived in Tallahassee and in Davidson, North Carolina, before settling in Birmingham, Alabama. He graduated from Florida State University and stayed a Seminoles fan for the rest of his life. He served in the Army Reserves during the Vietnam War.",
      "His career refused to sit still. He worked in construction with Daniel Construction and in the motor oil business with Quaker State. He founded Panacea Talent Management and spent a stretch of his life managing rock bands. He moved into finance at Merrill Lynch, became a National Sales Director at Protective Life, and later specialized in brokering life insurance settlements. Through much of it, he and Nancy ran Davis Executive Training together.",
      "That range is exactly what made him good in a training room. He had sold in enough different rooms — job sites, studios, boardrooms — to know what actually works when you are standing in front of people who have somewhere else to be.",
    ],
  },

  personal: {
    heading: "Away From The Podium",
    paragraphs: [
      "Music never left him. He loved classic rock and played guitar. He cooked, and he fed people. He kept his friendships going for decades — the kind where people actually stay in touch.",
    ],
  },

  survivors: {
    heading: "Survived By",
    items: [
      { name: "Nancy Davis", detail: "his wife — 47 years together, 40 of them married" },
      { name: "Emily Hetland and her husband, Leif Hetland", detail: "his daughter" },
      { name: "Will Davis and his wife, Anna Grace Tribble", detail: "his son" },
    ],
  },

  wishes: {
    heading: "The Family's Wishes",
    text: "At Moe's request there was no funeral and no celebration of life. His family asks that friends and colleagues simply remember him as he lived.",
  },

  continuity:
    "Davis Executive Training continues under Nancy Davis, who founded the company in 1988.",

  source: {
    text: "This remembrance draws on the obituary published by his family.",
    label: "Read the full obituary",
    href: "https://www.legacy.com/legacy/eugene-davis",
  },
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  badge: "Proven Corporate Methodologies",
  quickLinksHeading: "Quick Links",
  quickLinks: [
    { label: "Home (DET)", href: "/" },
    { label: "Training Programs", href: "/training" },
    { label: "Executive Training", href: "/executive-training" },
    { label: "Financial Services Focus", href: "/financial-services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "In Memoriam", href: "/in-memoriam" },
  ],
  trustedHeading: "Trusted By Leaders",
  trustedIntro: "Executives & sales teams from premier organizations rely on DET:",
  trusted: [
    "AT&T",
    "Apple, Inc.",
    "Hertz Corp.",
    "Merrill Lynch",
    "Dow Chemical",
    "IBM",
    "American Express",
    "General Electric",
    "Wachovia",
    "U.S. Postal Service",
  ],
  touchHeading: "Get In Touch",
  cta: { label: "Inquire For Your Team", href: "/contact" },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Special Thanks & Attribution", href: "/special-thanks" },
  ],
};

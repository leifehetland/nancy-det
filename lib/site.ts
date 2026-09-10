// ---------------------------------------------------------------------------
// Davis Executive Training — single source of truth for all site copy.
//
// The site is a one-page brochure. Every section below maps to one block of
// app/page.tsx, in order. The memorial at /in-memoriam is the only other page.
//
// Copy follows davisexecutivetraining.com where it still applies, revised per
// Nancy's notes (Sept 2026). Removed in that pass, deliberately:
//   - Financial services training, in full. Her license is not being renewed
//     and the CEU credits have lapsed.
//   - Open enrollment workshops. Not offered.
//   - The phrase "video feedback", replaced throughout by private session
//     recordings, which is what it actually is.
// ---------------------------------------------------------------------------

// Contact details.
//
// VERIFY BEFORE LAUNCH. The email is confirmed. The values still marked `null`
// were fabricated by the original design reference and were removed rather than
// shipped. Everything that renders them is conditional, so the site omits those
// lines instead of printing a placeholder.
export const site = {
  name: "Davis Executive Training",
  shortName: "DET",
  tagline: "Improve Job Performance",
  subTagline: "Public Speaking & Leadership Mastery",

  // TODO: real number. Was "(800) 555-DET1" — a fabricated 555 number.
  phone: null as string | null,
  phoneHref: null as string | null,

  email: "nancy@nancydavisexecutivetraining.com" as string | null,
  emailHref: "mailto:nancy@nancydavisexecutivetraining.com" as string | null,

  // TODO: confirm what Nancy wants published, if anything. An unclaimed Manta
  // listing suggests a Vestavia Hills, AL address, but it looks residential —
  // do not publish without her explicit say-so.
  locations: null as string | null,
  hq: null as string | null,
  hours: null as string | null,

  description:
    "Davis Executive Training helps executives, managers, sales professionals and students speak with clarity, confidence and presence.",
};

/** Anchor targets on the one-page site. Order matches the page. */
export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Students", href: "#students" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "Executive Communication & Presentation Training",
  // Headline echoes the Nancy quote (intentions vs. perception) in six words.
  // The quote itself now lives in the band below — see `quoteBand`.
  // Alternates, if Nancy prefers: "Say it so it lands." or the original
  // "Build Success. Manage Better. Sell More."
  heading: "Be perceived the way you intend.",
  intro:
    "The ability to think on one's feet is perhaps the major distinguishing characteristic of fast-track performers in today's competitive, communication conscious environment.",
  primaryCta: { label: "Start a Conversation", href: "#contact" },
  secondaryCta: { label: "See the Programs", href: "#programs" },
  // Drop an /images/... path or an images.unsplash.com URL here to fill the
  // slot. Stock photography is fine for this one — it is a generic scene.
  image: null as string | null,
  imageAlt: "A speaker addressing a small group of professionals",
  // Small navy credential strip under the hero.
  facts: [
    { value: "1988", label: "Training since" },
    { value: "12", label: "Maximum group size" },
    { value: "On-site", label: "At your offices, anywhere" },
  ],
};

/**
 * Full-width navy pull-quote between the hero and the Approach section.
 * Moved out of the hero: it is the premise the training rests on, which reads
 * far better as the lead-in to "how we work" than as the first thing a
 * stranger sees.
 */
export const quoteBand = {
  quote:
    "We judge ourselves by our intentions, do we not? We judge others by their actions! What we see and what we hear is all we have to go on. It is what determines how we are perceived!",
  attribution: "Nancy Davis",
  attributionRole: "Founder, Davis Executive Training",
};

// ---------------------------------------------------------------------------
// 2. Approach
// ---------------------------------------------------------------------------

export const approach = {
  eyebrow: "The Approach",
  heading: "Small groups. Real practice. Skills you use the next day.",
  intro:
    "A major portion of your effectiveness lies in your ability to inform, influence, persuade and motivate. That is a set of skills, and skills can be taught.",
  items: [
    {
      icon: "users" as const,
      title: "Small Group Format",
      text: "Groups stay small enough that everyone stands up, presents more than once, and gets constructive feedback in the room. It is not a lecture you sit through.",
    },
    {
      icon: "mic" as const,
      title: "Control Over Anxiety",
      text: "Techniques to manage nerves and inhibition, so you can speak effectively in front of any size group without dreading it beforehand.",
    },
    {
      icon: "video" as const,
      // Nancy's note: "video feedback" was dated. This is what it really is.
      title: "Private Session Recordings",
      text: "Your sessions are recorded and kept private to you. Review them whenever you like, and bring back what you notice for another round of coaching and insight.",
    },
    {
      icon: "chat" as const,
      title: "Thinking On Your Feet",
      text: "Handle questions, objections and the unscripted moment with composure, including how to run and control a Q&A rather than survive it.",
    },
  ],
};

export const outcomes = {
  heading: "What you walk away with",
  items: [
    "Sell yourself and your ideas",
    "Speak effectively before any size group",
    "Improve job performance and production",
    "Control anxiety and inhibition",
    "Avoid death by PowerPoint",
    "Heighten interest when you speak",
    "Conduct and control question and answer sessions",
  ],
};

// ---------------------------------------------------------------------------
// 3. Programs
//
// In-house workshops and 1:1 coaching lead, per Nancy. Open enrollment is gone.
// ---------------------------------------------------------------------------

export const programs = {
  eyebrow: "Programs",
  heading: "Three ways to work together",
  intro:
    "Every program is built around your people and the rooms they actually present in.",
  items: [
    {
      icon: "building" as const,
      title: "In-House Workshops",
      lead: "Our most requested format.",
      text: "A customized, participatory workshop delivered on-site at your organization, limited to a maximum of 12 participants. The content is shaped around your industry, your material and the skill level of your team.",
      points: [
        "On-site, anywhere",
        "Maximum 12 participants",
        "Built around your team's real presentations",
      ],
      featured: true,
    },
    {
      icon: "target" as const,
      title: "One-on-One Coaching",
      lead: "Private, focused, and entirely yours.",
      text: "Individual coaching for a specific person and a specific goal: a keynote, a board presentation, an investor meeting, or simply becoming the person who speaks up well. Sessions are recorded privately for your own review.",
      points: [
        "Fully private sessions",
        "Built around one upcoming moment, or ongoing",
        "Recordings kept for you to revisit",
      ],
      featured: true,
    },
    {
      icon: "award" as const,
      title: "Seminars",
      lead: "How To Deliver Effective Presentations.",
      text: "A one to three hour seminar concentrating on the physical skills required to make professional presentations. Fun, entertaining, fast paced and informative, with volunteers selected from the audience to take part. It works as a conference break-out session, or as a talk without audience participation.",
      points: [
        "1–3 hours",
        "Ideal as a conference break-out session",
        "Audience participation optional",
      ],
      featured: false,
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Students & Schools
// ---------------------------------------------------------------------------

export const students = {
  eyebrow: "Students & Schools",
  heading: "The earlier you learn it, the further it carries you",
  paragraphs: [
    "In 1996, after years of clients asking whether their children could learn the same skills, Nancy began building communication training for young people, programming that strengthens public speaking and listening through direct, hands-on practice.",
    "Since then DET has run programs for elementary schools, middle and high schools, and at the college level. It is some of the most rewarding work we do, and we are actively looking to do more of it.",
  ],
  levels: [
    {
      title: "Elementary",
      text: "Early confidence in front of a group, listening skills, and the habit of speaking up.",
    },
    {
      title: "Middle & High School",
      text: "Presentations, class speeches, interviews and the poise to handle being watched.",
    },
    {
      title: "College",
      text: "Interview performance, thesis and capstone presentations, and the professional presence that gets graduates hired.",
    },
  ],
  cta: { label: "Talk to us about your school", href: "#contact" },
};

// ---------------------------------------------------------------------------
// 5. Ducks Unlimited partnership
//
// NAME ONLY — no logo, wordmark or brand asset. Using their trademark needs
// written permission from Ducks Unlimited. If Nancy obtains it, a logo can be
// added here; until then this section stays typographic.
// ---------------------------------------------------------------------------

export const partner = {
  eyebrow: "Long-Standing Partner",
  name: "Ducks Unlimited",
  heading: "A partnership measured in decades",
  text: "Ducks Unlimited has been a DET partner for many years, one of the longest-running relationships in the company's history. Training volunteer leaders and staff to speak persuasively for a cause they believe in is exactly the work this company was built to do.",
};

// ---------------------------------------------------------------------------
// 6. Proof — clients and testimonials
// ---------------------------------------------------------------------------

export const clients = {
  eyebrow: "You're In Good Company",
  heading: "Organizations whose people have trained with DET",
  intro:
    "A partial listing of the companies and organizations whose executives, managers and sales people have benefited from the practical training taught in our workshops.",
  items: [
    "American Express",
    "IBM",
    "AT&T",
    "Apple, Inc.",
    "Ducks Unlimited",
    "General Electric",
    "Merrill Lynch",
    "Hertz Corp.",
    "Delta Airlines",
    "Motorola",
    "Dow Chemical",
    "U.S. Postal Service",
    "Wachovia",
    "International Paper",
    "Boise Cascade Corp.",
    "Radiator Specialty Co.",
    "Southern Bell",
    "Church of the Highlands",
    "Royal Cup Coffee",
    "Jaycees",
  ],
};

export const testimonialSection = {
  eyebrow: "Testimonials",
  heading: "What participants say",
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
  {
    quote:
      "I want to express to you what a pleasure it was taking your workshop on presentation skills. I was surprised to learn the many fine points involved in conducting seminars. I feel much more confident in my ability to increase business through seminars and speaking opportunities.",
    name: "William Stanton",
    role: "Financial Planner – Atlanta, GA",
  },
];

// ---------------------------------------------------------------------------
// 7. About Nancy
//
// Nancy leads. Moe is acknowledged briefly and linked to the memorial page.
// ---------------------------------------------------------------------------

export const about = {
  eyebrow: "About",
  heading: "Nancy Davis",
  role: "Founder, Davis Executive Training",
  paragraphs: [
    "Nancy founded Davis Executive Training in 1988 and has spent the decades since as a charismatic, results-oriented trainer, coach and speaker specializing in executive communication and sales training.",
    "She has trained managers, sales directors and senior executives at Fortune 500 companies, and built the company's programs for students and schools. She leads and delivers every DET program today.",
  ],
  mission: {
    label: "Our Mission",
    quote:
      "To provide effective face to face communications training that will give you the same advantages top executives have known for years.",
  },
  cta: { label: "Work with Nancy", href: "#contact" },
  // MUST be a real photograph of Nancy. Do NOT put stock photography here —
  // a stock portrait labelled with a real person's name misrepresents her.
  // Leave it null until she supplies a photo; the slot degrades gracefully.
  image: null as string | null,
  imageAlt: "Nancy Davis",
  moe: {
    heading: "Remembering Moe",
    text: "Nancy's late husband and DET co-founder, Eugene Moor “Moe” Davis, helped build this company and its methods over nearly four decades. He passed away in July 2026.",
    linkLabel: "In Memoriam",
  },
};

// ---------------------------------------------------------------------------
// 8. Contact
// ---------------------------------------------------------------------------

export const contact = {
  eyebrow: "Contact",
  heading: "Tell us what you want to change",
  intro:
    "Whether it is a team, one person, or a school, send a note and Nancy will get back to you.",
  form: {
    submit: "Send Inquiry",
    programs: [
      "In-House Workshop",
      "One-on-One Coaching",
      "Seminar",
      "School or Student Program",
      "Not sure yet",
    ],
  },
  guarantee: {
    heading: "What Happens Next",
    text: "Tell us about your group and what you want the training to fix. We will follow up to talk through size, format and scheduling.",
  },
};

// ---------------------------------------------------------------------------
// In Memoriam — Eugene Moor "Moe" Davis (separate page at /in-memoriam)
//
// Written from the obituary his family published on Legacy.com, in our own
// words rather than reproduced from it.
//
// Deliberately omitted: the obituary's passage about his sobriety and his AA
// sponsorship. It belongs to the family to place, not to a business site.
// ---------------------------------------------------------------------------

export const memorial = {
  href: "/in-memoriam",
  navLabel: "In Memoriam",
  eyebrow: "In Memoriam",
  name: "Eugene Moor “Moe” Davis",
  shortName: "Moe Davis",
  dates: "June 16, 1946 – July 11, 2026",
  role: "Co-founder, Davis Executive Training",

  intro:
    "Moe Davis spent his working life convincing people they were more persuasive than they believed. He co-founded Davis Executive Training with his wife, Nancy, and for decades he stood at the front of rooms full of executives and sales teams and taught them how to be heard.",

  quote:
    "Experience has convinced me that people who learn to communicate better automatically do a better job of managing and selling.",

  life: {
    heading: "A Life In Many Chapters",
    paragraphs: [
      "Moe was born on June 16, 1946 in Jacksonville, Florida, to Ruth and George Davis. He lived in Tallahassee and in Davidson, North Carolina, before settling in Birmingham, Alabama. He graduated from Florida State University and stayed a Seminoles fan for the rest of his life. He served in the Army Reserves during the Vietnam War.",
      "His career refused to sit still. He worked in construction with Daniel Construction and in the motor oil business with Quaker State. He founded Panacea Talent Management and spent a stretch of his life managing rock bands. He moved into finance at Merrill Lynch, became a National Sales Director at Protective Life, and later specialized in brokering life insurance settlements. Through much of it, he and Nancy ran Davis Executive Training together.",
      "That range is exactly what made him good in a training room. He had sold in enough different rooms, from job sites to studios to boardrooms, to know what actually works when you are standing in front of people who have somewhere else to be.",
    ],
  },

  personal: {
    heading: "Away From The Podium",
    paragraphs: [
      "Music never left him. He loved classic rock and played guitar. He cooked, and he fed people. He kept his friendships going for decades, the kind where people actually stay in touch.",
    ],
  },

  survivors: {
    heading: "Survived By",
    items: [
      { name: "Nancy Davis", detail: "his wife, 47 years together and 40 of them married" },
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
  links: nav,
  touchHeading: "Get In Touch",
  legal: [{ label: "Privacy Policy", href: "/privacy-policy" }],
};

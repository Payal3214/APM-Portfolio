/* ============================================================
   PAYAL'S PORTFOLIO — CONTENT FILE
   ============================================================
   This is the ONLY file you should ever need to open to update
   your portfolio: add a case study, tweak your bio, add a job,
   change a link, etc.

   Rules to avoid breaking anything:
   - Every piece of text goes inside straight double quotes " "
   - Every item in a list [ ... ] needs a comma after it,
     EXCEPT the very last item.
   - Don't delete any curly braces { } or square brackets [ ]
     — only edit the text inside them.
   - After saving, just refresh index.html in your browser to
     see the change. No build step, no install, nothing to run.
   ============================================================ */

const PORTFOLIO_DATA = {

  profile: {
    name: "Payal Priyadarshini",
    tagline: "Associate Product Manager — turning user research and behavioral data into product decisions, specs, and validation plans.",
    email: "payal32140@gmail.com",
    phone: "+91-6372961223",
    github: "https://github.com/Payal3214?tab=repositories",
    location: "Bengaluru, India"
  },

  matchScore: 98,

  genres: ["Product Strategy", "User Research", "Product Analytics", "Prioritization", "0→1 Thinking", "PRDs"],

  // Add a new case study by copying one block below.
  caseStudies: [
    {
      episode: "S1:E1",
      title: "Why Users Leave Groww Before Investing"
      subtitle: "Groww — Product Case Study",
      tags: ["User Research", "0→1"],
      stats: [
        { label: "Interviews", value: "5" },
        { label: "Left app to research", value: "2/5" }
      ],
      description: "5 structured user interviews uncovered that investment hesitation came from an interpretation gap, not missing information. Designed a rule-based decision-support layer that translates existing risk/return/portfolio data into a plain-language verdict at the point of comparison, with a moderated usability test and A/B plan to validate impact on decision-to-invest conversion.",
      decision: "Build a rule-based decision-support layer that translates existing investment data into a plain-language verdict at the moment of comparison.",
coverImage: "./assets/Grow.png",
coverPosition: "center center",
coverGradient: "linear-gradient(135deg, #7f1d1d, #1c0a0a)",
      links: [
        { label: "Read on Notion", url: "https://placid-tartan-24c.notion.site/GROWW_PM_PORTFOLIO-2ff01c0d796980ae8fdcc846553ac87b" }
      ]
    },
    {
      episode: "S1:E2",
      title: "Why 45% of Carts Drop Before Purchase",
      subtitle: "RetailRocket × Olist — Data Case Study",
      tags: ["Product Analytics", "SQL"],
      stats: [
        { label: "Orders sessionized", value: "400K+" },
        { label: "Cart drop-off", value: "45%" }
      ],
      description: "Sessionized 400K+ orders across two e-commerce datasets to trace the funnel from browse to return. Found delivery speed as a primary driver of returns, quantified a 45% cart drop-off and 14% COD cancellation rate, and separated checkout friction from post-purchase experience as two independently actionable problems against a 46% 30-day retention baseline.",
      decision: "Treat checkout friction and post-purchase experience as separate product problems, prioritizing delivery speed and checkout interventions based on their measurable impact.",
     coverImage: "./assets/Funnel%20analysis.png",
coverPosition: "center center",
coverGradient: "linear-gradient(135deg, #0f3d2e, #0a1c14)",
      links: [
        { label: "View on GitHub", url: "https://github.com/Payal3214?tab=repositories" }
      ]
    },
    {

  episode: "S1:E3",
  title: "Finding the Revenue Leak Across 262K Bookings",
  subtitle: "Pricing & Revenue Management — Case Study",
  tags: ["SQL", "RICE", "PRD"],

  stats: [
    { label: "Bookings analyzed", value: "262K+" },
    { label: "Fare-class spread", value: "3x" }
  ],

  description: "Analyzed 262K+ bookings and 33K+ flights across an 8-aircraft fleet to find which lever — pricing, fare-class mix, or overbooking — was costing the most revenue. Surfaced a 43–66% load-factor gap and a 3x fare-class pricing spread on identical aircraft, then translated the trade-offs into a RICE-prioritized 4-initiative roadmap and a scoped one-page PRD for an analyst-facing pricing dashboard.",
  decision: "Prioritize pricing and fare-class interventions before overbooking, using RICE to convert the revenue analysis into a four-initiative roadmap.",
coverImage: "./assets/Airline.png",
coverPosition: "center 35%",
coverGradient: "linear-gradient(135deg, #7c2d12, #1c0d05)",


  links: [
    {
      label: "Read on Notion",
      url: "https://placid-tartan-24c.notion.site/3be01c0d796980199312de36bc4b57ab?v=3be01c0d7969807ca578000cee087faa"
    }
  
      ]
    },
           
      {
      episode: "S1:E4",
      title: "Can a Local RAG System Answer Nykaa's Annual Report?",
      subtitle: "Retrieval-Augmented Generation — Applied AI Project",
      tags: ["LangChain", "RAG", "LLM"],
      stats: [
        { label: "Inference cost", value: "$0 (local)" },
        { label: "Embedding model", value: "MiniLM-L6-v2" }
      ],
      description: "Built a retrieval-augmented generation pipeline that answers natural-language questions over Nykaa's 2024–25 annual report — chunking and embedding the filing with free MiniLM sentence embeddings, storing vectors in ChromaDB, and grounding answers in a locally-run FLAN-T5 model so the whole stack runs offline with zero API cost. Built to test how a lightweight, self-hosted RAG stack holds up against long, structured financial documents — a pattern directly transferable to internal 'ask your PRD/data-room' tools.",
      decision: "Build a lightweight, locally hosted RAG pipeline to test whether structured retrieval can reliably answer questions over a long financial document without API costs.",
         coverImage: "./assets/Nykaa.png",
coverPosition: "center center",
coverGradient: "linear-gradient(135deg, #831843, #1a0e17)",
      links: [
        { label: "View on GitHub", url: "https://github.com/Payal3214/Nykaa-Annual-Report-RAG-Chatbot" }
      ]
    },

    {
      episode: "S1:E5",
      title: "WeWork: Finding the Product Problem Behind the Collapse",
      subtitle: "A retrospective product case study exploring what product and data could—and could not—have influenced in WeWork’s collapse.",
      tags: ["Problem Framing", "PRD", "Product Strategy", "Product Case Study"],
      stats: [
        { label: "Inference cost", value: "$0 (local)" },
        { label: "Embedding model", value: "MiniLM-L6-v2" }
      ],
      description: "Diagnosed WeWork's collapse as a combination of governance, business-model, and unit-economics failures, then identified the product-solvable gap and designed “WeWork Pulse,” a demand intelligence platform for risk-adjusted expansion decisions.",
      decision: "Focus the product opportunity on demand intelligence and risk-adjusted expansion rather than attempting to solve the underlying governance and business-model failures through product alone.",


      coverImage: "./assets/wework.png",
coverPosition: "center center",
coverGradient: "linear-gradient(135deg, #831843, #1a0e17)",

         
      links: [
        { label: "View on Notion", url: "https://placid-tartan-24c.notion.site/WEWORK-The-Product-Problem-Behind-the-Collapse-70001c0d79698296a4ff814d16a9127b" }
      ]
    }
  ],

  originStory: [
    "I come from a business family, so before I had a word for it, I already understood product: I grew up watching the products we sold, the problems they solved for people, and the outcomes that told us whether we were actually helping. Watching a solution turn into a benefit for someone else is where my interest in business — and the people around it — started.",
    "That curiosity now shows up as a habit. My favorite podcasts aren't entertainment; they're research: why a company holds back a launch, how a founder noticed a mass problem and built a company around solving it, how a SaaS model finds a small, painful problem and turns it profitable. Giving a solution and creating value from it is, honestly, in my blood.",
    "And I relate to data the way some people relate to stories — an outcome isn't a number to me, it's the ending of a decision someone made. That's the lens I bring to product: frame the real problem, follow the evidence, and ship something that measurably helps."
  ],

  listensTo: [
    "Why companies delay product launches",
    "How founders turn one mass problem into a company",
    "How SaaS models monetize small, painful problems"
  ],

  // Add a new role by copying one block below.
  experience: [
    {
      seasonLabel: "Season 2",
      period: "Jun 2025 – Dec 2025",
      role: "Data Science & Analytics Intern",
      company: "Gilbert Research Center",
      bullets: [
        "Coordinated end-to-end delivery of a 50,000+ record image dataset project, managing data preparation, validation, and QA timelines to meet critical deadlines in a high-stakes environment.",
        "Partnered with cross-functional teams to plan and track feature-extraction and validation workflows, improving on-time delivery and dependable data availability for downstream stakeholders."
      ]
    },
    {
      seasonLabel: "Season 1",
      period: "Nov 2024 – Feb 2025",
      role: "Data Analyst Intern",
      company: "Greda",
      bullets: [
        "Gathered and documented business requirements from content and product stakeholders, translating reporting needs into a structured project plan covering learner engagement, enrollment, and completion metrics.",
        "Led development and rollout of automated Power BI dashboards and SQL-based reporting, coordinating timelines across teams and improving stakeholder visibility into key metrics."
      ]
    }

    // --- copy from here to add a new season ---
    // {
    //   seasonLabel: "Season 3",
    //   period: "Mon Year – Mon Year",
    //   role: "Your Role",
    //   company: "Company Name",
    //   bullets: [ "What you did and the outcome." ]
    // },
  ],

  skillGroups: [
    { title: "Research & Strategy", skills: ["User interviews", "Problem framing", "Prioritization frameworks", "Opportunity mapping"] },
    { title: "Product Execution", skills: ["Figma", "User flow mapping", "PRDs", "A/B test design", "Feature specification"] },
    { title: "Analytics & Tools", skills: ["SQL", "Power BI", "Notion", "Google Sheets", "Machine Learning", "Gen AI"] }
  ],

  details: [
    { k: "Education", v: "B.Tech, Computer Science & Engineering", sub: "Gandhi Institute for Technological Advancement · 8.54 CGPA · Oct 2020 – Aug 2024" },
    { k: "Certification", v: "Google Professional Data Analytics Certificate", sub: "" },
    { k: "Genre", v: "Product Management, Growth & Analytics", sub: "" },
    { k: "Rated", v: "Ready for Associate PM roles", sub: "Data-literate · User-first · Trade-off driven" }
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/Payal3214?tab=repositories" },
    { label: "Email", url: "mailto:payal32140@gmail.com" },
    { label: "Call", url: "tel:+916372961223" }
  ]
};


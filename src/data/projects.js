export const projects = [
  // Selected work (used on the home page)
  {
    slug: "techflu",
    title: "Techflu",
    type: "Laptop rental marketplace",
    period: "Apr 2026 - May 2026",
    image: "/projects/image.png",
    role: "Full-Stack Developer",
    href: "https://dev.d133rniyo79rht.amplifyapp.com/",
    summary:
      "Built a full-stack laptop rental marketplace with three independently scoped flows: customer experience, operations/admin, and delivery partner workflow.",
    gallery: [],
    highlights: [
      "Customer flow: product discovery, checkout, secure payments, KYC verification, and real-time order tracking (dispatch → delivery).",
      "Super admin dashboard: product & inventory management, delivery partner creation/assignment, KYC approvals, cancellations, and live delivery tracking.",
      "Delivery partner app (mobile web): login, job acceptance, live location tracking, proof-of-delivery capture, and profile management.",
    ],
    stack: [
      "React",
      "Next.js (SSG/SSR)",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Digio (KYC)",
      "PhonePe + Razorpay",
      "WhatsApp Business API",
    ],
    impact:
      "Owned the end-to-end UI architecture across flows, focused on clear state handling (KYC, delivery states) and production-ready responsiveness.",
    caseStudy: {
      overview:
        "Techflu is a high-scale B2C laptop rental platform built around a multi-tenant workflow. I led development across three personas (customer, admin, delivery partner) and engineered the system to manage the full rental lifecycle—from lead capture and automated KYC to inventory accuracy and delivery completion.",
      media: [
        {
          src: "/projects/techflu/flow-portal.svg",
          alt: "Techflu flow - Customer portal",
          caption: "Customer portal: discovery → checkout → KYC → tracking",
        },
        {
          src: "/projects/techflu/flow-admin.svg",
          alt: "Techflu flow - Admin operations",
          caption: "Admin command center: inventory, KYC, orders, dispatch",
        },
        {
          src: "/projects/techflu/flow-delivery.svg",
          alt: "Techflu flow - Delivery partner",
          caption: "Delivery partner: accept job → verify → PoD → completion",
        },
      ],
      architecture: [
        "Customer portal (Next.js): SSR-backed catalog for fast discovery + SEO, leads-first OTP login to capture intent early.",
        "Admin logistics command center: real-time inventory visibility and order orchestration across multiple operational states.",
        "Delivery partner mobile web: lightweight interface for on-site verification, serial validation, and proof-of-delivery capture.",
      ],
      challenges: [
        {
          title: "State consistency across multi-persona workflows",
          problem:
            "With customers, admins, and delivery partners acting on the same inventory, preventing double-booking and race conditions was critical.",
          solution:
            "Implemented PostgreSQL transactions with row-level locking. During checkout, the SKU enters a controlled pending state until payment webhooks confirm success/failure, ensuring consistent inventory allocation.",
        },
        {
          title: "Conversion recovery for high-drop funnels",
          problem:
            "KYC and address steps increase drop-offs, risking lost intent even when users begin the journey.",
          solution:
            "Built an event-driven lead capture flow using OTP-first login. If a session goes inactive after OTP, the system flags an abandoned state and triggers a WhatsApp sales follow-up via webhook.",
        },
        {
          title: "Resilience in payment and KYC gateways",
          problem:
            "Single-provider outages can halt order placement and KYC completion.",
          solution:
            "Designed a redundant gateway strategy integrating PhonePe + Razorpay with health-based routing middleware to keep transactions flowing reliably.",
        },
      ],
      metrics: [
        { label: "Operational efficiency", value: "85% reduction", note: "Manual KYC time reduced via Digio automation." },
        { label: "System throughput", value: "10+ cities", note: "Inventory sync optimized without noticeable latency." },
        { label: "Lead recovery", value: "Intent captured", note: "OTP-first funnel preserved user intent for follow-up." },
        { label: "Maintainability", value: "Modular UI", note: "Reusable Tailwind + API-layer patterns reduced frontend debt." },
      ],
    },
    links: [],
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    type: "Luxury brand web platform",
    period: "Feb 2026 - Mar 2026",
    image: "/projects/image.png",
    role: "Sole Full-Stack Developer",
    href: "",
    summary:
      "Architected and built an AI-enabled luxury proptech platform for HNIs, centralizing premium real estate across India with geospatial insights, comparison workflows, and automated lead handling.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Strapi (Headless CMS)",
      "Node.js",
      "PostgreSQL",
      "Google Distance Matrix API",
      "Geolocation API",
      "Zepto Mail",
      "EmailJS",
      "Web-scraping APIs",
    ],
    highlights: [
      "Designed modular Strapi collection schemas to support multiple property categories and future expansion.",
      "Implemented geospatial distance intelligence for key landmarks to speed up property evaluation.",
      "Built multi-property comparison workflows to evaluate specs, configurations, and pricing side-by-side.",
    ],
    impact:
      "Improved decision velocity for luxury buyers by combining distance intelligence, comparisons, and shareable wishlists in a performance-optimized UI.",
    gallery: [],
    caseStudy: {
      overview:
        "Lighthouse Luxury is a premier AI-enabled proptech platform built for High-Net-Worth Individuals. I developed the entire web application end-to-end, from CMS architecture and database design to geospatial features, comparison tooling, and lead automation.",
      media: [
        {
          src: "/projects/lighthouse/flow-cms.svg",
          alt: "Lighthouse flow - CMS and backend architecture",
          caption: "CMS + backend: categories, lead routing, and automated audits",
        },
        {
          src: "/projects/lighthouse/flow-geo.svg",
          alt: "Lighthouse flow - Geospatial engine",
          caption: "Geospatial engine: proximity insights for landmarks and transit",
        },
        {
          src: "/projects/lighthouse/flow-compare.svg",
          alt: "Lighthouse flow - Comparison and wishlist",
          caption: "Comparison + wishlist: evaluate and share curated lists",
        },
      ],
      architecture: [
        "Strapi + PostgreSQL: custom collection types for multiple property categories, wishlists, and market intelligence content.",
        "Next.js frontend: high-end UI with optimized imagery and performance-conscious data rendering.",
        "Integrations layer: geospatial APIs, email automation, and news pipeline synchronization.",
      ],
      challenges: [
        {
          title: "End-to-end CMS and backend architecture",
          problem:
            "Luxury inventory needs structured categorization, fast editing workflows, and reliable lead routing without manual overhead.",
          solution:
            "Engineered Strapi collection types to categorize listings and implemented lead automation using EmailJS and Zepto Mail. Added automated audits via CronJobs to escalate stale listings and keep data fresh.",
        },
        {
          title: "Advanced geospatial and comparison engines",
          problem:
            "Luxury buyers need actionable proximity insights and a fast way to evaluate multiple properties without manual research.",
          solution:
            "Integrated Google Distance Matrix + Geolocation APIs to compute live distances to key landmarks, and built a logic-heavy comparison experience covering configuration, specifications, and pricing benchmarks.",
        },
        {
          title: "Shareable wishlist system",
          problem:
            "HNIs frequently share shortlists with family/advisors; requiring full login for viewing reduces engagement.",
          solution:
            "Designed a tokenized wishlist architecture with UUID + access token mapping to property sets, enabling secure, shareable read-access links without requiring recipient login.",
        },
        {
          title: "Real-time market intelligence integration",
          problem:
            "Manual market update entry is time-consuming and can make the platform feel outdated.",
          solution:
            "Integrated web-scraping APIs and built a synchronization layer in the frontend to fetch, cache, and render market news automatically for a continuously fresh experience.",
        },
        {
          title: "Performance under heavy imagery and data",
          problem:
            "High-resolution imagery and rich property datasets can degrade perceived performance on consumer devices.",
          solution:
            "Leveraged Next.js image optimization and ISR-style content updates so CMS changes propagate quickly without sacrificing runtime performance.",
        },
      ],
      metrics: [
        { label: "Data integrity", value: "Automated audits", note: "Stale listings escalated via CronJobs and email triggers." },
        { label: "Search efficiency", value: "60% faster", note: "Reduced research time using geospatial distance intelligence." },
        { label: "User engagement", value: "Shareable lists", note: "Tokenized wishlists improved shortlist sharing without friction." },
        { label: "Scalability", value: "7+ categories", note: "Modular Strapi schema supports expansion and international growth." },
      ],
    },
    links: [],
  },
  {
    slug: "auditee-ai",
    title: "Auditee AI",
    type: "Enterprise SaaS platform",
    period: "Oct 2025 - Jan 2026",
    image: "/projects/image.png",
    role: "Frontend Engineer",
    href: "https://auditee.ai/",
    summary:
      "Built the complete enterprise product frontend with scalable component architecture, authentication, onboarding modules, and data-heavy workflows.",
    highlights: [
      "Implemented auth flows, client selection, file upload workflows, and upload tracking interfaces.",
      "Built responsive KPI dashboards with dynamic chart components and data visualization patterns.",
      "Developed onboarding modules: Org Hierarchy, Brand, SSO, Campaign, and User Management flows.",
    ],
    stack: ["React", "Chart.js", "Tailwind CSS", "REST APIs"],
    impact:
      "Raised UI consistency and maintainability by standardizing shared components across complex product surfaces.",
    links: [],
  },
  {
    slug: "climaty-ai",
    title: "Climaty AI",
    type: "Carbon intelligence platform",
    period: "Jul 2025 - Sep 2025",
    image: "/projects/image.png",
    role: "Frontend Developer (Animation & UI)",
    href: "https://climaty.ai/",
    summary:
      "Built interactive, animation-driven UI experiences across the platform with performance-first implementation and responsive delivery.",
    highlights: [
      "Delivered production-ready UI sections in React/Next.js with GSAP-driven interactions and transitions.",
      "Created immersive visuals including globe experiences and real-time mapping interfaces.",
      "Collaborated closely with design to translate complex motion concepts into maintainable components.",
    ],
    stack: ["React", "Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    impact:
      "Delivered smooth, responsive motion while keeping runtime performance stable on real devices.",
    links: [],
  },
  {
    slug: "realm",
    title: "Realm",
    type: "Interactive marketing website",
    period: "Jun 2025",
    image: "/projects/image.png",
    role: "Frontend Developer",
    href: "https://therealm.in/",
    summary:
      "Built a complete marketing website with high-performance motion, interactive sections, and a fully responsive experience across pages.",
    highlights: [
      "Implemented smooth, high-performance animations and interactive sections using GSAP and Framer Motion.",
      "Delivered a cohesive, mobile-first experience with consistent layout and interaction patterns.",
      "Optimized assets and motion timing for a polished marketing presentation.",
    ],
    stack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    impact:
      "Improved perceived quality and engagement with premium motion without sacrificing load performance.",
    links: [],
  },

  // Additional projects (full list)
  {
    slug: "t20-mumbai-suite",
    title: "T20 Mumbai",
    type: "Tournament platform (website + mobile app)",
    period: "Apr 2025 - May 2025",
    image: "/projects/image.png",
    role: "Frontend & Mobile Developer",
    href: "https://www.t20mumbai.com/",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.mca.t20mumbai",
      },
    ],
    summary:
      "Delivered a unified tournament experience across web and mobile, covering fixtures, standings, stats, news, and match-center views with reliable data rendering and mobile-first UX.",
    highlights: [
      "Built scalable, data-driven modules using structured datasets and dynamic routes to support multiple seasons and content types.",
      "Delivered match-center experiences across devices with consistent navigation patterns and resilient UI states.",
      "Prioritized readability and performance for data-dense screens to keep the experience fast on mobile.",
    ],
    stack: ["React", "Next.js", "React Native", "Tailwind CSS", "REST APIs", "JSON datasets"],
    impact:
      "Improved fan usability by standardizing UI patterns and ensuring data-heavy screens stayed clear, responsive, and reliable across devices.",
    links: [],
  },
  {
    slug: "ken42",
    title: "Ken42",
    type: "Landing pages & UI upgrades",
    period: "Sep 2025 - Nov 2025",
    image: "/projects/image.png",
    role: "Frontend Developer",
    href: "https://ken42.com/",
    summary:
      "Delivered new landing experiences and iterative UI upgrades, focusing on consistent design implementation and scalable section composition.",
    highlights: [
      "Built reusable landing sections to support rapid iteration and marketing updates.",
      "Improved UI consistency across navigation and content surfaces with refinement cycles.",
      "Ensured responsive behavior and visual polish across devices.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    impact:
      "Increased delivery speed by standardizing component patterns used across multiple landing builds.",
    links: [],
  },
  {
    slug: "t2c",
    title: "T2C",
    type: "Website redesign & UI refinements",
    period: "Sep 2025",
    image: "/projects/image.png",
    role: "Frontend Developer",
    href: "https://tsquaredc.com/",
    summary:
      "Implemented a new design direction with improved layout structure and responsive behavior, delivering a cleaner, more modern UI.",
    highlights: [
      "Translated design specifications into reusable components and consistent layout patterns.",
      "Improved responsiveness and reduced edge cases across breakpoints.",
      "Refined visual details and interaction states for a more polished feel.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    impact:
      "Reduced UI regressions by improving consistency and making responsive behavior predictable.",
    links: [],
  },
  {
    slug: "print-buddy",
    title: "Print Buddy",
    type: "Website redesign + mobile app workflows",
    period: "Oct 2025 - Jan 2026",
    image: "/projects/image.png",
    role: "Frontend & Mobile Developer",
    href: "https://printbuddy.co.in/",
    summary:
      "Delivered a website refresh and built core mobile app agreement workflows, focusing on scalable UI patterns, responsive layouts, and production-ready UX.",
    gallery: [],
    highlights: [
      "Shipped a website redesign with improved content structure and responsive behavior.",
      "Delivered complex multi-step agreement experiences with consistent patterns for forms and navigation.",
      "Improved stability and UX quality through iterative bug fixing and UI polish across flows.",
    ],
    stack: ["Next.js", "Tailwind CSS", "React Native", "Digio (e-Sign/KYC)", "PostgreSQL", "REST APIs"],
    impact:
      "Improved user completion on long-form flows by reducing friction via clearer structure and consistent UI patterns.",
    caseStudy: {
      overview:
        "Print Buddy is an automated printing ecosystem. As the frontend developer, I owned the end-to-end UI across the web platform and delivered key mobile modules for agreement orchestration, ensuring a smooth path from digital configuration to legally compliant physical output.",
      media: [
        {
          src: "/projects/printbuddy/flow-web.svg",
          alt: "Print Buddy flow - Web platform",
          caption: "Web platform: onboarding → dashboard → franchise operations",
        },
        {
          src: "/projects/printbuddy/flow-agreements.svg",
          alt: "Print Buddy flow - Agreements",
          caption: "Mobile agreements: input → verification → e-sign → generation",
        },
        {
          src: "/projects/printbuddy/flow-mapping.svg",
          alt: "Print Buddy flow - Data mapping to print",
          caption: "Strict JSON-to-PDF mapping to ensure print accuracy",
        },
      ],
      architecture: [
        "Web frontend (Next.js): responsive dashboards for onboarding and franchise operations.",
        "Mobile app module (React Native): multi-step agreement engine with verification checkpoints.",
        "Verification integration (Digio): e-sign + Aadhaar-based flows coordinated with reliable UI state.",
        "Backend sync: collaborated on API mapping and data structures aligned to print-ready outputs.",
      ],
      challenges: [
        {
          title: "Automated legal template generation",
          problem:
            "Legally binding agreements require a strict 1:1 mapping between mobile inputs and the final structured document format.",
          solution:
            "Implemented five agreement template flows with robust mapping logic that injects validated user inputs into standardized schemas, producing correctly formatted print-ready documents.",
        },
        {
          title: "E-sign and verification orchestration",
          problem:
            "External verification redirects can break session continuity and lose in-progress user state on mobile.",
          solution:
            "Built a verification handshake flow that preserves progress across Digio redirects and immediately reflects 'Signed & Verified' states to trigger downstream document generation.",
        },
        {
          title: "Precise data mapping for final printing",
          problem:
            "Any schema mismatch can introduce incorrect values or formatting issues in the final physical output.",
          solution:
            "Partnered with backend to define a strict JSON-to-PDF mapping schema, validating and sanitizing all UI inputs before submission to ensure print accuracy and compliance.",
        },
      ],
      metrics: [
        { label: "Automation success", value: "5 flows", note: "Automated legal templates eliminated manual preparation." },
        { label: "Interaction efficiency", value: "75% reduction", note: "Kiosk time reduced by shifting agreement steps to mobile." },
        { label: "Verification accuracy", value: "100% mapping", note: "UI inputs matched final legal printouts reliably." },
        { label: "UI performance", value: "Optimized previews", note: "Handled high-resolution document previews without lag." },
      ],
    },
    links: [],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug) || projects[0];

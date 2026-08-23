const contactLink = "/en/contact";

export const englishHome = {
  banner: {
    title: "Websites that do more than look good.<br/><mark>They create impact.</mark>",
    content:
      "Individual digital solutions for companies in Switzerland, Germany, Austria and beyond. Premium in design, technically strong and focused on winning new customers. Personally managed with direct access to the owner.",
    badge: { enable: true, label: "codepixel.ch", images: [] },
    image: "/images/banner.png",
    button_dark: { enable: true, label: "Pricing", link: "/en/pricing" },
    button_primary: { enable: true, label: "Contact", link: contactLink },
  },
};

export const englishTrustedClients = {
  enable: true,
  title: "Our Partners",
  swiss_label: "Digital solutions from Switzerland",
  swiss_aria: "Swiss Made, digital solutions from Switzerland",
  items: [
    { name: "Swiss Leak Control", logo: "/images/trusted-clients/swiss-leak-control.png", link: "https://sl-control.ch" },
    { name: "BM Keramik", logo: "/images/trusted-clients/bm-keramik.png", link: "#" },
    { name: "Kemo's Restaurant", logo: "/images/trusted-clients/kemos-restaurant.png", link: "#" },
  ],
};

export const englishKeyFeatures = {
  enable: true,
  title: "Digital solutions with concept, character and measurable impact",
  badge: "Our Expertise",
  track: {
    top_note: "Clearly positioned",
    title: "Made for every screen",
    bottom_note: "Visible and fast",
    link: contactLink,
  },
  features: [
    {
      title: "Brand websites that build trust",
      track: "Individual web design",
      content: "No off the shelf templates. We create a digital presence that fits your brand and guides visitors towards making contact.",
      image: "/images/features/feature-1.png",
      bullet_points: ["Individual design", "Clear user journeys"],
    },
    {
      title: "Mobile first and convincing on every device",
      track: "Responsive development",
      content: "Smartphone, tablet or desktop. Your digital presence remains fast, premium and intuitive to use.",
      image: "/images/features/feature-2.png",
      bullet_points: ["Optimised for every display", "Fast loading times"],
    },
    {
      title: "SEO and performance from the beginning",
      track: "Greater visibility",
      content: "Clean technology, clear content and a strong structure provide the foundation for sustainable visibility.",
      image: "/images/features/feature-3.png",
      bullet_points: ["Technical SEO foundation", "Performance optimisation"],
    },
  ],
};

export const englishStatistics = {
  enable: true,
  step_label: "Step",
  badge: "Four clear steps",
  title: "From the first idea to the finished solution",
  subtitle: "Clearly structured, personally supported and consistently focused on a successful result.",
  stats_list: [
    { step: "01", title: "Get to know each other", content: "You tell us about your company, your goals and your ideas. Together we define what your new solution should achieve." },
    { step: "02", title: "Make the concept visible", content: "Your requirements become an individual concept that fits your brand and communicates the desired impact clearly." },
    { step: "03", title: "Build and refine", content: "After your approval, the solution is developed. Your feedback and the agreed revisions flow directly into the final details." },
    { step: "04", title: "Launch with confidence", content: "After careful testing, your project goes live. You receive all access details and a personal introduction for a confident start." },
  ],
};

export const englishEssentialFeatures = {
  enable: true,
  title: "More possibilities for your digital presence",
  badge: "Digital capabilities",
  features: [
    { title: "Multilingual websites", content: "We create your website in multiple languages so you can reach customers internationally with a professional presence.", image: "/images/features/multilingual-websites.svg" },
    { title: "Blog systems for websites", content: "We integrate a modern blog so you can publish projects, news and expert articles easily and keep your content up to date.", image: "/images/features/website-blog-system.svg" },
    { title: "Real time website analytics", content: "Keep track of visits, page views, popular content, traffic sources, devices, loading times and Core Web Vitals with privacy friendly Cloudflare Web Analytics.", image: "/images/features/realtime-website-analytics.svg" },
    { title: "Individual web design", content: "Every website is tailored to your brand, goals and target audience. The result is a distinctive digital presence without a generic template look.", image: "/images/features/individual-web-design.svg" },
    { title: "Direct personal support", content: "You reach us personally and without detours. Questions, changes and requests are discussed directly with Codepixel in a clear and solution focused way.", image: "/images/features/direct-support.svg" },
  ],
};

export const englishWhyChooseUs = {
  enable: true,
  title: "Technology, design and brand from one partner",
  badge: "Why choose us?",
  feature_list: [
    { title: "Everything from one partner", icon: "/images/icons/all-in-one.svg", content: "From the first idea to the finished solution, we combine technology, design and brand identity so every part works together." },
    { title: "Websites, apps and software", icon: "/images/icons/web-app-software.svg", content: "We develop modern websites, individual programs, apps and software solutions that fit your processes and goals." },
    { title: "Interfaces and automation", icon: "/images/icons/interfaces-automation.svg", content: "We connect systems through suitable interfaces, reduce manual work and create reliable digital processes." },
    { title: "Logo, branding and giveaways", icon: "/images/icons/branding-giveaways.svg", content: "From logos and corporate design to company giveaways, we create a consistent and professional brand presence." },
    { title: "Individual design", icon: "/images/icons/individual-design.svg", content: "No generic solutions. Every concept is tailored to your company, your audience and your distinctive character." },
    { title: "Honest advice and expertise", icon: "/images/icons/honest-advice.svg", content: "We tell you openly what makes sense and what does not. You benefit from practical expertise, clear recommendations and direct communication." },
  ],
};

export const englishIntegration = {
  enable: true,
  title: "Stay one step ahead of your competition",
  badge: "Your next step",
  list: [
    "/images/integrations/HTML5.svg", "/images/integrations/JS.svg", "/images/integrations/Discord.svg",
    "/images/integrations/Figma.svg", "/images/integrations/Github.svg", "/images/integrations/Notion.svg",
    "/images/integrations/Framer.svg", "/images/integrations/Vscode.svg", "/images/integrations/Webflow.svg",
    "/images/integrations/X.svg", "/images/integrations/Mailchimp.svg",
  ],
  button: { enable: true, label: "Get in touch", link: contactLink },
};

export const englishPricing = {
  enable: true,
  title: "Choose the right starting package",
  subtitle: "Choose a suitable foundation based on the size and scope of your website. If you are unsure which option fits best, contact us for personal advice.",
  badge: "",
  offer_yearly: "",
  project_label: "Per project",
  pricing_plans: [
    {
      name: "One Page Website",
      content: "The professional starting point for sole traders and small teams.",
      price: { monthly: { number: 700, prefix: "From CHF", suffix: ".-" }, yearly: { number: 700, prefix: "From CHF", suffix: ".-" } },
      features: [
        { value: "One individual content page", include: true },
        { value: "Responsive web design", include: true },
        { value: "Search friendly content", include: true },
        { value: "Contact form with privacy requirements", include: true },
        { value: "Technical quality assurance and launch", include: true },
      ],
      button: { label: "Request a quote", link: contactLink, enable: true },
    },
    {
      name: "SME Basic",
      content: "Our most popular package for companies with several services or target groups.",
      price: { monthly: { number: 1500, prefix: "From CHF", suffix: ".-" }, yearly: { number: 1500, prefix: "From CHF", suffix: ".-" } },
      features: [
        { value: "Up to 6 individual content pages", include: true },
        { value: "Responsive premium design", include: true },
        { value: "Search friendly page structure", include: true },
        { value: "Content including keyword research", include: true },
        { value: "Up to 4 hours of revisions", include: true },
      ],
      button: { label: "Request a quote", link: contactLink, enable: true },
    },
    {
      name: "SME Custom",
      content: "For organisations with extensive content and individual requirements.",
      price: { monthly: { number: 5600, prefix: "From CHF", suffix: ".-" }, yearly: { number: 5600, prefix: "From CHF", suffix: ".-" } },
      features: [
        { value: "Up to 12 content pages including landing pages", include: true },
        { value: "Individual user experience and design concept", include: true },
        { value: "Advanced SEO and internal linking", include: true },
        { value: "Prepared for two languages", include: true },
        { value: "Blog system and personal project support", include: true },
      ],
      button: { label: "Request a quote", link: contactLink, enable: true },
    },
  ],
};

export const englishCallToAction = {
  enable: true,
  title: "Ready for a digital presence that creates impact?",
  description: "Tell us about your project. We combine strategy, design and technology into a solution built around your business.",
  button: { enable: true, label: "Discuss your project", link: contactLink },
};

export const englishFeaturesPage = {
  title: "Our Services",
  meta_title: "Digital services for companies | Codepixel",
  description: "Websites, software, interfaces, branding, corporate giveaways, business support and strategy from one partner.",
  image: "",
  page_header: {
    title: "Our Services",
    subtitle: "From individual websites, apps and software to interfaces, branding and business solutions. We combine strategy, design and technology into a digital presence that fits your company.",
    button_dark: { enable: false },
    button_primary: { enable: false },
  },
};

const priceFeatures = [
  ["Websites", "Corporate websites", "company_websites"],
  ["Websites", "Landing pages and campaigns", "landing_pages"],
  ["Websites", "Online shops and ecommerce", "online_shops"],
  ["Websites", "Technical implementation", "technical_implementation"],
  ["Websites", "Maintenance and support", "maintenance"],
  ["Interfaces", "Accounting and administration", "accounting_interfaces"],
  ["Interfaces", "CRM and customer management", "crm"],
  ["Interfaces", "Web and app backends", "backend"],
  ["Interfaces", "Third party integrations", "third_party_integrations"],
  ["Interfaces", "Data synchronisation", "data_sync"],
  ["Interfaces", "Time tracking", "time_tracking"],
  ["Logo and Branding", "Professional logo design", "logo_design"],
  ["Logo and Branding", "Logo optimisation and redesign", "logo_redesign"],
  ["Logo and Branding", "Animated logos", "animated_logos"],
  ["Logo and Branding", "Brand guidelines", "brand_guidelines"],
  ["Logo and Branding", "Social media design", "social_media_design"],
  ["Logo and Branding", "Vectorisation of existing logos", "logo_vectorization"],
  ["Corporate Giveaways", "Business cards and promotional pens", "business_cards"],
  ["Corporate Giveaways", "Products for restaurants and food businesses", "restaurant_products"],
  ["Corporate Giveaways", "Printed textiles", "printed_textiles"],
  ["Corporate Giveaways", "Packaging design", "packaging_design"],
  ["Corporate Giveaways", "Trade fair equipment", "trade_fair_equipment"],
  ["Programs and Software", "Individual software development", "software_development"],
  ["Programs and Software", "Electrical engineering and technical systems", "technical_systems"],
  ["Programs and Software", "Fitness and health software", "health_software"],
  ["Programs and Software", "Game development", "game_development"],
  ["Programs and Software", "Learning platforms and education solutions", "education_software"],
  ["Business Support", "Hourly support during capacity shortages", "hourly_support"],
  ["Business Support", "Project based support", "project_support"],
  ["Business Support", "Weekly and monthly mandates", "business_mandates"],
  ["Business Support", "Accounting", "accounting"],
  ["Business Support", "Administration", "administration"],
  ["Business Support", "Office and operational support", "office_support"],
  ["Strategy", "Process optimisation", "process_optimization"],
  ["Strategy", "Quality optimisation", "quality_optimization"],
  ["Strategy", "Leadership and employees", "leadership"],
  ["Strategy", "Coaching and mentoring", "coaching"],
];

export const englishPricingPage = {
  title: "Pricing",
  meta_title: "Pricing for websites and digital projects | Codepixel",
  description: "Transparent entry prices for websites and individual quotations for digital projects.",
  image: "/images/image-placeholder.png",
  page_header: {
    badge: "Pricing",
    title: "Choose the right<br/><mark>package for your business</mark>",
    subtitle: "Every project is individual. Choose a suitable foundation and receive an offer tailored to your company and goals.",
  },
  pricing_table: {
    title: "Services and Pricing",
    service_label: "Service",
    price_label: "Price",
    price_value: "On request",
    features: priceFeatures.map(([category, name, key]) => ({ category, name, key })),
  },
};

export const englishCaseStudies = [
  {
    slug: "case-study-1",
    frontmatter: { title: "Kita Connect: App for parents and childcare teams", meta_title: "Childcare app for parents and teams | Codepixel", description: "A clear and secure app connecting parents and childcare organisations directly.", image: "/images/case-studies/case-study-1.png", logo: "", category: "Apps", featured: true },
    idea: "Parents want quick access to important information about everyday childcare. Teams need a simple way to organise messages, appointments and documents in one place.",
    solution: "Kita Connect brings daily communication into one clear app. Parents and employees see exactly the information intended for them on smartphones, tablets and computers.",
    points: ["Personal messages between parents and care teams", "Daily updates and important notices", "Calendar for appointments and events", "Secure sharing of documents and images", "Absence notices and authorised pickup information", "Multilingual content for families"],
    value: "The app reduces questions, creates clear processes and makes daily cooperation between families and childcare teams easier.",
  },
  {
    slug: "case-study-2",
    frontmatter: { title: "Garage Flow: Workshop app for automotive businesses", meta_title: "App for garages and workshops | Codepixel", description: "A digital workshop solution for appointments, vehicles, jobs and direct customer communication.", image: "/images/case-studies/case-study-2.png", logo: "", category: "Apps", featured: false },
    idea: "Garages coordinate vehicles, spare parts, appointments and customer requests every day. Garage Flow brings these processes together in one application.",
    solution: "The app supports employees from the first customer contact to vehicle handover. All relevant information is available in one place and can be updated directly.",
    points: ["Digital planning for workshop and tyre appointments", "Vehicle history with completed work", "Job status for employees and customers", "Photo documentation of damage and repairs", "Service and inspection reminders", "Interfaces to accounting and customer management"],
    value: "Garage Flow provides greater clarity, faster processes and professional customer communication.",
  },
  {
    slug: "case-study-3",
    frontmatter: { title: "Service Pilot: App for climate and heating companies", meta_title: "Service app for climate and heating | Codepixel", description: "A mobile solution for scheduling, service reports, system information and field work.", image: "/images/case-studies/case-study-3.png", logo: "", category: "Apps", featured: false },
    idea: "Installation companies need current information about systems, customers and ongoing assignments. Paper records and isolated messages make it difficult to maintain an overview.",
    solution: "Service Pilot connects the office, project management and field technicians in one app. Jobs can be planned, completed and closed directly at the customer site.",
    points: ["Assignment planning with responsibility and priority", "Digital service reports with customer signatures", "System history and technical documentation", "Recording of working time and materials", "Photos before and after completion", "Automatic transfer to administration and accounting"],
    value: "The app saves administrative work, improves documentation and ensures that everyone works with the same information.",
  },
  {
    slug: "case-study-4",
    frontmatter: { title: "Custom websites for strong companies", meta_title: "Individual corporate websites | Codepixel", description: "Individual websites that present a company's brand, services and personality professionally.", image: "/images/case-studies/case-study-4.png", logo: "", category: "Websites", featured: false },
    idea: "A strong website must do more than look attractive. It should build trust, explain services clearly and guide visitors towards making contact.",
    solution: "Every digital presence is developed around the brand and target audience. Design, content, user experience and technology work together as one solution.",
    points: ["Individual design aligned with the brand identity", "Clear presentation of services and contacts", "Optimisation for every device", "Contact forms and direct communication channels", "Search friendly page structure", "Technical quality assurance and personal support"],
    value: "The company receives an independent digital presence that looks professional and supports new enquiries.",
  },
  {
    slug: "case-study-5",
    frontmatter: { title: "Clear leadership: Coaching for companies", meta_title: "Coaching and corporate leadership | Codepixel", description: "Individual guidance for clear structures, effective leadership and stronger cooperation.", image: "/images/case-studies/case-study-2.png", logo: "", category: "Strategy", featured: false },
    idea: "Growing companies often face new organisational and leadership challenges. Unclear responsibilities and missing processes cost time and energy.",
    solution: "Personal coaching examines the current situation, concrete goals and possible improvements. This creates solutions that fit both the company and the people involved.",
    points: ["Clarify roles and responsibilities", "Improve team communication", "Support leaders in everyday work", "Create clear and practical processes", "Develop employees effectively", "Prepare decisions in a structured way"],
    value: "The company gains an honest external perspective, clear next steps and practical guidance for everyday work.",
  },
  {
    slug: "case-study-6",
    frontmatter: { title: "Visible corporate identity: Shirts with your logo", meta_title: "Corporate shirts and textiles with logo | Codepixel", description: "Professional corporate clothing that strengthens the brand and presents employees as one team.", image: "/images/case-studies/case-study-3.png", logo: "", category: "Branding", featured: false },
    idea: "A consistent appearance does not end with the website and business card. Premium shirts with a company logo make the brand visible during every customer interaction.",
    solution: "Logo, colours, placement and textiles are coordinated to create a professional overall appearance with strong comfort and clean production quality.",
    points: ["Selection of suitable shirts and textiles", "Logo optimisation for embroidery or print", "Coordination of colours and placement", "Design for different team functions", "Production support and quality control", "Extension to jackets, polo shirts and other giveaways"],
    value: "Employees present a consistent image and the corporate identity becomes visible in a premium way at every customer contact.",
  },
];

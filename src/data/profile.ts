/**
 * Professional profile, from the CVs.
 *
 * DELIBERATELY OMITTED from this public file — do not add them back:
 *   · phone number          (public page = spam magnet; keep it on the PDF you send)
 *   · photo, age, GPA       (illegal to request in UK/US hiring, weakens nothing to omit)
 *   · internal band/grade, job-stream codes, and the 30-item internal training log
 *     from the Ingenium-printed company CV — that is an internal HR record, not
 *     portfolio content, and publishing it serves no one.
 *
 * Technical scope below is drawn from both CVs but described in industry-standard
 * terms rather than internal Telkom acronyms, so an overseas reader can parse it.
 */

export type Job = {
  company: string;
  /** One line on what the company is, for readers outside Indonesia. */
  companyNote?: string;
  role: string;
  place: string;
  period: string;
  current?: boolean;
  scope: string;
  points: string[];
  tags: string[];
};

export type Credential = {
  name: string;
  issuer: string;
  date: string;
  level?: string;
  domain: string;
};

export type Profile = {
  name: string;
  shortName: string;
  headline: string;
  location: string;
  openTo: string;
  pitch: string;
  summary: string[];
  contact: { email: string; linkedin: string; github: string; tryhackme: string };
  education: { school: string; note: string; place: string; period: string; award: string; detail: string }[];
  experience: Job[];
  keyProjects: { title: string; place: string; period: string; detail: string }[];
  achievements: { title: string; org: string; date: string; detail: string }[];
  credentials: Credential[];
  skills: { group: string; items: string[] }[];
  languages: { name: string; level: string }[];
  interests: { title: string; detail: string }[];
};

/**
 * Completed years of professional experience since the Smartfren start date
 * (November 2014). Month-aware, so it does not round up in January — and so the
 * number here never contradicts the prose elsewhere on the site.
 */
export const yearsExperience = (() => {
  const start = new Date(2014, 10, 1); // Nov 2014
  const now = new Date();
  let y = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) y -= 1;
  return y;
})();

/** Spelled out, for prose. Falls back to digits past the lookup table. */
const WORDS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
export const yearsWord = WORDS[yearsExperience - 10] ?? String(yearsExperience);

export const profile: Profile = {
  name: 'Dickie Zulfickar Hervianto',
  shortName: 'Dickie',
  headline: 'Telecom Network Operations → Cybersecurity & Agentic AI',
  location: 'Makassar, Indonesia',
  openTo: 'Remote-first global · EU/UK · US · Middle East & APAC',

  /** Two sentences a recruiter reads before deciding to keep reading. */
  pitch:
    `${yearsWord[0].toUpperCase()}${yearsWord.slice(1)} years running carrier-grade network and service operations across eastern Indonesia — fibre, Metro-E, IP core, DWDM and mobile broadband — now specialising into cybersecurity and agentic AI. CEH-certified, Cisco CyberOps trained, and currently accountable for mobile service operations across the Papua, Maluku, Sulawesi and Kalimantan region.`,

  summary: [
    'I have spent my career on the operations side of telecommunications: keeping networks up, restoring them when they go down, and holding SLAs for wholesale and enterprise customers across some of the most geographically difficult territory in Indonesia. That work covers access and transport — FTTH and OLT integration, Metro-Ethernet, IP/MPLS backhaul, DWDM, satellite and radio — plus the unglamorous parts that decide whether a network is actually reliable: escalation paths, incident coordination, and root-cause analysis on recurring faults.',
    `The pivot into security is not a career reset. Network operations is where security incidents are actually detected and contained, and ${yearsWord} years of knowing how carrier infrastructure genuinely behaves is the context most security candidates never acquire. I am building deliberately toward the intersection of telecom/network security, detection engineering, and the security of agentic AI systems.`,
  ],

  contact: {
    email: 'zulfickarhervianto@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dickiezh/',
    github: 'https://github.com/stackcypherx',
    tryhackme: 'https://tryhackme.com/p/stackcypher',
  },

  education: [
    {
      school: 'Telkom University',
      note: "Indonesia's first private university accredited Excellent (Unggul) by BAN-PT",
      place: 'Bandung, Indonesia',
      period: 'Aug 2010 – Aug 2014',
      award: 'Telecommunication Engineering',
      detail: 'Relevant coursework: project management, engineering economics, entrepreneurship.',
    },
  ],

  experience: [
    {
      company: 'PT Telkom Infrastruktur Indonesia (Infranexia)',
      companyNote: "Telkom Indonesia subsidiary managing the group's connectivity network operations",
      role: 'Mobile Service Operation Officer — Service Operation Area 4',
      place: 'Makassar, Indonesia',
      period: 'Feb 2026 – Present',
      current: true,
      scope:
        'Mobile broadband and SL-WDM service operations across Papua, Maluku, Sulawesi and Kalimantan (Pamasuka) — roughly the eastern half of the country.',
      points: [
        'Own mobile broadband service fulfilment and assurance for the Area, against defined procedures, working methods and quality standards.',
        'Coordinate with Network Operations and adjacent units to keep service delivery moving across regional and district offices.',
        'Monitor mobile service performance — network quality, capacity, and Mobile Broadband stability.',
        'Run service troubleshooting end to end, including escalation and cross-unit coordination for incident handling and resolution.',
        'Hold service delivery to SLA and customer requirements.',
        'Analyse recurring disruptions and quality issues to produce service-improvement recommendations.',
        'Supervise helpdesk and logical team operations; compile periodic performance reporting for management.',
      ],
      tags: ['Mobile Broadband', 'DWDM', 'Service Assurance', 'SLA', 'Incident Management'],
    },
    {
      company: 'PT Telkom Infrastruktur Indonesia (Infranexia)',
      role: 'Wholesale Fulfillment Service Operation Officer',
      place: 'Makassar, Indonesia',
      period: 'Aug 2024 – Jan 2026',
      scope: 'Wholesale and other-licensed-operator fulfilment across the regional footprint.',
      points: [
        'Managed wholesale fulfilment operations to guarantee timely service delivery to carrier and enterprise customers.',
        'Issued execution guidelines to branch offices, shortening order processing times and improving operational efficiency.',
        'Supervised helpdesk and logical team operations across fulfilment activities.',
        'Designed and implemented dashboard and reporting tooling giving real-time progress visibility to support decision-making.',
        'Contributed to standard operating procedures maintaining consistent service quality across branches.',
        'Coordinated with external partners and vendors to improve fulfilment workflows.',
      ],
      tags: ['Wholesale', 'Metro-E', 'Service Fulfilment', 'Reporting Tooling', 'SOP'],
    },
    {
      company: 'PT Telkom Indonesia Tbk',
      companyNote: 'State-owned ICT enterprise and the largest telecommunications network in Indonesia',
      role: 'Wholesale Fulfillment Service Operation Officer',
      place: 'Makassar, Indonesia',
      period: 'Apr 2020 – Jul 2024',
      scope:
        'Wholesale and OLO fulfilment and assurance — network design input and topology assessment for access, backhaul, IP core and Metro-E / SL-WDM services.',
      points: [
        'Designed topology and assessed ISP material requirements for new links, rebalancing, fiberisation and dualhoming across access, backhaul, IPRAN and IP core.',
        'Troubleshot and held quality of service at or above the standard required for wholesale customers; secured SLA and SLG commitments.',
        'Delivered Palapa Ring Tengah–Timur integration into Cloud Metro-E and mobile operator Node B.',
        'Surveyed, designed topology and assessed material requirements for new links and Node B dualhoming supporting the 2021 National Games and Para Games in Papua.',
        'Led helpdesk and logical team operations, embedding a customer-centric approach that raised satisfaction scores.',
        'Built an IT dashboard and reporting system giving at-a-glance visibility of up-to-date progress.',
      ],
      tags: ['Palapa Ring', 'IP Core / IPRAN', 'Metro-E', 'Fibre', 'Topology Design', 'SLA/SLG'],
    },
    {
      company: 'PT Telkom Indonesia Tbk',
      role: 'Operation & Maintenance Officer — Maluku Utara Branch',
      place: 'Ternate, Indonesia',
      period: 'Oct 2017 – Mar 2020',
      scope: 'Access and network operations for the North Maluku branch — an archipelagic, logistically hard service area.',
      points: [
        'Led and managed the branch technical team across operation, maintenance and service operation activities.',
        'Ran access-layer delivery: new OLT integration, and supervision and commissioning of FTTH deployment (FTM, feeder, ODC, distribution, ODP).',
        'Took network-side ownership of Palapa Ring Tengah integration across Morotai, Siau, Tahuna and Talaud, plus Metro-E relocation and integration.',
        'Troubleshot mass broadband complaints across the North Maluku area; supervised and commissioned network quality improvement work.',
        'Optimised maintenance activity to reduce downtime and sustain network availability.',
        'Implemented training programmes to raise the technical capability of the team.',
      ],
      tags: ['FTTH / OLT', 'Palapa Ring', 'Team Leadership', 'Field Operations'],
    },
    {
      company: 'PT Smartfren Telecom Tbk',
      companyNote: 'One of the fastest-growing telecommunications operators in Indonesia',
      role: 'Device Testing Specialist',
      place: 'Jakarta, Indonesia',
      period: 'Nov 2014 – Mar 2017',
      scope: 'Device certification and quality assurance for the Andromax smartphone and MiFi lines.',
      points: [
        'Built and executed test plans covering network compatibility, software functionality and hardware components.',
        'Led testing for smartphone and MiFi products through to launch with minimal post-launch defects and no critical issues.',
        'Coordinated cross-functional resolution with developers and vendors on identified defects.',
        'Fed back into automated testing processes, cutting test cycle time and helping hold project timelines.',
        'Conducted factory inspection in Shenzhen, China — production process, quality control, and adherence to manufacturing standards and component termsheets.',
        'Troubleshot devices at the R&D principal in Hsinchu, Taiwan, reducing device-related technical faults.',
      ],
      tags: ['QA / Test Engineering', 'Hardware', 'Vendor Management', 'International'],
    },
  ],

  keyProjects: [
    {
      title: 'Digital connectivity acceleration across eastern Indonesia',
      place: 'Ternate & Makassar',
      period: '2017 – present',
      detail:
        'Sustained role in extending connectivity across urban, suburban, rural and underserved areas — the part of the country where infrastructure is hardest to build and hardest to keep running.',
    },
    {
      title: 'Natural disaster network recovery task force',
      place: 'Masamba, South Sulawesi',
      period: 'Jul 2020',
      detail:
        'Disaster response leadership during the Masamba flood, restoring critical communications infrastructure under crisis conditions. Recognised at board level (BOD-1).',
    },
    {
      title: 'Dashboard and reporting innovation',
      place: 'Makassar',
      period: 'Aug 2023',
      detail:
        'Designed and shipped an internal dashboard and reporting system that replaced manual status collection with at-a-glance operational visibility, improving decision quality and speed.',
    },
  ],

  achievements: [
    {
      title: 'Top 50 — IndiHome Innovation Centre',
      org: 'PT Telkom Group',
      date: 'May 2017',
      detail:
        'Selected from 1,000+ submissions company-wide. Proposed "IndiTouch", a supplementary business concept to grow profit and strengthen the IndiHome brand.',
    },
    {
      title: 'Top 100 — Telkom Group Hack Idea 2019',
      org: 'PT Telkom Group',
      date: 'Aug 2019',
      detail:
        'Selected from 1,200+ submissions nationwide. Led the proposal for "Jastip.in", a personal-shopper application positioned as a new revenue engine.',
    },
    {
      title: 'Digital Talent Scholarship — Professional Academy',
      org: 'Ministry of Communication and Informatics (Kominfo), Republic of Indonesia',
      date: 'Apr 2021',
      detail: 'National government scholarship programme; completed the Cisco CyberOps Associate track.',
    },
    {
      title: 'Technical Assistance Team — Masamba recovery',
      org: 'PT Telkom Indonesia — board-level recognition (BOD-1)',
      date: 'Jul 2020',
      detail: 'Recognised for disaster-response contribution restoring network infrastructure in Luwu Utara.',
    },
  ],

  /** Credentials already held. These feed the "Earned" markers on the certifications page. */
  credentials: [
    { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: 'Jan 2026', level: 'Mastery', domain: 'Security' },
    { name: 'Cisco CyberOps Associate', issuer: 'Cisco / Kominfo Digital Talent Scholarship', date: 'Apr 2021', domain: 'Security' },
    { name: 'Cisco Cybersecurity Foundation', issuer: 'Cisco', date: '—', domain: 'Security' },
    { name: 'BlueTeam.id Cybersecurity Training', issuer: 'BlueTeam.id', date: '—', domain: 'Security' },
    { name: 'ISO/IEC 27001:2022 ISMS awareness', issuer: 'Internal — with ISO 9001:2015 QMS and ISO 22301:2019 BCMS', date: '2025', domain: 'Governance' },
    { name: 'SDN / NFV and SD-WAN', issuer: 'Internal technical programme', date: 'Apr 2024', domain: 'Networks' },
    { name: 'Google Digital Marketing & E-commerce', issuer: 'Google Career Certificates', date: 'Dec 2023', domain: 'Other' },
    { name: 'Great People Managerial Program', issuer: 'PT Telkom Indonesia', date: '—', domain: 'Leadership' },
  ],

  skills: [
    {
      group: 'Network & telecom',
      items: [
        'FTTH / OLT / GPON', 'Metro Ethernet', 'IP core & IPRAN', 'MPLS backhaul', 'DWDM / SL-WDM',
        'Mobile broadband (Node B)', 'Satellite & radio', 'Topology design', 'SDN / NFV / SD-WAN',
      ],
    },
    {
      group: 'Operations',
      items: [
        'Service assurance', 'Incident & escalation management', 'SLA / SLG management',
        'Root cause analysis', 'Fulfilment operations', 'SOP development', 'Vendor management',
        'Dashboards & operational reporting',
      ],
    },
    {
      group: 'Security',
      items: [
        'Ethical hacking (CEH)', 'Security operations fundamentals (CyberOps)', 'Blue team fundamentals',
        'ISO/IEC 27001 ISMS awareness', 'Business continuity (ISO 22301)',
      ],
    },
    {
      group: 'Leadership & delivery',
      items: [
        'Technical team leadership', 'Cross-functional coordination', 'Crisis management',
        'Project management', 'Quality assurance & control', 'Training delivery',
      ],
    },
  ],

  languages: [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Professional working — IELTS 6.5' },
  ],

  interests: [
    { title: 'Running & basketball', detail: 'Organised regular practice and running sessions for colleagues.' },
    {
      title: 'Labour union leadership',
      detail:
        'Headed the Consultation and Advocacy department — advised workers and their families on legal rights and mediated disputes toward fair resolution.',
    },
    { title: 'Blood donation', detail: 'Initiated and organised multiple donation drives.' },
  ],
};


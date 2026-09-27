export type Pillar = {
  id: string;
  n: number;
  title: string;
  why: string;
  items: { title: string; detail: string }[];
};

export const pillars: Pillar[] = [
  {
    id: 'g1',
    n: 1,
    title: 'Proof of work',
    why: 'Global hiring is remote-first screening. Nobody can visit your office or check your reputation locally — your public artifacts are the only thing standing in for a reference.',
    items: [
      { title: 'This site, on a custom domain', detail: 'One URL in every application, DM, and email signature. A domain costs about $12/year and changes how you are read.' },
      { title: 'Six pinned repos, curated', detail: 'Each with a README, a screenshot or GIF, a live link where applicable, and a "what I would do differently" section. Archive everything else.' },
      { title: '40+ published technical writeups', detail: 'At one per week this is inevitable. It is also the single strongest differentiator available to someone without work experience.' },
      { title: 'Two flagship projects with live URLs', detail: 'Things a stranger can use in under 30 seconds without installing anything.' },
      { title: 'Verified badge profile', detail: 'Credly, ISC2, and platform profiles (TryHackMe, HTB, CTFtime) linked in one place so claims are checkable.' },
      { title: 'A sanitised professional report', detail: 'A pentest report, incident report, or network design document. This proves you can produce a deliverable, which is what you are actually hired to do.' },
    ],
  },
  {
    id: 'g2',
    n: 2,
    title: 'Public presence and recognition',
    why: 'Recognition is not vanity — it is the literal evidentiary requirement of the best visa routes, and the mechanism by which inbound opportunities replace cold applications.',
    items: [
      { title: 'Weekly publishing cadence, held for a year', detail: 'Consistency beats brilliance. A year of weekly posts makes you findable; a viral post does not.' },
      { title: 'LinkedIn in English, optimised for recruiter search', detail: 'Headline names the role you want. Skills section filled with the exact keywords in your target postings. Open to work set to remote and your target countries.' },
      { title: 'One technical community, participated in properly', detail: 'A Discord, a local chapter, an OSS project. Answer questions. This is where referrals actually come from.' },
      { title: 'Two open-source contributions merged', detail: 'Pick tooling you already use — Sigma rules, Nornir, NetBox plugins, an eval framework. A merged PR is a free, verifiable credential.' },
      { title: 'One conference or meetup talk', detail: 'Start with a local meetup or university club, then submit a CFP. Slides and a recording published.' },
      { title: 'Three recommendation letters secured', detail: 'From three different established organisations. Start building these relationships in year one, not the month you apply — this is exactly what the UK Global Talent route requires.' },
      { title: 'Mentor someone publicly', detail: 'Evidence of standing in the field, and the fastest way to find your own knowledge gaps.' },
    ],
  },
  {
    id: 'g3',
    n: 3,
    title: 'Communication and language',
    why: 'This is the most common silent rejection reason for technically strong candidates from non-English-speaking countries, and it is entirely fixable.',
    items: [
      { title: 'IELTS 7.0+ or equivalent', detail: 'Required or strongly weighted for most skilled-work visas, and a hard filter at many remote-first companies. Take it once, properly.' },
      { title: 'Speak your projects aloud, recorded', detail: 'Ten five-minute recordings explaining your own work. Painful to watch, extremely effective. Most interview failure is explanation failure, not knowledge failure.' },
      { title: 'Written async discipline', detail: 'Status updates, design docs, clear bug reports, decision records. Remote companies interview for this whether they say so or not.' },
      { title: 'STAR stories prepared, ten of them', detail: 'Situation, task, action, result — with numbers. Built from your own labs and projects, since you may not have work examples yet.' },
      { title: 'Mock interviews in English', detail: 'Pramp, interviewing.io, or a study partner. Technical content in a second language is a separate skill from the technical content.' },
      { title: 'Salary research and negotiation script', detail: 'Know the band for your role in each target market before the first call. Levels.fyi, Glassdoor, and regional salary surveys. Never name the first number.' },
    ],
  },
  {
    id: 'g4',
    n: 4,
    title: 'Hiring pipeline mechanics',
    why: 'Talent without process loses to mediocrity with process. Treat the job search as an engineering problem with metrics.',
    items: [
      { title: 'A named target list of 40 companies', detail: 'Remote-first companies, regional consultancies, cloud providers, security vendors. Research each one. Generic applications convert at roughly nothing.' },
      { title: 'A CV variant per role family', detail: 'Same facts, reordered and reworded to match the posting. ATS-parseable: no tables, no columns, no graphics, standard section headings.' },
      { title: 'Apply before you feel ready', detail: 'Start at month 13, not month 24. Interview feedback is a faster and cheaper diagnostic than another six months of study.' },
      { title: 'Referral over application, always', detail: 'A referral is roughly an order of magnitude more likely to get a first call. This is what the community participation in pillar 2 is for.' },
      { title: 'Track your funnel', detail: 'Applications sent, responses, first calls, technical rounds, offers. If response rate is low, the CV is wrong. If technical rounds fail, the skills are the gap. Diagnose, do not guess.' },
      { title: 'A take-home you already built', detail: 'When asked for a code sample, having a polished repo ready is worth days. Prepare this before you need it.' },
      { title: 'Freelance or bounty income as a bridge', detail: 'Upwork, bug bounties, or small local contracts. Paid work is paid work on a CV, and it solves the no-experience deadlock.' },
    ],
  },
];

export type Market = {
  region: string;
  flag: string;
  demandNote: string;
  frameworks: string[];
  visas: { name: string; detail: string }[];
  certBias: string;
};

export const markets: Market[] = [
  {
    region: 'Remote-first / global',
    flag: '🌐',
    demandNote:
      'The most accessible entry point, and the most competitive. You are competing globally on price and proof, which means vendor-neutral credentials and public artifacts matter more here than anywhere else.',
    frameworks: ['SOC 2', 'ISO 27001', 'NIST CSF 2.0'],
    visas: [
      { name: 'No visa needed', detail: 'Employment of record providers (Deel, Remote.com, Oyster) let companies hire you locally without a legal entity in your country. Learn which ones your target companies use.' },
      { name: 'Contractor setup', detail: 'Register properly, understand your local tax treatment of foreign income, invoice in USD/EUR, and use Wise or Payoneer. Being easy to pay is a real competitive advantage.' },
      { name: 'Digital nomad visas', detail: 'Portugal, Spain, Estonia, Indonesia (E33G), UAE, and others offer remote-work residence permits with income thresholds. Useful for timezone positioning.' },
    ],
    certBias:
      'Vendor-neutral and practical: Security+, OSCP/PNPT, CCNA, AWS. Overlap at least four hours with your employer\'s timezone and say so explicitly in your application.',
  },
  {
    region: 'Europe (EU) & United Kingdom',
    flag: '🇪🇺',
    demandNote:
      'Deep, stable demand — especially for Microsoft-stack SOC work, ISO 27001 practitioners, and network engineers with automation skills. Regulatory pressure from NIS2 and DORA is actively creating security headcount.',
    frameworks: ['GDPR', 'NIS2', 'DORA (financial services)', 'ISO/IEC 27001:2022', 'EU AI Act'],
    visas: [
      { name: 'UK Global Talent (Digital Technology)', detail: 'Endorsement-based, no job offer required, leads to settlement. Explicitly covers AI, cybersecurity, software engineering, data science, and platform engineering — and has expanded to quantum, blockchain, and advanced cyber. AI and cyber applications often get prioritised handling (roughly 3 weeks vs 5–8). Requires 3 recommendation letters from 3 different well-established organisations recognised as experts in digital technology. Start collecting these early.' },
      { name: 'UK Skilled Worker', detail: 'Requires a sponsoring employer with a licence. Check the sponsor register before applying to any UK company.' },
      { name: 'EU Blue Card', detail: 'Requires a job offer above a salary threshold plus either a degree or, in several member states, sufficient professional experience in ICT. Thresholds and experience rules vary by country — Germany and the Netherlands are the most navigable.' },
      { name: 'Germany Opportunity Card (Chancenkarte)', detail: 'Points-based, lets you enter to look for work without a prior offer. Points for qualifications, experience, language, and age.' },
      { name: 'Netherlands Highly Skilled Migrant', detail: 'Fast, employer-driven via recognised sponsors, with a 30% ruling tax advantage historically available to qualifying migrants.' },
    ],
    certBias:
      'ISO 27001 Lead Implementer/Auditor, Microsoft SC-200/AZ-500, CISSP for senior roles, CCNP. German, Dutch, or French at B1 measurably widens your options even in English-speaking teams.',
  },
  {
    region: 'United States',
    flag: '🇺🇸',
    demandNote:
      'Highest compensation, hardest immigration. The realistic paths are: work remotely as a contractor, get hired by a US company with an entity in your country, or qualify for an extraordinary-ability route.',
    frameworks: ['NIST 800-53 / 800-171', 'CMMC', 'FedRAMP', 'HIPAA', 'SOX', 'DoD 8140'],
    visas: [
      { name: 'H-1B', detail: 'Lottery-based, employer-sponsored, annual cap, low odds. Cap-exempt employers (universities, non-profit research) are the overlooked route.' },
      { name: 'O-1A (extraordinary ability)', detail: 'No lottery. Requires meeting at least 3 of 8 criteria — awards, press coverage, judging others\' work, original contributions, published material, critical role at a distinguished organisation, high salary, membership in exclusive associations. Every pillar-2 item on this page is O-1A evidence. Build deliberately toward it.' },
      { name: 'EB-2 NIW (National Interest Waiver)', detail: 'Self-petitioned permanent residence, no employer needed. Cybersecurity and AI both map well to national-interest arguments. Long timeline, genuinely achievable.' },
      { name: 'L-1', detail: 'Intra-company transfer. Join a US multinational\'s local office, then transfer after a year.' },
    ],
    certBias:
      'DoD 8140/8570 mapping matters if you want federal or defence-adjacent work: Security+ = IAT Level II, CySA+/CISSP for higher levels. Note that most cleared roles require US citizenship, so target commercial instead.',
  },
  {
    region: 'Middle East, Singapore & APAC',
    flag: '🌏',
    demandNote:
      'Often the fastest realistic relocation for an Indonesian-based candidate: strong demand, tax-advantaged packages in the Gulf, geographic and cultural proximity to Singapore and Malaysia, and heavy Fortinet/Huawei presence that Western candidates typically lack.',
    frameworks: ['UAE Information Assurance Standards', 'Saudi NCA ECC & SAMA CSF', 'Singapore MAS TRM & IM8', 'Qatar NIA', 'Australia Essential Eight'],
    visas: [
      { name: 'Singapore Employment Pass', detail: 'Employer-sponsored, subject to the COMPASS points framework — qualifications, salary, and employer diversity all score.' },
      { name: 'Singapore ONE Pass / Tech.Pass', detail: 'For high earners and established tech professionals. ONE Pass needs a high fixed monthly salary; Tech.Pass targets experienced technology leaders. Both allow you to arrive without a specific employer.' },
      { name: 'UAE Golden Visa', detail: '10-year residence for specialised talent, including IT and cybersecurity professionals meeting salary and qualification criteria. Dubai and Abu Dhabi are both actively recruiting security talent.' },
      { name: 'Saudi Premium Residency', detail: 'Massive cybersecurity investment under Vision 2030 and a genuine shortage of qualified practitioners.' },
      { name: 'Australia Skills in Demand', detail: 'Occupation-list driven; ICT security specialist and network engineer both appear. Also check the points-based skilled independent route.' },
      { name: 'Japan Highly Skilled Professional', detail: 'Points-based, fast-tracked permanent residence. Japanese helps substantially but English-only roles exist in security and AI.' },
    ],
    certBias:
      'Fortinet NSE and Huawei HCIA/HCIP carry real weight here and almost none in the West — a genuine arbitrage if this is your target. Add CISSP for Gulf senior roles, ISO 27001 for consulting, and CCNA/CCNP throughout.',
  },
];

export const interviewPrep = [
  {
    track: 'Cybersecurity',
    rounds: [
      'Practical lab: given a box or a pcap, find the issue. Verbalise your methodology while you work — they are scoring the process, not the flag.',
      'Scenario: "an alert fires at 3am, walk me through it." They want triage discipline, escalation judgement, and knowing when to say "I would ask for help".',
      'Depth probe: pick anything on your CV and go three questions deep. Never list something you cannot defend at that depth.',
      'Report/communication: explain a technical finding to a non-technical stakeholder, with business impact and a remediation priority.',
    ],
  },
  {
    track: 'Network Engineering',
    rounds: [
      'Troubleshooting: "users in VLAN 20 cannot reach the file server." Structured layer-by-layer elimination, out loud, with the verification command at each step.',
      'Whiteboard design: build a network for N sites and M users, with redundancy and a budget constraint. Ask clarifying questions before drawing anything.',
      'Protocol depth: BGP path selection, OSPF LSA types, STP convergence. Rote knowledge, so learn it cold.',
      'Automation: "how would you push this change to 200 devices safely?" The answer that gets the offer includes testing and rollback.',
    ],
  },
  {
    track: 'AI / Agentic',
    rounds: [
      'System design for an LLM application: retrieval strategy, caching, cost per request, latency budget, failure modes, and what you would monitor.',
      'Eval design: "how do you know it works?" This is the question most candidates fail. Have a real answer with a real dataset behind it.',
      'Agent architecture: when a workflow beats an agent, tool boundary design, guardrails, and how you cap the damage of a bad run.',
      'Code: ordinary Python engineering. Tests, typing, error handling. Being an "AI engineer" does not exempt you from being an engineer.',
      'Agentic workflow: how you actually use coding agents, and how you review their output. Increasingly an explicit requirement, so treat it as a first-class answer.',
    ],
  },
];

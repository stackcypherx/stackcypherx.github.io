export type Cert = {
  name: string;
  vendor: string;
  track: 'Cyber' | 'Networks' | 'AI' | 'Cloud' | 'Foundation';
  tier: 'Entry' | 'Associate' | 'Professional' | 'Expert';
  /** Approximate exam/course cost in USD. Verify before booking — these move. */
  cost: string;
  format: string;
  /** Honest assessment, not marketing. */
  verdict: string;
  /** When this is the right next move. */
  when: string;
  priority: 'Do it' | 'Worth it' | 'Situational' | 'Later' | 'Skip unless funded';
  url: string;
  /** Already earned — set to the date. Renders an "Earned" marker and mutes the priority. */
  held?: string;
};

export const certs: Cert[] = [
  // ---------- Foundation ----------
  {
    name: 'ISC2 Certified in Cybersecurity (CC)',
    vendor: 'ISC2',
    track: 'Foundation',
    tier: 'Entry',
    cost: 'Periodically free via ISC2 "One Million Certified" — otherwise ~$50 + membership',
    format: '100 MCQ · 2 h · proctored',
    verdict:
      'Genuinely easy, genuinely a real credential, and periodically free. The best first badge purely on risk-adjusted return.',
    when: 'Skip. CEH and CyberOps already cover this ground — this would be a third credential saying the same thing.',
    priority: 'Skip unless funded',
    url: 'https://www.isc2.org/certifications/cc',
  },
  {
    name: 'CompTIA Security+ (SY0-701)',
    vendor: 'CompTIA',
    track: 'Cyber',
    tier: 'Entry',
    cost: '~$400 (voucher bundles and student discounts exist)',
    format: '90 questions incl. performance-based · 90 min',
    verdict:
      'The single most-requested security credential in job postings, and the DoD 8140 IAT Level II baseline. It teaches breadth, not skill — treat it as an ATS key.',
    when: 'Optional paperwork, not a learning goal. Worth the $400 only for the US DoD 8140 IAT II mapping or a posting that names it explicitly — CEH already fills the HR slot.',
    priority: 'Situational',
    url: 'https://www.comptia.org/certifications/security',
  },
  {
    name: 'CompTIA Network+ (N10-009)',
    vendor: 'CompTIA',
    track: 'Networks',
    tier: 'Entry',
    cost: '~$370',
    format: '90 questions · 90 min',
    verdict:
      'Solid, vendor-neutral, DoD-mapped. Heavily overlapping with CCNA — doing both is mostly duplicated effort.',
    when: 'Only if your target employers are not Cisco shops, or you need the DoD mapping. Otherwise go straight to CCNA.',
    priority: 'Situational',
    url: 'https://www.comptia.org/certifications/network',
  },
  {
    name: 'AWS Cloud Practitioner / Azure AZ-900',
    vendor: 'AWS / Microsoft',
    track: 'Cloud',
    tier: 'Entry',
    cost: '~$100 each',
    format: 'MCQ · 90 min',
    verdict:
      'Cheap, fast, and every one of your three tracks ends up in the cloud. Low prestige, decent keyword value.',
    when: 'Month 3–4, as a weekend exercise while you study something harder.',
    priority: 'Worth it',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },

  // ---------- Cyber ----------
  {
    name: 'Certified Ethical Hacker (CEH)',
    vendor: 'EC-Council',
    track: 'Cyber',
    tier: 'Associate',
    cost: '~$1,200 with courseware (already held)',
    format: '125 MCQ · 4 h',
    verdict:
      'Widely recognised by HR and mandatory in a number of government and enterprise tenders, especially across APAC and the Gulf. It is multiple-choice, so it proves breadth rather than hands-on skill — pair it with a practical credential and it does real work on a CV.',
    when: 'Held since January 2026 at Mastery level. The follow-up is a practical credential, not another MCQ exam.',
    priority: 'Do it',
    held: 'Jan 2026',
    url: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/',
  },
  {
    name: 'Cisco CyberOps Associate',
    vendor: 'Cisco',
    track: 'Cyber',
    tier: 'Entry',
    cost: '~$300 (already held, via national scholarship)',
    format: '95–105 questions · 120 min',
    verdict:
      'Genuinely good SOC-oriented content — monitoring, host and network intrusion analysis, incident response. Earned through the Kominfo Digital Talent Scholarship, which is itself a competitive national selection worth naming.',
    when: 'Held since April 2021. Covers most of what Security+ would teach.',
    priority: 'Do it',
    held: 'Apr 2021',
    url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cyberops/cyberops-associate/index.html',
  },
  {
    name: 'CompTIA CySA+ (CS0-003)',
    vendor: 'CompTIA',
    track: 'Cyber',
    tier: 'Associate',
    cost: '~$420',
    format: 'MCQ + performance-based · 165 min',
    verdict:
      'Appears in roughly 35% of SOC analyst postings and increasingly preferred over Security+ for dedicated detection roles. Maps onto the real toolchain: Splunk, Sentinel, CrowdStrike.',
    when: 'Month 8–11, if you chose the blue lane.',
    priority: 'Do it',
    url: 'https://www.comptia.org/certifications/cybersecurity-analyst',
  },
  {
    name: 'Security Blue Team Level 1 (BTL1)',
    vendor: 'Security Blue Team',
    track: 'Cyber',
    tier: 'Associate',
    cost: '~£400',
    format: '24-hour hands-on practical exam',
    verdict:
      'Respected precisely because it is practical and cannot be crammed. The best value blue-team credential available to a self-funded candidate.',
    when: 'Month 11–13, blue lane, after CySA+.',
    priority: 'Do it',
    url: 'https://www.securityblue.team/',
  },
  {
    name: 'Microsoft SC-200 (Security Operations Analyst)',
    vendor: 'Microsoft',
    track: 'Cyber',
    tier: 'Associate',
    cost: '~$165',
    format: 'MCQ + case studies · 100 min',
    verdict:
      'Sentinel, Defender, and KQL. Disproportionately useful in Europe and the Middle East, where the enterprise SOC is overwhelmingly Microsoft.',
    when: 'Blue lane, if your target market is Microsoft-heavy. Check your target job postings first.',
    priority: 'Situational',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/',
  },
  {
    name: 'eJPT (eLearnSecurity Junior Penetration Tester)',
    vendor: 'INE',
    track: 'Cyber',
    tier: 'Entry',
    cost: '~$250 (often bundled with INE training)',
    format: '48 h practical lab exam',
    verdict:
      'Fully hands-on and cheap. Better learning experience than PenTest+; weaker HR recognition. Excellent OSCP on-ramp.',
    when: 'Month 8–10, red lane.',
    priority: 'Worth it',
    url: 'https://security.ine.com/certifications/ejpt-certification/',
  },
  {
    name: 'CompTIA PenTest+ (PT0-003)',
    vendor: 'CompTIA',
    track: 'Cyber',
    tier: 'Associate',
    cost: '~$420',
    format: 'MCQ + performance-based · 165 min',
    verdict:
      'Better for ATS filters and DoD mapping than eJPT; weaker as actual training. Pick based on whether you need paperwork or skill.',
    when: 'Red lane, if job postings in your target market name it.',
    priority: 'Situational',
    url: 'https://www.comptia.org/certifications/pentest',
  },
  {
    name: 'PNPT (Practical Network Penetration Tester)',
    vendor: 'TCM Security',
    track: 'Cyber',
    tier: 'Professional',
    cost: '~$500 (incl. two attempts)',
    format: '5-day practical exam + professional report + live debrief',
    verdict:
      'Better value than OSCP and arguably better training for real consultancy work — the report and debrief are the point. Weaker brand recognition outside the community.',
    when: 'Month 12–15 as the OSCP alternative, or before OSCP as preparation.',
    priority: 'Worth it',
    url: 'https://certifications.tcm-sec.com/pnpt/',
  },
  {
    name: 'OSCP (OffSec Certified Professional)',
    vendor: 'OffSec',
    track: 'Cyber',
    tier: 'Professional',
    cost: '~$1,600+ (PEN-200 course + exam)',
    format: '24 h practical exam + 24 h report',
    verdict:
      'The strongest brand recognition in offensive security and frequently named directly in job descriptions. Expensive, and passing it is a function of machine volume, not course videos.',
    when: 'Month 13–18, red lane, after 40+ machines from the curated list.',
    priority: 'Do it',
    url: 'https://www.offsec.com/courses/pen-200/',
  },
  {
    name: 'CRTP (Certified Red Team Professional)',
    vendor: 'Altered Security',
    track: 'Cyber',
    tier: 'Professional',
    cost: '~$250',
    format: '24 h practical lab exam',
    verdict:
      'Outstanding value for Active Directory attack depth — the specific gap most OSCP holders have. Do this immediately after OSCP.',
    when: 'Month 18–20.',
    priority: 'Do it',
    url: 'https://www.alteredsecurity.com/adlab',
  },
  {
    name: 'CRTO (Certified Red Team Operator)',
    vendor: 'Zero-Point Security',
    track: 'Cyber',
    tier: 'Professional',
    cost: '~£400',
    format: '48 h practical exam',
    verdict:
      'C2 tradecraft, evasion, and realistic operations. This is the credential that moves you from pentester to red teamer.',
    when: 'Month 20–24, after CRTP.',
    priority: 'Worth it',
    url: 'https://training.zeropointsecurity.co.uk/courses/red-team-ops',
  },
  {
    name: 'GIAC (GCIH / GCIA / GCFA)',
    vendor: 'SANS',
    track: 'Cyber',
    tier: 'Professional',
    cost: '$8,000+ with training',
    format: 'Open-book proctored exam',
    verdict:
      'The blue-team gold standard and priced for corporate budgets. Do not self-fund this. Look at SANS work-study and scholarship programmes, or wait for an employer.',
    when: 'Once someone else is paying.',
    priority: 'Skip unless funded',
    url: 'https://www.giac.org/',
  },
  {
    name: 'ISO/IEC 27001 Lead Implementer or Lead Auditor',
    vendor: 'PECB / BSI / others',
    track: 'Cyber',
    tier: 'Professional',
    cost: '~$500–1,500',
    format: 'Course + exam',
    verdict:
      'The credential that gets you into European and Middle Eastern consulting and GRC roles. Pairs unusually well with technical depth — most GRC people cannot do the technical side.',
    when: 'Month 19+, if you want consulting or enterprise security work.',
    priority: 'Situational',
    url: 'https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001',
  },
  {
    name: 'CISSP',
    vendor: 'ISC2',
    track: 'Cyber',
    tier: 'Expert',
    cost: '~$750 exam + annual membership',
    format: '125–175 adaptive questions · 4 h',
    verdict:
      'Requires 5 years of documented paid experience across two domains — but you can pass the exam earlier and hold Associate of ISC2 until you qualify. It is a management credential; do not expect it to prove technical skill.',
    when: 'Pass the exam around year 2–3; claim the full cert when the years are there.',
    priority: 'Later',
    url: 'https://www.isc2.org/certifications/cissp',
  },
  {
    name: 'AWS Security Specialty / Azure AZ-500',
    vendor: 'AWS / Microsoft',
    track: 'Cloud',
    tier: 'Professional',
    cost: '~$300 / ~$165',
    format: 'MCQ · 170 / 120 min',
    verdict:
      'Cloud security is the least saturated corner of the security market. Either of these plus a public misconfiguration lab is a strong combination.',
    when: 'Month 19–24, as your specialisation.',
    priority: 'Worth it',
    url: 'https://aws.amazon.com/certification/certified-security-specialty/',
  },
  {
    name: 'CKS (Certified Kubernetes Security Specialist)',
    vendor: 'CNCF',
    track: 'Cloud',
    tier: 'Professional',
    cost: '~$445 (requires CKA first)',
    format: '2 h hands-on terminal exam',
    verdict:
      'Fully practical, hard to fake, and Kubernetes security expertise is scarce. Requires CKA as a prerequisite, so budget for two exams.',
    when: 'Month 20+, if you are heading toward cloud-native security or platform engineering.',
    priority: 'Situational',
    url: 'https://www.cncf.io/training/certification/cks/',
  },

  // ---------- Networks ----------
  {
    name: 'CCNA 200-301 (v1.1)',
    vendor: 'Cisco',
    track: 'Networks',
    tier: 'Associate',
    cost: '~$300',
    format: '~100 questions · 120 min',
    verdict:
      'Still the credential that opens the first network conversation. The v1.1 refresh added generative AI, machine learning, and cloud network management — and roughly a quarter of the blueprint is automation and programmability. Necessary, not sufficient.',
    when: 'Month 4–7 if networks are your primary track.',
    priority: 'Do it',
    url: 'https://learningnetwork.cisco.com/s/ccna-exam-topics',
  },
  {
    name: 'Cisco DevNet Associate (200-901)',
    vendor: 'Cisco',
    track: 'Networks',
    tier: 'Associate',
    cost: '~$300',
    format: 'MCQ · 120 min',
    verdict:
      'APIs, Python, NETCONF/RESTCONF, CI/CD for networks. Underrated: it certifies exactly the skills carrying the salary premium.',
    when: 'Month 10–13, alongside your NetDevOps project work.',
    priority: 'Worth it',
    url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/devnet/devnet-associate/index.html',
  },
  {
    name: 'CCNP Enterprise (ENCOR + ENARSI)',
    vendor: 'Cisco',
    track: 'Networks',
    tier: 'Professional',
    cost: '~$400 + ~$300',
    format: 'Two exams · 120 min each',
    verdict:
      'The real professional tier. ENCOR alone also serves as the CCIE written. Alternatives with less candidate saturation: JNCIS-ENT, Arista ACE, Aruba ACSA.',
    when: 'Month 16–21.',
    priority: 'Worth it',
    url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html',
  },
  {
    name: 'AWS Advanced Networking Specialty (ANS-C01)',
    vendor: 'AWS',
    track: 'Networks',
    tier: 'Professional',
    cost: '~$300',
    format: 'MCQ · 170 min',
    verdict:
      'Small candidate pool, high demand, and it sits exactly where traditional networking meets cloud. One of the highest signal-to-effort certs on this whole page.',
    when: 'Month 17–22.',
    priority: 'Do it',
    url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
  },
  {
    name: 'Fortinet NSE 4',
    vendor: 'Fortinet',
    track: 'Networks',
    tier: 'Associate',
    cost: '~$400',
    format: 'MCQ',
    verdict:
      'Regionally decisive rather than globally. Fortinet penetration is very high across APAC and the Middle East — if those are your markets, this is more useful than it looks from a Western vantage point.',
    when: 'Situational, driven entirely by your target region.',
    priority: 'Situational',
    url: 'https://www.fortinet.com/training/cybersecurity-professionals',
  },
  {
    name: 'CCIE Enterprise Infrastructure',
    vendor: 'Cisco',
    track: 'Networks',
    tier: 'Expert',
    cost: '~$400 written + ~$1,600 lab',
    format: 'Written + 8 h hands-on lab',
    verdict:
      'A 12–18 month commitment and a genuine career marker. Only worth it if you are staying deep in networking rather than pivoting to platform or security.',
    when: 'Year 3+, deliberately.',
    priority: 'Later',
    url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccie-enterprise-infrastructure/index.html',
  },

  // ---------- AI ----------
  {
    name: 'AWS AI Practitioner (AIF-C01)',
    vendor: 'AWS',
    track: 'AI',
    tier: 'Entry',
    cost: '~$100',
    format: 'MCQ · 90 min',
    verdict:
      'Cheap keyword coverage for ATS filters and recruiter searches. It will not teach you to build anything. That is fine — know what you are buying.',
    when: 'Month 18+, in a weekend, once your projects already exist.',
    priority: 'Worth it',
    url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
  },
  {
    name: 'Microsoft Azure AI Engineer (AI-102)',
    vendor: 'Microsoft',
    track: 'AI',
    tier: 'Associate',
    cost: '~$165',
    format: 'MCQ + case studies · 100 min',
    verdict:
      'More hands-on than the AWS practitioner tier and widely recognised in enterprise. The best single AI certificate if you want exactly one.',
    when: 'Month 18–22.',
    priority: 'Worth it',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
  },
  {
    name: 'Google Professional Machine Learning Engineer',
    vendor: 'Google Cloud',
    track: 'AI',
    tier: 'Professional',
    cost: '~$200',
    format: 'MCQ · 2 h',
    verdict:
      'The most technically rigorous and most practitioner-respected of the cloud AI certs. Also the most ML-heavy — less aligned with LLM application work than its name suggests.',
    when: 'Only if you want genuine ML depth, not just LLM application engineering.',
    priority: 'Situational',
    url: 'https://cloud.google.com/learn/certification/machine-learning-engineer',
  },
  {
    name: 'NVIDIA DLI certifications',
    vendor: 'NVIDIA',
    track: 'AI',
    tier: 'Associate',
    cost: '~$100–400',
    format: 'Hands-on assessments',
    verdict: 'The right choice specifically for GPU computing and deep-learning infrastructure depth. Narrow, and good at being narrow.',
    when: 'Situational — only if you are going toward training/serving infrastructure.',
    priority: 'Situational',
    url: 'https://www.nvidia.com/en-us/training/',
  },
];

export const certPhilosophy = [
  'Certificates get you into the room. Projects get you the offer. In AI hiring specifically, managers screen portfolio first and credentials second — and the same is increasingly true in security.',
  'Budget a maximum of four certifications per year, and require each one to unlock a specific filter on a specific job posting you have actually read. If you cannot name the posting, do not book the exam.',
  'Never pay for a bootcamp before exhausting the free material: Professor Messer for CompTIA, Jeremy\'s IT Lab for CCNA, PortSwigger Academy for web, the vendors\' own free learning paths for cloud.',
  'Practical, pass/fail, hands-on credentials (OSCP, PNPT, BTL1, CKS, CCIE lab) are worth several multiple-choice certificates each, because they cannot be crammed and everyone in the industry knows it.',
  'One badge per capability. Two certificates covering the same ground is a signal that you prefer studying to shipping — and interviewers read it that way.',
];

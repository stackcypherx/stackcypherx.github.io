import type { Track } from './types';

export const cyber: Track = {
  id: 'c',
  slug: 'cybersecurity',
  title: 'Track 1 — Cybersecurity',
  short: 'Cybersecurity',
  tagline: 'From 84 free rooms to a credential that survives a technical panel.',
  icon: '⛨',
  accent: '#ef4d5a',
  summary:
    'The security market is crowded at the entry level and starving at the proven level. The dividing line is not certificates — it is whether you can be dropped into an unfamiliar system and produce a defensible written finding. This track is built on the 100-day TryHackMe plan from the Cyber Security Learning Tracker, then splits into blue or red, then forces one hard practical credential.',
  roles: [
    'SOC Analyst (Tier 1 → Tier 3)',
    'Detection Engineer',
    'Penetration Tester',
    'Red Team Operator',
    'Application Security Engineer',
    'Cloud Security Engineer',
    'GRC / Security Consultant',
  ],
  marketNote:
    'CompTIA credentials appear in roughly 35–40% of entry and mid-level security postings, which makes Security+ the cheapest way past an ATS filter. CySA+ shows up in about 35% of SOC analyst postings. Neither gets you hired alone — practical, hands-on credentials (OSCP, PNPT, BTL1) are what convert the technical round.',
  phases: [
    {
      id: 'c1',
      title: 'Cyber Security 101 — the 100-day free grind',
      window: 'Month 1–4',
      goal: 'Build breadth and prove to yourself that you actually like this work before spending money on it.',
      exit: '50+ rooms completed with a published log for each week. That number is the filter — below it, specialising is premature.',
      items: [
        {
          title: 'Complete the 84-room free track',
          kind: 'lab',
          detail:
            'Work the curated TryHackMe path in order: intro → Linux → Windows → pentest basics → networking → recon → tooling → scripting → crypto → web → mobile → Wi-Fi → privilege escalation → Active Directory → malware → easy CTFs. Full interactive list on the Labs page.',
          evidence: 'Room-by-room progress tracked here, plus a public HoneyLog entry per study day.',
          links: [{ label: 'Labs → Cyber Security 101 track', url: '/labs' }],
          weight: 6,
        },
        {
          title: 'Streak badges: 3, 7, and 30 days',
          kind: 'signal',
          detail:
            'Trivial-looking, genuinely load-bearing. Consistency is the skill this phase is really testing, and the badges are dated public proof of it.',
          evidence: 'TryHackMe profile badges, linked from your About page.',
          weight: 1,
        },
        {
          title: 'Career orientation done deliberately',
          kind: 'skill',
          detail:
            'Work the "Careers in Cyber", "Learning Cyber Security", and "Starting Out in Cyber Sec" rooms and then write down which three roles you are aiming at and why. Vague ambition is the main reason people stall at month 6.',
          evidence: 'A published note: "The three roles I am targeting, and the gap between me and each."',
          weight: 1,
        },
        {
          title: 'Independent research skill',
          kind: 'skill',
          detail:
            'The "Introductory Researching" room is the most undervalued one on the list. Man pages, source reading, CVE databases, exploit-db, vendor docs, and knowing when to stop searching and start testing.',
          evidence: 'A writeup where you solve something with no walkthrough available — and say so.',
          weight: 1,
        },
        {
          title: 'PortSwigger Web Security Academy — all Apprentice labs',
          kind: 'lab',
          detail:
            'Free, and the single best web security training that exists at any price. Start it in parallel with the THM web rooms rather than after.',
          evidence: 'Academy progress screenshot + a writeup on the vulnerability class you found hardest.',
          links: [{ label: 'Web Security Academy', url: 'https://portswigger.net/web-security' }],
          weight: 4,
        },
        {
          title: 'First CTF event, finished not won',
          kind: 'signal',
          detail:
            'picoCTF for practice, then one live event — TryHackMe Advent of Cyber in December is the friendliest entry point. Solve something, publish the writeup.',
          evidence: 'A CTFtime profile and one team writeup with your name on it.',
          links: [
            { label: 'picoCTF', url: 'https://picoctf.org/' },
            { label: 'CTFtime', url: 'https://ctftime.org/' },
          ],
          weight: 2,
        },
      ],
    },
    {
      id: 'c2',
      title: 'Certify the fundamentals',
      window: 'Month 4–7',
      goal: 'Clear the automated resume filters so a human actually reads your portfolio.',
      exit: 'One vendor-neutral security certification on your Credly profile.',
      items: [
        {
          title: 'ISC2 Certified in Cybersecurity (CC)',
          kind: 'cert',
          detail:
            'Do this first. Periodically free (exam + training) through the ISC2 "One Million Certified in Cybersecurity" programme — check current availability. Low stakes, real credential, teaches exam discipline.',
          evidence: 'ISC2 CC badge.',
          links: [{ label: 'ISC2 CC', url: 'https://www.isc2.org/certifications/cc' }],
          weight: 2,
        },
        {
          title: 'CompTIA Security+ (SY0-701)',
          kind: 'cert',
          detail:
            'The most-requested entry credential in the market and the one that maps to US DoD 8140 IAT Level II — which matters if you ever want US federal or defence-adjacent work. Study with Professor Messer (free) rather than a paid bootcamp.',
          evidence: 'Security+ badge + a published summary of the five domains in your own words.',
          links: [
            { label: 'Security+ objectives', url: 'https://www.comptia.org/certifications/security' },
            { label: 'Professor Messer (free course)', url: 'https://www.professormesser.com/' },
          ],
          weight: 4,
        },
        {
          title: 'Microsoft SC-900 or Google Cybersecurity Certificate',
          kind: 'cert',
          detail:
            'Optional but cheap breadth. SC-900 is useful if you are heading toward Microsoft-shop SOC work (Sentinel/Defender), which is most of the European enterprise market.',
          evidence: 'Badge, and skip this entirely if it would delay Security+.',
          weight: 1,
        },
        {
          title: 'MITRE ATT&CK literacy',
          kind: 'skill',
          detail:
            'Learn the matrix as a working vocabulary, not trivia. Every blue-team interview and half of red-team interviews use it as shared language. Map ten techniques you have actually executed in a lab.',
          evidence: 'A published ATT&CK coverage table for your own home lab.',
          links: [{ label: 'MITRE ATT&CK', url: 'https://attack.mitre.org/' }],
          weight: 2,
        },
        {
          title: 'Write one professional-format report',
          kind: 'project',
          detail:
            'Take any easy box you have already rooted and write it up as a real deliverable: executive summary, scope, methodology, findings with CVSS, evidence, remediation, appendix. This single artifact separates you from thousands of "I did 200 rooms" candidates.',
          evidence: 'A polished PDF report in your portfolio, on a deliberately vulnerable target.',
          weight: 3,
        },
      ],
    },
    {
      id: 'c3',
      title: 'Pick a lane — Blue or Red',
      window: 'Month 7–13',
      goal: 'Stop being a generalist. Depth in one lane is what gets interviews; breadth is what keeps them going.',
      exit: 'Ten pieces of specialist evidence in your chosen lane. Do not run both sub-tracks in parallel.',
      items: [
        {
          title: 'DECIDE: Blue (defence) or Red (offence)',
          kind: 'skill',
          detail:
            'Blue has roughly 5–10× more open roles, more predictable hours, and easier entry. Red pays better at the top, is far more competitive at the bottom, and travels better internationally as a freelancer. There is no wrong answer; there is a wrong "both".',
          evidence: 'Write the decision down, publicly, with your reasoning. Revisit in 6 months, not 6 days.',
          weight: 1,
        },
        {
          title: 'BLUE · CompTIA CySA+ (CS0-003)',
          kind: 'cert',
          detail:
            'Behavioural analytics, threat intelligence, incident response. Maps directly onto the SOC toolchain — Splunk, Microsoft Sentinel, CrowdStrike. Increasingly preferred over generic Security+ for dedicated SOC roles.',
          evidence: 'CySA+ badge.',
          weight: 4,
        },
        {
          title: 'BLUE · SIEM you can actually drive',
          kind: 'skill',
          detail:
            'Pick one and go deep: Splunk (free Fundamentals + free 500MB/day dev licence), Microsoft Sentinel (KQL — highest employability in Europe), or Elastic. Learn the query language properly; everyone can click dashboards.',
          evidence: '25 saved queries/detections in a public repo, with the log samples that trigger them.',
          links: [
            { label: 'Splunk free training', url: 'https://www.splunk.com/en_us/training/free-courses.html' },
            { label: 'KQL tutorial (Microsoft)', url: 'https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators' },
          ],
          weight: 4,
        },
        {
          title: 'BLUE · Detection engineering',
          kind: 'project',
          detail:
            'Sigma rules, ATT&CK mapping, Atomic Red Team to generate telemetry, then detect what you generated. Detection-as-code with tests in CI is a senior signal you can fake-until-you-make on a home lab.',
          evidence: 'A `detections` repo: 15 Sigma rules, each with the Atomic test that fires it and a false-positive note.',
          links: [
            { label: 'Sigma HQ', url: 'https://github.com/SigmaHQ/sigma' },
            { label: 'Atomic Red Team', url: 'https://github.com/redcanaryco/atomic-red-team' },
          ],
          weight: 5,
        },
        {
          title: 'BLUE · SOC and DFIR practice platforms',
          kind: 'lab',
          detail:
            'LetsDefend SOC path, Blue Team Labs Online, HTB Sherlocks, CyberDefenders. Free tiers on these are genuinely sufficient to start — paying buys volume, not a better beginning.',
          evidence: '20 completed investigations, each with a written incident report using a consistent template.',
          links: [
            { label: 'LetsDefend', url: 'https://letsdefend.io/' },
            { label: 'CyberDefenders', url: 'https://cyberdefenders.org/' },
            { label: 'Blue Team Labs Online', url: 'https://blueteamlabs.online/' },
          ],
          weight: 5,
        },
        {
          title: 'BLUE · Forensics toolchain',
          kind: 'skill',
          detail: 'Autopsy, Volatility 3, KAPE, Zimmerman tools, timeline analysis, memory triage, disk imaging and chain of custody.',
          evidence: 'Two full forensic case writeups from CyberDefenders or DFIR CTF images.',
          weight: 3,
        },
        {
          title: 'BLUE · Certification target: BTL1 or SC-200',
          kind: 'cert',
          detail:
            'Security Blue Team Level 1 is a 24-hour hands-on exam and is respected precisely because it is practical. Microsoft SC-200 if your target market is Microsoft-heavy (most of Europe).',
          evidence: 'BTL1 or SC-200 badge.',
          links: [{ label: 'Security Blue Team', url: 'https://www.securityblue.team/' }],
          weight: 5,
        },
        {
          title: 'RED · eJPT or CompTIA PenTest+',
          kind: 'cert',
          detail:
            'eJPT (INE) is fully practical and cheap — the better learning experience. PenTest+ is multiple-choice and better for ATS/HR filters and DoD mapping. If forced to choose one: eJPT for skill, PenTest+ for paperwork.',
          evidence: 'Badge + the lab notes you built while studying.',
          weight: 4,
        },
        {
          title: 'RED · PortSwigger Academy: all Practitioner labs',
          kind: 'lab',
          detail:
            'Finish what you started in phase 1. Complete Practitioner-level across every vulnerability class. Web is where the majority of real bug-bounty and pentest work lives.',
          evidence: 'Full Academy completion screenshot + writeups on five hardest labs.',
          weight: 5,
        },
        {
          title: 'RED · Privilege escalation, both platforms',
          kind: 'skill',
          detail:
            'Linux: SUID, sudo misconfig, cron, capabilities, kernel exploits as last resort. Windows: service permissions, unquoted paths, token impersonation, AlwaysInstallElevated, UAC bypass. Know why each works, not just the command.',
          evidence: 'Your own privesc checklist repo — the one you would use under exam pressure.',
          links: [
            { label: 'GTFOBins', url: 'https://gtfobins.github.io/' },
            { label: 'LOLBAS', url: 'https://lolbas-project.github.io/' },
          ],
          weight: 4,
        },
        {
          title: 'RED · Active Directory fundamentals',
          kind: 'skill',
          detail:
            'Kerberos, Kerberoasting, AS-REP roasting, ACL abuse, delegation, BloodHound methodology. AD is in nearly every enterprise engagement and in nearly every practical exam.',
          evidence: 'A GOAD or Attacktive Directory lab walkthrough, with a defender-side note on each attack.',
          links: [{ label: 'GOAD (Game of Active Directory)', url: 'https://github.com/Orange-Cyberdefense/GOAD' }],
          weight: 5,
        },
        {
          title: 'RED · 40 machines from the OSCP-style list',
          kind: 'lab',
          detail:
            'Work the curated HTB / THM / Proving Grounds list from the tracker (LainKusanagi\'s list). Rule: no walkthrough on the first attempt, and every box gets notes even when you fail.',
          evidence: 'Forty machine writeups. Track them on the Labs page.',
          links: [{ label: 'Labs → OSCP-style machine list', url: '/labs#oscp' }],
          weight: 6,
        },
        {
          title: 'RED · First valid bug bounty finding',
          kind: 'signal',
          detail:
            'HackerOne, Bugcrowd, or Intigriti. Aim for a valid low-severity finding on a wide-scope programme rather than a critical on a hard target. One accepted report is worth a dozen certificates in conversation.',
          evidence: 'A Hall of Fame entry or a disclosed report.',
          weight: 3,
        },
      ],
    },
    {
      id: 'c4',
      title: 'Hard proof',
      window: 'Month 13–19',
      goal: 'Earn one credential that a skeptical senior engineer respects without asking follow-up questions.',
      exit: 'A practical, proctored, pass/fail credential in hand.',
      items: [
        {
          title: 'RED · OSCP (PEN-200) or PNPT',
          kind: 'cert',
          detail:
            'OSCP has the strongest brand recognition globally and is name-checked in job descriptions; PNPT (TCM Security) is far cheaper, includes an AD-focused exam and a report review, and is better value for the learning. Budget honestly — OSCP runs roughly USD 1,600+. Prepare with the machine list, not with videos.',
          evidence: 'OSCP or PNPT badge + a sanitised version of your exam-style report as a portfolio piece.',
          links: [
            { label: 'OffSec PEN-200', url: 'https://www.offsec.com/courses/pen-200/' },
            { label: 'TCM Security PNPT', url: 'https://certifications.tcm-sec.com/pnpt/' },
          ],
          weight: 8,
        },
        {
          title: 'BLUE · GCIH / GCIA, or the budget path',
          kind: 'cert',
          detail:
            'SANS/GIAC is the blue-team gold standard and priced accordingly (USD 8k+) — pursue it on an employer budget, or via a SANS work-study/scholarship. Until then: BTL1 → BTL2, or Splunk/Microsoft role-based certs, plus volume of published investigations.',
          evidence: 'GIAC badge, or BTL2 plus 30 published investigations.',
          weight: 8,
        },
        {
          title: 'RED · Post-OSCP: CRTP → CRTO',
          kind: 'cert',
          detail:
            'CRTP (Altered Security) for AD attack depth at a very fair price; CRTO (Zero-Point Security) for C2 tradecraft, evasion, and realistic red-team operations. This pair is what actually moves you from "pentester" to "red teamer".',
          evidence: 'CRTP and/or CRTO badges + writeups from the post-OSCP red team machine list.',
          weight: 6,
        },
        {
          title: 'Four CTF events in twelve months',
          kind: 'signal',
          detail:
            'Join or build a team — solo CTFing plateaus fast. Publish team writeups. A visible CTFtime ranking is a credential that costs nothing.',
          evidence: 'CTFtime team profile with four rated events and public writeups.',
          weight: 3,
        },
        {
          title: 'Speak once, anywhere',
          kind: 'signal',
          detail:
            'A local meetup, a university club, an online community call. 20 minutes on something you actually did. This is the seed of the "recognition" evidence that visa routes and senior roles both want.',
          evidence: 'Slides published + a recording or photo, linked from your About page.',
          weight: 3,
        },
      ],
    },
    {
      id: 'c5',
      title: 'Specialise, and learn the governance language',
      window: 'Month 19–24+',
      goal: 'Become the specific person a specific team needs — and be able to talk to the people who sign the contract.',
      exit: 'A named specialisation with published work in it, plus fluency in one compliance framework.',
      items: [
        {
          title: 'Cloud security depth',
          kind: 'cert',
          detail:
            'AWS Security Specialty or Azure AZ-500, then Kubernetes: KCSA and CKS. Cloud misconfiguration is where most real-world breach work now happens, and cloud security roles are the least saturated in the market.',
          evidence: 'Badge + a published cloud-misconfiguration lab (deliberately broken Terraform, then hardened).',
          weight: 6,
        },
        {
          title: 'AppSec and DevSecOps',
          kind: 'skill',
          detail:
            'Threat modelling (STRIDE), SAST/DAST/SCA wired into CI, secrets scanning, SBOM and supply-chain basics, secure code review. Highly paid and permanently understaffed.',
          evidence: 'A demo repo with a full security pipeline in GitHub Actions and a written threat model.',
          links: [{ label: 'OWASP ASVS', url: 'https://owasp.org/www-project-application-security-verification-standard/' }],
          weight: 5,
        },
        {
          title: '★ AI security — the scarcest overlap in the market',
          kind: 'project',
          detail:
            'OWASP Top 10 for LLM Applications, MITRE ATLAS, prompt injection and indirect injection, tool-abuse in agentic systems, data exfiltration through agent context, model supply chain. Almost nobody holds both real security depth and real AI depth. You are building both tracks anyway — deliberately fuse them here.',
          evidence: 'An agent red-teaming harness: an automated jailbreak/prompt-injection eval suite with a published findings report.',
          links: [
            { label: 'OWASP Top 10 for LLM Apps', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
            { label: 'MITRE ATLAS', url: 'https://atlas.mitre.org/' },
          ],
          weight: 8,
        },
        {
          title: 'Governance fluency for international roles',
          kind: 'skill',
          detail:
            'ISO 27001:2022 (Lead Implementer or Lead Auditor), NIST CSF 2.0, and the regional rules for your target market — GDPR and NIS2 for the EU, DORA for EU financial services. Consulting and EU enterprise roles screen hard on this.',
          evidence: 'A published ISMS gap-assessment template you built, plus the cert if budget allows.',
          weight: 5,
        },
        {
          title: 'Long horizon: CISSP or CISM',
          kind: 'cert',
          detail:
            'CISSP needs five years of paid, documented experience across two domains — but you can pass the exam earlier and hold Associate of ISC2 until you qualify. Plan it, do not rush it. CISM if you are heading toward management.',
          evidence: 'Associate of ISC2 status now; full CISSP when the years are there.',
          weight: 4,
        },
        {
          title: 'Mentor someone publicly',
          kind: 'signal',
          detail:
            'Teaching is the fastest way to find your own gaps, and mentorship is concrete evidence of standing in the field — which is exactly what endorsement-based visa routes ask for.',
          evidence: 'A mentee who publishes their own progress and credits you.',
          weight: 3,
        },
      ],
    },
  ],
};

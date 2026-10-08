/**
 * Additions beyond the original scope, written as direct advice.
 * These are judgement calls, not research findings, and they are here to be argued with.
 */

export type Rec = {
  n: number;
  title: string;
  claim: string;
  body: string[];
  action: string;
  strength: 'Do this' | 'Strongly consider' | 'Worth thinking about';
};

export const recommendations: Rec[] = [
  {
    n: 1,
    title: 'Spike, do not spread',
    claim: 'Three tracks in parallel produces three mediocre profiles and zero offers.',
    body: [
      'The scope you asked for covers three fields that each take years. Pursued equally, you arrive at month 24 as a plausible junior in all three and a credible candidate for none. Hiring is comparative: you are ranked against people who did one thing for two years.',
      'The fix is T-shaped, with a genuine spike. One primary track gets roughly 70% of your hours and all of your flagship projects. The other two get 15% each and exist to make you unusual, not to make you employable.',
      'My recommendation for your primary: cybersecurity. In your case the argument is stronger than the generic one. You already own the networks track by profession, so studying it as a "track" is largely re-certifying what you do daily. Security is the nearest adjacency, you hold CEH and CyberOps already, and network operations is the discipline security teams most often lack. AI gets deliberate time as the second, not because it is safer, but because the security of agentic systems is where the scarcest work is.',
    ],
    action:
      'Write your primary track choice down publicly, with the reasoning, and revisit it in six months rather than six days.',
    strength: 'Do this',
  },
  {
    n: 2,
    title: 'Aim deliberately at the AI × Security overlap',
    claim: 'It is the scarcest profile in the 2026 market, and your chosen scope already spans it by accident.',
    body: [
      'Security people who genuinely understand LLM systems are rare. AI engineers who genuinely understand attacker tradecraft are rarer. People who hold both are a small group at the junior level, and demand for agentic AI work is growing, and every one of those systems needs someone to attack it.',
      'You do not need to choose between the tracks to get this. The overlap is a deliberate fusion point: OWASP Top 10 for LLM Applications, MITRE ATLAS, prompt injection and indirect injection, tool-abuse chains, exfiltration through agent context, and evaluation harnesses that test for all of it.',
      'The reason this works as a strategy is that it converts your scope from a weakness into a position. "I studied three things" is a weak story. "I secure AI systems, and I can do it because I have both halves" is a strong one.',
    ],
    action:
      'Make the agent red-team harness your single most polished project. Write one article on it. That article is your differentiator for the next two years.',
    strength: 'Do this',
  },
  {
    n: 3,
    title: 'Add a fourth pillar you did not ask for: Cloud & Platform',
    claim: 'All three of your tracks terminate in the cloud, so treating cloud as optional is a structural mistake.',
    body: [
      'Security work is now overwhelmingly cloud security. Network engineering has moved to VPCs, Transit Gateways, and Kubernetes CNI. AI systems live on managed inference and container platforms. There is no version of the next five years where you avoid this.',
      'This does not need to be a fourth study track competing for hours. It is a layer: Linux, Docker, one cloud provider, Terraform, Kubernetes basics, CI/CD. You will touch all of it while doing the other three if you choose your projects deliberately, and you will not if you do not.',
      'The practical consequence: prefer the cloud-flavoured version of every choice. AWS Advanced Networking over another campus routing cert. Cloud security specialty over another general security cert. Deploy your AI projects properly rather than running them locally.',
    ],
    action:
      'Pick one cloud in month 3 and never split your attention across two. Put a billing alarm on it the same day.',
    strength: 'Do this',
  },
  {
    n: 4,
    title: 'The evidence ledger rule',
    claim: 'A milestone that produced no public artifact did not happen.',
    body: [
      'The failure mode for self-taught candidates is unprovable learning more often than insufficient learning. Two years of study with nothing to point at reads identically to two years of nothing.',
      'So make it a hard rule: every checklist item on this site has an evidence line, and you do not tick the box until the artifact exists. A repo, a writeup, a badge, a report, a talk, a merged PR. Certificates of completion and course-dashboard screenshots do not count.',
      'This also solves the motivation problem sideways. Publishing creates a small external commitment that carries you through the weeks where interest runs out, which is the actual reason most people stop at month seven.',
    ],
    action:
      'Refuse to check any box on this site without a link. If you cannot produce the link, the work is not finished.',
    strength: 'Do this',
  },
  {
    n: 5,
    title: 'Publish bilingually: English primary, Indonesian secondary',
    claim: 'The Indonesian-language technical audience is large and badly served, and authority there is cheap to acquire.',
    body: [
      'Your source tracker is in Indonesian, which tells me there is a real community around you. Good English-language security and AI content is abundant and you will be one voice among thousands. Good Indonesian-language content on agent evaluation, detection engineering, or NetDevOps is scarce, so you could become one of the recognised names in months rather than years.',
      'This matters beyond audience size. The evidentiary requirements of the strongest immigration routes are about recognition: the UK Global Talent route wants three recommendation letters from three established organisations, and O-1A wants press, judging, and original contributions. Being visibly the person who teaches a topic in a national-language community generates exactly that evidence. Being the 4,000th English-language SOC blogger does not.',
      'The cost is low: you are writing the piece anyway, and translating your own work is an hour, not a day.',
    ],
    action:
      'English version first for global hiring, Indonesian version second for authority. Track which one gets more engagement and let that inform where you invest.',
    strength: 'Strongly consider',
  },
  {
    n: 6,
    title: 'Treat certifications as ATS keys with a strict budget',
    claim: 'Certificate collecting is a way of feeling productive while avoiding the harder, more valuable work.',
    body: [
      'Hiring managers screen portfolio first and credentials second. Certificates get you into the room; projects get the offer. The correct number of certificates is therefore the smallest number that clears the automated filters for the specific jobs you want.',
      'Budget: four per year maximum, and each one must unlock a filter on a job posting you have actually read. If you cannot name the posting, do not book the exam.',
      'Where you should spend more than feels comfortable is the practical, pass/fail credentials: OSCP, PNPT, BTL1, CKS, the CCIE lab. These cannot be crammed and everyone in the industry knows it, which is exactly why they are worth several multiple-choice certificates each.',
    ],
    action:
      'Before booking any exam, paste the job posting that requires it into your notes. No posting, no exam.',
    strength: 'Do this',
  },
  {
    n: 7,
    title: 'Start applying at month 13, not month 24',
    claim: 'Interview feedback is a faster and cheaper diagnostic than another six months of study.',
    body: [
      'Waiting until you feel ready is a trap: the feeling arrives well after the competence does, and for some people it never arrives at all. Meanwhile every rejection carries information you cannot generate on your own.',
      'A low response rate means the CV or positioning is wrong: a one-week fix. Failing technical rounds means a specific skill gap: a targeted fix. Getting to final rounds and losing means it is communication or competition: a different fix. You cannot distinguish between these from inside your own study plan.',
      'Treat the first twenty applications as instrumentation rather than attempts. Track the funnel: sent, responded, first call, technical, offer. Diagnose from the numbers.',
    ],
    action:
      'Send twenty applications in month 13 regardless of how ready you feel. Record where each one dies.',
    strength: 'Do this',
  },
  {
    n: 8,
    title: 'Build the relationships for recommendation letters starting now',
    claim: 'The best visa routes need three letters from three different established organisations, and those cannot be acquired on demand.',
    body: [
      'The UK Global Talent route requires exactly that: three letters from three different well-established organisations recognised as experts in digital technology. O-1A needs comparable third-party evidence. These are relationship artifacts with a multi-year lead time, and people discover the requirement about two months before they want to move.',
      'The sources are more accessible than they sound: an open-source maintainer whose project you contributed to, a CTF team captain, a conference organiser who accepted your talk, a mentor from the bootcamp community, a security vendor whose tool you wrote about, a university researcher you collaborated with.',
      'The mechanism is simple and slow: contribute something real, stay in contact, be useful without asking for anything. In year two, ask.',
    ],
    action:
      'Keep a private list of ten people who could plausibly write you a letter in 2028. Add to it every quarter. Do something useful for at least one of them per month.',
    strength: 'Strongly consider',
  },
  {
    n: 9,
    title: 'Get paid for something technical before you are "qualified"',
    claim: 'The no-experience deadlock breaks with any paid work at all, and paid work is easier to get than a first job.',
    body: [
      'Small paid work counts as experience on a CV and in visa applications, and it is dramatically easier to obtain than a salaried role. Bug bounties, small local contracts for businesses that need a firewall configured or a website hardened, Upwork engagements, freelance automation scripts, technical writing for vendor blogs.',
      'It also changes how you study, in a useful direction. Client work forces you to finish things, communicate in business terms, and handle the parts that do not appear in labs: scoping, expectation management, invoicing.',
      'For CISSP and similar experience-gated credentials, documented paid work is what starts the clock. Start it early.',
    ],
    action:
      'Target your first paid technical engagement by month 10, at any price. The number matters much less than the fact of it.',
    strength: 'Strongly consider',
  },
  {
    n: 10,
    title: 'Measure leading indicators, not study hours',
    claim: 'Hours studied is the metric people track because it is the one they control, and it predicts nothing.',
    body: [
      'Track instead: writeups published this month, recruiter messages received, interview conversion rate, repos someone else starred or forked, questions you answered in a community, PRs merged, talks submitted.',
      'These are leading indicators of employment in a way that room counts and video hours are not. They also behave better psychologically: they go up when you ship, not when you consume.',
      'Review them monthly. If writeups are flat, the cadence broke and everything downstream will follow. If recruiter inbound is zero after twelve months of publishing, the positioning is wrong, not the volume.',
    ],
    action:
      'One monthly review: six numbers, written down, compared to last month. Fifteen minutes.',
    strength: 'Worth thinking about',
  },
  {
    n: 11,
    title: 'Budget the money honestly, in advance',
    claim: 'The realistic 24-month cost is USD 3,000–5,000, and an unplanned OSCP bill is a common reason people stall.',
    body: [
      'Rough shape: foundations and Security+ around $500; CySA+ or eJPT another $400; CCNA $300; the hard practical credential $500 (PNPT) to $1,600+ (OSCP); cloud and AI certificates $300–600; lab subscriptions $200–400 a year; domain and hosting under $20 a year since this site is free to host.',
      'Sequence it so the expensive item lands after you have evidence that the cheap ones worked. If Security+ and the free labs did not hold your interest, OSCP will not fix that, and you will have learned it for $400 instead of $1,600.',
      'Exhaust the free tier first, deliberately: PortSwigger Academy, OverTheWire, picoCTF, GOAD, Containerlab, Professor Messer, Jeremy\'s IT Lab, cloud free tiers, ISC2 CC when it is free. The Labs page lists the full set. A genuinely large fraction of this plan costs nothing.',
    ],
    action:
      'Write the 24-month budget with dates attached. Book each exam only when the previous milestone produced its artifact.',
    strength: 'Do this',
  },
  {
    n: 13,
    title: 'Your decade in telecom is the asset, not the thing you are leaving behind',
    claim:
      'The instinct when switching fields is to present yourself as a beginner in the new one. That instinct costs you two salary bands and is factually wrong.',
    body: [
      'You are a telecom network operations professional adding a security specialisation, which puts you in a different pile from career changers competing with bootcamp graduates. Those are completely different candidates in a hiring manager\'s mind. One is a risk; the other is the person who already knows what a carrier network does at 3am when it is broken.',
      'What you have that security-only candidates almost never do: carrier-scale network operations across access, transport and IP core; genuine incident command under pressure, including disaster recovery at Masamba; SLA accountability for wholesale customers; leadership of technical teams and helpdesks; and vendor and cross-functional coordination. Detection engineering, network security, OT/telecom security, and incident response all sit directly on top of that, and the roles that combine them are chronically hard to fill.',
      'The positioning follows: not "aspiring SOC analyst" but "network operations engineer specialising into security". The first competes on price with thousands of people. The second competes in a far smaller pool. Every artifact you publish should reinforce it: write the detection that catches an attack on infrastructure you have actually run, not the same Splunk tutorial everyone else publishes.',
      'One concrete thing to check this month: CISSP requires five years of paid experience in two of its eight domains. Communication and Network Security is unambiguous for you, and service assurance arguably reaches Security Operations. If it qualifies, CISSP stops being a year-three ambition and becomes a near-term target, which for Gulf and European senior roles is a genuinely different conversation.',
    ],
    action:
      'Rewrite your LinkedIn headline and CV summary to lead with the specialisation, not the transition. Then verify the CISSP domain mapping against your actual job descriptions.',
    strength: 'Do this',
  },
  {
    n: 12,
    title: 'Plan for the month-seven collapse',
    claim: 'Almost everyone quits between month six and month nine, and knowing that in advance is most of the defence.',
    body: [
      'The pattern is consistent: initial momentum through the novelty phase, a first certificate, then a long stretch where the material is harder, nothing external is rewarding you, and no job has appeared. The tracker you are working from is explicit that the 50-room gate exists partly to filter for exactly this. The field is not forgiving to beginners, and most attrition is motivational rather than intellectual.',
      'What actually works: a public commitment with dates on it (this site), a study partner or community where your absence is noticed, a cadence small enough to sustain on a bad week (one lab, not three hours), and permission to drop volume without dropping the streak.',
      'What does not work: relying on motivation, increasing intensity to compensate, or restarting the plan from scratch when you fall behind. Falling behind is expected and the schedule should absorb it.',
    ],
    action:
      'Decide now what your minimum viable week looks like (one lab and one paragraph is fine) and treat that as the line you never cross, not the target you aim at.',
    strength: 'Do this',
  },
];

import type { Track } from './types';

export const foundation: Track = {
  id: 'f',
  slug: 'foundations',
  title: 'Track 0 — Foundations',
  short: 'Foundations',
  tagline: 'The layer every other track assumes you already have.',
  icon: '⌗',
  accent: '#8b93a7',
  summary:
    'Nobody hires you for this track, and every interview quietly tests it. Linux, packets, Python, Git, and clear written English are the substrate under security, networking, and AI alike. Do this once, properly, and the three specialist tracks stop being hard for the wrong reasons.',
  roles: ['IT Support → Junior Sysadmin', 'NOC Technician', 'Junior Developer'],
  marketNote:
    'This is the phase most self-taught candidates skip, and it is the phase that shows up as "failed the practical" three rounds later. Budget 3 months, not 3 weeks.',
  phases: [
    {
      id: 'f1',
      title: 'Operator basics',
      window: 'Month 0–2',
      goal: 'Become dangerous in a terminal and honest about how a packet reaches a server.',
      exit: 'You can rebuild your whole lab from scratch, from your own notes, without searching.',
      items: [
        {
          title: 'Linux command line fluency',
          kind: 'skill',
          detail:
            'Filesystem, permissions, users/groups, processes, systemd, package managers, SSH, cron, grep/sed/awk, pipes and redirection. Target: you stop reaching for a GUI.',
          evidence: 'A personal `linux-notes` repo — your own cheatsheet, not a copied one.',
          links: [
            { label: 'TryHackMe: Linux Fundamentals 1–3', url: 'https://tryhackme.com/hacktivities?searchTxt=Linux%20Fundamentals' },
            { label: 'OverTheWire: Bandit (levels 0–20)', url: 'https://overthewire.org/wargames/bandit/' },
            { label: 'Linux Journey', url: 'https://linuxjourney.com/' },
          ],
          weight: 3,
        },
        {
          title: 'Subnetting without a calculator',
          kind: 'skill',
          detail:
            'Binary ↔ decimal, CIDR, VLSM, broadcast/network/usable ranges. Target: any /8–/30 question answered in under 60 seconds, on paper.',
          evidence: 'Publish your own subnetting drill script (Python) that generates and grades questions.',
          links: [{ label: 'subnettingpractice.com', url: 'https://subnettingpractice.com/' }],
          weight: 2,
        },
        {
          title: 'TCP/IP and the protocols you will actually debug',
          kind: 'skill',
          detail:
            'OSI vs TCP/IP honestly, ARP, DHCP, DNS resolution end-to-end, HTTP/1.1 vs 2 vs 3, TLS handshake, NAT. Read real packets in Wireshark, not diagrams.',
          evidence: 'A writeup: "What actually happens when I type a URL" — with your own packet captures.',
          links: [
            { label: 'TryHackMe: Introductory Networking', url: 'https://tryhackme.com/hacktivities?searchTxt=Introductory%20Networking' },
            { label: 'Wireshark sample captures', url: 'https://wiki.wireshark.org/SampleCaptures' },
          ],
          weight: 3,
        },
        {
          title: 'Python to working-intermediate',
          kind: 'skill',
          detail:
            'Data structures, functions, classes, virtualenv, requests, argparse, file/JSON handling, error handling, type hints, pytest basics. Enough to automate anything you do twice.',
          evidence: '20+ small utilities in a `python-toolbox` repo, each with a README and a test.',
          links: [
            { label: 'Automate the Boring Stuff (free)', url: 'https://automatetheboringstuff.com/' },
            { label: 'Real Python', url: 'https://realpython.com/' },
          ],
          weight: 3,
        },
        {
          title: 'Bash scripting',
          kind: 'skill',
          detail: 'Variables, loops, conditionals, exit codes, argument parsing, set -euo pipefail. Glue for everything.',
          evidence: 'Your lab-rebuild script, committed and actually used.',
          weight: 1,
        },
        {
          title: 'Git and GitHub as a professional',
          kind: 'skill',
          detail:
            'Branching, rebase vs merge, conflict resolution, meaningful commit messages, PR review etiquette, GitHub Actions basics. Recruiters read your commit history.',
          evidence: 'One merged pull request to a project you do not own.',
          links: [{ label: 'Learn Git Branching (interactive)', url: 'https://learngitbranching.js.org/' }],
          weight: 2,
        },
        {
          title: 'Home lab that survives a reboot',
          kind: 'lab',
          detail:
            'Hypervisor (Proxmox, or VirtualBox/UTM if hardware is tight) + Kali + Ubuntu Server + Windows Server evaluation + pfSense/OPNsense. Snapshots before you break things.',
          evidence: 'A `homelab` repo: network diagram, build steps, and the rebuild script.',
          links: [
            { label: 'Windows Server evaluation ISOs', url: 'https://www.microsoft.com/en-us/evalcenter/' },
            { label: 'Proxmox VE', url: 'https://www.proxmox.com/en/proxmox-virtual-environment/overview' },
          ],
          weight: 3,
        },
        {
          title: 'Cloud fundamentals on a free tier',
          kind: 'skill',
          detail:
            'One cloud, properly: accounts, IAM, VPC/VNet, compute, storage, billing alarms (set these on day one). All three specialist tracks converge here.',
          evidence: 'A Terraform repo that stands up and tears down your sandbox VPC.',
          links: [
            { label: 'AWS Free Tier', url: 'https://aws.amazon.com/free/' },
            { label: 'Azure for Students / free account', url: 'https://azure.microsoft.com/en-us/free/' },
          ],
          weight: 2,
        },
        {
          title: 'Docker and containers',
          kind: 'skill',
          detail:
            'Images vs containers, Dockerfiles, volumes, networks, docker-compose. You need this for labs, for AI apps, and for network simulation with Containerlab.',
          evidence: 'A compose stack you actually run (e.g. your own vulnerable-app lab).',
          weight: 2,
        },
      ],
    },
    {
      id: 'f2',
      title: 'Professional hygiene',
      window: 'Month 2–3 · then maintained forever',
      goal: 'Set up the machinery that turns learning into hireable evidence — before you have anything to show.',
      exit: 'Every hour you study from now on leaves a public trace without extra effort.',
      items: [
        {
          title: 'This site, live and yours',
          kind: 'project',
          detail:
            'A single URL that holds your roadmap, progress, writeups, and certs. One link in every application and DM.',
          evidence: 'The deployed site, with a real custom domain if you can afford ~$12/year.',
          weight: 2,
        },
        {
          title: 'The lab journal habit ("HoneyLog")',
          kind: 'habit',
          detail:
            'Every lab session gets a short log: goal, what you tried, what failed, what you learned, one command worth remembering. This is the single highest-return habit in the whole plan — it is also where your writeups come from for free.',
          evidence: 'A dated entry for every study session, published weekly.',
          weight: 3,
        },
        {
          title: 'Writeup cadence: one per week',
          kind: 'habit',
          detail:
            'One public technical writeup every week, in English, with screenshots and commands. Quality over length — 600 focused words beats 3,000 padded ones.',
          evidence: '52 writeups a year. Nothing else in this plan compounds like this does.',
          weight: 3,
        },
        {
          title: 'GitHub profile that reads like an engineer',
          kind: 'signal',
          detail:
            'Profile README, pinned repos (max 6, curated), every repo has a README with a screenshot/GIF and a "why" section. Delete or archive the abandoned experiments.',
          evidence: 'Six pinned repos you would defend in an interview.',
          weight: 2,
        },
        {
          title: 'English at professional working level',
          kind: 'skill',
          detail:
            'Reading is not the bottleneck — writing and speaking are. Target B2→C1. This is a hard gate for remote roles and a formal gate for most visas.',
          evidence: 'IELTS 7.0+ (or equivalent) certificate, plus 10 recorded 5-minute technical explanations of your own projects.',
          weight: 3,
        },
        {
          title: 'Global-format CV and LinkedIn',
          kind: 'signal',
          detail:
            'One page, ATS-parseable (no tables, no columns, no photo for US/UK), achievement bullets with numbers. LinkedIn headline in English, naming the role you want, not the role you have.',
          evidence: 'A `cv/` folder in this repo, versioned, with a PDF build.',
          weight: 2,
        },
        {
          title: 'Async communication discipline',
          kind: 'skill',
          detail:
            'Written status updates, decision records, clear issue reports, RFC-style design docs. Remote teams hire on this and interview for it implicitly.',
          evidence: 'Three design docs in your repos (one per track) written before the code.',
          weight: 2,
        },
        {
          title: 'Personal OPSEC',
          kind: 'habit',
          detail:
            'Password manager, passkeys/2FA everywhere, full-disk encryption, separate lab VM/identity, never reuse work and lab credentials. Employers in security will look.',
          evidence: 'A short "how I secure my own stack" note — it doubles as an interview answer.',
          weight: 1,
        },
        {
          title: 'Spaced repetition for the exam-heavy parts',
          kind: 'habit',
          detail:
            'Anki for ports, protocols, CLI flags, acronyms, exam facts. 15 minutes a day removes most cert-cramming pain.',
          evidence: 'A shared Anki deck you publish — useful to others, proof of rigour for you.',
          weight: 1,
        },
      ],
    },
  ],
};

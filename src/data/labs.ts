/**
 * Lab inventory.
 *
 * The TryHackMe track below is transcribed from the "Cyber Security Learning Tracker"
 * spreadsheet (THM Free Rooms tab) — 84 rooms across 17 topics (the sheet's three "Get Badge" rows are rendered as streak milestones rather than rooms), designed as a ~100-day
 * plan with a 50-room checkpoint before moving on to mentored study.
 *
 * The room links point at TryHackMe's hacktivities search rather than hardcoded room
 * slugs: THM slugs are not derivable from room titles (e.g. "Windows Fundamentals 1"
 * lives at /room/windowsfundamentals1xbx), and a search link that always resolves is
 * better than a direct link that silently 404s. Some rooms have moved from free to
 * premium under TryHackMe's current policy — where that happens, the free alternatives
 * in `alternatives` below cover the same ground.
 *
 * The machine lists are LainKusanagi's public OSCP-like and post-OSCP red team lists,
 * as included in the same tracker.
 */

export type Room = {
  /** Room title as listed by TryHackMe. */
  n: string;
  /** What it teaches, in English. */
  d: string;
  /** Original Indonesian description from the tracker. */
  id?: string;
};

export type RoomGroup = {
  icon: string;
  topic: string;
  /** Why this block exists in the sequence. */
  why: string;
  rooms: Room[];
  /** Streak badge or checkpoint that lands at the end of this block. */
  milestone?: string;
};

export const thmSearch = (name: string) =>
  `https://tryhackme.com/hacktivities?searchTxt=${encodeURIComponent(name)}`;

export const roomGroups: RoomGroup[] = [
  {
    icon: '🏁',
    topic: 'Intro',
    why: 'Learn the platform and, more importantly, learn how to get unstuck without a walkthrough.',
    milestone: 'Badge: 3-day streak → then 7-day streak',
    rooms: [
      { n: 'Welcome', d: 'Platform orientation and how rooms work.', id: 'Pengenalan dasar platform TryHackMe.' },
      { n: 'Tutorial', d: 'Using THM tooling, attack boxes, and flags.', id: 'Panduan teknis cara menggunakan tools di THM.' },
      { n: 'OpenVPN', d: 'Connecting your own machine to the THM network — the setup you will reuse constantly.', id: 'Cara menghubungkan mesin lokal ke jaringan THM.' },
      { n: 'Learning Cyber Security', d: 'Map of the field before you commit to a direction.', id: 'Gambaran umum jalur karier di dunia siber.' },
      { n: 'Starting Out In Cyber Sec', d: 'Realistic first steps and common early mistakes.', id: 'Langkah awal memulai belajar keamanan siber.' },
      { n: 'Careers in Cyber', d: 'What the actual roles are and what they do daily.', id: 'Cari tahu ada role apa saja di dunia keamanan siber.' },
      { n: 'Introductory Researching', d: 'The most undervalued room on this list: finding answers independently.', id: 'Seni mencari informasi dan solusi secara mandiri.' },
      { n: 'Regular expressions', d: 'Regex for log hunting, parsing, and grep that actually works.', id: 'Belajar pola karakter (Regex) untuk pencarian data.' },
    ],
  },
  {
    icon: '🐧',
    topic: 'Linux',
    why: 'Every offensive and defensive tool you will touch assumes this.',
    rooms: [
      { n: 'Linux Fundamentals Part 1', d: 'Shell navigation, files, and core commands.', id: 'Dasar-dasar perintah terminal Linux bagian 1.' },
      { n: 'Linux Strength Training', d: 'Drill the command line until it is reflex.', id: 'Pelajari/memperkuat keterampilan baris perintah Linux.' },
      { n: 'Linux Modules', d: 'System modules and kernel-level components.', id: 'Belajar mengenai modul-modul sistem pada Linux.' },
    ],
  },
  {
    icon: '🪟',
    topic: 'Windows',
    why: 'Enterprise reality: most targets and most SOC alerts are Windows.',
    rooms: [
      { n: 'Windows Fundamentals 1', d: 'Navigation, filesystem, and the GUI/CLI surfaces.', id: 'Pengenalan navigasi dan sistem operasi Windows.' },
      { n: 'Windows Fundamentals 2', d: 'System and user management, services, registry.', id: 'Belajar manajemen sistem dan user di Windows.' },
      { n: 'Windows Fundamentals 3', d: 'Security settings, Defender, event logging.', id: 'Pengaturan keamanan tingkat lanjut pada Windows.' },
    ],
  },
  {
    icon: '🛡️',
    topic: 'Pentest foundations',
    why: 'Method before tools. People who skip this stay script-runners.',
    rooms: [
      { n: 'Pentesting Fundamentals', d: 'Engagement types, scope, ethics, rules of engagement.', id: 'Memahami teori dan etika penetration testing.' },
      { n: 'The Hacker Methodology', d: 'Structured attack phases — the mental model for everything after.', id: 'Memahami langkah-langkah serangan siber terstruktur.' },
      { n: 'Basic Pentesting', d: 'First end-to-end practical: enumerate, exploit, escalate.', id: 'Praktek langsung teknik pentesting dasar.' },
      { n: 'Physical Security Intro', d: 'Badge cloning, lock bypass, tailgating — the attack surface people forget.', id: 'Keamanan dari sisi akses fisik bangunan/server.' },
      { n: 'Intro to Cyber Threat Intel', d: 'CTI concepts, IOCs, and how intel drives defence.', id: 'Memperkenalkan intelijen ancaman siber dan topik terkait.' },
      { n: 'OpenVAS', d: 'Automated vulnerability scanning and reading its output critically.', id: 'Penggunaan alat scanning kerentanan otomatis.' },
    ],
  },
  {
    icon: '📡',
    topic: 'Networking',
    why: 'This block is where Track 1 and Track 2 share a spine — do it once, benefit twice.',
    rooms: [
      { n: 'Introductory Networking', d: 'OSI model and core internet protocols.', id: 'Belajar model OSI dan protokol dasar internet.' },
      { n: 'HTTP in detail', d: 'Requests, responses, headers, methods, cookies — prerequisite for all web work.', id: 'Membedah protokol web HTTP secara mendalam.' },
      { n: 'DNS in detail', d: 'Resolution chain, record types, and DNS as an attack and exfiltration channel.', id: 'Memahami sistem penamaan domain di internet.' },
      { n: 'Dumping Router Firmware', d: 'Extracting and inspecting embedded device firmware.', id: 'Teknik mengambil data dari firmware perangkat router.' },
      { n: 'Network Services', d: 'Enumerating and exploiting SMB, Telnet, FTP misconfigurations.', id: 'Pelajari, identifikasi dan exploit kesalahan konfigurasi jaringan.' },
      { n: 'Network Services 2', d: 'NFS, SMTP, MySQL — the second half of the service sweep.', id: 'Pelajari, identifikasi dan exploit kesalahan konfigurasi jaringan.' },
    ],
  },
  {
    icon: '🔍',
    topic: 'Reconnaissance & OSINT',
    why: 'Recon quality determines everything downstream. Most failed boxes are failed enumeration.',
    rooms: [
      { n: 'Passive Reconnaissance', d: 'Gathering intelligence without touching the target.', id: 'Mengumpulkan data tanpa interaksi langsung ke target.' },
      { n: 'Active Reconnaissance', d: 'Direct enumeration and its detection footprint.', id: 'Teknik pengumpulan data dengan menyentuh target.' },
      { n: 'OhSINT', d: 'Classic OSINT challenge — metadata and small clues.', id: 'Tantangan mencari informasi dari sumber terbuka.' },
      { n: 'Shodan.io', d: 'Internet-wide device and service search.', id: 'Menggunakan search engine untuk perangkat IoT.' },
      { n: 'Google Dorking', d: 'Advanced search operators for exposed data.', id: 'Teknik pencarian canggih menggunakan Google.' },
      { n: 'Sakura Room', d: 'Full OSINT investigation scenario — genuinely hard, genuinely worth it.', id: 'OSINT tingkat lanjut dengan skenario investigasi.' },
      { n: 'Searchlight - IMINT', d: 'Image intelligence and geolocation from photographs.', id: 'Belajar intelijen gambar (Image Intelligence).' },
    ],
  },
  {
    icon: '🛠️',
    topic: 'Tooling',
    why: 'Know each tool well enough to explain what it sends on the wire.',
    milestone: 'Badge: 30-day streak',
    rooms: [
      { n: 'Metasploit: Introduction', d: 'Framework structure, modules, payloads, meterpreter.', id: 'Dasar-dasar framework eksploitasi terpopuler.' },
      { n: 'Nmap', d: 'Host discovery, port scanning, service and version detection, NSE scripts.', id: 'Alat utama untuk scanning port dan layanan.' },
      { n: 'Burp Suite: Repeater', d: 'Intercepting and manipulating HTTP requests by hand.', id: 'Belajar manipulasi request web secara berulang.' },
      { n: 'Hydra', d: 'Credential attacks against network and web login services.', id: 'Alat untuk serangan brute force password login.' },
      { n: 'ffuf', d: 'Fast fuzzing for directories, files, parameters, and vhosts.', id: 'Alat fuzzing cepat untuk direktori web.' },
      { n: 'RustScan', d: 'Fast port discovery feeding into nmap.', id: 'Alternatif scanner port yang sangat cepat.' },
      { n: 'TShark', d: 'Packet analysis from the terminal — scriptable Wireshark.', id: 'Analisis paket data melalui terminal.' },
      { n: 'Nessus', d: 'Industry-standard vulnerability scanning and report triage.', id: 'Penggunaan vulnerability scanner tingkat industri.' },
      { n: 'SQLMap', d: 'Automated SQL injection exploitation — after you can do it manually.', id: 'Pelajari penggunaan Sqlmap untuk mengeksploitasi aplikasi web.' },
      { n: 'Intro to OWASP ZAP', d: 'Free Burp alternative, useful for CI-integrated DAST.', id: 'Pelajari cara menggunakan OWASP ZAP dari awal. Alternatif BurpSuite.' },
    ],
  },
  {
    icon: '🐍',
    topic: 'Scripting',
    why: 'The moment you stop repeating manual steps, your effective skill doubles.',
    rooms: [
      { n: 'Python Basics', d: 'Python for security tooling and automation.', id: 'Dasar pemrograman Python untuk cybersecurity.' },
      { n: 'Bash Scripting', d: 'Automating terminal workflows.', id: 'Belajar otomatisasi perintah di terminal Linux.' },
      { n: 'Intro PoC Scripting', d: 'Writing proof-of-concept exploit code — a real differentiator.', id: 'Membuat skrip pembuktian eksploitasi (Proof of Concept).' },
      { n: 'Learn Rust', d: 'Optional. Increasingly present in modern tooling and malware.', id: 'Pengenalan bahasa pemrograman Rust.' },
    ],
  },
  {
    icon: '🔐',
    topic: 'Cryptography',
    why: 'You do not need to break crypto. You need to recognise it and know what it protects.',
    rooms: [
      { n: 'Cryptography for Dummies', d: 'Encryption and decryption concepts from zero.', id: 'Konsep dasar enkripsi dan deskripsi data.' },
      { n: 'Cryptography Basics', d: 'Symmetric encryption, keys, and basic primitives.', id: 'Pelajari dasar-dasar kriptografi dan enkripsi simetris.' },
      { n: 'Crack the hash', d: 'Hash identification and cracking with wordlists.', id: 'Belajar memecahkan berbagai jenis kode hash.' },
      { n: 'Crack The Hash Level 2', d: 'Harder hashes, rules, and masks.', id: 'Tantangan memecahkan hash tingkat menengah.' },
    ],
  },
  {
    icon: '🖥️',
    topic: 'Web security',
    why: 'The largest real-world attack surface, and the section to do most thoroughly. Pair it with PortSwigger Academy.',
    rooms: [
      { n: 'Web Application Basics', d: 'HTTP, URLs, request flow, and how web apps are structured.', id: 'Pelajari dasar-dasar aplikasi web: HTTP, URL, dll.' },
      { n: 'Web Application Security', d: 'Common web weaknesses and how they are found.', id: 'Pelajari web app dan jelajahi beberapa masalah keamanan umum.' },
      { n: 'Detecting Web Attacks', d: 'The blue-team view: spotting web attacks in logs.', id: 'Jelajahi serangan web dan metode deteksi.' },
      { n: 'Vulnerabilities 101', d: 'Classification, CVE/CVSS, and vulnerability research workflow.', id: 'Klasifikasi dan pemahaman jenis kerentanan.' },
      { n: 'SQL Injection', d: 'Manual injection, union attacks, blind injection.', id: 'Memahami serangan injeksi pada database.' },
      { n: 'OWASP Top 10 2025: IAAA Failures', d: 'A01, A07, A09 — identification, authentication, authorisation, and accounting failures.', id: 'Pelajari tentang A01, A07, dan A09 serta kaitannya dengan kegagalan model IAAA terapan.' },
      { n: 'OWASP Top 10 2025: Application Design Flaws', d: 'A02, A03, A06, A10 — design-level weaknesses.', id: 'Pelajari tentang A02, A03, A06, dan A10 serta kaitannya dengan kekurangan desain aplikasi.' },
      { n: 'OWASP Top 10 2025: Insecure Data Handling', d: 'A04, A05, A08 — unsafe handling of data.', id: 'Pelajari tentang A04, A05, dan A08 yang berkaitan dengan penanganan data yang tidak aman.' },
      { n: 'OWASP Juice Shop', d: 'Deliberately vulnerable app — the best single web practice target.', id: 'Lab interaktif untuk praktek eksploitasi web.' },
    ],
  },
  {
    icon: '📱',
    topic: 'Mobile',
    why: 'A narrow but well-paid niche, and almost nobody in the entry pool has touched it.',
    rooms: [
      { n: 'Android Hacking 101', d: 'APK structure, static analysis, and common Android weaknesses.', id: 'Dasar-dasar keamanan dan peretasan aplikasi Android.' },
      { n: 'Mobile Malware Analysis', d: 'Analysing malicious mobile applications.', id: 'Pelajari dan praktikkan analisis malware seluler.' },
    ],
  },
  {
    icon: '📶',
    topic: 'Wireless',
    why: 'Direct overlap with Track 2 wireless fundamentals.',
    rooms: [{ n: 'Wifi Hacking 101', d: 'WPA handshakes, capture, and cracking — plus why WPA3 changes it.', id: 'Pengenalan cara kerja dan kelemahan jaringan Wi-Fi.' }],
  },
  {
    icon: '⬆️',
    topic: 'Privilege escalation',
    why: 'The single highest-value skill for practical exams. Do not rush it.',
    rooms: [
      { n: 'Linux PrivEsc', d: 'SUID, sudo misconfiguration, cron, capabilities, path abuse.', id: 'Teknik meningkatkan hak akses dari user ke root di Linux.' },
      { n: 'Windows PrivEsc', d: 'Service permissions, unquoted paths, token abuse, registry misconfiguration.', id: 'Teknik meningkatkan hak akses di sistem Windows.' },
      { n: 'Sudo Security Bypass', d: 'Exploiting specific sudo misconfigurations.', id: 'Mengeksploitasi izin sudo yang salah konfigurasi.' },
    ],
  },
  {
    icon: '🏰',
    topic: 'Active Directory',
    why: 'In nearly every enterprise engagement and nearly every practical exam.',
    rooms: [
      { n: 'Attacktive Directory', d: 'Enumeration, AS-REP roasting, Kerberoasting, lateral movement.', id: 'Eksploitasi dasar Active Directory pada Windows.' },
      { n: 'Post-Exploitation Basics', d: 'Persistence, credential dumping, pivoting, and cleanup.', id: 'Hal-hal yang dilakukan setelah berhasil masuk ke sistem.' },
    ],
  },
  {
    icon: '🧪',
    topic: 'Malware',
    why: 'Bridges into DFIR and detection engineering.',
    rooms: [
      { n: 'History of Malware', d: 'How malicious software evolved and why that shapes defences.', id: 'Evolusi perangkat lunak berbahaya dari masa ke masa.' },
      { n: 'Basic Malware RE', d: 'Static and dynamic analysis fundamentals.', id: 'Praktik dasar membedah program malware.' },
    ],
  },
  {
    icon: '🚩',
    topic: 'Easy CTF machines',
    why: 'Full kill chains, unguided. This is where the earlier blocks fuse into competence.',
    milestone: 'Checkpoint: 50+ rooms total → ready for mentored study',
    rooms: [
      { n: 'RootMe', d: 'Linux box via web upload vulnerability.', id: 'Mesin Linux tingkat mudah dengan celah upload web.' },
      { n: 'Pickle Rick', d: 'Web enumeration and system access, Rick and Morty themed.', id: 'Room bertema Rick and Morty, fokus pada web dan sistem.' },
      { n: 'Simple CTF', d: 'Exploiting an outdated CMS.', id: 'Latihan mengeksploitasi CMS versi lama.' },
      { n: 'Bounty Hacker', d: 'Recon plus straightforward credential attack.', id: 'Praktek pengintaian dan brute force sederhana.' },
      { n: 'LazyAdmin', d: 'Web admin panel weaknesses to root.', id: 'Eksploitasi web admin yang memiliki kelemahan dasar.' },
      { n: 'Wgel CTF', d: 'Hidden directories into system compromise.', id: 'Fokus pada eksploitasi sistem melalui direktori tersembunyi.' },
      { n: 'Kenobi', d: 'Samba and ProFTPD exploitation, then privesc.', id: 'Eksploitasi layanan Samba dan ProFTPD.' },
      { n: 'Ice', d: 'Windows box via a third-party service.', id: 'Eksploitasi mesin Windows melalui layanan pihak ketiga.' },
      { n: 'Blue', d: 'EternalBlue (MS17-010) — the canonical Windows exploit.', id: 'Mengeksploitasi kerentanan EternalBlue (MS17-010).' },
      { n: 'Vulnversity', d: 'Active recon and file upload exploitation.', id: 'Belajar pengintaian aktif dan eksploitasi upload file.' },
      { n: 'Agent Sudo', d: 'Web plus light cryptography.', id: 'Tantangan web dan kriptografi sederhana.' },
      { n: 'Startup', d: 'Data gathering and basic privilege escalation.', id: 'Fokus pada pengumpulan data dan privesc dasar.' },
      { n: 'Chill Hack', d: 'Comprehensive web-to-root exercise.', id: 'Latihan komprehensif dari web hingga root.' },
    ],
  },
  {
    icon: '🎄',
    topic: 'Annual event',
    why: 'The best-designed free security content of the year, and a natural deadline.',
    rooms: [{ n: 'Advent of Cyber', d: 'Annual December event — 24 days of guided, varied challenges.', id: 'Event tahunan sebelum perayaan Natal yang seru.' }],
  },
];

export const totalRooms = roomGroups.reduce((n, g) => n + g.rooms.length, 0);

/** Other practice platforms, per the tracker's "Platform lain" tab. */
export const platforms = [
  { name: 'PortSwigger Web Security Academy', lane: 'Red', cost: 'Free', note: 'The best web security training at any price. Do all of it.', url: 'https://portswigger.net/web-security' },
  { name: 'Hack The Box', lane: 'Red', cost: 'Free / Paid', note: 'Retired machines need a VIP subscription; active machines are free.', url: 'https://www.hackthebox.com/' },
  { name: 'PentesterLab', lane: 'Red', cost: 'Paid', note: 'Excellent, focused web and code-review exercises.', url: 'https://pentesterlab.com/' },
  { name: 'Proving Grounds (OffSec)', lane: 'Red', cost: 'Free / Paid', note: 'Closest in feel to the OSCP exam. Play tier is free.', url: 'https://www.offsec.com/labs/' },
  { name: 'VulnLab', lane: 'Red', cost: 'Paid', note: 'Strong AD chains — the gap most OSCP candidates have.', url: 'https://www.vulnlab.com/' },
  { name: 'LetsDefend', lane: 'Blue', cost: 'Free / Paid', note: 'SOC simulation with realistic alert queues.', url: 'https://letsdefend.io/' },
  { name: 'CyberDefenders', lane: 'Blue', cost: 'Free / Paid', note: 'Blue-team CTFs and DFIR cases with real artifacts.', url: 'https://cyberdefenders.org/' },
  { name: 'Blue Team Labs Online', lane: 'Blue', cost: 'Free / Paid', note: 'Investigations and challenges with a free tier.', url: 'https://blueteamlabs.online/' },
  { name: 'HTB Sherlocks', lane: 'Blue', cost: 'Free / Paid', note: 'DFIR scenarios on the HTB platform.', url: 'https://www.hackthebox.com/' },
  { name: 'picoCTF', lane: 'Both', cost: 'Free', note: 'Permanently available CTF practice, beginner-friendly.', url: 'https://picoctf.org/' },
  { name: 'OverTheWire', lane: 'Both', cost: 'Free', note: 'Bandit is the best Linux CLI trainer in existence.', url: 'https://overthewire.org/wargames/' },
  { name: 'API Security University', lane: 'Specialisation', cost: 'Free', note: 'API-specific attack surface — underserved and in demand.', url: 'https://university.apisec.ai/' },
  { name: 'Web3 / Smart Contract Security', lane: 'Specialisation', cost: 'Free', note: 'Ethernaut, Damn Vulnerable DeFi. Niche, volatile, high-paying when it pays.', url: 'https://ethernaut.openzeppelin.com/' },
  { name: 'Containerlab', lane: 'Networks', cost: 'Free', note: 'Container-based network labs — the modern way to practise topologies.', url: 'https://containerlab.dev/' },
  { name: 'GOAD — Game of Active Directory', lane: 'Both', cost: 'Free', note: 'Self-hosted vulnerable AD lab. Best free AD practice available.', url: 'https://github.com/Orange-Cyberdefense/GOAD' },
];

/** Free stand-ins for tracker rooms that have moved behind TryHackMe's paywall. */
export const alternatives = [
  { instead: 'Premium THM Linux rooms', use: 'OverTheWire Bandit + Linux Journey', url: 'https://overthewire.org/wargames/bandit/' },
  { instead: 'Premium THM web rooms', use: 'PortSwigger Web Security Academy (free, better)', url: 'https://portswigger.net/web-security' },
  { instead: 'Premium THM AD rooms', use: 'GOAD, self-hosted', url: 'https://github.com/Orange-Cyberdefense/GOAD' },
  { instead: 'Premium THM CTF boxes', use: 'VulnHub images in your own hypervisor', url: 'https://www.vulnhub.com/' },
  { instead: 'Premium THM blue-team rooms', use: 'CyberDefenders free challenges', url: 'https://cyberdefenders.org/blueteam-ctf-challenges/' },
];

/**
 * LainKusanagi's OSCP-like machine list, as carried in the tracker.
 * Difficulty: VE very easy · E easy · M medium · I intermediate · H hard · VH very hard
 */
export type Machine = { n: string; d?: string };
export type MachineSet = { platform: string; category: string; machines: Machine[] };

export const oscpList: MachineSet[] = [
  {
    platform: 'Hack The Box',
    category: 'Linux',
    machines: [
      { n: 'Analytics', d: 'E' }, { n: 'Bashed', d: 'E' }, { n: 'BoardLight', d: 'E' }, { n: 'Broker', d: 'E' },
      { n: 'Busqueda', d: 'E' }, { n: 'Codify', d: 'E' }, { n: 'Cozyhosting', d: 'E' }, { n: 'Devvortex', d: 'E' },
      { n: 'Dog', d: 'E' }, { n: 'Keeper', d: 'E' }, { n: 'Knife', d: 'E' }, { n: 'Nibbles', d: 'E' },
      { n: 'Precious', d: 'E' }, { n: 'UnderPass', d: 'E' }, { n: 'Builder', d: 'M' }, { n: 'Editorial', d: 'M' },
      { n: 'Help', d: 'M' }, { n: 'Irked', d: 'M' }, { n: 'Jarvis', d: 'M' }, { n: 'Linkvortex', d: 'M' },
      { n: 'Magic', d: 'M' }, { n: 'Mentor', d: 'M' }, { n: 'Monitored', d: 'M' }, { n: 'Networked', d: 'M' },
      { n: 'Nineveh', d: 'M' }, { n: 'OpenAdmin', d: 'M' }, { n: 'Pandora', d: 'M' }, { n: 'Pilgrimage', d: 'M' },
      { n: 'Poison', d: 'M' }, { n: 'Popcorn', d: 'M' }, { n: 'Sea', d: 'M' }, { n: 'Solidstate', d: 'M' },
      { n: 'Sunday', d: 'M' }, { n: 'Swagshop', d: 'M' }, { n: 'Tabby', d: 'M' }, { n: 'Tartarsauce', d: 'M' },
      { n: 'UpDown', d: 'M' }, { n: 'Usage', d: 'M' },
    ],
  },
  {
    platform: 'Hack The Box',
    category: 'Windows',
    machines: [
      { n: 'Markup', d: 'VE' }, { n: 'Jerry', d: 'E' }, { n: 'Netmon', d: 'E' }, { n: 'Buff', d: 'E' },
      { n: 'Servmon', d: 'M' }, { n: 'Chatterbox', d: 'M' }, { n: 'Jeeves', d: 'M' }, { n: 'Sniper', d: 'M' },
      { n: 'Querier', d: 'M' }, { n: 'Giddy', d: 'M' }, { n: 'Bounty', d: 'M' }, { n: 'Artic', d: 'M' },
      { n: 'Remote', d: 'M' }, { n: 'Love', d: 'M' }, { n: 'Secnotes', d: 'M' }, { n: 'Access', d: 'M' },
      { n: 'Mailing', d: 'M' }, { n: 'Heist', d: 'M' },
    ],
  },
  {
    platform: 'Hack The Box',
    category: 'Active Directory & Networks',
    machines: [
      { n: 'Return', d: 'E' }, { n: 'Cicada', d: 'E' }, { n: 'Active', d: 'M' }, { n: 'Forest', d: 'M' },
      { n: 'Sauna', d: 'M' }, { n: 'Monteverde', d: 'M' }, { n: 'Timelapse', d: 'M' }, { n: 'Escape', d: 'M' },
      { n: 'Flight', d: 'H' }, { n: 'Blackfield', d: 'H' }, { n: 'TheFrizz', d: 'H' },
      { n: 'Administrator (assumed breach)', d: 'M' }, { n: 'EscapeTwo (assumed breach)', d: 'M' },
      { n: 'Certified (assumed breach)', d: 'M' }, { n: 'Puppy (assumed breach)', d: 'M' },
      { n: 'ProLab: Dante', d: 'Beginner' }, { n: 'ProLab: Zephyr', d: 'I' },
    ],
  },
  {
    platform: 'TryHackMe',
    category: 'Linux',
    machines: [
      { n: 'Thompson', d: 'E' }, { n: 'Kenobi', d: 'E' }, { n: 'GameZone', d: 'E' }, { n: 'Skynet', d: 'E' },
      { n: 'Lazy Admin', d: 'E' }, { n: 'Tomghost', d: 'E' }, { n: 'RootMe', d: 'E' }, { n: 'Silver Platter', d: 'E' },
      { n: 'Mr Robot', d: 'M' }, { n: 'CMesS', d: 'M' }, { n: 'Ultratech', d: 'M' }, { n: 'Zeno', d: 'M' },
      { n: 'Boiler CTF', d: 'M' }, { n: 'Wonderland', d: 'M' }, { n: 'Daily Bugle', d: 'H' }, { n: 'Internal', d: 'H' },
    ],
  },
  {
    platform: 'TryHackMe',
    category: 'Windows',
    machines: [
      { n: 'Steel Mountain', d: 'E' }, { n: 'Alfred', d: 'E' }, { n: 'Blueprint', d: 'E' }, { n: 'Anthem', d: 'E' },
      { n: 'Cyberlens', d: 'E' }, { n: 'Relevant', d: 'M' }, { n: 'Hackpark', d: 'M' }, { n: 'Weasel', d: 'M' },
      { n: 'AllSignsPoint2Pwnage', d: 'M' }, { n: 'Hack Smarter Security', d: 'M' }, { n: 'Year of the Owl', d: 'H' },
      { n: 'Retro', d: 'H' },
    ],
  },
  {
    platform: 'TryHackMe',
    category: 'Active Directory & Networks',
    machines: [
      { n: 'Attacking Kerberos', d: 'E' }, { n: 'Wreath', d: 'E' }, { n: 'Attacktive Directory', d: 'M' },
      { n: 'Vulnnet: Active', d: 'M' }, { n: 'Reset', d: 'H' }, { n: 'Enterprise', d: 'H' }, { n: 'Ledger', d: 'H' },
      { n: 'Corp (assumed breach)', d: 'E' }, { n: 'Lateral Movement and Pivoting', d: 'E' },
      { n: 'Exploiting Active Directory', d: 'M' },
    ],
  },
  {
    platform: 'TryHackMe',
    category: 'Also recommended',
    machines: [
      { n: 'Git Happens', d: 'E' }, { n: 'SQL Injection Lab', d: 'E' }, { n: 'Linux Privilege Escalation', d: 'M' },
      { n: 'Windows Privilege Escalation', d: 'M' }, { n: 'NahamStore', d: 'M' },
      { n: 'Path: Cyber Security 101', d: 'E' }, { n: 'Path: Jr Penetration Tester', d: 'I' },
      { n: 'Path: Offensive Pentesting', d: 'I' },
    ],
  },
  {
    platform: 'OffSec Proving Grounds — Practice',
    category: 'Linux',
    machines: [
      { n: 'Levram', d: 'E' }, { n: 'ClamAV', d: 'I' }, { n: 'Pelican', d: 'I' }, { n: 'Payday', d: 'I' },
      { n: 'Snookums', d: 'I' }, { n: 'Bratarina', d: 'I' }, { n: 'Nibbles', d: 'I' }, { n: 'ZenPhoto', d: 'I' },
      { n: 'Cockpit', d: 'I' }, { n: 'Extplorer', d: 'I' }, { n: 'Walla', d: 'I' }, { n: 'PC', d: 'I' },
      { n: 'Sorcerer', d: 'I' }, { n: 'Astronaut', d: 'I' }, { n: 'Bullybox', d: 'I' }, { n: 'Exfiltrated', d: 'I' },
      { n: 'QuackerJack', d: 'I' }, { n: 'Wombo', d: 'I' }, { n: 'Flu', d: 'I' }, { n: 'Mzeeav', d: 'I' },
      { n: 'Ochima', d: 'I' }, { n: 'SpiderSociety', d: 'I' }, { n: 'Pebbles', d: 'H' }, { n: 'Nukem', d: 'H' },
      { n: 'Sybaris', d: 'H' }, { n: 'Peppo', d: 'H' }, { n: 'Fanatastic', d: 'H' }, { n: 'Roquefort', d: 'H' },
      { n: 'LaVita', d: 'H' }, { n: 'Xposedapi', d: 'H' }, { n: 'Fired', d: 'H' }, { n: 'Vmdak', d: 'H' },
      { n: 'Zab', d: 'H' },
    ],
  },
  {
    platform: 'OffSec Proving Grounds — Practice',
    category: 'Windows',
    machines: [
      { n: 'Kevin', d: 'E' }, { n: 'Internal', d: 'E' }, { n: 'Algernon', d: 'E' }, { n: 'Slort', d: 'I' },
      { n: 'Jacko', d: 'H' }, { n: 'Craft', d: 'H' }, { n: 'Squid', d: 'H' }, { n: 'Nickel', d: 'H' },
      { n: 'MedJed', d: 'H' }, { n: 'Billyboss', d: 'H' }, { n: 'Shenzi', d: 'H' }, { n: 'AuthBy', d: 'H' },
      { n: 'DVR4', d: 'H' }, { n: 'Mice', d: 'H' }, { n: 'Fish', d: 'H' }, { n: 'Hepet', d: 'VH' },
      { n: 'Monster', d: 'VH' },
    ],
  },
  {
    platform: 'OffSec Proving Grounds — Practice',
    category: 'Windows Active Directory',
    machines: [
      { n: 'Hutch', d: 'H' }, { n: 'Vault', d: 'H' }, { n: 'Access', d: 'VH' }, { n: 'Resourced', d: 'VH' },
      { n: 'Nagoya', d: 'VH' }, { n: 'Hokkaido', d: 'VH' },
    ],
  },
  {
    platform: 'VulnLab',
    category: 'Linux & AD chains',
    machines: [
      { n: 'Sync', d: 'E' }, { n: 'Data', d: 'E' }, { n: 'Build', d: 'E' }, { n: 'Forgotten', d: 'E' },
      { n: 'Bamboo', d: 'M' }, { n: 'Baby', d: 'E' }, { n: 'Baby2', d: 'M' }, { n: 'Breach', d: 'M' },
      { n: 'Sweep', d: 'M' }, { n: 'Sendai', d: 'M' }, { n: 'Chain: Trusted', d: 'E' },
      { n: 'Chain: Hybrid', d: 'E' }, { n: 'Chain: Reflection', d: 'M' }, { n: 'Chain: Lustrous', d: 'H' },
      { n: 'Heron (chain)', d: 'M' },
    ],
  },
];

/** Post-OSCP red team list (LainKusanagi). Beyond OSCP scope: advanced AD, evasion, C2, OSINT. */
export const redTeamList: MachineSet[] = [
  {
    platform: 'Hack The Box',
    category: 'Linux',
    machines: [
      { n: 'ScriptKiddie' }, { n: 'Blunder' }, { n: 'Solidstate' }, { n: 'Delivery' }, { n: 'Perfection' },
      { n: 'Alert' }, { n: 'Mailroom' }, { n: 'Luke' }, { n: 'Trickster' }, { n: 'Cat' }, { n: 'Backfire' },
      { n: 'Cypher' }, { n: 'Epsilon (AWS)' }, { n: 'Gobox (AWS)' }, { n: 'Bucket (AWS)' }, { n: 'Stacked' },
      { n: 'Sink' },
    ],
  },
  {
    platform: 'Hack The Box',
    category: 'Windows',
    machines: [
      { n: 'Querier' }, { n: 'Aero' }, { n: 'Mailing' }, { n: 'Atom' }, { n: 'Compiled' }, { n: 'Acute' },
      { n: 'Sniper' }, { n: 'Visual' }, { n: 'Giddy' }, { n: 'Control' }, { n: 'Heist' }, { n: 'Worker' },
    ],
  },
  {
    platform: 'Hack The Box',
    category: 'Active Directory & Networks',
    machines: [
      { n: 'Sauna' }, { n: 'Forest' }, { n: 'Intelligence' }, { n: 'Cascade' }, { n: 'Monteverde' },
      { n: 'Blackfield' }, { n: 'Fuse' }, { n: 'Return' }, { n: 'Timelapse' }, { n: 'StreamIO' }, { n: 'Flight' },
      { n: 'Office' }, { n: 'Freelancer' }, { n: 'Blazorized' }, { n: 'Authority' }, { n: 'Manager' },
      { n: 'Escape' }, { n: 'Scrambled' }, { n: 'Resolute' }, { n: 'Mantis' }, { n: 'Reel' }, { n: 'Outdated' },
      { n: 'Search' }, { n: 'Axlle' }, { n: 'Hospital' }, { n: 'TheFrizz' }, { n: 'Haze' }, { n: 'Scepter' },
      { n: 'Certified (assumed breach)' }, { n: 'Administrator (assumed breach)' },
      { n: 'Vintage (assumed breach)' }, { n: 'EscapeTwo (assumed breach)' }, { n: 'Puppy (assumed breach)' },
      { n: 'ProLab: Zephyr' },
    ],
  },
  {
    platform: 'TryHackMe',
    category: 'Mixed',
    machines: [
      { n: 'Mr Robot' }, { n: 'Grep (OSINT)' }, { n: 'Year of the Owl' }, { n: 'Blaster' }, { n: 'Weasel' },
      { n: 'Hack Smarter Security' }, { n: 'Attacktive Directory' }, { n: 'Attacking Kerberos' },
      { n: 'Wreath Network' }, { n: 'Corp' }, { n: 'Reset' }, { n: 'Vulnnet: Active' }, { n: 'Enterprise' },
      { n: 'Ledger' }, { n: 'OhSINT' }, { n: 'Path: Red Teaming' }, { n: 'Path: Cyber Defense' },
    ],
  },
  {
    platform: 'VulnLab',
    category: 'AD chains & assumed breach',
    machines: [
      { n: 'Forgotten' }, { n: 'Down' }, { n: 'Bamboo' }, { n: 'Escape' }, { n: 'Job' }, { n: 'Job2' },
      { n: 'Lock' }, { n: 'Media' }, { n: 'Baby' }, { n: 'Baby2' }, { n: 'Breach' }, { n: 'Phantom' },
      { n: 'Sweep' }, { n: 'Delegate' }, { n: 'Sendai' }, { n: 'Retro' }, { n: 'Retro2' }, { n: 'Bruno' },
      { n: 'Lustrous2' }, { n: 'Shibuya' }, { n: 'Chain: Trusted' }, { n: 'Chain: Reflection' },
      { n: 'Chain: Hybrid' },
    ],
  },
  {
    platform: 'OffSec Proving Grounds',
    category: 'Windows & AD',
    machines: [
      { n: 'Postfish' }, { n: 'Thor' }, { n: 'Megavolt' }, { n: 'Kevin' }, { n: 'Butch' }, { n: 'Craft' },
      { n: 'Craft2' }, { n: 'Hepet' }, { n: 'Vector' }, { n: 'Symbolic' }, { n: 'Monster' }, { n: 'Compromised' },
      { n: 'Heist' }, { n: 'Nara' }, { n: 'Vault' }, { n: 'Hutch' }, { n: 'Kyoto (buffer overflow)' },
      { n: 'Access' }, { n: 'Resourced' }, { n: 'Nagoya' }, { n: 'Hokkaido' },
    ],
  },
];

export const difficultyKey = [
  ['VE', 'Very Easy'],
  ['E', 'Easy'],
  ['M', 'Medium'],
  ['I', 'Intermediate'],
  ['H', 'Hard'],
  ['VH', 'Very Hard'],
] as const;

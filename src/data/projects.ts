export type Project = {
  id: string;
  title: string;
  track: 'Cyber' | 'Networks' | 'AI' | 'Cross-track';
  tier: 'Starter' | 'Portfolio' | 'Flagship';
  pitch: string;
  /** What it demonstrates to a hiring manager, specifically. */
  signals: string[];
  stack: string[];
  /** Concrete acceptance criteria: when it is genuinely done. */
  done: string[];
  /** Fill in once built. */
  repo?: string;
  live?: string;
  status: 'planned' | 'building' | 'shipped';
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Homelab as code',
    track: 'Cross-track',
    tier: 'Starter',
    pitch:
      'Your entire lab (hypervisor VMs, network segments, vulnerable targets, monitoring) defined in code and rebuildable from scratch with one command.',
    signals: [
      'Infrastructure-as-code discipline before anyone asked for it',
      'Documentation habits that survive contact with your future self',
      'You understand your own environment rather than having clicked it together',
    ],
    stack: ['Terraform', 'Ansible', 'Proxmox/VirtualBox', 'docker-compose', 'Bash'],
    done: [
      'A single command rebuilds the lab from nothing',
      'Network diagram committed as a source file, not a screenshot',
      'README a stranger could follow',
    ],
    status: 'planned',
  },
  {
    id: 'p2',
    title: 'Detection-as-code pipeline',
    track: 'Cyber',
    tier: 'Flagship',
    pitch:
      'Fifteen Sigma rules, each paired with the Atomic Red Team test that triggers it, validated in CI, with documented false-positive characteristics.',
    signals: [
      'Detection engineering: the skill SOCs promote for, beyond what they hire Tier 1 for',
      'Testing rigour applied to security content',
      'MITRE ATT&CK as working vocabulary rather than a poster',
    ],
    stack: ['Sigma', 'Atomic Red Team', 'Splunk or Sentinel/KQL', 'GitHub Actions', 'Python'],
    done: [
      'Every rule has a passing test and a written false-positive note',
      'CI fails when a rule stops matching its test telemetry',
      'An ATT&CK coverage matrix in the README',
    ],
    status: 'planned',
  },
  {
    id: 'p3',
    title: 'Full pentest report on a deliberately vulnerable target',
    track: 'Cyber',
    tier: 'Portfolio',
    pitch:
      'One professionally formatted report against a legal target: executive summary, scope, methodology, findings with CVSS scoring, evidence, remediation guidance, appendices.',
    signals: [
      'You can produce the actual deliverable a client pays for',
      'Written communication under a professional format',
      'Business-impact framing, not just technical findings',
    ],
    stack: ['Kali', 'Burp Suite', 'nmap', 'Markdown → PDF', 'CVSS v4'],
    done: [
      'A PDF that could be sent to a client unchanged',
      'Findings ranked by business risk, not by CVE score alone',
      'Remediation that a developer could actually act on',
    ],
    status: 'planned',
  },
  {
    id: 'p4',
    title: 'Network CI/CD pipeline',
    track: 'Networks',
    tier: 'Flagship',
    pitch:
      'A pull request changes a YAML data model; CI renders configs, spins up a Containerlab topology, runs pyATS assertions, and deploys to the lab on merge, posting a config diff back to the PR.',
    signals: [
      'NetDevOps for real, which is where the salary premium sits',
      'You test network changes before a maintenance window',
      'Software engineering practice applied to infrastructure',
    ],
    stack: ['Containerlab', 'Ansible/Jinja2', 'Nornir', 'pyATS', 'GitHub Actions', 'NetBox'],
    done: [
      'A deliberately broken config is caught by CI and blocked',
      'Demo GIF of the whole flow in the README',
      'An architecture note explaining the design trade-offs',
    ],
    status: 'planned',
  },
  {
    id: 'p5',
    title: 'EVPN/VXLAN fabric, fully automated',
    track: 'Networks',
    tier: 'Portfolio',
    pitch:
      'A spine-leaf data centre fabric generated entirely from a data model, with tenant isolation proven by test rather than asserted.',
    signals: [
      'Modern data centre design, not 2010 campus networking',
      'Comfort with overlay/underlay separation',
      'Automation applied to genuinely complex configuration',
    ],
    stack: ['Containerlab', 'FRR or Arista cEOS', 'Ansible', 'BGP EVPN', 'pytest'],
    done: [
      'Two tenants proven isolated by an automated test',
      'Whole fabric regenerated from one variables file',
      'A failure-scenario writeup (link down, spine loss)',
    ],
    status: 'planned',
  },
  {
    id: 'p6',
    title: 'Production RAG system with real evals',
    track: 'AI',
    tier: 'Flagship',
    pitch:
      'A deployed retrieval-augmented system over a corpus you care about, with citations, honest "I do not know" behaviour, and a published eval table separating retrieval quality from answer quality.',
    signals: [
      'One well-evaluated RAG system outweighs five tutorial clones',
      'You measure rather than assert',
      'End-to-end ownership: data, retrieval, serving, UI, deployment',
    ],
    stack: ['Python', 'FastAPI', 'pgvector or Qdrant', 'Claude/OpenAI API', 'Next.js', 'Ragas'],
    done: [
      'Live URL a stranger can use',
      'A 50-item golden dataset committed to the repo',
      'Eval table in the README with retrieval and generation metrics separated',
      'A named list of known failure modes',
    ],
    status: 'planned',
  },
  {
    id: 'p7',
    title: 'MCP server for your own infrastructure',
    track: 'AI',
    tier: 'Portfolio',
    pitch:
      'A Model Context Protocol server exposing something real (your NetBox lab, your detection rules, your notes) with read-only safety boundaries and a client demo.',
    signals: [
      'Current with the actual integration standard, not last year\'s',
      'Tool design as API design',
      'Security thinking applied to agent capabilities',
    ],
    stack: ['Python or TypeScript', 'MCP SDK', 'NetBox API or your own data'],
    done: [
      'Installable by someone else from the README',
      'Explicit permission boundaries documented',
      'Demo GIF of a real query answered',
    ],
    status: 'planned',
  },
  {
    id: 'p8',
    title: '★ Agent red-team harness',
    track: 'Cross-track',
    tier: 'Flagship',
    pitch:
      'An automated adversarial evaluation suite against your own agent: direct and indirect prompt injection, tool-abuse chains, data exfiltration through context, jailbreak batteries, with a published findings report.',
    signals: [
      'The AI × security overlap, where your two tracks meet. This is your differentiator.',
      'Evaluation engineering plus offensive security in one artifact',
      'Directly relevant to the fastest-growing category of security work',
    ],
    stack: ['Python', 'Promptfoo or DeepEval', 'OWASP LLM Top 10', 'MITRE ATLAS', 'GitHub Actions'],
    done: [
      'Runs in CI against a target agent and produces a scored report',
      'At least one genuine finding against your own system, with the fix',
      'Mapped to OWASP LLM Top 10 categories',
    ],
    status: 'planned',
  },
  {
    id: 'p9',
    title: '★ Network troubleshooting agent (AIOps)',
    track: 'Cross-track',
    tier: 'Flagship',
    pitch:
      'An agent with read-only tools over NetBox, device telemetry, and syslog that answers "why is this slow?" with cited evidence, evaluated against tickets you wrote yourself.',
    signals: [
      'The networks × AI overlap, which is even rarer than AI × security',
      'Agent design constrained by real safety requirements',
      'Measured against a baseline rather than demoed',
    ],
    stack: ['Python', 'Claude Agent SDK or LangGraph', 'NetBox API', 'Prometheus/Grafana', 'MCP'],
    done: [
      'A 30-ticket evaluation set with a scored comparison against a naive baseline',
      'Read-only enforcement demonstrated, not just claimed',
      'A cost-per-investigation figure',
    ],
    status: 'planned',
  },
  {
    id: 'p10',
    title: 'Bilingual technical knowledge base',
    track: 'Cross-track',
    tier: 'Portfolio',
    pitch:
      'Your writeups and notes published in both English and Indonesian, searchable, with the Indonesian versions targeting an audience that is genuinely underserved.',
    signals: [
      'Teaching ability, which is how senior is assessed when you lack years',
      'Audience building: the raw material for recognition-based visa routes',
      'Consistency demonstrated over months, publicly and with dates',
    ],
    stack: ['Astro', 'Markdown', 'client-side search'],
    done: [
      '30+ entries in both languages',
      'Measurable readership (analytics or engagement) you can cite',
      'At least one piece that someone else links to',
    ],
    status: 'planned',
  },
];

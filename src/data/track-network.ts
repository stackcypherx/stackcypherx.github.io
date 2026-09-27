import type { Track } from './types';

export const network: Track = {
  id: 'n',
  slug: 'network-engineering',
  title: 'Track 2 — Network Engineering',
  short: 'Networks',
  tagline: 'CCNA gets you read. Automation gets you paid.',
  icon: '⇄',
  accent: '#2f9e6e',
  summary:
    'Network engineering did not die — it split. The half that only configures switches by hand is shrinking; the half that treats the network as code is the fastest-growing infrastructure specialisation. This track takes you through genuine wire-level fundamentals, then deliberately over-invests in NetDevOps, because that is where the salary premium sits.',
  roles: [
    'Network Engineer',
    'Network Automation Engineer / NetDevOps',
    'Cloud Network Engineer',
    'Site Reliability Engineer (network-leaning)',
    'Network Security Engineer',
    'Network Architect',
  ],
  marketNote:
    'CCNA as a foundation is still worth it; CCNA as your only preparation is not — the market moved past single-certificate entry. In current postings, automation appears in about 33% and Python in about 22%. The premiums are concrete: observability tooling around +USD 38k, CI/CD experience +USD 35k, Terraform +USD 16k over baseline.',
  phases: [
    {
      id: 'n1',
      title: 'Wire-level fundamentals',
      window: 'Month 1–4',
      goal: 'Understand forwarding, not just commands. Commands are looked up; understanding is interviewed.',
      exit: 'You can build a three-router, two-switch, inter-VLAN routed topology from a blank config and explain every line.',
      items: [
        {
          title: 'Switching: VLANs, trunking, STP, EtherChannel',
          kind: 'skill',
          detail:
            'Access vs trunk ports, native VLAN, 802.1Q, STP/RSTP root election and convergence, PortFast/BPDU Guard, LACP. Know what breaks and how it looks when it does.',
          evidence: 'A lab repo with the topology, configs, and a "what I broke and how I found it" section.',
          weight: 3,
        },
        {
          title: 'Routing: static, OSPF, and the concepts under them',
          kind: 'skill',
          detail:
            'Longest-prefix match, administrative distance, route summarisation, OSPF areas/LSA types/DR-BDR election, route redistribution. Draw the LSDB by hand once and it clicks permanently.',
          evidence: 'Documented multi-area OSPF lab with deliberate failure scenarios.',
          weight: 3,
        },
        {
          title: 'Services: DHCP, DNS, NAT, ACLs, QoS basics',
          kind: 'skill',
          detail:
            'DHCP relay, NAT/PAT translation tables, ACL ordering and direction, and why your ACL blocks return traffic. This is 80% of real support tickets.',
          evidence: 'A troubleshooting playbook repo: symptom → likely cause → verification command.',
          weight: 2,
        },
        {
          title: 'Build labs in free simulators and emulators',
          kind: 'lab',
          detail:
            'Cisco Packet Tracer (free, fine for CCNA), then GNS3 or EVE-NG for real images, then Containerlab with FRR/SONiC/Arista cEOS — Containerlab is the modern, automation-friendly choice and looks current on a CV.',
          evidence: 'A `net-labs` repo where every topology is a committed YAML/`.clab` file, not a screenshot.',
          links: [
            { label: 'Containerlab', url: 'https://containerlab.dev/' },
            { label: 'Cisco Packet Tracer (free via Networking Academy)', url: 'https://www.netacad.com/courses/packet-tracer' },
            { label: 'GNS3', url: 'https://www.gns3.com/' },
          ],
          weight: 4,
        },
        {
          title: 'CompTIA Network+ (optional)',
          kind: 'cert',
          detail:
            'Vendor-neutral, maps to US DoD 8140, and useful if your target employers are not Cisco shops. Skip it if you are going straight to CCNA and money is tight — the overlap is heavy.',
          evidence: 'Network+ badge, or a written decision that you are skipping it and why.',
          weight: 2,
        },
        {
          title: 'Structured cabling, optics, and physical reality',
          kind: 'skill',
          detail:
            'Copper vs fibre, single vs multimode, SFP/QSFP form factors, DAC vs AOC, power budgets, PoE, patch-panel discipline. Field engineers notice immediately whether you have touched hardware.',
          evidence: 'A short illustrated note — even from lab gear or photos of a rack you have seen.',
          weight: 1,
        },
      ],
    },
    {
      id: 'n2',
      title: 'CCNA 200-301 (v1.1)',
      window: 'Month 4–7',
      goal: 'Get the one credential that reliably opens the first network-engineering conversation.',
      exit: 'CCNA passed, plus 20 documented labs proving you did more than watch videos.',
      items: [
        {
          title: 'Pass CCNA 200-301 v1.1',
          kind: 'cert',
          detail:
            'Note that the v1.1 refresh added generative AI, machine learning, and cloud network management content — so the exam now formally expects you to understand how AI tooling participates in network operations. Roughly a quarter of the blueprint is automation and programmability.',
          evidence: 'CCNA badge + a public study-notes repo organised by exam domain.',
          links: [
            { label: 'CCNA exam topics', url: 'https://learningnetwork.cisco.com/s/ccna-exam-topics' },
            { label: 'Jeremy\'s IT Lab (free full course)', url: 'https://www.youtube.com/@JeremysITLab' },
          ],
          weight: 6,
        },
        {
          title: 'Wireless fundamentals',
          kind: 'skill',
          detail: 'RF basics, channels and non-overlap, 802.11 generations, WPA2/WPA3, controller vs autonomous AP, roaming.',
          evidence: 'A home Wi-Fi survey writeup with before/after channel planning.',
          weight: 2,
        },
        {
          title: 'Network security fundamentals from the network side',
          kind: 'skill',
          detail:
            'Port security, DHCP snooping, dynamic ARP inspection, 802.1X/NAC, site-to-site VPN, firewall zones. Your security track and this track meet here — exploit it.',
          evidence: 'A hardened-switch baseline config, published with justification per line.',
          weight: 3,
        },
        {
          title: 'IPv6 for real',
          kind: 'skill',
          detail:
            'Addressing, SLAAC vs DHCPv6, link-local, NDP, dual-stack routing. Most candidates hand-wave this; it is an easy differentiator and increasingly non-optional.',
          evidence: 'A dual-stack lab with working IPv6 end-to-end, documented.',
          weight: 2,
        },
      ],
    },
    {
      id: 'n3',
      title: 'NetDevOps — the actual differentiator',
      window: 'Month 7–14',
      goal: 'Stop configuring devices. Start deploying network state from a repository, with tests.',
      exit: 'A pipeline that validates and deploys a network change from a pull request. This is the portfolio piece that changes your salary band.',
      items: [
        {
          title: 'Python for network engineers',
          kind: 'skill',
          detail:
            'Netmiko for SSH, NAPALM for vendor abstraction, Nornir for inventory and parallel execution, Scrapli for speed, TextFSM/ntc-templates for parsing CLI output into structured data.',
          evidence: 'A tool you use weekly — e.g. a config-diff and drift-report script across your lab fleet.',
          links: [{ label: 'Nornir', url: 'https://nornir.readthedocs.io/' }],
          weight: 5,
        },
        {
          title: 'Device APIs: REST, NETCONF/YANG, RESTCONF, gNMI',
          kind: 'skill',
          detail:
            'Read a YANG model, build a NETCONF edit-config payload, subscribe to a gNMI telemetry stream. Understanding models rather than screen-scraping CLI is the line between scripting and engineering.',
          evidence: 'A published comparison: the same change made four ways (CLI, NETCONF, RESTCONF, gNMI) with trade-offs.',
          weight: 4,
        },
        {
          title: 'Configuration as code: Ansible + Jinja2',
          kind: 'skill',
          detail:
            'Inventories, roles, idempotency, network modules, Jinja2 templating from a data model, ansible-vault for secrets. Then generate whole-fabric configs from one YAML source of truth.',
          evidence: 'An Ansible repo that renders and deploys your entire lab fabric from variables.',
          weight: 5,
        },
        {
          title: 'Terraform for network and cloud infrastructure',
          kind: 'skill',
          detail:
            'Providers, state (and why remote state matters), modules, plan/apply discipline, drift. Worth roughly +USD 16k in posted salaries and it is the lingua franca between network and platform teams.',
          evidence: 'A reusable Terraform module (e.g. hub-and-spoke VPC/VNet) published with a README and examples.',
          weight: 4,
        },
        {
          title: 'Source of truth: NetBox or Nautobot',
          kind: 'project',
          detail:
            'Model your lab — sites, racks, devices, interfaces, prefixes, VLANs — then drive Ansible from the NetBox API instead of static inventory. This is how mature network teams actually work.',
          evidence: 'A running NetBox instance (docker-compose, committed) populated by script, feeding your automation.',
          links: [{ label: 'NetBox', url: 'https://github.com/netbox-community/netbox' }],
          weight: 5,
        },
        {
          title: 'Pre-change validation: pyATS and Batfish',
          kind: 'skill',
          detail:
            'pyATS/Genie for operational state snapshots and diffs; Batfish for offline analysis of config intent before you touch production. Being able to say "I tested the change before the window" is a senior behaviour.',
          evidence: 'A test suite that fails a deliberately broken config, in CI.',
          weight: 4,
        },
        {
          title: '★ Network CI/CD pipeline (flagship project)',
          kind: 'project',
          detail:
            'GitHub Actions: lint configs → render templates → spin up Containerlab topology → run pyATS/pytest assertions → deploy to lab on merge → post a diff comment on the PR. This is the single most valuable thing in this track.',
          evidence: 'Public repo with a passing badge, a demo GIF, and an architecture note explaining the design.',
          weight: 8,
        },
        {
          title: 'Observability and streaming telemetry',
          kind: 'skill',
          detail:
            'Telegraf → InfluxDB/Prometheus → Grafana, gNMI subscriptions instead of SNMP polling, syslog pipelines, alerting that does not cry wolf, SLOs for network services. Observability tooling carries roughly a +USD 38k premium.',
          evidence: 'A Grafana dashboard for your lab, with the whole stack in docker-compose in a repo.',
          weight: 5,
        },
      ],
    },
    {
      id: 'n4',
      title: 'Scale, cloud, and edge',
      window: 'Month 14–21',
      goal: 'Move from "a network" to "networks that carry other people\'s money".',
      exit: 'CCNP-level knowledge plus a working EVPN/VXLAN fabric and one cloud networking credential.',
      items: [
        {
          title: 'BGP, properly',
          kind: 'skill',
          detail:
            'eBGP vs iBGP, path selection order, route reflectors, communities, AS-path manipulation, prefix lists and policy, BGP as the data-centre underlay. BGP war stories are a standard senior interview topic.',
          evidence: 'A multi-AS lab where you deliberately cause and then fix a route leak, written up.',
          links: [{ label: 'Free Range Routing (FRR)', url: 'https://frrouting.org/' }],
          weight: 5,
        },
        {
          title: 'Data centre fabrics: VXLAN/EVPN',
          kind: 'project',
          detail:
            'Spine-leaf, underlay vs overlay, VXLAN encapsulation, EVPN route types, multi-tenancy, anycast gateway. Build it in Containerlab with FRR or cEOS.',
          evidence: 'A published EVPN/VXLAN fabric lab, fully automated from a data model.',
          weight: 6,
        },
        {
          title: 'MPLS and service provider basics',
          kind: 'skill',
          detail: 'LDP, L3VPN, VRFs, route targets, MPLS TE at a conceptual level, and Segment Routing as the modern direction.',
          evidence: 'An L3VPN lab with two customer VRFs proven isolated.',
          weight: 3,
        },
        {
          title: 'Cloud networking depth',
          kind: 'cert',
          detail:
            'AWS VPC, Transit Gateway, Direct Connect, Route 53, PrivateLink; Azure VNet peering, ExpressRoute, Virtual WAN. Target the AWS Advanced Networking Specialty (ANS-C01) — small candidate pool, strong signal.',
          evidence: 'ANS-C01 badge + a Terraform multi-account/hub-spoke reference architecture.',
          weight: 6,
        },
        {
          title: 'SD-WAN, SASE, and Zero Trust',
          kind: 'skill',
          detail:
            'Cisco SD-WAN, Fortinet Secure SD-WAN, or Versa; then SASE/ZTNA as the replacement for the perimeter model. This is where network and security budgets have actually merged.',
          evidence: 'A comparison note on two SD-WAN architectures, plus Fortinet NSE 4 if your region is Fortinet-heavy (much of APAC and the Middle East is).',
          weight: 4,
        },
        {
          title: 'CCNP Enterprise, or a credible alternative',
          kind: 'cert',
          detail:
            'ENCOR 350-401 + ENARSI 300-410. Alternatives with less saturation: JNCIS-ENT (Juniper), Arista ACE, or Aruba ACSA depending on your target employers.',
          evidence: 'CCNP Enterprise (or equivalent) badge.',
          weight: 7,
        },
        {
          title: 'Kubernetes networking',
          kind: 'skill',
          detail:
            'CNI plugins, Services vs Ingress vs Gateway API, CoreDNS, network policies, service mesh basics (Cilium/eBPF is the direction of travel). Increasingly the network layer that matters most.',
          evidence: 'A kind/k3s cluster with network policies tested by a deliberately blocked pod.',
          weight: 4,
        },
      ],
    },
    {
      id: 'n5',
      title: 'Architect and expert signal',
      window: 'Month 21+',
      goal: 'Be the person who decides what gets built, not only the person who builds it.',
      exit: 'A published design document or open-source tool that someone else uses.',
      items: [
        {
          title: 'Design documents: HLD and LLD',
          kind: 'skill',
          detail:
            'Requirements gathering, options analysis with trade-offs, capacity planning, failure-domain design, DR and maintenance windows, migration plans with rollback. Senior interviews are mostly this.',
          evidence: 'Two full HLD/LLD documents for realistic scenarios, published.',
          weight: 5,
        },
        {
          title: '★ AIOps for networks',
          kind: 'project',
          detail:
            'Anomaly detection over your telemetry, and an LLM agent with read-only tools over NetBox and device APIs that answers "why is this slow?" with evidence. This is the network × AI overlap almost nobody in the market has yet.',
          evidence: 'A published agent + evaluation showing it beats a naive baseline on real tickets you wrote.',
          weight: 8,
        },
        {
          title: 'Expert certification (long horizon)',
          kind: 'cert',
          detail:
            'CCIE Enterprise Infrastructure (written + 8-hour lab) or JNCIE. This is a 12–18 month commitment on top of everything else — only worth it if you are staying deep in networking rather than pivoting to platform or security.',
          evidence: 'CCIE written passed as the first checkpoint.',
          weight: 8,
        },
        {
          title: 'Open-source contribution in the network tooling ecosystem',
          kind: 'signal',
          detail:
            'Nornir, NetBox/Nautobot plugins, Containerlab, ntc-templates, Batfish. A merged PR in this ecosystem is a very strong and very cheap credential.',
          evidence: 'A merged pull request, linked from your projects page.',
          weight: 4,
        },
        {
          title: 'Conference talk or published article',
          kind: 'signal',
          detail:
            'Submit to a regional NetDevOps meetup, DENOG/UKNOF/APRICOT-style community events, or write for a respected community blog. Required raw material for endorsement-based visa routes.',
          evidence: 'A CFP accepted, or an article on a site you do not own.',
          weight: 5,
        },
      ],
    },
  ],
};

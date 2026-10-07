import type { Track } from './types';

export const ai: Track = {
  id: 'a',
  slug: 'ai-agentic',
  title: 'Track 3: AI, Agentic Systems & Agentic Engineering',
  short: 'AI / Agentic',
  tagline: 'Evals are the new system design. Orchestration is the new coding.',
  icon: '◈',
  accent: '#6b5bd6',
  summary:
    'This is the least saturated and fastest-moving of the three tracks, and the one where certificates matter least and artifacts matter most. The path runs: solid Python, honest LLM fundamentals, one real RAG system, then agents, then the part few people build properly: evaluation. Running alongside all of it is the craft of working with coding agents, which has stopped being a novelty and started appearing in job requirements.',
  roles: [
    'AI Engineer',
    'LLM / Agent Engineer',
    'AI Platform / LLMOps Engineer',
    'Applied AI Engineer',
    'AI Red Teamer / AI Security Engineer',
    'Forward-Deployed / Solutions Engineer (AI)',
  ],
  marketNote:
    'Agentic AI is showing up in more job postings each year. Hiring managers screen portfolio first and certificates second here: one production RAG system with a real eval table beats five tutorial clones, and 3–5 deeply-evaluated projects with live URLs is the target shape.',
  phases: [
    {
      id: 'a1',
      title: 'Python, SQL, and LLM literacy',
      window: 'Month 1–3',
      goal: 'Be a competent software engineer first. "AI engineer" who cannot write tests is a prompt hobbyist.',
      exit: 'You can ship a tested, typed, containerised Python service and explain what a token costs you.',
      items: [
        {
          title: 'Python beyond scripting',
          kind: 'skill',
          detail:
            'Type hints, dataclasses/Pydantic, async/await, packaging, dependency management (uv or poetry), pytest with fixtures and mocks, logging, structured errors. This is the actual hiring bar.',
          evidence: 'A pip-installable package of your own with tests running in CI.',
          weight: 4,
        },
        {
          title: 'SQL and data handling',
          kind: 'skill',
          detail: 'Joins, aggregation, window functions, indexes and why your query is slow, Postgres specifics, pandas for exploration.',
          evidence: 'A published analysis notebook answering a question you actually had.',
          weight: 3,
        },
        {
          title: 'Math intuition, not math coursework',
          kind: 'skill',
          detail:
            'Vectors and cosine similarity, matrix multiplication as transformation, probability and expected value, what gradient descent is doing. Enough to reason about embeddings and not be fooled by benchmarks.',
          evidence: 'A from-scratch embedding-similarity demo with no framework, explained in your own words.',
          links: [{ label: '3Blue1Brown: Essence of Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra' }],
          weight: 3,
        },
        {
          title: 'How transformers and LLMs actually work',
          kind: 'skill',
          detail:
            'Tokenisation, attention, context windows, autoregressive decoding, temperature and sampling, why hallucination is structural rather than a bug. Build a tiny GPT once and this stops being mystical.',
          evidence: 'A trained nano-GPT on a toy corpus, with a written explanation of each component.',
          links: [{ label: 'Karpathy: Let\'s build GPT', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }],
          weight: 4,
        },
        {
          title: 'Prompt engineering as measurement, not vibes',
          kind: 'skill',
          detail:
            'System prompts, few-shot, chain-of-thought, output schemas, prefilling, prompt caching, decomposition. The discipline is not "find the magic words"; it is "change one variable, measure the delta".',
          evidence: 'Ten documented experiments with a before/after accuracy or cost number for each.',
          links: [{ label: 'Anthropic prompt engineering docs', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }],
          weight: 3,
        },
        {
          title: 'Cost and latency fluency',
          kind: 'skill',
          detail:
            'Price per million input/output tokens, caching economics, small-model-first routing, streaming for perceived latency, batching. Every AI interview eventually asks what this costs at scale.',
          evidence: 'A cost model spreadsheet or script for one of your own apps, published.',
          weight: 2,
        },
      ],
    },
    {
      id: 'a2',
      title: 'Build with LLM APIs: ship one real RAG system',
      window: 'Month 3–7',
      goal: 'Move from notebooks to a service other people can use at a URL.',
      exit: 'One deployed RAG application with a public eval table and real users, even if the users are three friends.',
      items: [
        {
          title: 'SDK fluency and tool calling',
          kind: 'skill',
          detail:
            'Claude and/or OpenAI SDKs, streaming responses, structured output with JSON schema, tool/function calling, retries and backoff, token accounting, graceful degradation when the model is down.',
          evidence: 'A small library wrapping your own conventions, with tests.',
          weight: 3,
        },
        {
          title: 'Backend and frontend you can deploy',
          kind: 'skill',
          detail:
            'FastAPI service, a real UI (Next.js, SvelteKit, or Streamlit if speed matters more than polish), Docker, deployment on a free tier, auth basics, rate limiting.',
          evidence: 'A live URL, not a localhost screenshot.',
          weight: 4,
        },
        {
          title: 'Embeddings and vector search',
          kind: 'skill',
          detail:
            'Chunking strategies and why fixed-size chunking is usually wrong, embedding model choice, pgvector vs Qdrant vs Chroma, ANN indexes, metadata filtering, hybrid (BM25 + dense) retrieval, reranking.',
          evidence: 'A published comparison of three chunking strategies on your own corpus, with retrieval metrics.',
          weight: 5,
        },
        {
          title: '★ Flagship: a production RAG application',
          kind: 'project',
          detail:
            'Pick a corpus you genuinely care about: your own security notes, network runbooks, Indonesian-language technical docs. Include citations back to source, handle "I do not know", and measure retrieval precision/recall separately from answer quality.',
          evidence: 'Live URL + repo + a README with an eval table and a named list of known failure modes.',
          weight: 8,
        },
        {
          title: 'Retrieval evaluation before you touch agents',
          kind: 'skill',
          detail:
            'Build a golden set of 50 question/answer pairs over your corpus. Measure hit rate, MRR, and faithfulness. Most "the agent is bad" problems are retrieval problems.',
          evidence: 'The golden dataset published in the repo, with a scoring script.',
          weight: 4,
        },
      ],
    },
    {
      id: 'a3',
      title: 'Agents, tools, and MCP',
      window: 'Month 7–12',
      goal: 'Build systems that take actions, then make them trustworthy enough that you would run them unattended.',
      exit: 'An agent doing genuinely useful recurring work, with traces, a cost report, and a documented failure mode.',
      items: [
        {
          title: 'Agent loop fundamentals',
          kind: 'skill',
          detail:
            'ReAct, plan-then-execute, reflection, state machines vs free-running loops, memory (short-term context vs persistent store), termination conditions, and knowing when a workflow beats an agent, which is most of the time.',
          evidence: 'A from-scratch agent loop in under 200 lines, no framework, with a written comparison against a framework version.',
          weight: 5,
        },
        {
          title: 'Tool design as API design',
          kind: 'skill',
          detail:
            'Tool descriptions are prompts. Narrow scope, unambiguous names, typed schemas, idempotency, useful error messages the model can recover from, permission boundaries. Bad tools cause most agent failures.',
          evidence: 'A tool suite with a written design rationale per tool.',
          weight: 4,
        },
        {
          title: 'Model Context Protocol (MCP)',
          kind: 'project',
          detail:
            'Build your own MCP server exposing something real (your NetBox lab, your notes, your detection rules) and connect it to a client. MCP has become the standard integration surface and building one is a strong, current signal.',
          evidence: 'A published MCP server with a README, installation instructions, and a demo GIF.',
          links: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/' }],
          weight: 6,
        },
        {
          title: 'Agent frameworks: one, deeply',
          kind: 'skill',
          detail:
            'Claude Agent SDK, LangGraph, or CrewAI. Learn one properly and understand what it is doing under the hood; framework-hopping reads as inexperience.',
          evidence: 'A non-trivial graph/workflow with checkpointing and human-in-the-loop approval steps.',
          weight: 4,
        },
        {
          title: 'Multi-agent orchestration and its costs',
          kind: 'skill',
          detail:
            'Supervisor/worker patterns, handoffs, parallel fan-out, context isolation, and the honest downside: multi-agent multiplies both token spend and failure surface. Be able to argue when it is worth it.',
          evidence: 'A written post-mortem on a multi-agent system of yours, including what you would build single-agent next time.',
          weight: 4,
        },
        {
          title: 'Guardrails and human-in-the-loop',
          kind: 'skill',
          detail:
            'Input/output validation, allow-lists for destructive tools, confirmation gates, PII redaction, spend caps, kill switches, audit logs. The difference between a demo and something a company will actually run.',
          evidence: 'A safety design note for your agent, listing what it is not allowed to do and how that is enforced.',
          weight: 4,
        },
        {
          title: 'Computer-use and browser agents',
          kind: 'skill',
          detail: 'Screenshot-driven control, DOM-based automation, when each fails, and the injection risks of letting a model read untrusted pages.',
          evidence: 'A small browser-automation agent with an explicit note on its prompt-injection exposure.',
          weight: 3,
        },
      ],
    },
    {
      id: 'a4',
      title: 'Evals and LLMOps: the skill interviewers ask about most',
      window: 'Month 9–16 · overlaps a3 deliberately',
      goal: 'Be able to prove your system works, and detect the day it stops working.',
      exit: 'A public eval harness with CI gating, plus one blog post containing a real eval table and a failure taxonomy.',
      items: [
        {
          title: 'Build a real eval suite',
          kind: 'project',
          detail:
            'Golden datasets, task-specific metrics, LLM-as-judge with its own validation against human labels, pairwise comparison, statistical significance on small sets. "Eval is the new system design", and it is the most under-built skill relative to how often interviewers ask about it.',
          evidence: 'An `evals` repo with datasets, scoring code, and versioned results over time.',
          links: [
            { label: 'Ragas', url: 'https://docs.ragas.io/' },
            { label: 'DeepEval', url: 'https://github.com/confident-ai/deepeval' },
            { label: 'Promptfoo', url: 'https://www.promptfoo.dev/' },
          ],
          weight: 8,
        },
        {
          title: 'Error analysis as a discipline',
          kind: 'skill',
          detail:
            'Sample 100 failures, label them by root cause, build a taxonomy, fix the largest bucket, re-measure. This unglamorous loop is what separates people who improve systems from people who tweak prompts.',
          evidence: 'A published failure taxonomy with counts and the fix applied to each bucket.',
          weight: 5,
        },
        {
          title: 'Regression gates in CI',
          kind: 'skill',
          detail:
            'Evals run on every PR; a merge is blocked if quality drops beyond a threshold. Cheap to build, extremely rare in portfolios, and instantly legible to a senior interviewer.',
          evidence: 'A GitHub Actions workflow that fails a PR on eval regression, with a screenshot of it doing so.',
          weight: 5,
        },
        {
          title: 'Tracing and observability',
          kind: 'skill',
          detail: 'LangSmith, Langfuse, or OpenTelemetry-based tracing; span-level latency, token and cost dashboards, drift monitoring on live traffic.',
          evidence: 'A dashboard screenshot plus the instrumentation code in a repo.',
          weight: 4,
        },
        {
          title: '★ Red-teaming your own AI systems',
          kind: 'project',
          detail:
            'Direct and indirect prompt injection, tool-abuse chains, data exfiltration through agent context, jailbreak suites, unsafe-output testing. This is where this track fuses with the security track, and that combination is uncommon in the 2026 market.',
          evidence: 'An automated adversarial eval suite + a published findings report against your own agent.',
          links: [
            { label: 'OWASP Top 10 for LLM Apps', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
            { label: 'MITRE ATLAS', url: 'https://atlas.mitre.org/' },
          ],
          weight: 7,
        },
      ],
    },
    {
      id: 'a5',
      title: 'Agentic engineering as a craft',
      window: 'Month 3 onward · continuous',
      goal: 'Get genuinely good at producing software through agents, and be able to explain your method.',
      exit: 'A repo whose history visibly shows spec → plan → tests → implementation, plus a written account of how you work.',
      items: [
        {
          title: 'Understand what changed',
          kind: 'skill',
          detail:
            'In February 2026 Karpathy called the vibe-coding era effectively over and proposed "agentic engineering": you are not writing the code 99% of the time, you are orchestrating agents and acting as oversight, and there is real expertise in doing that well. Know this framing; it is the language hiring managers now use.',
          evidence: 'A published position piece on where you draw the line between the two.',
          links: [{ label: 'Simon Willison on vibe coding vs agentic engineering', url: 'https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/' }],
          weight: 2,
        },
        {
          title: 'Spec-driven development',
          kind: 'skill',
          detail:
            'Write the specification before the prompt: problem, constraints, interfaces, acceptance criteria, non-goals. Detailed requirements beat open-ended prompts consistently; the spec is now the primary artifact you author.',
          evidence: 'Three specs in your repos, each with the resulting implementation linked.',
          weight: 4,
        },
        {
          title: 'Project context files',
          kind: 'skill',
          detail:
            'CLAUDE.md / AGENTS.md conventions: architecture summary, coding standards, test commands, gotchas, directory map. Persistent project context is what makes agent output consistent across sessions.',
          evidence: 'A well-crafted context file in every serious repo you own.',
          weight: 3,
        },
        {
          title: 'Harness mastery',
          kind: 'skill',
          detail:
            'Claude Code or Cursor at a professional level: subagents, custom commands, hooks, MCP servers, git worktrees for parallel work, plan mode before execution, checkpointing. Depth in one harness beats surface knowledge of five.',
          evidence: 'A published dotfiles/config repo for your agent setup, with an explanation of each choice.',
          weight: 4,
        },
        {
          title: 'Review discipline: the non-negotiable part',
          kind: 'habit',
          detail:
            'Velocity without review discipline is a liability, not a skill. Small diffs, tests as the gate, read every line before merge, architectural review by you and not the model, conventional commits. Employers are already screening for whether you understand this.',
          evidence: 'A repo where the test suite provably gates agent-authored changes, plus your own written review checklist.',
          weight: 5,
        },
        {
          title: 'Multi-model orchestration and cost control',
          kind: 'skill',
          detail: 'Route by task difficulty, cheap model for bulk and strong model for judgement, caching, context budgeting, and knowing when to stop a runaway loop.',
          evidence: 'A cost report across a real project showing spend per feature shipped.',
          weight: 3,
        },
        {
          title: 'Write "How I work with agents"',
          kind: 'signal',
          detail:
            'A single document describing your method, with real examples and real failures. Job descriptions at AI-native companies now list "experience building with Claude" and "agentic workflow fluency" as requirements. This document is how you answer that before anyone asks.',
          evidence: 'A published essay, linked from the top of your CV.',
          weight: 4,
        },
      ],
    },
    {
      id: 'a6',
      title: 'Production, serving, and credentials',
      window: 'Month 16–24',
      goal: 'Handle the parts that only appear once something real is in front of users.',
      exit: '3–5 deeply-evaluated projects with live URLs, and at most six pinned repos.',
      items: [
        {
          title: 'Serving and inference optimisation',
          kind: 'skill',
          detail: 'vLLM, Ollama for local, quantisation trade-offs, KV-cache, continuous batching, speculative decoding, latency budgets and p99 thinking.',
          evidence: 'A benchmark writeup: throughput and latency across two serving configurations.',
          weight: 4,
        },
        {
          title: 'Fine-tuning, and knowing when not to',
          kind: 'skill',
          detail:
            'LoRA/QLoRA, dataset curation as the real work, distillation, and the honest default: prompting plus retrieval plus evals solves most problems more cheaply. Being able to argue against fine-tuning is a senior signal.',
          evidence: 'One fine-tune with a measured comparison against a prompted baseline, including the case where the baseline won.',
          weight: 4,
        },
        {
          title: 'MLOps hygiene',
          kind: 'skill',
          detail: 'Experiment tracking (MLflow / W&B), model and prompt versioning, reproducible pipelines, Docker, and enough Kubernetes to deploy.',
          evidence: 'A reproducible pipeline someone else can run from your README.',
          weight: 3,
        },
        {
          title: 'One cloud AI certification for the ATS',
          kind: 'cert',
          detail:
            'AWS AI Practitioner (AIF-C01) or Azure AI-102 to get through automated filters cheaply. Google Professional ML Engineer if you want the most technically respected option. NVIDIA DLI for GPU/deep-learning depth. Certificates get you into the room here; projects get the offer. Budget accordingly.',
          evidence: 'One badge. Resist collecting more.',
          weight: 4,
        },
        {
          title: 'Curate ruthlessly',
          kind: 'signal',
          detail:
            'Pin six repos maximum. Archive the rest. Every pinned repo needs a README with a screenshot or GIF, a live link, an eval table where relevant, and a "what I would do differently" section.',
          evidence: 'A GitHub profile where a hiring manager finds the good work in 30 seconds.',
          weight: 3,
        },
      ],
    },
  ],
};

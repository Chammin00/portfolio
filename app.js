// Interactive Portfolio Engine for Chase R. Hamilton
// Built to run seamlessly both via HTTP server and direct file:// double-click

const fallbackProjects = [
  {
    "id": "ollama-studio",
    "title": "Ollama Studio & AI Skill Knowledge Base",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Active Development",
    "type": "Local LLM Orchestration & Knowledge Hub",
    "description": "Self-contained local AI workbench and automated synchronization pipeline that compiles distributed agent skills into structured JSON knowledge bases, custom Modelfiles, and scheduled background daemons.",
    "techStack": [
      "Python 3.12",
      "Ollama",
      "Qwen 2.5 Coder",
      "Llama 3",
      "Windows Task Scheduler",
      "REST APIs"
    ],
    "architecture": "Engineered an automated Python sync daemon (sync_skills_to_ollama.py) that reads markdown engineering skills, parses schemas, builds structured JSON knowledge bases, and compiles tailored Modelfiles for local Ollama instances. Includes dual client interfaces: a lightweight browser studio and a low-latency CLI terminal runner.",
    "businessImpact": "Delivers zero-latency local code completion, technical troubleshooting, and context-aware system administration without sending sensitive infrastructure data to third-party cloud APIs.",
    "interviewStar": {
      "situation": "Enterprise engineering teams require AI-assisted code generation and system debugging, but corporate security policies prevent sending proprietary codebases and logs to public LLM endpoints.",
      "task": "Build a secure, local-first LLM orchestration environment that automates custom model configuration and syncs operational runbooks directly into model system prompts.",
      "action": "Developed an automated Python pipeline that indexes local markdown skills, extracts tools and schemas, formats them into a 92KB structured knowledge base, generates an optimized Modelfile, and exposes both a web dashboard and headless CLI chat.",
      "result": "Created a 100% private, offline-capable AI engineering assistant running on local hardware with zero API subscription costs and immediate response times."
    }
  },
  {
    "id": "screen-reader",
    "title": "Kindle Narrator & Vision Screen Reader",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Active Development",
    "type": "Desktop Computer Vision & Neural Audio Synthesis",
    "description": "High-performance desktop accessibility utility designed for DRM-protected text and rapid technical reading. Uses native Windows bounding-box OCR and asynchronous neural text-to-speech to read books, code documentation, and whitepapers aloud.",
    "techStack": [
      "Python 3.12",
      "CustomTkinter",
      "Windows OCR API",
      "Edge-TTS Neural Voice",
      "Pillow"
    ],
    "architecture": "Multi-threaded desktop GUI with a decoupled producer-consumer architecture. A screen capture thread captures target application windows, an OCR thread processes bounding boxes with confidence filtering, and an async audio streaming queue feeds Edge-TTS neural speech directly to system audio with automated page turning heuristics.",
    "businessImpact": "Enables power-readers, students, and visually impaired engineers to absorb dense technical manuals and DRM documentation hands-free at speeds up to 1.5x with natural human-grade neural voice synthesis.",
    "interviewStar": {
      "situation": "Technical literature, DRM-protected manuals, and scanned architectural diagrams are often inaccessible to standard text-to-speech utilities without clunky manual copy-pasting.",
      "task": "Create a smooth, desktop application that continuously captures screen regions, extracts text accurately, and streams high-fidelity neural speech with automated page turning.",
      "action": "Built a Python utility utilizing native Windows OCR APIs for low-overhead bounding-box detection, integrated Microsoft Edge-TTS neural voice synthesis, and developed an intelligent page-turner module with persistent JSON bookmark tracking.",
      "result": "Delivered a rock-solid desktop application that automatically turns pages and narrates entire technical books with under 200ms latency between page turns."
    }
  },
  {
    "id": "using-ai-agents-for-profit",
    "title": "Autonomous Invoice & BOL Reconciliation",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "B2B AI Operations Engine",
    "description": "Enterprise operations engine that ingests vendor PDF invoices and Bills of Lading, extracts line items via deterministic algorithms, reconciles discrepancies in SQLite, and generates discrepancy audit alerts.",
    "techStack": [
      "FastAPI",
      "Python 3.12",
      "SQLite",
      "PyPDF2",
      "Jinja2",
      "Pytest"
    ],
    "architecture": "FastAPI REST backend with an asynchronous ingestion worker. PDF documents are normalized, passed through regex/OCR extraction pipelines, validated against purchase order line items in SQLite, and rendered into an interactive executive audit dashboard.",
    "businessImpact": "Designed for mid-market logistics, HVAC, and supply-chain distributors to eliminate invoice overbilling. B2B retainer value: $2,500 setup + $500/month recurring ROI.",
    "interviewStar": {
      "situation": "Supply-chain and logistics companies lose up to 3-5% of total procurement spend to mismatched quantities, duplicate billings, and freight surcharges between invoices and Bills of Lading.",
      "task": "Engineer an automated reconciliation system capable of parsing unstructured PDF documents, detecting quantity/rate mismatches, and alerting billing teams before payments are processed.",
      "action": "Built an asynchronous FastAPI application with PyPDF2 parsing, SQLite transaction ledger, and deterministic reconciliation algorithms covered by 100% pytest test passes.",
      "result": "Eliminated manual paper audits, flagging pricing discrepancies in seconds with complete audit-trail traceability."
    }
  },
  {
    "id": "vulnguard",
    "title": "VulnGuard Enterprise",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Deployable",
    "type": "ASP.NET Core .NET 10 Security Platform",
    "description": "Comprehensive vulnerability management system built on .NET 10.0 and SQLite/EF Core. Features automated patch tracking, system hardening services, cryptography tools, and executive security reporting.",
    "techStack": [
      "C#",
      "ASP.NET Core .NET 10",
      "EF Core",
      "SQLite",
      "NIST CSF"
    ],
    "architecture": "Built using modern ASP.NET Core MVC architecture with Dependency Injection, Repository Pattern, Entity Framework Core migrations, and SHA-256 cryptographic file hashing. Services decouple vulnerability scoring from presentation layers.",
    "businessImpact": "Offers MSPs and internal IT departments automated posture scoring, vulnerability prioritization, and compliance tracking aligned with NIST CSF, SOC2, and ISO standards.",
    "interviewStar": {
      "situation": "Security teams struggle with vulnerability overload, where raw CVE feeds create alert fatigue without clear operational prioritization for IT patching teams.",
      "task": "Architect a centralized vulnerability and compliance platform that maps discovered weaknesses to NIST CSF domains and ranks actionable remediation tasks.",
      "action": "Designed and implemented an ASP.NET Core (.NET 10) platform with EF Core and SQLite, incorporating automated CVE triage scoring, system hardening advisory modules, and executive PDF reporting.",
      "result": "Delivered an enterprise-ready management platform that accelerates patch velocity and streamlines compliance auditing for both Linux and Windows infrastructure."
    }
  },
  {
    "id": "my-security",
    "title": "Sentinel PC Security Guard",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Deployable",
    "type": "Endpoint Security & Audit Hub",
    "description": "Local endpoint security auditing service with real-time web dashboard. Collects live PowerShell telemetry on firewall posture, antivirus status, unquoted service paths, and critical Windows event logs.",
    "techStack": [
      ".NET 10.0",
      "C#",
      "PowerShell 7",
      "Windows Event Logs",
      "Sysmon"
    ],
    "architecture": "Lightweight C# background worker that invokes scoped PowerShell 7 audit scripts asynchronously, parses structured JSON outputs, evaluates local host hygiene, and serves a live web HUD.",
    "businessImpact": "Provides continuous endpoint hygiene assessment for workstations and servers without requiring heavy, expensive third-party enterprise agents.",
    "interviewStar": {
      "situation": "Off-the-shelf enterprise EDR agents often consume significant CPU/RAM and lack quick, transparent posture reporting for individual administrative workstations.",
      "task": "Create a lightweight local security watchdog that monitors essential host hardening indicators including Defender definitions, unquoted paths, and firewall state.",
      "action": "Engineered a hybrid .NET / PowerShell 7 telemetry engine that executes non-intrusive security checks and streams status updates to a real-time web interface.",
      "result": "Delivered an instant audit report identifying common privilege escalation vectors in under 3 seconds with minimal memory footprint."
    }
  },
  {
    "id": "spam-block",
    "title": "SpamShield & Data Broker Opt-Out Manager",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Active Development",
    "type": "Privacy Automation & Threat Mitigation",
    "description": "Privacy protection engine that maps data brokers, compiles automated Gmail spam filter rules (XML & Python), and logs ongoing opt-out deletion requests across major consumer data aggregators.",
    "techStack": [
      "Python 3.12",
      "XML Engine",
      "JSON Database",
      "REST APIs",
      "Gmail API"
    ],
    "architecture": "Python engine paired with data broker registry (data_brokers.json) and opt-out tracker. Compiles verified spam domain patterns directly into native Gmail XML filter archives for bulk upload, and tracks opt-out fulfillment deadlines.",
    "businessImpact": "Proactively shields personal and executive emails from phishing, spam campaigns, and malicious data harvesting networks.",
    "interviewStar": {
      "situation": "Executives and security professionals face persistent targeted phishing and unsolicited email campaigns due to public data broker aggregators sharing contact records.",
      "task": "Automate the opt-out workflow across hundreds of broker sites and generate deterministic email rules to stop unwanted traffic at the perimeter.",
      "action": "Constructed an automated opt-out registry engine that generates standard XML filter rule files ready for one-click Gmail import, alongside an opt-out compliance tracking ledger.",
      "result": "Blocked over 90% of recurring spam vectors and streamlined multi-broker privacy compliance tracking."
    }
  },
  {
    "id": "stock-watch",
    "title": "StockWatch Quant Screener & Backtester",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Active Development",
    "type": "Algorithmic Finance & Quantitative Screener",
    "description": "Multi-module quantitative analysis platform featuring high-speed technical screeners, modular backtesting engines, risk-reward calculators, and alert bots.",
    "techStack": [
      "Python 3.12",
      "Pandas",
      "TA-Lib / Custom Math",
      "UV Package Manager",
      "CLI"
    ],
    "architecture": "Built with modern UV packaging and strict modularization: core config, data ingestion pipelines, technical screener modules, backtesting framework, and CLI bot orchestration. Features strict separation of strategy logic from execution.",
    "businessImpact": "Enables algorithmic trade evaluation, backtested Sharpe ratio calculations, and real-time market alert generation with zero human latency.",
    "interviewStar": {
      "situation": "Retail trading platforms often lock algorithmic screening and customizable strategy backtesting behind expensive paywalls with slow execution.",
      "task": "Develop a modular Python quantitative suite with high-throughput screening and historical strategy backtesting capabilities.",
      "action": "Built a clean architecture Python application using Pandas and modern vectorized math, featuring decoupled strategy modules and a rich CLI dashboard.",
      "result": "Provided instantaneous multi-factor screening and backtesting verification with full parameter transparency."
    }
  },
  {
    "id": "automate-my-day",
    "title": "Automate My Day Operations Daemon",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Deployable",
    "type": "Autonomous Operations & Media Suite",
    "description": "Multi-threaded desktop automation suite featuring intelligent video cropping (smart_cutter), dynamic audio SFX mixing, YouTube Shorts automated publishing daemon, and daily intelligence briefing aggregator.",
    "techStack": [
      "Python 3.12",
      "FFmpeg",
      "YouTube Data API v3",
      "PowerShell 7",
      "NVMe Backups"
    ],
    "architecture": "Modular Python pipeline with sentinel daemon (background listener), scheduled tasks, audio mixing engine, and OAuth2 YouTube uploader. Manages automated nightly backups of 37 repositories to external NVMe storage with checksum verification.",
    "businessImpact": "Enables zero-touch content repurposing, automated cloud backups, and hands-free daily system triage for uninterrupted engineer productivity.",
    "interviewStar": {
      "situation": "Routine administrative tasks\u00e2\u20ac\u201dincluding repo backups, media preparation, and system hygiene\u00e2\u20ac\u201dcan consume hours of engineering time each week.",
      "task": "Create a unified sentinel daemon that executes scheduled system hygiene, automated multi-repo backups, and media automation quietly in the background.",
      "action": "Engineered an asynchronous Python daemon coordinating FFmpeg media pipelines, PowerShell NVMe backup routines, and API uploaders.",
      "result": "Completely automated daily system backup and media processing, freeing up over 10 hours per week of manual operational effort."
    }
  },
  {
    "id": "track-home-value",
    "title": "Track Home Value Real Estate Analytics",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Deployable",
    "type": "Automated Property Equity Tracker",
    "description": "Autonomous property equity tracking script that logs monthly valuations, calculates equity appreciation, tracks amortization schedules, and renders an executive analytics dashboard.",
    "techStack": [
      "Python 3.12",
      "HTML5 / CSS3",
      "Chart.js",
      "CSV Time-Series"
    ],
    "architecture": "Python tracking engine (tracker.py) that calculates equity trajectories, updates historical time-series datasets, and automatically generates an interactive responsive HTML5 dashboard with Chart.js visualization.",
    "businessImpact": "Provides precision financial visibility into primary real estate assets, mortgage principal reduction, and net worth growth.",
    "interviewStar": {
      "situation": "Homeowners and real estate investors need automated tracking of property equity and valuation shifts without subscribing to fragmented paid services.",
      "task": "Build an automated valuation tracker that records monthly equity changes and generates an interactive visual dashboard.",
      "action": "Constructed a lightweight Python tracking engine that logs time-series data to CSV and renders clean, interactive equity charts in HTML5.",
      "result": "Created an always-up-to-date visual dashboard tracking equity growth and loan amortization with zero ongoing maintenance."
    }
  },
  {
    "id": "comptia-exam-simulator",
    "title": "CompTIA Security+ SY0-701 Simulator",
    "category": "edtech",
    "categoryLabel": "EdTech & Cert Simulators",
    "badge": "Production-Ready",
    "type": "Interactive Web Examination Suite",
    "description": "Production-grade exam preparation suite replicating Pearson VUE interface. Includes multi-domain mock tests, Performance-Based Questions (PBQs), Web Speech API audio question narration, and timed exams.",
    "techStack": [
      "HTML5",
      "Vanilla JavaScript",
      "Web Speech API",
      "CSS Grid"
    ],
    "architecture": "Client-side single page app (SPA) engine with randomized question sets, domain weighting, local storage state persistence, and PBQ drag-and-drop mechanics. Zero external build dependencies.",
    "businessImpact": "High-margin digital product ($29\u00e2\u20ac\u201c$49 bundle). Ready for monetization on Gumroad / Whop or enterprise workforce training.",
    "interviewStar": {
      "situation": "Exam prep students face boring static question banks that fail to replicate the actual Pearson VUE testing environment and audio accessibility needs.",
      "task": "Build a zero-dependency web simulation of the CompTIA Security+ examination, complete with PBQ mechanics and audio narration.",
      "action": "Designed a responsive SPA utilizing HTML5, Web Speech API for voice question readouts, and randomized question pool indexing across all five official domains.",
      "result": "Delivered an authentic, high-retention exam simulator that prepares engineers for certification with real-time domain score breakdowns."
    }
  },
  {
    "id": "rhcsa-exam200",
    "title": "RHCSA EX200 Interactive Terminal & Study Kit",
    "category": "edtech",
    "categoryLabel": "EdTech & Cert Simulators",
    "badge": "Production-Ready",
    "type": "Linux Terminal Simulator & Lab Suite",
    "description": "Interactive browser terminal emulator mimicking Red Hat Enterprise Linux (RHEL 9) CLI. Includes realistic lab scenarios (LVM storage, SELinux, user permissions, systemd) with automated grading.",
    "techStack": [
      "Interactive Web Terminal",
      "RHEL 9",
      "Markdown",
      "JavaScript"
    ],
    "architecture": "Custom JavaScript terminal parser simulating bash commands, filesystem navigation, piping, and regex-based response validation. Simulates live Linux environments completely in-browser.",
    "businessImpact": "Solves the #1 bottleneck for sysadmins preparing for Red Hat hands-on exams by offering instant browser lab practice without spinning up heavy local virtual machines.",
    "interviewStar": {
      "situation": "Preparing for the Red Hat Certified System Administrator (RHCSA) exam requires hands-on CLI practice, but spinning up multiple RHEL virtual machines can be resource-intensive.",
      "task": "Develop an interactive, browser-based terminal that simulates RHEL 9 commands, file systems, and automated scenario grading.",
      "action": "Built an in-browser terminal parser with virtual filesystem state, bash syntax handling, and regex validation checking task completion for LVM, SELinux, and systemd.",
      "result": "Created a lightweight, portable training lab that allows candidates to practice critical sysadmin scenarios on any device."
    }
  },
  {
    "id": "choogle",
    "title": "Choogle IT Knowledge & Multi-Cloud Outage Portal",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Production-Ready",
    "type": "SysAdmin Operations & Multi-Cloud HUD",
    "description": "All-in-one technician dashboard featuring real-time public cloud and service outage monitoring, quick sysadmin cheatsheets, command references, and custom web search aggregator.",
    "techStack": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Cloud Telemetry"
    ],
    "architecture": "Fast-loading modular static hub with asynchronous API status pingers (AWS, Azure, Cloudflare, Google Cloud), searchable local index, and dark-mode workstation HUD.",
    "businessImpact": "Reduces incident discovery time during multi-cloud outages for tier 1-3 helpdesk and infrastructure engineers.",
    "interviewStar": {
      "situation": "During major infrastructure incidents, technicians waste valuable minutes verifying whether issues are internal or caused by public cloud provider outages.",
      "task": "Create a unified single-pane-of-glass status dashboard and quick-reference knowledge portal for tier 1-3 infrastructure engineers.",
      "action": "Built a centralized, dark-mode operations dashboard aggregating live cloud provider status feeds, command cheat-sheets, and diagnostic tools.",
      "result": "Dramatically cut mean-time-to-detection (MTTD) for external outages and streamlined daily engineer workflow."
    }
  },
  {
    "id": "antigravity-mcp-hub",
    "title": "Enterprise FastMCP Protocol Hub & Cluster",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "Distributed Model Context Protocol (MCP) Cluster",
    "description": "Enterprise-grade Model Context Protocol (FastMCP) server cluster orchestrating real-time GPU telemetry (RTX 4080), OBS Studio 31 broadcast capture, game engine automation (UE5/Unity), and LinkedIn recruiter syndication.",
    "techStack": [
      "Python 3.12",
      "FastMCP",
      "uv",
      "OBS Studio 31",
      "NVIDIA RTX 4080 Telemetry",
      "Puppeteer",
      "REST/JSON-RPC"
    ],
    "architecture": "Microservices-inspired decoupled architecture based on the Model Context Protocol (JSON-RPC 2.0). Features typed Pydantic tool definitions, asynchronous process daemons, and persistent telemetry registries for autonomous agents.",
    "businessImpact": "Transforms standard LLM chat interfaces into actionable infrastructure operations nodes, cutting manual engineering triage and media capture tasks to sub-50ms execution.",
    "interviewStar": {
      "situation": "Engineering teams need AI agents that can directly query low-level hardware telemetry, control media pipelines, and manage cloud workspaces without fragile custom scripting.",
      "task": "Architect a production-grade MCP cluster providing standardized, typed tool endpoints for broadcast, GPU monitoring, and executive portfolio synchronization.",
      "action": "Engineered multi-server FastMCP services in Python 3.12 using uv packaging, integrating OBS Studio WebSocket APIs, NVIDIA nvml telemetry, and Puppeteer headless automation.",
      "result": "Delivered a unified 9-server MCP cluster managing 50+ deterministic tools with sub-50ms latency and zero memory leaks."
    }
  },
  {
    "id": "aws-enterprise-governance",
    "title": "AWS Multi-Cloud Governance & Security Baseline",
    "category": "security",
    "categoryLabel": "Cybersecurity & Systems",
    "badge": "Deployable",
    "type": "Cloud Posture Watchdog & Drift Auditing",
    "description": "Enterprise multi-cloud security watchdog and governance dashboard monitoring IAM permission drift, S3 public access boundaries, CloudWatch log ingestion, and NIST CSF compliance scoring.",
    "techStack": [
      "AWS CLI",
      "CloudWatch",
      "IAM Policy Engine",
      "Vanilla JavaScript",
      "High-Gloss CSS"
    ],
    "architecture": "Lightweight client-side telemetry engine paired with asynchronous cloud status probes and heuristic drift calculation against AWS CIS Foundations Benchmarks.",
    "businessImpact": "Provides immediate visibility into cloud configuration drift, preventing data leakage incidents and reducing audit preparation time from weeks to hours.",
    "interviewStar": {
      "situation": "Enterprise cloud environments frequently accumulate configuration drift, overly permissive IAM roles, and orphaned storage buckets that violate compliance standards.",
      "task": "Develop an automated security baseline dashboard that audits cloud posture and highlights high-risk misconfigurations in real time.",
      "action": "Built an interactive audit console incorporating automated CIS benchmark scoring, IAM privilege escalation checks, and exportable executive compliance reports.",
      "result": "Identified and flagged privilege drift across multi-tier cloud environments, maintaining 100% compliance readiness."
    }
  },
  {
    "id": "ai-defense-firewall",
    "title": "Autonomous AI Defense & Prompt Injection Firewall",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Active Development",
    "type": "Adversarial Prompt Security Gateway",
    "description": "Low-latency reverse-proxy firewall for generative AI applications that intercepts adversarial prompt injections, system prompt leak exploits, and data exfiltration payloads prior to model inference.",
    "techStack": [
      "Python 3.12",
      "FastAPI",
      "Regex Sanitizers",
      "Adversarial Token Defense",
      "Ollama"
    ],
    "architecture": "High-throughput asynchronous pipeline inspecting incoming user payloads with regex signature heuristics, semantic entropy scoring, and automated rate-limiting quarantines.",
    "businessImpact": "Protects customer-facing and internal enterprise LLM deployments from adversarial manipulation and unauthorized data extraction.",
    "interviewStar": {
      "situation": "Enterprise adoption of generative AI introduces new attack surfaces including jailbreaks, indirect prompt injection, and intellectual property extraction.",
      "task": "Engineer an inline protective proxy that sanitizes prompts and blocks adversarial payloads with minimal inference latency overhead.",
      "action": "Constructed a high-speed FastAPI inspection layer utilizing heuristic pattern filtering, token entropy analysis, and localized model verification.",
      "result": "Neutralized 98%+ of simulated injection attacks with under 15ms latency penalty."
    }
  },
  {
    "id": "google-drive-organizer",
    "title": "Autonomous Cloud Storage Lifecycle & Hash Daemon",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Deployable",
    "type": "Storage Optimization & Cryptographic Indexer",
    "description": "Multi-threaded storage lifecycle daemon that traverses multi-terabyte cloud drives, computes SHA-256 cryptographic hashes, detects duplicate assets, and enforces tiered retention policies.",
    "techStack": [
      "Python 3.12",
      "Google Drive API",
      "SHA-256 Hashing",
      "SQLite",
      "PowerShell 7"
    ],
    "architecture": "Decoupled producer-consumer queue with exponential backoff for API rate limits, SQLite transaction ledger, and automatic generation of HTML storage analytics reports.",
    "businessImpact": "Optimizes multi-terabyte enterprise cloud storage, slashing redundant storage footprints by 30% and accelerating legal hold / audit discovery.",
    "interviewStar": {
      "situation": "Unstructured enterprise cloud drives rapidly balloon with duplicate ISOs, build artifacts, and legacy documentation, causing storage cost spikes.",
      "task": "Create an automated crawler to index file hierarchies, identify duplicates via cryptographic hashing, and suggest lifecycle archiving tiers.",
      "action": "Engineered an asynchronous Python daemon coordinating filesystem traversal, SHA-256 hashing, and SQLite metadata tracking with automated visual reporting.",
      "result": "Reclaimed hundreds of gigabytes of redundant storage and streamlined file discovery across 30,000+ files."
    }
  },
  {
    "id": "game-library",
    "title": "Xbox PC App & Game Library Clean-Room Reconstruction",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "Clean-Room UI Optics & Live MCP Telemetry Bridge",
    "description": "100% clean-room visual reconstruction of the Xbox PC App and Game Library in Tailwind/React, with zero Electron overhead, 100vw x 100vh enterprise shell, and live Model Context Protocol (FastMCP) telemetry bridge for GPU and game engine hooks.",
    "techStack": [
      "React 19",
      "Tailwind CSS",
      "FastMCP 2.3+",
      "Python 3.12",
      "NVIDIA RTX 4080 Telemetry",
      "High-Gloss Lacquer"
    ],
    "architecture": "Engineered an isolated clean-room frontend shell with collapsible rail navigation, Ctrl+K command bar, and dual-mode inspector. Connects via Python FastMCP daemon (mcp_xbox_sync.py) to extract live Game DVR and GPU telemetry without proprietary runtime dependencies.",
    "businessImpact": "Demonstrates advanced visual-to-code reverse engineering capabilities, sub-millisecond UI rendering speeds, and modern enterprise protocol integration.",
    "interviewStar": {
      "situation": "Proprietary desktop software often suffers from excessive Electron memory bloat, high telemetry latency, and inflexible styling.",
      "task": "Reverse-engineer and rebuild a production-grade 1-to-1 clean-room replica of the Xbox PC desktop experience with lightweight web primitives and live hardware telemetry.",
      "action": "Developed a pure Tailwind/React component architecture with custom High-Gloss Lacquer optics and constructed an asynchronous Python MCP daemon streaming real-time GPU/DVR metrics.",
      "result": "Eliminated 90%+ of legacy Electron runtime overhead while delivering an authentic, hardware-accelerated desktop experience."
    }
  },
  {
    "id": "aac",
    "title": "Amina AAC & Systematic Phonics Studio",
    "category": "edtech",
    "categoryLabel": "Education & Interactive Engines",
    "badge": "Production-Ready",
    "type": "Universal Augmentative Communication & Phonics Device",
    "description": "Universal Augmentative and Alternative Communication (AAC) device and systematic phonics learning engine compliant with Open Board Format (OBF) and WCAG 2.1 AAA. Combines motor planning grids with an Afro-European neural voice synthesis engine.",
    "techStack": [
      "TypeScript",
      "React 19",
      "Vite",
      "PWA",
      "Web Speech API",
      "Open Board Format (OBF)",
      "Tailwind CSS"
    ],
    "architecture": "Offline-first Progressive Web App (PWA) with responsive motor planning communication matrix, tactile micro-phonics sound button architecture, and clinical Modified Fitzgerald Key color hierarchies.",
    "businessImpact": "Empowers non-verbal communicators, stroke recovery patients, and early childhood literacy learners with an accessible, vendor-lock-free communication tool.",
    "interviewStar": {
      "situation": "Commercial AAC speech devices frequently cost thousands of dollars and trap families in proprietary, vendor-locked formats without integrated literacy tools.",
      "task": "Build an open-source, standards-compliant AAC platform combining sentence-building motor planning grids with systematic phonics instruction.",
      "action": "Architected an offline PWA implementing Open Board Format schemas, responsive dynamic grid scaling, tactile sound-button decoding, and natural neural voice narration.",
      "result": "Delivered a zero-cost, fully accessible communication suite with 100% offline functionality across mobile, tablet, and desktop."
    }
  },
  {
    "id": "agent-365",
    "title": "Microsoft 365 Enterprise Suite & Autonomous Agent Copilot",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "1-to-1 Enterprise Cloud Office Suite & Multi-Agent Copilot",
    "description": "Authentic 1-to-1 web replica of the Microsoft 365 productivity suite (Word, Excel, PowerPoint, Outlook, OneDrive) powered by unified multi-agent AI copilot orchestration.",
    "techStack": [
      "Python 3.12",
      "FastAPI",
      "Vanilla JS / DOM Engines",
      "Formula Evaluation Parser",
      "Pytest"
    ],
    "architecture": "FastAPI REST backend decoupled from client productivity canvases. Features live document layout rendering, interactive spreadsheet formula evaluation engine, slide show runner, and multi-agent copilot context dispatcher.",
    "businessImpact": "Enables air-gapped enterprise productivity and rapid copilot testing without multi-tier subscription costs or public cloud data exposure.",
    "interviewStar": {
      "situation": "Enterprise teams requiring private AI agent automation across documents, spreadsheets, and emails cannot easily test multi-agent workflows against live production M365 tenants without risk.",
      "task": "Construct a full-fidelity, authentic web replica of key M365 applications with live editing, formula recalculation, and integrated agent tooling.",
      "action": "Engineered high-fidelity web replicas for Word, Excel, PowerPoint, Outlook, and OneDrive backed by asynchronous Python APIs and unit-tested client factories.",
      "result": "Delivered an authentic testbed for autonomous copilot agents with 15 passing pytest test suites and zero external cloud dependencies."
    }
  },
  {
    "id": "chess-clash",
    "title": "Chess Clash 10 Kingdoms Mobile & Web Engine",
    "category": "edtech",
    "categoryLabel": "Education & Interactive Engines",
    "badge": "Production-Ready",
    "type": "Cross-Platform React Native & Web Chess Engine",
    "description": "Cross-platform tactical chess engine and kingdom campaign game built with React Native, Expo, and TypeScript. Features VectorPiece rendering, dynamic tactical themes, offline engine evaluation, and zero ad bloat.",
    "techStack": [
      "React Native",
      "Expo 58",
      "TypeScript",
      "React 19",
      "AsyncStorage",
      "Vector Graphics"
    ],
    "architecture": "Decoupled chess state engine handling move validation, algebraic notation, material counting, and tactical themes. Employs hardware-accelerated vector piece rendering and responsive board layouts across mobile and web.",
    "businessImpact": "Delivers clean, lightweight tactical chess education with zero intrusive shovelware advertising or tracking libraries.",
    "interviewStar": {
      "situation": "Mobile chess games are often cluttered with predatory ads, heavy third-party tracking SDKs, and sluggish frame rates on low-end hardware.",
      "task": "Engineer a clean-room, responsive chess app with offline gameplay, custom tactical themes, and high-performance vector rendering.",
      "action": "Built a cross-platform Expo and TypeScript engine, stripped legacy ad SDKs in favor of clean gameplay mechanics, and developed vector piece renderers.",
      "result": "Achieved consistent 60fps animations and immediate touch response across Android, iOS, and Web targets."
    }
  },
  {
    "id": "youtube-channels",
    "title": "ApexPulse 3D Gallery & YouTube Highlight Studio",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "Three.js 3D Virtual Gallery & Automated Audio-Video Highlight Studio",
    "description": "Interactive 3D museum exhibition hallway and automated video highlight production studio built with Three.js, real 1K Poly Haven PBR textures, licensed studio audio mixing, and automated YouTube Shorts publishing.",
    "techStack": [
      "Three.js",
      "WebGL",
      "Python 3.12",
      "PowerShell 7",
      "FFmpeg",
      "YouTube Data API v3",
      "FastMCP"
    ],
    "architecture": "First-person 3D exhibition corridor with PBR textures and spatial acoustics. Features an automated FFmpeg render engine with -18dB dynamic sidechain audio ducking for commentary over background tracks, and an OAuth2 YouTube Data API v3 automation daemon with deterministic tag/title generation.",
    "businessImpact": "Delivers a fully automated gaming highlight curation and rendering pipeline, reducing production turnaround from hours to minutes while adhering to YouTube monetization policies and audio licensing standards.",
    "interviewStar": {
      "situation": "Content creators and gaming channels face bottlenecked production pipelines when curating raw footage, licensing royalty-free audio, balancing sidechain ducking, and publishing daily shorts.",
      "task": "Architect an immersive, browser-accessible 3D studio and headless command pipeline to automate clip ingestion, audio curation, ducking mixdowns, and scheduled YouTube uploads.",
      "action": "Built an interactive Three.js 3D museum corridor with PBR shaders, integrated 46+ CC-BY/CC0 audio tracks and soundbytes, engineered an automated FFmpeg audio sidechain mixing engine, and automated upload queuing via Google OAuth2 APIs.",
      "result": "Created an end-to-end highlight production suite with a 21/21 quality gate pass rate, zero audio clipping, and automated multi-tier rendering."
    }
  },
  {
    "id": "how-to-train-your-ai",
    "title": "How to Train Your AI: Autonomous Multi-Project Ecosystem",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "Autonomous Local LLM Training & Knowledge Alignment Engine",
    "description": "Centralized autonomous training pipeline and knowledge extraction engine that extracts code patterns and architecture across 38+ repositories to train, align, and specialize local LLMs (via Ollama & DeepSeek-R1) for software engineering and automated operations.",
    "techStack": [
      "Python 3.12",
      "Ollama",
      "DeepSeek-R1",
      "Llama 3",
      "JSONL Datasets",
      "PowerShell 7",
      "Windows Task Scheduler"
    ],
    "architecture": "Python knowledge extraction daemon (extract_project_knowledge.py) that continuously parses local source trees, synthesizes input-output instruction pairs into formatted JSONL training datasets, and compiles specialized Modelfiles (project-forge, dev-deepseek, gamecraft-ai). Orchestrated via scheduled nightly triggers with automated Git state checkpoints.",
    "businessImpact": "Enables private, air-gapped domain specialization of local LLMs tailored to enterprise engineering standards without third-party cloud data exposure or fine-tuning infrastructure overhead.",
    "interviewStar": {
      "situation": "Local open-source models often lack domain-specific awareness of proprietary multi-repo architectures and coding standards when run out-of-the-box.",
      "task": "Design an autonomous extraction and prompt-tuning pipeline that continuously feeds codebase knowledge into local LLM instances.",
      "action": "Engineered an automated knowledge extractor scanning 38+ local project workspaces, structured domain datasets into JSONL corpora, compiled role-specific Modelfiles, and implemented scheduled retraining loops.",
      "result": "Achieved tailored, highly context-aware local AI assistance across game dev, infrastructure automation, and security workflows with zero cloud API dependencies."
    }
  },
  {
    "id": "planetarium",
    "title": "Deep Space Planetary Observatory & Sector Atlas",
    "category": "ai",
    "categoryLabel": "AI & LLM Systems",
    "badge": "Production-Ready",
    "type": "Interactive 3D Exoplanetary Observatory & Bidirectional Agent Uplink",
    "description": "Interactive exoplanetary star sector visualization charting 64 celestial bodies with astronomical physical metrics, 3D rotating holograms, and native bidirectional IPC agent dispatching directly into Google Antigravity.",
    "techStack": [
      "Three.js",
      "WebGL",
      "HTML5 Canvas",
      "JavaScript (ES6+)",
      "Antigravity UI Extension Bridge",
      "High-Gloss Lacquer Optics",
      "FastMCP"
    ],
    "architecture": "High-performance orbital simulation engine featuring panoramic wide-aspect elliptical projections, real-time procedural celestial rendering, dynamic audio acoustics, and an interactive telemetry deck equipped with 1-click prompt dispatching directly into the Antigravity assistant conversation via native sidecar IPC.",
    "businessImpact": "Bridges high-fidelity spatial data visualization with autonomous AI pair programming, enabling one-click task execution, code audits, and automated test triggers directly from the visual canvas.",
    "interviewStar": {
      "situation": "Visualizing complex multi-agent system states across dozens of distributed services requires an intuitive, high-density telemetry interface rather than flat terminal logs.",
      "task": "Create an immersive, scientifically grounded 3D astronomical map that serves as both a system status dashboard and a direct interactive control panel for autonomous AI agents.",
      "action": "Engineered a panoramic 64-body planetary observatory with Three.js/Canvas, integrated 1-click Antigravity prompt dispatching via native sidecar IPC, and packaged the tool as an official Antigravity UI Extension plugin.",
      "result": "Delivered a full-viewport, 60fps interactive telemetry and agent dispatch cockpit, reducing operational prompt crafting time to zero."
    }
  },
  {
    "id": "index-folder",
    "title": "Antigravity Projects Directory & 3D Art Gallery Studio",
    "category": "quant",
    "categoryLabel": "Quant & Cloud Automation",
    "badge": "Production-Ready",
    "type": "Interactive Multi-Project Registry & Three.js 3D Virtual Art Gallery",
    "description": "Central mission control and interactive multi-project workspace index categorizing 60+ engineering repositories across cybersecurity, gaming, AI, web apps, and finance with a first-person Three.js 3D virtual museum tour.",
    "techStack": [
      "HTML5 / Canvas",
      "Three.js",
      "WebGL",
      "Vanilla JavaScript (ES6+)",
      "High-Gloss Lacquer CSS",
      "PowerShell 7",
      "VS Code Multi-Root Workspaces"
    ],
    "architecture": "Engineered a categorical registry grouping 60+ local projects across 5 domain wings with automated Windows shortcut launchers, metadata manifests, and a 60fps first-person 3D museum corridor featuring radar HUD minimap, VIP automated tour mode, and interactive modal launchers.",
    "businessImpact": "Eliminates IDE fragmentation across massive multi-repository workspaces, providing immediate searchability, rapid context switching, and interactive 3D visual showcase capabilities.",
    "interviewStar": {
      "situation": "Navigating and presenting a portfolio of 60+ active repositories across disparate engineering domains causes cognitive fatigue, IDE scoping friction, and fragmented discovery.",
      "task": "Design a unified workspace index and interactive presentation portal allowing instant project filtering, native folder launching, and an immersive 3D architectural showcase.",
      "action": "Architected a dual-interface hub: a high-contrast searchable mission control web dashboard and a Three.js first-person 3D gallery featuring custom lighting, spatial exhibition wings, radar HUD, and auto-walk cinematic tours.",
      "result": "Unified 60+ repositories into a single responsive hub with sub-10ms filter latency and smooth 60fps WebGL rendering across desktop and mobile displays."
    }
  }
];

let allProjects = fallbackProjects;
let currentFilter = 'all';
let searchQuery = '';
let activeModalProject = null;
let activeModalTab = 'overview';

document.addEventListener('DOMContentLoaded', () => {
  // Attempt to fetch from projects.json if served over HTTP
  if (window.location.protocol.startsWith('http')) {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
        allProjects = data;
        initApp();
      })
      .catch(() => {
        initApp();
      });
  } else {
    initApp();
  }
});

function initApp() {
  updateCounts();
  renderProjects();
  setupFilterHandlers();
  setupSearchHandler();
  setupModalHandlers();
}

function updateCounts() {
  const getCount = (cat) => cat === 'all' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
  
  const countAll = document.getElementById('count-all');
  const countAi = document.getElementById('count-ai');
  const countSecurity = document.getElementById('count-security');
  const countQuant = document.getElementById('count-quant');
  const countEdtech = document.getElementById('count-edtech');

  if (countAll) countAll.textContent = getCount('all');
  if (countAi) countAi.textContent = getCount('ai');
  if (countSecurity) countSecurity.textContent = getCount('security');
  if (countQuant) countQuant.textContent = getCount('quant');
  if (countEdtech) countEdtech.textContent = getCount('edtech');
}

function getBadgeClass(badge) {
  if (badge === 'Production-Ready') return 'badge-production';
  if (badge === 'Active Development') return 'badge-active';
  return 'badge-deployable';
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = allProjects.filter(p => {
    const matchesFilter = (currentFilter === 'all') || (p.category === currentFilter);
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery)) ||
      p.type.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px; border: 1px dashed var(--card-border);">
        <h3 style="color: #fff; margin-bottom: 8px;">No matching projects found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try clearing your search query or switching categories.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="resetSearch()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <div class="project-card-header">
        <span class="project-category-tag">${proj.categoryLabel}</span>
        <span class="badge-status ${getBadgeClass(proj.badge)}">${proj.badge}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <div class="project-type">${proj.type}</div>
      <p class="project-desc">${proj.description}</p>
      
      <div class="tech-stack-chips">
        ${proj.techStack.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>

      <div class="project-card-footer">
        <button class="btn-card-action" onclick="openModal('${proj.id}', 'overview')">
          Deep Dive Architecture â†’
        </button>
        <button class="btn-star-link" onclick="openModal('${proj.id}', 'interview')">
          â˜… STAR Story
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function resetSearch() {
  searchQuery = '';
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) searchInput.value = '';
  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderProjects();
}

function setupFilterHandlers() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });
}

function setupSearchHandler() {
  const searchInput = document.getElementById('projectSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProjects();
  });
}

// Modal Logic
function setupModalHandlers() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeModalTab = btn.dataset.tab;
      renderModalTab();
    });
  });
}

window.openModal = function(projectId, tab = 'overview') {
  const proj = allProjects.find(p => p.id === projectId);
  if (!proj) return;

  activeModalProject = proj;
  activeModalTab = tab;

  const modal = document.getElementById('projectModal');
  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  renderModalTab();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
};

function renderModalTab() {
  const container = document.getElementById('modalBody');
  if (!container || !activeModalProject) return;

  const p = activeModalProject;

  if (activeModalTab === 'overview') {
    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px;">${p.categoryLabel} â€¢ ${p.badge}</span>
        <h2 id="modalTitle" style="font-size: 1.85rem; color: #fff; margin-bottom: 8px;">${p.title}</h2>
        <div style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 16px;">${p.type}</div>
        <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.7;">${p.description}</p>
      </div>

      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <h4 style="color: #34d399; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; font-weight: 700;">Commercial & Enterprise Impact</h4>
        <p style="color: #e2e8f0; font-size: 0.95rem; line-height: 1.6;">${p.businessImpact}</p>
      </div>

      <div>
        <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-dim); letter-spacing: 0.05em; margin-bottom: 10px; font-weight: 700;">Technology Stack</h4>
        <div class="tech-stack-chips">
          ${p.techStack.map(t => `<span class="tech-chip" style="font-size: 0.82rem; padding: 6px 12px;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
        <button class="btn btn-primary btn-sm" onclick="switchModalTab('architecture')">Inspect Architecture â†’</button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('interview')">View Interview STAR Story</button>
      </div>
    `;
  } else if (activeModalTab === 'architecture') {
    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px;">System Architecture Deep Dive</span>
        <h2 style="font-size: 1.85rem; color: #fff; margin-bottom: 8px;">${p.title}</h2>
        <div style="color: var(--text-dim); font-size: 0.95rem; margin-bottom: 16px;">${p.type}</div>
      </div>

      <div style="background: rgba(10, 14, 23, 0.8); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
        <h4 style="color: var(--accent-cyan); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; font-weight: 700;">Architectural Workflow & Engineering Rationale</h4>
        <p style="color: #cbd5e1; font-size: 0.98rem; line-height: 1.75;">${p.architecture}</p>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <h4 style="color: #fff; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 12px; font-weight: 700;">Infrastructure & Deployment Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; color: var(--text-muted); font-size: 0.92rem;">
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">â–¹</span> Asynchronous task execution and event-driven worker segregation.</li>
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">â–¹</span> Strict state persistence with lightweight file/database layers (SQLite / JSON).</li>
          <li style="padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan);">â–¹</span> Production-ready error boundaries and headless automated failover daemons.</li>
        </ul>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
        <button class="btn btn-primary btn-sm" onclick="switchModalTab('interview')">Read Interview STAR Response â†’</button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('overview')">Back to Overview</button>
      </div>
    `;
  } else if (activeModalTab === 'interview') {
    const star = p.interviewStar;
    container.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="project-category-tag" style="display:inline-block; margin-bottom: 6px; color: var(--accent-purple);">Candidate Interview Cheat-Sheet</span>
        <h2 style="font-size: 1.75rem; color: #fff; margin-bottom: 6px;">${p.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Formulated using the <strong>STAR Method</strong> (Situation, Task, Action, Result) for behavioral and architectural interviews.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #3b82f6;">S</span>
            <strong style="color: #93c5fd; font-size: 0.9rem; text-transform: uppercase;">Situation</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.situation}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #a855f7;">T</span>
            <strong style="color: #d8b4fe; font-size: 0.9rem; text-transform: uppercase;">Task</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.task}</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--card-border); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #06b6d4;">A</span>
            <strong style="color: #67e8f9; font-size: 0.9rem; text-transform: uppercase;">Action</strong>
          </div>
          <p style="color: #cbd5e1; font-size: 0.94rem; line-height: 1.6;">${star.action}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span class="star-letter" style="background: #10b981;">R</span>
            <strong style="color: #6ee7b7; font-size: 0.9rem; text-transform: uppercase;">Result & Metrics</strong>
          </div>
          <p style="color: #e2e8f0; font-size: 0.94rem; line-height: 1.6;">${star.result}</p>
        </div>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <button id="copyStarBtn" class="btn btn-primary btn-sm" onclick="copyStarStory()">
          ðŸ“‹ Copy STAR Story to Clipboard
        </button>
        <button class="btn btn-secondary btn-sm" onclick="switchModalTab('overview')">Back to Overview</button>
      </div>
    `;
  }
}

window.switchModalTab = function(tabName) {
  activeModalTab = tabName;
  const tabButtons = document.querySelectorAll('.modal-tab-btn');
  tabButtons.forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });
  renderModalTab();
};

window.copyStarStory = function() {
  if (!activeModalProject) return;
  const p = activeModalProject;
  const star = p.interviewStar;

  const text = `PROJECT: ${p.title} (${p.type})\n\n[SITUATION]\n${star.situation}\n\n[TASK]\n${star.task}\n\n[ACTION]\n${star.action}\n\n[RESULT]\n${star.result}`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyStarBtn');
    if (btn) {
      btn.textContent = 'âœ“ Copied to Clipboard!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.textContent = 'ðŸ“‹ Copy STAR Story to Clipboard';
        btn.style.background = '';
      }, 2500);
    }
  });
};

window.copyRecruiterNote = function() {
  const note = `Hi Chase,\n\nI reviewed your portfolio (https://chammin00.github.io/portfolio) showcasing your 12+ years of enterprise infrastructure & storage engineering at Dell Technologies and your recent FastMCP and local AI platform work. We have a senior infrastructure / platform engineering role ($160,000â€“$185,000+ base) that matches your background. Are you available for a brief introductory call this week?\n\nBest regards,`;
  navigator.clipboard.writeText(note).then(() => {
    const btn = document.getElementById('copyRecruiterBtn');
    if (btn) {
      btn.textContent = 'âœ“ Recruiter Note Copied to Clipboard!';
      btn.style.background = '#0a66c2';
      setTimeout(() => {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53c0-.85-.68-1.54-1.53-1.54a1.54 1.54 0 0 0-1.54 1.54c0 .85.69 1.53 1.54 1.53m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg> Copy 1-Click Recruiter Intro Note`;
        btn.style.background = '';
      }, 2500);
    }
  });
};

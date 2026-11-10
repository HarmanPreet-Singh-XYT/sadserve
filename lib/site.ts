export const DOCS = "https://docs.sadservers.com/docs";

export const LABS: { category: string; slug: string; items: { name: string; desc: string }[] }[] = [
  {
    category: "Linux & Bash",
    slug: "linux",
    items: [
      { name: "Bash", desc: "Shell, scripts, pipelines" },
      { name: "Cron", desc: "Scheduled jobs, crontab, logs" },
      { name: "Disk volumes", desc: "Mounts, LVM, fstab, space" },
      { name: "DNS", desc: "Resolution, records, resolv.conf" },
      { name: "SSH", desc: "Keys, sshd, scp, bastions" },
      { name: "Supervisord", desc: "Process supervisor (legacy)" },
      { name: "systemd", desc: "Units, services, timers, journal" },
    ],
  },
  {
    category: "Web Servers",
    slug: "web",
    items: [
      { name: "Apache", desc: "httpd, vhosts, modules, logs" },
      { name: "Caddy", desc: "Reverse proxy, TLS, Caddyfile" },
      { name: "Nginx", desc: "Server blocks, proxy, upstreams" },
      { name: "HAProxy", desc: "Load balancing, ACLs, health checks" },
      { name: "Gunicorn", desc: "WSGI workers, Django, Flask" },
      { name: "SSL / TLS", desc: "Certs, openssl, Let's Encrypt" },
      { name: "Traefik", desc: "Dynamic proxy, Docker, K8s" },
    ],
  },
  {
    category: "Databases",
    slug: "db",
    items: [
      { name: "ClickHouse", desc: "OLAP, merges, replication" },
      { name: "Postgres", desc: "SQL, psql, locks, vacuum" },
      { name: "MySQL", desc: "MariaDB, InnoDB, replication" },
      { name: "SQLite", desc: "Embedded DB, WAL, Litestream" },
      { name: "Redis", desc: "Cache, pub/sub, persistence, replication" },
      { name: "MongoDB", desc: "Documents, replica sets, indexes" },
      { name: "etcd", desc: "K8s state store, Raft, snapshots" },
    ],
  },
  {
    category: "Data Processing",
    slug: "data",
    items: [{ name: "Data processing", desc: "JSON, CSV, ETL, batch vs stream" }],
  },
  {
    category: "Docker",
    slug: "docker",
    items: [
      { name: "Docker", desc: "Images, containers, Compose, networks" },
      { name: "Podman", desc: "Daemonless, rootless, pods, Quadlet" },
    ],
  },
  {
    category: "Kubernetes",
    slug: "k8s",
    items: [
      { name: "Kubernetes", desc: "Pods, kubectl, RBAC, krew plugins" },
      { name: "Helm", desc: "Charts, releases, values, rollback" },
    ],
  },
  {
    category: "CI/CD",
    slug: "cicd",
    items: [
      { name: "Jenkins", desc: "Pipelines, agents, CI/CD automation" },
      { name: "GitHub Actions", desc: "Workflows, runners, YAML pipelines" },
      { name: "Gitea", desc: "Self-hosted Git, Actions, runners" },
    ],
  },
  {
    category: "Infrastructure As Code",
    slug: "iac",
    items: [
      { name: "Ansible", desc: "Playbooks, inventory, roles, modules" },
      { name: "Terraform", desc: "HCL, state, plan/apply, modules" },
    ],
  },
  {
    category: "Observability",
    slug: "obs",
    items: [
      { name: "ELK Stack", desc: "Elasticsearch, Logstash, Filebeat" },
      { name: "Prometheus", desc: "Metrics, PromQL, Grafana dashboards" },
    ],
  },
  {
    category: "Tooling / Applications",
    slug: "tools",
    items: [
      { name: "Git", desc: "Clone, branch, merge, remotes" },
      { name: "FTP", desc: "vsftpd, PASV, legacy B2B feeds" },
      { name: "RabbitMQ", desc: "RMQ, dashboard, queues, consumers" },
      { name: "Envoy", desc: "Proxy, xDS, admin API, mesh" },
      { name: "HashiCorp Vault", desc: "Secrets, seal/unseal, policies" },
      { name: "Harbor", desc: "Registry, scan, replicate, RBAC" },
    ],
  },
];

export const BLOG = [
  {
    title: "Hands-On Linux & DevOps Labs Compared",
    date: "Nov 7, 2026",
    tag: "Comparison",
    excerpt:
      "A short look at some of the best hands-on Linux and DevOps platforms using sandboxes, each good for a different kind of practice: OverTheWire, KodeKloud, SadServers and iximiuz Labs.",
  },
  {
    title: "How to write a recruiter email engineers will actually answer",
    date: "Sep 13, 2026",
    tag: "Hiring",
    excerpt:
      "I used to get a lot of emails from recruiters for Infra/Cloud/DevOps/SRE positions and it always amazed me that almost none of them were really good.",
  },
  {
    title: "Climb, Coast, or Quit: The Three Types of Employees",
    date: "Aug 17, 2026",
    tag: "Career",
    excerpt:
      "After over 30 years across government, startups and Big Tech: categorizing engineers into three groups according to internal motivation.",
  },
  {
    title: "What We Learned Running AWS Spot Instances in Production",
    date: "Aug 6, 2026",
    tag: "Infrastructure",
    excerpt:
      "Spot is more than cheap VMs that can disappear. Prices differ by Availability Zone — a t3a.nano can cost less than half as much in one AZ compared to the others.",
  },
  {
    title: "Production Incidents",
    date: "Apr 1, 2026",
    tag: "SRE",
    excerpt:
      "“The cause of all incidents or failures in a working system is ultimately a change.” A way to classify failures as internal (static) or external to help troubleshooting.",
  },
  {
    title: "The Complete Guide to AI-Powered SRE Tools: Hype vs. Reality",
    date: "Mar 8, 2026",
    tag: "AI",
    excerpt:
      "Examines AI tools that promise to autonomously detect, diagnose and resolve production issues, and why reality often falls short of the hype.",
  },
  {
    title: "2025 Year in Review",
    date: "Dec 22, 2025",
    tag: "Company",
    excerpt:
      "Third year of SadServers. Scenarios almost doubled, users more than doubled, uptime close to 100%. Plus Advent of Sysadmin: 12 days and about 10,000 participants.",
  },
  {
    title: "Destroy and Deploy: the Joys of Immutability",
    date: "Oct 11, 2025",
    tag: "Infrastructure",
    excerpt:
      "A “grandpa story” about pets vs cattle servers, and why a production server uptime of over a thousand days is not a good thing.",
  },
  {
    title: "Test Your Infrastructure with Game Days",
    date: "Oct 8, 2025",
    tag: "SRE",
    excerpt:
      "“You don't have a backup until you have performed a restore.” Resilience requires trying to break and recover. Published in O'Reilly's 97 Things Every Cloud Engineer Should Know.",
  },
  {
    title: "Don't SSH into Production",
    date: "Oct 4, 2025",
    tag: "Ops",
    excerpt:
      "Routine server administration should be handled with automation and services, through code and software.",
  },
  {
    title: "Migrating Kubernetes out of the Big Cloud Providers",
    date: "Sep 24, 2025",
    tag: "Kubernetes",
    excerpt:
      "Control plane and auxiliary service overhead plus easy costly mistakes make most Kubernetes installs more expensive than running workloads without it.",
  },
  {
    title: "Technical Interviews: We Can do Better",
    date: "Jun 21, 2025",
    tag: "Hiring",
    excerpt:
      "Hiring is expensive for companies and candidates; companies spend surprisingly little time preparing good interviews.",
  },
  {
    title: "What the F is DevOps?",
    date: "Oct 31, 2024",
    tag: "DevOps",
    excerpt:
      "The origin of DevOps: developers wanting change vs sysadmins wanting stability, and the “wall” DevOps was meant to break down.",
  },
  {
    title: "Automation Is a Panacea",
    date: "Dec 21, 2023",
    tag: "Ops",
    excerpt:
      "“Panacea: a solution or remedy for all difficulties.” Since there are no panaceas, reframed as “something that is good to do in almost all circumstances”.",
  },
];

export const FAQ: { section: string; intro: string; qs: string[] }[] = [
  {
    section: "Getting Started",
    intro:
      "New to SadServers? Learn how hands-on Linux and DevOps practice works on real VMs, what you need to begin, and how to create a free account.",
    qs: [
      "What is SadServers?", "What is SadServers' philosophy?", "Who is it for?", "How does it work?",
      "Where do I learn more about SadServers' history or how it works technically?", "Do I need to install anything?",
      "What Linux knowledge is expected?", "Can I try it for free?", "How do I create an account?",
      "Why do I want to create an account?", "Can I sign in with Google or GitHub?", "I forgot my password",
    ],
  },
  {
    section: "Scenarios & Labs",
    intro:
      "Interactive troubleshooting exercises on real cloud VMs, from quick fixes to senior-level interview challenges. Scenario types, access levels, hints, labs, and solution checking.",
    qs: [
      "What are scenarios?", "Where do scenarios run?", "What types of scenarios are there?",
      "What types of access do scenarios have?", "What are Labs?",
      "My solution is right but the \"Check My Solution\" button says it's wrong",
      "How long does a scenario server take to come up?", "How difficult are the scenarios?",
      "How long does a scenario take?", "There's not enough time to finish some scenarios",
      "Can I restart a scenario?", "Can I run multiple scenarios at the same time?", "Are there hints?",
      "Are solutions available?", "Is the solution given in the clues the best or recommended solution?",
      "Can I create my own scenarios?", "How often are new scenarios added?", "Do you ever retire scenarios?",
      "Is there a place to see scenario descriptions & test?", "Why don't you publish the scenario clues & solution?",
    ],
  },
  {
    section: "Scenario Environment",
    intro: "Every SadServers session runs on a dedicated cloud VM. You are free to practice and play in these sandboxes.",
    qs: [
      "What operating system or Linux distribution is used?", "Do I have root access?",
      "What software is pre-installed?", "Are all scenarios on a single VM?", "Can I break things permanently?",
      "Do I need a browser or can I use my own terminal?", "Can the VM reach the internet?", "What are resumable VMs?",
    ],
  },
  {
    section: "Learning, Progress & Scoring",
    intro:
      "Track solved/unsolved scenarios on your dashboard. See how completion and scoring work so you can measure real Linux troubleshooting skill over time.",
    qs: [
      "How do I track my progress?", "How is completion tracked?", "How does scoring work?",
      "What is the Ranking page?", "Are there streaks?", "Does progress carry over across devices?",
      "Can I repeat completed scenarios?", "Is there a recommended learning path?", "How do I start learning Linux?",
      "How do I learn DevOps or build a DevOps project?", "Are there beginner, intermediate, and advanced tracks?",
    ],
  },
  {
    section: "Certificates & Badges",
    intro:
      "Pro subscribers earn shareable certificates and embeddable badges that showcase troubleshooting progress on LinkedIn, GitHub, or a portfolio.",
    qs: [
      "What are certificates and badges?", "Are certificates and badges available on free accounts?",
      "How do I earn a level?", "How do I set up my certificate page?", "How do I download my PDF certificate?",
      "How do I add a badge to GitHub or my resume?", "Can employers verify my certificate?",
      "What does a completed scenario prove?",
    ],
  },
  {
    section: "Pro, Pro+ & Business",
    intro:
      "Thinking about upgrading? These answers cover what each paid plan includes, who it is for, and how to get started.",
    qs: [
      "Why upgrade from the free Hobbyist plan?", "What plans are available?",
      "Which plan should I choose (Pro, Pro+, or Business)?",
      "What's the difference between a Business subscription and pay-per-use?", "What is direct SSH access to VMs?",
      "What is command history logging?", "What are invitations to scenarios?", "When should my company choose Business?",
      "Can I try the Business plan?", "How do I subscribe or upgrade?", "What is Pro+ lifetime?",
    ],
  },
  {
    section: "Gift Accounts",
    intro:
      "Someone can make a one-time purchase to give somebody else a Pro+ account. An excellent low-cost choice for companies that offer professional development or training stipends.",
    qs: ["Can I gift SadServers to someone?", "Can my organization pay for my SadServers subscription?"],
  },
  {
    section: "Job Interviews",
    intro:
      "Run live or asynchronous technical interviews on real Linux VMs with automated scoring and candidate dashboards.",
    qs: [
      "How do interview sessions work?", "What types of interviews does SadServers support?",
      "How do candidates sign in?", "How do I invite candidates?",
      "Do candidates need to create a SadServers account before the interview?", "Can I see candidate progress?",
      "How is performance evaluated?", "Can I customize the scenario set?", "Can I customize the scenario time?",
      "Can I hide the timer in the scenarios?", "Can I hide the clues from the candidates?",
      "How long should an interview be?", "Can candidates continue later?",
    ],
  },
  {
    section: "Organizations & Teams",
    intro:
      "Business organizations give your company a shared workspace for training, hiring, and team practice, with Pro+ features for every member.",
    qs: [
      "What is an Organization?", "How do I invite team members?", "Can I transfer ownership?",
      "How are seats counted?", "Can members access all scenarios?", "Do you offer enterprise plans?",
      "Do you support SSO?", "Can you provide custom scenarios?", "Can you deploy on-premises?",
      "Can SadServers be used to evaluate AI agents?", "Do you offer academic discounts?",
      "Where is customer data stored?",
    ],
  },
  {
    section: "Subscription & Billing",
    intro: "Payments, cancellation, and account billing.",
    qs: [
      "How does billing work?", "How do subscriptions work?", "Can I cancel a subscription anytime?",
      "What happens when I cancel a subscription?", "Can I pause my subscription?", "Can I switch plans?",
      "Do you offer refunds?", "How do I get invoices and receipts from my subscription?",
      "What payment methods are accepted?", "Why did my payment fail?",
    ],
  },
  {
    section: "Technical Issues",
    intro: "Terminal won't connect? Server slow to start? Fix common browser and network problems.",
    qs: [
      "Which browsers are supported?", "Does it work on tablets or phones?", "Why won't my web terminal connect?",
      "Ctrl-W closes the terminal window and that's annoying?", "Why is the server taking a long time to start?",
      "My session disconnected", "Can I use SSH?", "Are corporate firewalls supported?",
    ],
  },
  {
    section: "API & CLI/TUI",
    intro:
      "Automate scenario VMs or practice from your own terminal with the SadServers REST API and beta sads CLI.",
    qs: [
      "Is there an API?", "How does API authentication work?", "What can I do with the API?",
      "What is the CLI/TUI?", "Who can use the CLI/TUI?", "How do I install and use the CLI/TUI?",
      "Can I integrate with my LMS or export results?",
    ],
  },
  {
    section: "Security & Privacy",
    intro:
      "Your practice sessions run in isolated VMs; we protect account data and do not sell personal information.",
    qs: ["Is my terminal isolated?", "What data do you collect?", "What data do you share?", "Are passwords stored securely?"],
  },
  {
    section: "Content & IP",
    intro:
      "SadServers scenarios, labs, and branding are proprietary. What you can share or cite, and what requires permission.",
    qs: [
      "Can I share scenario solutions publicly?", "Can I use SadServers content in courses or training materials?",
      "Who owns SadServers scenarios and content?", "Can I record or stream myself doing scenarios?",
      "How do I request permission to use SadServers content?",
    ],
  },
  {
    section: "Support",
    intro: "Stuck or found a bug? How to reach us and what response times to expect.",
    qs: ["How do I report a bug?", "How do I report a security issue?", "How quickly do you respond?"],
  },
  {
    section: "Other",
    intro: "Platform trivia, scenario requests, testimonials, and where to follow SadServers updates.",
    qs: [
      "How do I request a scenario?", "What can I do to help SadServers?", "What do people say about SadServers?",
      "Why is the platform called SadServers?", "How often do you release new content?", "Where can I follow updates?",
    ],
  },
];

export const RANKING = [
  ["sergio", 299], ["Ryan1002", 290], ["ozanuslan", 289], ["upixDenpasar", 283], ["murzindima", 260],
  ["Algried", 254], ["Theo BORI", 254], ["masover", 244], ["tem", 229], ["MeyanManul", 216],
  ["Jesse Rhoads", 215], ["l", 212], ["Continuous Improvement", 210], ["melinoix", 202], ["NeoMacFly", 201],
  ["Aleksandr", 193], ["Fernando Duran", 190], ["Artem Shugayev", 187], ["kataoka", 177], ["AG", 174],
] as const;

export const PRO_PLUS = [
  "Access to all scenarios",
  "Unlimited tries",
  "Unlimited number of scenarios per day",
  "Double the time to complete scenarios",
  "VMs with Internet access",
  "Achievements Page",
  "Direct SSH access to VMs",
  "Command History Logging",
  "Invitations to scenarios",
  "Email support",
];

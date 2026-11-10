export type Difficulty = "easy" | "medium" | "hard" | "playground";
export type ScenarioType = "Fix" | "Do" | "Hack" | "Playground";

export type Scenario = {
  id: string;
  n: number;
  difficulty: Difficulty;
  city: string;
  title: string;
  minutes: number;
  type: ScenarioType;
  noReg: boolean;
  pro: boolean;
  business: boolean;
  isNew: boolean;
};

// city | title | minutes | type(F/D/H/P) | flags (N=no registration, P=pro, B=business, W=new)
const RAW: Record<Difficulty, string> = {
  easy: `Saint John|what is writing to this log file?|10|F|N
Saskatoon|counting IPs.|15|D|
The Command Line Murders||20|D|N
Taipei|Come a-knocking|15|H|
Resumable Server|Linux Upskill Challenge|30|D|
Lhasa|Easy Math|15|D|
Bucharest|Connecting to Postgres|15|F|
Bilbao|Basic Kubernetes Problems|10|F|
Apia|Needle in a Haystack|40|D|P
Gitega|Find the Bad Git Commit|30|D|P
Minneapolis|Break a CSV file|10|D|
Saint Paul|Merge Many CSVs files|15|D|
Bata|Find in /proc|10|D|
Geneva|Renew an SSL Certificate|10|F|
Linux Server Review|Guided Learning|30|D|
Tokamachi|Troubleshooting a Named Pipe|15|F|
Yokohama|Linux Users Working Together|30|F|P
Fukuoka|Forbidden Association|30|F|P
Kampot|A New Port|10|D|
Rio de Janeiro|Do we have another option?|30|F|P
Nuuk|More SSH Troubles|20|F|P
Cairo|Time for a Timer|15|F|
Alexandria|The Vanishing Backups|10|F|
Kortenberg|Can't touch this!|30|F|P
Hamburg|Find the AWS EC2 volume|60|D|P
Valladolid|Cleaner not cleaning|20|F|
Porto|Port audit without net tools|15|D|
Edinburgh|FTP catalog sync failure|10|F|
Bologna|counting ELB 5xx errors|30|D|P
Genova|cgroups problem|15|F|
Bergen|Port already in use|20|F|
Nara|No ls on this system|20|D|
Istanbul|Delete unattached AWS EBS volumes|15|D|`,
  medium: `Manhattan|can't write data into database.|20|F|N
Tokyo|can't serve web file|15|F|
Cape Town|Borked Nginx|15|F|
Salta|Docker container won't start.|15|F|
Venice|Am I in a container?|15|D|
Oaxaca|Close an Open File|15|F|
Melbourne|WSGI with Gunicorn|40|F|P
Lisbon|etcd SSL cert troubles|20|F|
Kihei|Surely Not Another Disk Space Scenario|30|F|
Unimak Island|Fun with Mr Jason|30|D|P
Ivujivik|Parlez-vous Francais?|40|D|P
Paris|Where is my webserver?|15|H|
Buenos Aires|Kubernetes Pod Crashing|20|F|
Tarifa|Between Two Seas|40|F|P
Marrakech|Word Histogram|20|D|
Rosario|Restore a MySQL database|15|F|
Abaokoro|Restore MySQL Databases Spooked by a Ghost|40|F|P
Poznan|Helm Chart Issue in Kubernetes|30|F|P
Manado|How much do you press?|60|D|P
Warsaw|Prometheus can't scrape the webserver|60|F|P
Moyogalpa|Security Snag. The Trials of Mary and John|30|F|
Helsingor|The first walls of postgres physical replication|20|F|
Bekasi|Supervisor is still around|40|F|P
Depok|Nginx with Brotli|30|F|P
Tukaani|XZ LZMA Library Compromised|30|F|P
Atrani|Modify a SQlite3 Database|30|F|P
Nerdearla Buenos Aires|Troubleshoot "A" no se conecta con "B"|30|F|
Minneapolis with a Vengeance|Break a CSV file|20|D|
Hanoi|Find the Multitasking Users|30|D|P
Bengaluru|Kubernetes StatefulSet least known characteristic|15|F|
Constanta|Jumping Frog|20|H|
Bharuch|Lost in Translation|40|F|P
Quito|Control One Container from Another|20|D|
Bangalore|Envoy Panics|15|F|
Budapest|User Creation|20|D|
Bizerte|The Slow Application|15|F|
Ruaka|Kubernetes pod in distress|30|F|P
Campina Grande|Give me my cert, Vault|30|F|P
Kampala|Strange Script Error|15|F|
Bondo|Split my pile!|20|F|
Atlantis|Not found|30|F|P
Kilifi|Speculative Misallocation!|20|F|
Solanea|ClickHouse mad house|40|D|P
Tunis|Redis Replication Problem|40|F|P
Toulon|Denied Lamp|30|F|B
Bermuda|Command not found|20|F|B
Auderghem|Containers miscommunication|30|F|P
Marseille|Rocky security|30|F|P
Woluwe|Too many images|30|F|P
La Rinconada|Elevating privileges|15|H|
Annapurna|High privileges|20|H|
Podgorica|Docker to Podman migration|40|D|P
Torino|Optimize grande Docker image|30|D|P
Socorro, NM|Optimize Podman image|30|D|P
Sume|Tied in a Knot|20|F|
San Juan|mucho Traefik|20|F|
Suzhou|MongoDB replicas!|20|F|
Amsterdam|Cron Hijack|15|H|
Lyon|Migrate Ingress-NGINX to Traefik|40|D|P
Stockholm|DNS health check issue|20|F|P
Cordoba|df is lying (or is it du?)|10|F|
Tallinn|BuildKit & Docker build mismatch|30|F|P
Verona|Apache Portal Won't Open|15|F|
Modena|Ansible Deploy Won't Publish|30|F|P
Parma|Debugging Terraform Issues|20|F|
Montevideo|restore test snapshot would clobber production|50|F|P
Ravenna|Logs Missing in ELK Pipeline|30|F|P
Philadelphia|htop metrics disagree|20|F|
Luxor|PostgreSQL analytics queries crawl|20|F|
Banha|Intermittent 504 Gateway Time-Out errors|30|F|P
Aswan|K8s Service Connectivity Failure|30|F|P
Nairn|Phantom Gitea Deploy|20|F|
Vienna|The Vanishing Process|15|F|
Hangzhou|The web server one-second delay that never happens|40|F|P
Spa|The Docker Compose healthcheck that does not heal|30|F|P
Kyoto|The Gion ticket API will not start|20|F|
Dakar|The half-installed package|10|F|
Salzburg|The TLS key that still matches|20|F|
Auckland|S3 delete & archive old backups|20|D|
Trade|FIX drop reconciliation|20|F|
Flip|algo symbol flips|25|F|
Cork|The catalog won't open|20|F|W
Bournemouth|Same job, three shells|20|D|W`,
  hard: `Jakarta|it's always DNS.|20|F|N
Bern|Docker web container can't connect to db container.|20|F|
Singara|Docker and Kubernetes web app not working.|20|F|
Hong-Kong|can't write data into database.|40|F|P
Pokhara|SSH and other sshenanigans|60|F|P
Roseau|Hack a Web Server|30|H|
Belo-Horizonte|A Java Enigma|40|F|P
Chennai|Pull a Rabbit from a Hat|60|F|P
Monaco|Disappearing Trick|30|H|
Florence|Database Migration Hell|60|F|P
Zaragoza|Test changing critical files|40|D|P
Amygdala|Do you have enough insight to see the secrets?|40|F|P
Tigoni|Patch and Pray!|20|F|
Cabedelo|Harbor full of issues|40|F|P
Karakorum|WTFIT - What The Fun Is This?|40|F|P
Madrid|exploiting capabilities|40|H|P
London|Ollama LLM troubles|40|F|P
Anatolia|compromised server|40|F|P
Sapporo|ephemeral tokens|40|F|P
Cadiz|Cut the live wires|40|F|P
Pos|position manager down + reconcile|60|F|P
Dublin|registration queue overload (HTTP 429)|40|F|PW`,
  playground: `K8s Playground|Free|20|P|
K8s Playground|Pro|60|P|P`,
};

const TYPE: Record<string, ScenarioType> = { F: "Fix", D: "Do", H: "Hack", P: "Playground" };

function parse(difficulty: Difficulty, raw: string): Scenario[] {
  return raw.split("\n").map((line, i) => {
    const [city, title, minutes, type, flags = ""] = line.split("|");
    return {
      id: `${difficulty}-${i + 1}`,
      n: i + 1,
      difficulty,
      city,
      title,
      minutes: Number(minutes),
      type: TYPE[type],
      noReg: flags.includes("N"),
      pro: flags.includes("P"),
      business: flags.includes("B"),
      isNew: flags.includes("W"),
    };
  });
}

export const SCENARIOS: Scenario[] = (Object.keys(RAW) as Difficulty[]).flatMap((d) =>
  parse(d, RAW[d]),
);

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  playground: "K8s Playgrounds",
};

export const SCENARIO_COUNTS = {
  easy: SCENARIOS.filter((s) => s.difficulty === "easy").length,
  medium: SCENARIOS.filter((s) => s.difficulty === "medium").length,
  hard: SCENARIOS.filter((s) => s.difficulty === "hard").length,
  playground: SCENARIOS.filter((s) => s.difficulty === "playground").length,
};

export const SCENARIO_TAGS = [
  "ai", "ansible", "apache", "aws", "bash", "caddy", "clickhouse", "cron", "dns", "docker",
  "elk", "envoy", "etcd", "git", "gitea", "gunicorn", "haproxy", "harbor", "helm", "jenkins",
  "kubernetes", "mongodb", "mysql", "nginx", "podman", "postgres", "prometheus", "python",
  "rabbitmq", "redis", "sqlite", "ssh", "ssl", "systemd", "terraform", "traefik",
];

export const SCENARIO_CATEGORIES = [
  { name: "Linux & Bash", topics: "Commands, Bash scripting, Systemd, Networking, DNS, Storage, SSH, Firewall, Cron", query: "" },
  { name: "Web Servers", topics: "Nginx, Apache, HAProxy, Caddy, Gunicorn, uWSGI, HTTPS/TLS", query: "nginx" },
  { name: "Databases", topics: "PostgreSQL, MySQL, SQLite, Redis, ClickHouse, MongoDB, etcd", query: "postgres" },
  { name: "Data Processing", topics: "CSV, JSON, SQL, ETL pipelines", query: "csv" },
  { name: "Docker", topics: "Images, containers, Compose, Podman", query: "docker" },
  { name: "Kubernetes", topics: "Pods, services, Helm, StatefulSets", query: "kubernetes" },
  { name: "Infrastructure as Code", topics: "Terraform, Ansible", query: "terraform" },
  { name: "Observability", topics: "Prometheus, ELK Stack, logs", query: "prometheus" },
  { name: "Tooling / Applications", topics: "Git, RabbitMQ, Envoy, Vault, Harbor, Jenkins", query: "vault" },
  { name: "Hacking", topics: "Privilege escalation, CTF, code vulnerabilities", query: "hack" },
];

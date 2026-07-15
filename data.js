// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

const PORTFOLIO = {

  personal: {
    name:      "Dheerajkumar Pal",
    initials:  "DKP",
    role:      "Lead Data Scientist & AI/ML Engineer",
    tagline:   "I build things with data: models that catch fraud, pipelines that don't break at 3am, and tools that help non-technical folks actually use the data.",
    bio:       "I've spent 7+ years in fintech and payments, mostly at the overlap of ML and engineering. Not just building models, but making sure they work reliably when it actually matters. At Mosambee, I own the full picture: the pipelines feeding the models, the monitoring that catches drift early, and the tooling keeping the team moving. Won first place at the Pine Labs Ideathon 2026 too, which was a good reminder that the work lands beyond just internal dashboards.",
    email:     "paldheeraj1331@gmail.com",
    whatsapp:  "https://wa.me/919137074621",
    linkedin:  "https://linkedin.com/in/dheerajkumarpal",
    github:    "https://github.com/dheerajkumarpal1331",
    kaggle:    "https://www.kaggle.com/dheeraj1331",
    huggingface:"https://huggingface.co/dheerajkumarpal",
    resume:    "resume.pdf",
    location:  "Mumbai, India",
    stats: [
      { value: "7+",   label: "Years of Experience"    },
      { value: "5",    label: "Companies"              },
      { value: "100M+",label: "Transactions Processed" },
      { value: "6",    label: "Certifications"         },
    ],
  },

  taglines: [
    "I make data work in the real world.",
    "I build ML that ships to production.",
    "I turn pipelines into business outcomes.",
  ],

  roles: [
    "Lead Data Scientist",
    "ML Engineer",
    "Data Engineer",
    "Quantitative Analyst",
    "GenAI Developer",
  ],

  techTags: [
    "Python","SQL","SAS","PySpark","Scikit-learn",
    "MLflow","Apache Airflow","Kafka","ClickHouse","dbt",
    "Tableau","Power BI","AWS","Azure","GCP","MongoDB",
  ],

  competencies: [
    {
      icon:  "brain",
      title: "Machine Learning",
      desc:  "Fraud detection, churn prediction, NLP, LLM tooling. I care a lot less about which algorithm than whether it actually solves the problem and holds up in production.",
    },
    {
      icon:  "database",
      title: "Data Engineering",
      desc:  "Airflow, Kafka, Spark, ClickHouse. I've built pipelines that process 100M+ transactions daily and ones that save 1,200 hours a year. Reliability matters more than cleverness.",
    },
    {
      icon:  "activity",
      title: "MLOps",
      desc:  "MLflow tracking, model versioning, drift monitoring, alerting pipelines. If a model breaks silently in production, that's on me. So I make sure it doesn't.",
    },
  ],

  skillCategories: [
    {
      name: "Programming",
      icon: "code-2",
      meta: "daily drivers · since 2018",
      skills: [
        { name: "Python (Pandas, NumPy, Scikit-learn)", pct: 95 },
        { name: "SQL",                                  pct: 93 },
        { name: "SAS",                                  pct: 82 },
        { name: "PySpark / Scala",                      pct: 78 },
        { name: "Shell Scripting",                      pct: 72 },
      ],
    },
    {
      name: "Machine Learning",
      icon: "brain",
      meta: "fraud models in production",
      skills: [
        { name: "Scikit-learn / XGBoost / LightGBM",   pct: 93 },
        { name: "Deep Learning (TF / PyTorch / CNN)",   pct: 82 },
        { name: "NLP & LLM Applications",               pct: 85 },
        { name: "Fraud & Anomaly Detection",            pct: 90 },
        { name: "A/B Testing & Causal Inference",       pct: 83 },
      ],
    },
    {
      name: "Data Engineering",
      icon: "database",
      meta: "100M+ transactions / day",
      skills: [
        { name: "Apache Airflow",    pct: 88 },
        { name: "Kafka / Flink",     pct: 80 },
        { name: "ClickHouse",        pct: 85 },
        { name: "Apache Spark",      pct: 82 },
        { name: "dbt / SSIS",        pct: 75 },
      ],
    },
    {
      name: "Cloud & MLOps",
      icon: "cloud",
      meta: "AZ-900 · DP-900 · AI-900 certified",
      skills: [
        { name: "MLflow",                        pct: 88 },
        { name: "AWS (Redshift, S3)",            pct: 80 },
        { name: "Azure (AZ-900 certified)",      pct: 78 },
        { name: "GCP (BigQuery, Vertex)",        pct: 72 },
        { name: "Tableau / Power BI",            pct: 85 },
      ],
    },
  ],

  projects: [
    {
      title:  "ClickHouse Analytics Platform",
      desc:   "Split OLTP from OLAP so fraud models score on fresh features instead of stale snapshots. Built the migration in production (60%+ latency cut, real-time scoring), then rebuilt the whole design in the open on Indian payment rails: Postgres to Kafka to ClickHouse, feature store, sub-100ms fraud API.",
      tags:   ["ClickHouse", "Kafka", "Postgres", "MLflow"],
      metric: "−60% latency",
      role:   "Data Engineering",
      github: "https://github.com/DheerajKumarpal1331/clickhouse-payment-analytics",
      demo:   null,
      caseId: "clickhouse",
    },
    {
      title:  "Fraud & Anomaly Detection System",
      desc:   "Built the fraud detection models in production and wired them into alerting pipelines so the risk team doesn't have to go looking. When model behaviour shifts, they get a notification. Not three days later.",
      tags:   ["Python", "Scikit-learn", "Airflow", "MLflow", "Kafka"],
      metric: "real-time alerts",
      role:   "Data Science",
      github: null,
      demo:   null,
      caseId: "fraud",
    },
    {
      title:  "Text-to-SQL with a Local LLM",
      desc:   "Built an internal text-to-SQL tool at work that cut ad-hoc data requests by about 40%, then rebuilt the idea as an open-source, fully offline version: local LLM via Ollama, ChromaDB schema embeddings, 5 database engines, no data leaving the network.",
      tags:   ["FastAPI", "React", "Ollama", "ChromaDB"],
      metric: "−40% ad-hoc requests",
      role:   "GenAI",
      github: "https://github.com/DheerajKumarpal1331/text-to-sql",
      demo:   null,
      caseId: "text2sql",
    },
    {
      title:  "Customer Segmentation at J.P. Morgan",
      desc:   "Segmentation models for the credit card marketing team that drove a 12% lift in campaign conversions. Also automated the scoring pipeline so what used to take a full day now takes under two hours.",
      tags:   ["Python", "SQL", "Scikit-learn", "A/B Testing"],
      metric: "+12% conversions",
      role:   "Data Science",
      github: null,
      demo:   null,
    },
    {
      title:  "ETL Automation with Airflow",
      desc:   "Manual ETL was eating into team time every single week. Automated the pipelines end-to-end, saved 1,200+ hours a year and roughly Rs. 1.4M in cost. Data reliability went up too, which made downstream models noticeably more stable.",
      tags:   ["Airflow", "Python", "SQL", "ClickHouse"],
      metric: "1,200+ hrs saved /yr",
      role:   "Data Engineering",
      github: null,
      demo:   null,
      caseId: "etl",
    },
    {
      title:  "Document Extraction Pipeline (LTI)",
      desc:   "At L&T Infotech, unstructured document data was a major bottleneck for the team. Built a Python + MongoDB extraction pipeline that cut data prep time by 70%. Also optimised ETL handling 100M+ transactions, improving runtime by 40%.",
      tags:   ["Python", "MongoDB", "SQL", "SAS"],
      metric: "−70% prep time",
      role:   "Data Engineering",
      github: null,
      demo:   null,
    },
  ],

  // ── Case studies (rendered on case.html?id=…) ──────────────
  caseStudies: [
    {
      id:       "clickhouse",
      title:    "ClickHouse Payment Analytics Platform",
      subtitle: "Splitting OLTP from OLAP so fraud models score on fresh features. Built in production, then rebuilt in the open.",
      role:     "Lead Data Scientist · production work, then rebuilt in the open",
      period:   "2023 – Present",
      stack:    ["PostgreSQL", "Kafka", "ClickHouse", "FastAPI", "MLflow", "Airflow", "Docker"],
      github:   "https://github.com/DheerajKumarpal1331/clickhouse-payment-analytics",
      problem: [
        "Payment analytics in production ran on a row-oriented database that was never built for analytical queries. Dashboards took minutes to load, and ad-hoc queries timed out often enough that the risk team would just ask an engineer to pull data by hand.",
        "The bigger problem was the fraud models. They needed fresh aggregates over recent transaction history, and with queries taking tens of seconds there was no way to score in real time. The models worked off stale snapshots.",
        "I wanted to rebuild that whole OLTP-to-OLAP design in the open, with no proprietary data or code in it. So I modelled a payment company on Indian rails (UPI, RuPay, RBI's MDR and GST rules, T+1 settlement), generated realistic synthetic data, and built the platform phase by phase. That repo is what's on GitHub.",
      ],
      approach: [
        "Kept OLTP and OLAP separate. PostgreSQL 16 stays the normalized source of truth (11 domains, monthly-partitioned transactions); ClickHouse is the denormalized analytical mirror. Neither gets asked to do the other's job.",
        "Streamed the hot path instead of batch ETL. Events flow from Postgres to Kafka to ClickHouse continuously. Airflow only handles backfill, feature rollups, retraining and data-quality checks, never the live ingest.",
        "Let ClickHouse do the aggregating. Materialized views keep merchant hourly, daily and monthly rollups, risk summaries and fraud-feature tables fresh on write, so dashboards and features read data that's already aggregated.",
        "Computed features once and served them twice. The same ClickHouse aggregates back both offline training (point-in-time) and online scoring (latest value), which keeps train/serve skew low.",
        "Served the fraud score in under 100ms. The scoring API reads online features straight from ClickHouse and a model pulled from the MLflow registry, skipping batch entirely.",
        "Made the whole thing reproducible. One docker compose up brings up the 43-service stack with the Postgres schema, Kafka topics and MLflow registry provisioned as code, and Kafka lag, query time and model latency are all first-class Prometheus metrics.",
      ],
      architecture: {
        svg: `<svg viewBox="0 0 760 478" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ClickHouse payment analytics architecture diagram">
  <defs>
    <marker id="arr-ch" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arch-arrow-head"/>
    </marker>
  </defs>
  <!-- Sources -->
  <g class="arch-gnode">
    <rect x="290" y="6" width="180" height="44" rx="10"/>
    <text x="380" y="28" text-anchor="middle" class="arch-t">Sources</text>
    <text x="380" y="42" text-anchor="middle" class="arch-s">POS · UPI · QR · cards</text>
  </g>
  <line x1="380" y1="50" x2="380" y2="72" class="arch-line" marker-end="url(#arr-ch)"/>
  <!-- Gateway -->
  <g class="arch-gnode">
    <rect x="250" y="74" width="260" height="46" rx="10"/>
    <text x="380" y="97" text-anchor="middle" class="arch-t">Payment Gateway API</text>
    <text x="380" y="112" text-anchor="middle" class="arch-s">FastAPI · auth · capture · refund</text>
  </g>
  <line x1="380" y1="120" x2="380" y2="142" class="arch-line" marker-end="url(#arr-ch)"/>
  <!-- Postgres -->
  <g class="arch-gnode">
    <rect x="250" y="144" width="260" height="46" rx="10"/>
    <text x="380" y="167" text-anchor="middle" class="arch-t">PostgreSQL 16 · OLTP</text>
    <text x="380" y="182" text-anchor="middle" class="arch-s">system of record · 11 domains</text>
  </g>
  <line x1="380" y1="190" x2="380" y2="212" class="arch-line" marker-end="url(#arr-ch)"/>
  <text x="398" y="206" class="arch-lbl">publish</text>
  <!-- Kafka -->
  <g class="arch-gnode">
    <rect x="250" y="214" width="260" height="46" rx="10"/>
    <text x="380" y="237" text-anchor="middle" class="arch-t">Apache Kafka</text>
    <text x="380" y="252" text-anchor="middle" class="arch-s">8 topics · schema registry · DLQ</text>
  </g>
  <line x1="380" y1="260" x2="380" y2="282" class="arch-line" marker-end="url(#arr-ch)"/>
  <text x="398" y="276" class="arch-lbl">stream</text>
  <!-- ClickHouse (main) -->
  <g class="arch-gnode arch-main">
    <rect x="230" y="284" width="300" height="52" rx="10"/>
    <text x="380" y="309" text-anchor="middle" class="arch-t">ClickHouse 24.3 · OLAP</text>
    <text x="380" y="325" text-anchor="middle" class="arch-s">facts + dims + materialized views</text>
  </g>
  <!-- branches -->
  <line x1="340" y1="336" x2="195" y2="362" class="arch-line" marker-end="url(#arr-ch)"/>
  <line x1="420" y1="336" x2="565" y2="362" class="arch-line" marker-end="url(#arr-ch)"/>
  <!-- Feature store -->
  <g class="arch-gnode">
    <rect x="70" y="364" width="250" height="46" rx="10"/>
    <text x="195" y="387" text-anchor="middle" class="arch-t">Feature store</text>
    <text x="195" y="402" text-anchor="middle" class="arch-s">offline (point-in-time) + online</text>
  </g>
  <!-- Dashboards -->
  <g class="arch-gnode">
    <rect x="440" y="364" width="250" height="46" rx="10"/>
    <text x="565" y="387" text-anchor="middle" class="arch-t">Plotly Dash dashboards</text>
    <text x="565" y="402" text-anchor="middle" class="arch-s">exec · merchant · fraud · ops</text>
  </g>
  <line x1="195" y1="410" x2="195" y2="430" class="arch-line" marker-end="url(#arr-ch)"/>
  <!-- Fraud API -->
  <g class="arch-gnode">
    <rect x="70" y="432" width="250" height="46" rx="10"/>
    <text x="195" y="455" text-anchor="middle" class="arch-t">Fraud scoring API</text>
    <text x="195" y="470" text-anchor="middle" class="arch-s">FastAPI · MLflow model · &lt; 100 ms</text>
  </g>
  <text x="600" y="445" text-anchor="middle" class="arch-lbl">Airflow orchestration</text>
  <text x="600" y="462" text-anchor="middle" class="arch-lbl">Prometheus + Grafana</text>
</svg>`,
        caption: "The open-source rebuild. Events flow from the gateway into Postgres, publish to Kafka, and land in ClickHouse, where materialized views keep rollups fresh for both the feature store and the dashboards. The fraud API reads online features and an MLflow model to score in under 100ms.",
      },
      results: [
        { value: "60%+",      label: "query latency cut in production" },
        { value: "< 100 ms",  label: "fraud-score latency target in the open rebuild" },
        { value: "Millions",  label: "transactions/day the platform is built to handle" },
      ],
      next: "fraud",
    },
    {
      id:       "fraud",
      title:    "Fraud & Anomaly Detection System",
      subtitle: "Models the risk team actually hears from",
      role:     "Lead Data Scientist · payments",
      period:   "2023 – Present",
      stack:    ["Python", "Scikit-learn", "XGBoost", "Airflow", "MLflow", "Kafka"],
      github:   null,
      problem: [
        "Fraud patterns shift weekly, and a model that was sharp at deployment quietly rots. We had no systematic monitoring. When model behaviour shifted, the risk team usually found out from chargebacks, days later.",
        "There was also no audit trail. Nobody could say which model version was scoring production traffic, when it was trained, or on what data.",
      ],
      approach: [
        "Built gradient-boosted models for transaction-level fraud scoring. The features came from the ClickHouse platform: merchant velocity, amount deviation, time-of-day patterns, device signals.",
        "Set up MLflow so every training run is logged with its parameters, metrics and data lineage. Production models get promoted through the registry instead of copied by hand.",
        "Added drift monitoring as daily Airflow jobs that compare live feature and score distributions against training baselines. The thresholds took real tuning; make them too sensitive and people stop reading the alerts.",
        "Made the alerts land in the risk team's channel with context: which feature shifted and by how much. A red light on its own is useless.",
        "Retraining is now triggered by drift severity, not the calendar.",
      ],
      architecture: {
        nodes:   ["Transactions", "Feature pipeline (ClickHouse)", "Fraud models (XGBoost)", "MLflow registry", "Drift monitor → Risk alerts"],
        caption: "Features feed versioned models. A daily drift monitor compares live distributions against training baselines and pings the risk team with context.",
      },
      results: [
        { value: "100M+",        label: "transactions in scope" },
        { value: "Days → hours", label: "time to detect model drift" },
        { value: "Full",         label: "model lineage & audit trail" },
      ],
      next: "text2sql",
    },
    {
      id:       "text2sql",
      title:    "Text-to-SQL with a Local LLM",
      subtitle: "Started as an internal tool at work. Rebuilt from scratch as an offline, self-hosted open-source project.",
      role:     "Lead Data Scientist · production work, then rebuilt in the open",
      period:   "2024 – Present",
      stack:    ["FastAPI", "React + TypeScript", "Ollama", "ChromaDB", "PostgreSQL", "Docker"],
      github:   "https://github.com/DheerajKumarpal1331/text-to-sql",
      problem: [
        "At work, product and ops asked for data constantly. Things like how many transactions failed for one merchant last week. Every question became a ticket, the queue ate about a day of analyst time per week, and people waited days for one-line answers. Dashboards never kept up because the questions were too varied to pre-build, and nobody outside the data team was going to write SQL. I built an internal text-to-SQL tool, and ad-hoc requests dropped by about 40%.",
        "It left an itch though. In payments you can't send your schema to a cloud LLM. The schema alone reveals business logic, and compliance will never sign off. And a model that writes SQL can also write a DELETE. So I rebuilt the idea from scratch as a personal open-source project. Simpler than the production version, but fully offline and safe by default. That rebuild is what's on GitHub.",
      ],
      approach: [
        "Everything runs locally. SQL generation uses Ollama with qwen3-coder:30b, embeddings use nomic-embed-text. No API keys, nothing leaves the machine.",
        "ChromaDB stores an embedding for every table, and each successful query gets stored back as a few-shot example. The longer you use it, the better it gets at your specific schema. If the vector store is empty it falls back to full schema introspection.",
        "Generated SQL goes through a validator that blocks DROP, DELETE, UPDATE and DDL unless the connection is explicitly write-enabled. Database credentials sit AES-256-GCM encrypted at rest. Auth is RS256 JWT with admin and analyst roles, and login is rate limited.",
        "A 30B model is slow, so the UX has to hide it. SQL tokens stream to the browser over server-sent events, the model's think blocks get stripped in real time, and results land in a paginated table.",
        "One connector interface covers PostgreSQL, MySQL, MariaDB and ClickHouse. MongoDB works too; there the LLM writes aggregation pipelines instead of SQL.",
        "The whole thing ships as a five-service Docker Compose stack, seeded with a generated 37-table, 145,000-row PSP payments database so demos look like real life.",
      ],
      architecture: {
        svg: `<svg viewBox="0 0 760 410" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Text-to-SQL architecture diagram">
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arch-arrow-head"/>
    </marker>
  </defs>
  <!-- Browser -->
  <g class="arch-gnode">
    <rect x="160" y="6" width="200" height="48" rx="10"/>
    <text x="260" y="26" text-anchor="middle" class="arch-t">Browser</text>
    <text x="260" y="42" text-anchor="middle" class="arch-s">React + TS · SSE streaming</text>
  </g>
  <line x1="260" y1="54" x2="260" y2="78" class="arch-line" marker-end="url(#arr)"/>
  <!-- nginx -->
  <g class="arch-gnode">
    <rect x="135" y="80" width="250" height="48" rx="10"/>
    <text x="260" y="100" text-anchor="middle" class="arch-t">nginx</text>
    <text x="260" y="116" text-anchor="middle" class="arch-s">reverse proxy · rate limiting</text>
  </g>
  <line x1="260" y1="128" x2="260" y2="152" class="arch-line" marker-end="url(#arr)"/>
  <!-- backend -->
  <g class="arch-gnode arch-main">
    <rect x="110" y="154" width="300" height="58" rx="10"/>
    <text x="260" y="178" text-anchor="middle" class="arch-t">FastAPI backend</text>
    <text x="260" y="196" text-anchor="middle" class="arch-s">prompt builder · SQL validator · JWT auth</text>
  </g>
  <!-- target DBs (right) -->
  <line x1="410" y1="183" x2="494" y2="183" class="arch-line" marker-end="url(#arr)"/>
  <text x="452" y="172" text-anchor="middle" class="arch-lbl">validated SQL</text>
  <text x="452" y="200" text-anchor="middle" class="arch-lbl">read-only</text>
  <g class="arch-gnode">
    <rect x="498" y="154" width="240" height="58" rx="10"/>
    <text x="618" y="178" text-anchor="middle" class="arch-t">Target databases</text>
    <text x="618" y="196" text-anchor="middle" class="arch-s">Postgres · MySQL · Mongo · ClickHouse</text>
  </g>
  <!-- three supporting services -->
  <line x1="180" y1="212" x2="124" y2="288" class="arch-line" marker-end="url(#arr)"/>
  <line x1="260" y1="212" x2="376" y2="288" class="arch-line" marker-end="url(#arr)"/>
  <line x1="340" y1="212" x2="630" y2="288" class="arch-line" marker-end="url(#arr)"/>
  <g class="arch-gnode">
    <rect x="14" y="292" width="220" height="58" rx="10"/>
    <text x="124" y="316" text-anchor="middle" class="arch-t">PostgreSQL (app db)</text>
    <text x="124" y="334" text-anchor="middle" class="arch-s">users · connections · query history</text>
  </g>
  <g class="arch-gnode">
    <rect x="266" y="292" width="220" height="58" rx="10"/>
    <text x="376" y="316" text-anchor="middle" class="arch-t">ChromaDB</text>
    <text x="376" y="334" text-anchor="middle" class="arch-s">schema embeddings · few-shot examples</text>
  </g>
  <g class="arch-gnode">
    <rect x="518" y="292" width="228" height="58" rx="10"/>
    <text x="632" y="316" text-anchor="middle" class="arch-t">Ollama (local LLM)</text>
    <text x="632" y="334" text-anchor="middle" class="arch-s">qwen3-coder:30b · nomic-embed-text</text>
  </g>
  <text x="380" y="392" text-anchor="middle" class="arch-lbl">fully self-hosted · Docker Compose · no cloud calls</text>
</svg>`,
        caption: "The open-source rebuild. A question goes through nginx to the FastAPI backend, which builds a schema-aware prompt from ChromaDB, generates SQL on a local Ollama model, validates it and runs it read-only against the target database.",
      },
      results: [
        { value: "40%",          label: "fewer ad-hoc data requests at work (internal version)" },
        { value: "100% offline", label: "open-source rebuild: local LLM, no data leaves the network" },
        { value: "5 engines",    label: "PostgreSQL, MySQL, MariaDB, MongoDB, ClickHouse" },
      ],
      next: "etl",
    },
    {
      id:       "etl",
      title:    "ETL Automation with Airflow",
      subtitle: "From weekly manual toil to pipelines that run themselves",
      role:     "Lead Data Scientist · payments",
      period:   "2023 – 2024",
      stack:    ["Airflow", "Python", "SQL", "ClickHouse"],
      github:   null,
      problem: [
        "Our core reporting and model-input pipelines were a chain of manual steps. Someone ran scripts in a set order, eyeballed the outputs, and re-ran whatever failed. It burned real team time every week, and one missed step meant silently wrong data downstream.",
        "The process also lived in people's heads. Onboarding was slow, vacations were risky, and every data hiccup flowed straight into the models.",
      ],
      approach: [
        "Mapped every manual workflow into explicit Airflow DAGs with dependencies, schedules and owners. Just drawing the map exposed redundant steps, which we deleted.",
        "Rebuilt the jobs to be idempotent so any task can re-run safely. Recovery went from carefully repairing state to clear and re-trigger.",
        "Put data quality gates between stages: row-count deltas, null-rate checks, schema assertions. A failed check stops the downstream tasks instead of passing bad data along.",
        "Wrote alerts with enough context to act on (which DAG, which check, which partition) and runbooks for the failures that kept coming back.",
        "Tracked hours saved and incident counts before and after, so the impact was a number instead of a feeling.",
      ],
      architecture: {
        nodes:   ["Sources", "Airflow DAGs (idempotent tasks)", "Quality gates", "ClickHouse / marts", "Reports & model inputs"],
        caption: "Idempotent Airflow DAGs with quality gates between stages. A failure stops propagation and alerts with context instead of shipping bad data.",
      },
      results: [
        { value: "1,200+ hrs", label: "manual work eliminated per year" },
        { value: "₹1.4M",      label: "approximate annual cost saved" },
        { value: "Fewer",      label: "data incidents reaching downstream models" },
      ],
      next: "clickhouse",
    },
  ],

  experience: [
    {
      company:  "Mosambee – Synergistic Financial Networks",
      role:     "Lead Data Scientist",
      period:   "Jun 2023 – Present",
      current:  true,
      achievements: [
        "Running a cross-functional team of data scientists and analysts. Set up sprint cadence, code reviews, and a shared ML playbook that brought delivery timelines down by <b>15%</b>",
        "Moved payment analytics to ClickHouse. It handles millions of events daily, cut query latency by <b>60%+</b>, and now powers real-time model scoring",
        "Set up MLflow for experiment tracking and model versioning. The team finally has a clear record of what's deployed, when, and why",
        "Built fraud and anomaly detection models and wired them into risk alerting pipelines. The risk team gets notified when model behaviour shifts, not three days later",
        "Built a text-to-SQL LLM tool for product and ops, cutting ad-hoc data requests to the team by <b>~40%</b>",
        "Automated ETL pipelines with Airflow, SQL, and Python, freeing up <b>1,200+ hrs/year</b> (≈ Rs. 1.4M saved) and improving data reliability across the board",
      ],
    },
    {
      company:  "J.P. Morgan & Chase",
      role:     "Quantitative Analyst",
      period:   "Apr 2022 – Jun 2023",
      current:  false,
      achievements: [
        "Built customer segmentation models for the credit card marketing team, driving a <b>12% lift</b> in campaign conversions with outputs the team could actually understand and act on",
        "Automated campaign scoring and list generation, cutting turnaround from a full day to <b>under 2 hours</b>. That freed the team to focus on strategy instead of data prep",
        "Built A/B testing frameworks to measure campaign ROI and budget allocation, with proper documentation of assumptions and outcomes",
        "Worked directly with senior stakeholders to connect analytics outputs to acquisition and retention decisions",
      ],
    },
    {
      company:  "L&T Infotech (LTIMindtree)",
      role:     "Data Engineer",
      period:   "Jun 2021 – Apr 2022",
      current:  false,
      achievements: [
        "Built a document extraction pipeline in Python and MongoDB that cut data prep time by <b>70%</b>, handling a lot of messy edge cases in unstructured data",
        "Optimised ETL pipelines processing <b>100M+ transactions</b> in SQL and SAS, improving runtime by 40%",
        "Implemented data governance and compliance frameworks for secure financial data warehousing",
      ],
    },
    {
      company:  "Info-Drive Analytics",
      role:     "SAS/Python Programmer",
      period:   "Jun 2020 – Mar 2021",
      current:  false,
      achievements: [
        "Designed and automated ETL workflows in SAS DI Studio, cutting reporting cycle times by <b>50%</b>",
        "Built reusable Python packages that brought ad-hoc analysis from 3 days down to <b>1 day</b>",
        "Wrote SAS macros that saved <b>200+ analyst hours/year</b> and built marketing dashboards for campaign tracking",
      ],
    },
    {
      company:  "Tata Consultancy Services (TCS)",
      role:     "Process Associate",
      period:   "Feb 2018 – May 2020",
      current:  false,
      achievements: [
        "Built multi-class classification ML models with <b>75%+ accuracy</b> to support a customer migration strategy",
        "Automated server performance monitoring in Python, reducing downtime alerts by <b>30%</b>",
        "Developed event monitoring workflows in PostgreSQL and Python for real-time SLA tracking; trained a <b>10-member team</b> in Python and Shell scripting",
      ],
    },
  ],

  education: [
    {
      degree:      "B.Sc.",
      field:       "Computer Science",
      institution: "University of Mumbai",
      period:      "2014 – 2017",
      grade:       null,
    },
    {
      degree:      "M.Sc.",
      field:       "Data Science & AI",
      institution: "University of Mumbai",
      period:      "2021 – 2023",
      grade:       null,
    },
  ],

  certifications: [
    {
      name:   "SAS Certified Base Programmer",
      issuer: "SAS Institute",
      code:   null,
      year:   null,
      logo:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" fill="currentColor"><text x="18" y="15" text-anchor="middle" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="13" letter-spacing="1.5">SAS</text></svg>`,
    },
    {
      name:   "SAS Certified Advanced Programmer",
      issuer: "SAS Institute",
      code:   null,
      year:   null,
      logo:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" fill="currentColor"><text x="18" y="15" text-anchor="middle" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="13" letter-spacing="1.5">SAS</text></svg>`,
    },
    {
      name:   "Azure Fundamentals",
      issuer: "Microsoft",
      code:   "AZ-900",
      year:   null,
      logo:   "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/microsoftazure.svg",
    },
    {
      name:   "Azure Data Fundamentals",
      issuer: "Microsoft",
      code:   "DP-900",
      year:   null,
      logo:   "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/microsoftazure.svg",
    },
    {
      name:   "Azure AI Fundamentals",
      issuer: "Microsoft",
      code:   "AI-900",
      year:   null,
      logo:   "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/microsoftazure.svg",
    },
    {
      name:   "Tableau Desktop Developer",
      issuer: "Tableau",
      code:   null,
      year:   null,
      logo:   "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/tableau.svg",
    },
  ],

};

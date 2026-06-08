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
      desc:   "Payment transaction data at Mosambee was slow to query and painful to monitor. Moved us to ClickHouse and now it handles millions of events a day, query latency is down 60%+, and it powers the real-time model scoring layer on top.",
      tags:   ["ClickHouse", "Python", "Kafka", "MLflow"],
      role:   "Data Engineering",
      github: null,
      demo:   null,
    },
    {
      title:  "Fraud & Anomaly Detection System",
      desc:   "Built the fraud detection models at Mosambee and wired them into alerting pipelines so the risk team doesn't have to go looking. When model behaviour shifts, they get a notification. Not three days later.",
      tags:   ["Python", "Scikit-learn", "Airflow", "MLflow", "Kafka"],
      role:   "Data Science",
      github: null,
      demo:   null,
    },
    {
      title:  "Text-to-SQL with an LLM",
      desc:   "Our ops and product teams were constantly raising tickets to get data out of the warehouse. Built a text-to-SQL tool so they could ask questions in plain English. Cut those ad-hoc requests by about 40%.",
      tags:   ["Python", "LLM", "SQL", "FastAPI"],
      role:   "GenAI",
      github: null,
      demo:   null,
    },
    {
      title:  "Customer Segmentation at J.P. Morgan",
      desc:   "Segmentation models for the credit card marketing team that drove a 12% lift in campaign conversions. Also automated the scoring pipeline so what used to take a full day now takes under two hours.",
      tags:   ["Python", "SQL", "Scikit-learn", "A/B Testing"],
      role:   "Data Science",
      github: null,
      demo:   null,
    },
    {
      title:  "ETL Automation with Airflow",
      desc:   "Manual ETL was eating into team time at Mosambee every single week. Automated the pipelines end-to-end, saved 1,200+ hours a year and roughly Rs. 1.4M in cost. Data reliability went up too, which made downstream models noticeably more stable.",
      tags:   ["Airflow", "Python", "SQL", "ClickHouse"],
      role:   "Data Engineering",
      github: null,
      demo:   null,
    },
    {
      title:  "Document Extraction Pipeline (LTI)",
      desc:   "At L&T Infotech, unstructured document data was a major bottleneck for the team. Built a Python + MongoDB extraction pipeline that cut data prep time by 70%. Also optimised ETL handling 100M+ transactions, improving runtime by 40%.",
      tags:   ["Python", "MongoDB", "SQL", "SAS"],
      role:   "Data Engineering",
      github: null,
      demo:   null,
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
      logo:   "https://cdn.simpleicons.org/sas/00BEF3",
    },
    {
      name:   "SAS Certified Advanced Programmer",
      issuer: "SAS Institute",
      code:   null,
      year:   null,
      logo:   "https://cdn.simpleicons.org/sas/00BEF3",
    },
    {
      name:   "Azure Fundamentals",
      issuer: "Microsoft",
      code:   "AZ-900",
      year:   null,
      logo:   "https://cdn.simpleicons.org/microsoftazure/0078D4",
    },
    {
      name:   "Azure Data Fundamentals",
      issuer: "Microsoft",
      code:   "DP-900",
      year:   null,
      logo:   "https://cdn.simpleicons.org/microsoftazure/0078D4",
    },
    {
      name:   "Azure AI Fundamentals",
      issuer: "Microsoft",
      code:   "AI-900",
      year:   null,
      logo:   "https://cdn.simpleicons.org/microsoftazure/0078D4",
    },
    {
      name:   "Tableau Desktop Developer",
      issuer: "Tableau",
      code:   null,
      year:   null,
      logo:   "https://cdn.simpleicons.org/tableau/E97627",
    },
  ],

};

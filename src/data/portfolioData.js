// ============================================================
// portfolioData.js — Centralized configuration for Mansi Mantri's Portfolio
// All external links, personal info, and content in one place.
// Supports dynamic role toggling between Software Engineer, Full Stack, and Data Analyst.
// ============================================================

export const personalInfo = {
  name: "Mansi Mantri",
  firstName: "Mansi",
  brandName: "Mansi Mantri",
  location: "Worcester, MA",
  phone: "+1 (508)-(769)-1511",
  emails: {
    primary: "mansimantri07@gmail.com",
  },
};

export const socialLinks = {
  github: "https://github.com/MansiMantri",
  linkedin: "https://www.linkedin.com/in/mansi-mantri-43b126216/",
  instagram: "https://instagram.com/mansimantri",
};

export const education = {
  degree: "MS in Computer Science",
  institution: "Worcester Polytechnic Institute",
  duration: "Aug 2024 – May 2026",
  location: "Worcester, MA",
  undergrad: {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "MGM's Jawaharlal Nehru Engineering College",
    duration: "Aug 2020 – June 2024",
    location: "Aurangabad, India"
  }
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

export const profiles = {
  software_engineer: {
    roleTitle: "Software Engineer",
    resumeUrl: "/Mansi_Mantri_Software_Engineer_Resume.pdf",
    summary:
      "Software Engineer with 2+ years of internship experience building scalable backend systems, RESTful APIs, and full-stack applications. Proficient in Node.js, Python, TypeScript, and AWS, with hands-on experience in AI integration using LLMs, RAG pipelines, and Google Gemini API.",
    heroSubtitle:
      "I design scalable backend architectures, event-driven pipelines, and integrated AI workflows with AWS and Node.js.",
    bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mansi Mantri</span>. I am a Software Engineer and MS in CS student at WPI, focused on engineering high-reliability backend systems, automated AI pipelines, and robust APIs.`,
    techStack: ["Node.js", "Python", "TypeScript", "AWS"],
    technicalSkills: {
      categories: [
        {
          title: "Programming & Backend",
          skills: [
            { name: "Python", level: 92 },
            { name: "Java", level: 85 },
            { name: "JavaScript (ES6+)", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "SQL", level: 90 },
            { name: "Node.js / Express.js", level: 93 },
            { name: "FastAPI", level: 88 },
            { name: "Spring Boot", level: 75 },
            { name: "React / Next.js", level: 90 },
            { name: "Julia", level: 65 }
          ]
        },
        {
          title: "AI/ML & Data",
          skills: [
            { name: "LLMs / RAG", level: 87 },
            { name: "LangChain", level: 82 },
            { name: "Hugging Face", level: 78 },
            { name: "Gemini API", level: 86 },
            { name: "Ollama", level: 75 },
            { name: "Pandas / NumPy", level: 92 },
            { name: "Plotly", level: 88 },
            { name: "Power BI", level: 90 },
            { name: "Tableau", level: 88 },
            { name: "ARIMA / Prophet", level: 85 },
            { name: "Seaborn", level: 82 }
          ]
        },
        {
          title: "Cloud, Databases & Tools",
          skills: [
            { name: "AWS (S3, Lambda, Step Functions)", level: 88 },
            { name: "Docker", level: 85 },
            { name: "PostgreSQL", level: 90 },
            { name: "MongoDB", level: 87 },
            { name: "MySQL", level: 85 },
            { name: "Firebase", level: 83 },
            { name: "Supabase", level: 85 },
            { name: "Git", level: 92 },
            { name: "GitHub Actions / CI-CD", level: 84 },
            { name: "Linux", level: 88 },
            { name: "Postman", level: 85 },
            { name: "WebSockets", level: 80 }
          ]
        }
      ]
    },
    projects: [
      {
        id: "careerlens-ai",
        number: "01",
        badge: "🚀 Flagship Project",
        title: "Careerlens AI",
        description:
          "Architected a full-stack AI-powered SaaS application with secure JWT-based REST APIs, PDF parsing, and Google Gemini integration for automated ATS scoring and skill gap detection. Designed multi-feature backend with session management, Prisma ORM-based PostgreSQL storage, and AI-driven workflow pipeline, reducing job outreach effort by 80%.",
        techTags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Gemini API", "TypeScript"],
        links: {
          github: "https://github.com/MansiMantri/Careerlens-AI",
          demo: null
        },
        isFlagship: true
      },
      {
        id: "bigdocbot",
        number: "02",
        badge: "🤖 AI Documentation Tool",
        title: "BigDocBot – AI Documentation Tool",
        description:
          "Built a Python-based code summarization ETL pipeline using LangChain and transformer models (CodeBERT, CodeT5) to extract function-level metrics across large codebases. Constructed AST-based parser to generate line-by-line LLM explanations and token-based heatmaps.",
        techTags: ["Python", "LangChain", "CodeBERT", "CodeT5", "AST Parsing"],
        links: {
          github: "https://github.com/MansiMantri/Big-DocBot",
          demo: null
        },
        isFlagship: false
      }
    ],
    internships: [
      {
        organization: "VODA.ai",
        role: "Data Analyst Intern",
        duration: "Jun 2026 – Aug 2026",
        location: "Boston, MA",
        skills: [
          "Queried and maintained SQL relational databases, performing large-scale cleanup, deduplication, and standardization across 10K+ records to support accurate data collection and reporting.",
          "Built automated reporting dashboards using Power BI and HubSpot, improving data visibility and reducing manual reporting effort by 50%.",
          "Developed data-driven enrichment scripts and API-based hooks to automate scoring workflows, translating business requirements into functional reporting tools."
        ],
        tech: ["SQL", "Power BI", "HubSpot", "API Integration"]
      },
      {
        organization: "Dottir Labs",
        role: "Software Engineer Intern",
        duration: "Feb 2026 – Apr 2026",
        location: "Boston, USA",
        skills: [
          "Studied the existing system and redesigned the legacy Tkinter desktop app into a modern web application using React.js, FastAPI, and Julia (for data processing), with Plotly.js dashboards for spectral data visualization (spectra, normalization graphs, calibration curves, peak markers).",
          "Implemented core features including spectral data processing, peak detection with manual override, calibration curve generation, and offline/online connectivity with an offline upload queue and retry logic, plus Google Drive and local storage integration for CSV/JSON data.",
          "Conducted end-to-end system testing before pilot deployment, identifying and resolving 15–20 error-handling issues including battery safety checks, hardware/laser testing, and crash recovery directly enabling the system's successful advancement to pilot phase.",
          "Partnered with Design and QA engineers to diagnose production issues, review code, and iterate rapidly on fixes."
        ],
        tech: ["React.js", "FastAPI", "Julia", "Plotly.js", "Google Drive API"]
      },
      {
        organization: "Park Pulze",
        role: "Backend Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "MI, USA",
        skills: [
          "Developed and optimized scalable backend systems handling high-volume data (2K+ users), improving system throughput by 35%.",
          "Designed secure RESTful APIs with authentication and access control, improving data synchronization performance by 40%.",
          "Debugged and enhanced system reliability through testing and code reviews, reducing issue resolution time by 25%."
        ],
        tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Unit Testing"]
      },
      {
        organization: "Crossing",
        role: "Software Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "Boston, USA",
        skills: [
          "Built and supported distributed AWS pipelines (S3, Lambda, Step Functions) integrating machine learning preprocessing, delivering high-quality production data processing at 200+ records/week scale.",
          "Developed backend systems with asynchronous processing and LLM-based validation checks (AWS Bedrock), debugging complex data workflows and reducing manual review effort by 60%.",
          "Built a RAG (Retrieval-Augmented Generation) pipeline for automated document extraction and filing assistance for attorneys, reducing a 2–3 hour manual filing process down to 5 minutes, while collaborating cross-functionally through structured data validation and AI-assisted debugging workflows."
        ],
        tech: ["AWS", "Lambda", "S3", "Step Functions", "AWS Bedrock", "RAG", "LLMs"]
      },
      {
        organization: "Atlas Copco",
        role: "Full Stack Developer Intern",
        duration: "Jan 2024 – Jun 2024",
        location: "MH, India",
        skills: [
          "Architected and shipped a real-time microcontroller reservation platform (React/Next.js, Node.js/Express, PostgreSQL) using WebSockets for real-time locking, enabling conflict-free, login-authenticated scheduling built to scale for adoption by teams across multiple countries.",
          "Engineered a fully containerized deployment pipeline with Docker, enabling one-command, environment-agnostic deployment; documented all APIs via Swagger and delivered a polished UI with Tailwind CSS for maintainability and adoption.",
          "Drove system reliability and performance through query and API optimization, resolving 30+ production issues and cutting latency by 20%, while partnering with a cross-functional team of 10–15 engineers through daily scrums to translate feedback into iterative improvements."
        ],
        tech: ["React/Next.js", "Node.js/Express", "PostgreSQL", "WebSockets", "Docker", "Swagger", "Tailwind CSS"]
      },
      {
        organization: "Applied Technology Solutions, Inc.",
        role: "Software Engineer (Research and Development)",
        duration: "Jan 2023 – Dec 2023",
        location: "Lexington, MA",
        skills: [
          "Resolved UI/UX issues on client-facing portals and streamlined API calls, reducing reported interface bugs through targeted redesign contributions, while optimizing legacy web platforms for a 20% increase in system performance and user engagement.",
          "Built and tested backend services using Java and Spring Boot, using Postman for API testing and validation, and managed SQL database migrations by modernizing legacy systems with newer frameworks, reducing data processing time by 30%.",
          "Implemented NTP-based clock synchronization for accurate system timekeeping, and developed Python automation scripts and Linux-based testing/validation workflows, reducing deployment time by 40% and increasing test coverage and team efficiency by 30%."
        ],
        tech: ["Java", "Spring Boot", "Postman", "SQL", "Python", "Linux"]
      }
    ],
    softSkillsList: [
      { name: "Agile/Scrum", icon: "🔄", desc: "Working in agile sprint environments, contributing to standups, reviews, and retrospectives." },
      { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex system requirements into modular, readable, and maintainable services." },
      { name: "System Design", icon: "📐", desc: "Architecting end-to-end applications, designing data models, and mapping APIs." },
      { name: "Collaboration", icon: "🤝", desc: "Collaborating across cross-functional engineering, product, and data analytics teams." }
    ]
  },
  full_stack: {
    roleTitle: "Full Stack Developer",
    resumeUrl: "/Mansi_Mantri_Full_Stack_Developer_Resume.pdf",
    summary:
      "Full Stack Developer with 2+ years of internship experience building end-to-end web applications using React, Next.js, Node.js, and PostgreSQL. Skilled in designing scalable REST APIs, Docker deployments, and AI integration using LLMs and Gemini API. Currently pursuing MS in Computer Science at Worcester Polytechnic Institute.",
    heroSubtitle:
      "I build responsive user interfaces, robust Node.js backends, and scale containerized deployments with Docker.",
    bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mansi Mantri</span>. I am a Full Stack Developer and MS in CS student at WPI, passionate about building responsive user interfaces, modular REST APIs, and full-stack environments.`,
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    technicalSkills: {
      categories: [
        {
          title: "Programming & Backend",
          skills: [
            { name: "Python", level: 90 },
            { name: "Java", level: 82 },
            { name: "JavaScript (ES6+)", level: 92 },
            { name: "TypeScript", level: 92 },
            { name: "SQL", level: 88 },
            { name: "Node.js / Express.js", level: 93 },
            { name: "FastAPI", level: 88 },
            { name: "Spring Boot", level: 75 },
            { name: "React / Next.js", level: 93 },
            { name: "Julia", level: 60 }
          ]
        },
        {
          title: "AI/ML & Data",
          skills: [
            { name: "LLMs / RAG", level: 86 },
            { name: "LangChain", level: 80 },
            { name: "Hugging Face", level: 76 },
            { name: "Gemini API", level: 86 },
            { name: "Ollama", level: 74 },
            { name: "Pandas / NumPy", level: 85 },
            { name: "Plotly", level: 84 },
            { name: "Power BI", level: 85 },
            { name: "Tableau", level: 83 },
            { name: "ARIMA / Prophet", level: 78 },
            { name: "Seaborn", level: 80 }
          ]
        },
        {
          title: "Cloud, Databases & Tools",
          skills: [
            { name: "AWS (S3, Lambda, EC2)", level: 85 },
            { name: "Docker", level: 87 },
            { name: "PostgreSQL", level: 90 },
            { name: "MongoDB", level: 85 },
            { name: "MySQL", level: 85 },
            { name: "Firebase", level: 85 },
            { name: "Supabase", level: 85 },
           
            { name: "Git", level: 90 },
            { name: "GitHub Actions / CI-CD", level: 88 },
            { name: "Linux", level: 86 },
            { name: "Postman", level: 85 },
            { name: "WebSockets", level: 80 }
          ]
        }
      ]
    },
    projects: [
      {
        id: "careerlens-ai",
        number: "01",
        badge: "🚀 Flagship Project",
        title: "Careerlens AI",
        description:
          "Architected a full-stack AI-powered SaaS application with secure JWT-based REST APIs, PDF parsing, and Google Gemini integration for automated ATS scoring and skill gap detection. Designed multi-feature backend with session management, Prisma ORM-based PostgreSQL storage, and AI-driven workflow pipeline, reducing job outreach effort by 80%.",
        techTags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Gemini API", "TypeScript"],
        links: {
          github: "https://github.com/MansiMantri/Careerlens-AI",
          demo: null
        },
        isFlagship: true
      },
      {
        id: "arena-vibes",
        number: "02",
        badge: "🎟️ Event Management",
        title: "Arena Vibes – Ticket Booking System",
        description:
          "Built scalable RESTful APIs with Node.js and PostgreSQL supporting real-time booking workflows, optimizing 30+ SQL queries and reducing response latency by 20%. Developed end-to-end full-stack architecture with TypeScript enforcement, debugging complex logic to reduce booking errors by 90% and improve reliability by 40%.",
        techTags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
        links: {
          github: "https://github.com/MansiMantri/ArenaVibes",
          demo: null
        },
        isFlagship: false
      }
    ],
    internships: [
      {
        organization: "VODA.ai",
        role: "Data Analyst Intern",
        duration: "Jun 2026 – Aug 2026",
        location: "Boston, MA",
        skills: [
          "Queried and maintained SQL relational databases, performing large-scale cleanup, deduplication, and standardization across 10K+ records to support accurate data collection and reporting.",
          "Built automated reporting dashboards using Power BI and HubSpot, improving data visibility and reducing manual reporting effort by 50%.",
          "Developed data-driven enrichment scripts and API-based hooks to automate scoring workflows, translating business requirements into functional reporting tools."
        ],
        tech: ["SQL", "Power BI", "HubSpot", "API Integration"]
      },
      {
        organization: "Dottir Labs",
        role: "Software Engineer Intern",
        duration: "Feb 2026 – Apr 2026",
        location: "Boston, USA",
        skills: [
          "Studied the existing system and redesigned the legacy Tkinter desktop app into a modern web application using React.js, FastAPI, and Julia (for data processing), with Plotly.js dashboards for spectral data visualization (spectra, normalization graphs, calibration curves, peak markers).",
          "Implemented core features including spectral data processing, peak detection with manual override, calibration curve generation, and offline/online connectivity with an offline upload queue and retry logic, plus Google Drive and local storage integration for CSV/JSON data.",
          "Conducted end-to-end system testing before pilot deployment, identifying and resolving 15–20 error-handling issues including battery safety checks, hardware/laser testing, and crash recovery directly enabling the system's successful advancement to pilot phase.",
          "Partnered with Design and QA engineers to diagnose production issues, review code, and iterate rapidly on fixes."
        ],
        tech: ["React.js", "FastAPI", "Julia", "Plotly.js", "Google Drive API"]
      },
      {
        organization: "Park Pulze",
        role: "Backend Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "MI, USA",
        skills: [
          "Developed and optimized scalable backend systems handling high-volume data (2K+ users), improving system throughput by 35%.",
          "Designed secure RESTful APIs with authentication and access control, improving data synchronization performance by 40%.",
          "Debugged and enhanced system reliability through testing and code reviews, reducing issue resolution time by 25%."
        ],
        tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Unit Testing"]
      },
      {
        organization: "Crossing",
        role: "Software Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "Boston, USA",
        skills: [
          "Built and supported distributed AWS pipelines (S3, Lambda, Step Functions) integrating machine learning preprocessing, delivering high-quality production data processing at 200+ records/week scale.",
          "Developed backend systems with asynchronous processing and LLM-based validation checks (AWS Bedrock), debugging complex data workflows and reducing manual review effort by 60%.",
          "Built a RAG (Retrieval-Augmented Generation) pipeline for automated document extraction and filing assistance for attorneys, reducing a 2–3 hour manual filing process down to 5 minutes, while collaborating cross-functionally through structured data validation and AI-assisted debugging workflows."
        ],
        tech: ["AWS", "Lambda", "S3", "Step Functions", "AWS Bedrock", "RAG", "LLMs"]
      },
      {
        organization: "Atlas Copco",
        role: "Full Stack Developer Intern",
        duration: "Jan 2024 – Jun 2024",
        location: "MH, India",
        skills: [
          "Architected and shipped a real-time microcontroller reservation platform (React/Next.js, Node.js/Express, PostgreSQL) using WebSockets for real-time locking, enabling conflict-free, login-authenticated scheduling built to scale for adoption by teams across multiple countries.",
          "Engineered a fully containerized deployment pipeline with Docker, enabling one-command, environment-agnostic deployment; documented all APIs via Swagger and delivered a polished UI with Tailwind CSS for maintainability and adoption.",
          "Drove system reliability and performance through query and API optimization, resolving 30+ production issues and cutting latency by 20%, while partnering with a cross-functional team of 10–15 engineers through daily scrums to translate feedback into iterative improvements."
        ],
        tech: ["React/Next.js", "Node.js/Express", "PostgreSQL", "WebSockets", "Docker", "Swagger", "Tailwind CSS"]
      },
      {
        organization: "Applied Technology Solutions, Inc.",
        role: "Software Engineer (Research and Development)",
        duration: "Jan 2023 – Dec 2023",
        location: "Lexington, MA",
        skills: [
          "Resolved UI/UX issues on client-facing portals and streamlined API calls, reducing reported interface bugs through targeted redesign contributions, while optimizing legacy web platforms for a 20% increase in system performance and user engagement.",
          "Built and tested backend services using Java and Spring Boot, using Postman for API testing and validation, and managed SQL database migrations by modernizing legacy systems with newer frameworks, reducing data processing time by 30%.",
          "Implemented NTP-based clock synchronization for accurate system timekeeping, and developed Python automation scripts and Linux-based testing/validation workflows, reducing deployment time by 40% and increasing test coverage and team efficiency by 30%."
        ],
        tech: ["Java", "Spring Boot", "Postman", "SQL", "Python", "Linux"]
      }
    ],
    softSkillsList: [
      { name: "Full Stack Ownership", icon: "🧱", desc: "Taking components from early wireframe designs all the way to containerized deployments." },
      { name: "Team Synergy", icon: "🤝", desc: "Collaborating closely with database engineering teams and designers to build robust applications." },
      { name: "Technical Versatility", icon: "✨", desc: "Equally comfortable coding UI components, backend APIs, or DevOps workflows." },
      { name: "Attention to Detail", icon: "🔍", desc: "Building pixel-perfect responsive layouts and secure authentication pipelines." }
    ]
  },
  data_analyst: {
    roleTitle: "Data Analyst",
    resumeUrl: "/Mansi_Mantri_Data_Analyst_Resume.pdf",
    summary:
      "Data Analyst with 2+ years of experience processing large-scale datasets using Python, SQL, and Excel. Skilled in building data pipelines, analytical dashboards, and visualization tools using Power BI, Tableau, Plotly, and Streamlit. Currently pursuing MS in Computer Science at Worcester Polytechnic Institute.",
    heroSubtitle:
      "I build custom ETL data pipelines, extract business intelligence with Power BI, and design data visualizers.",
    bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mansi Mantri</span>. I am a Data Analyst and MS in CS student at WPI, focused on data engineering, dashboard design, and extracting actionable business intelligence.`,
    techStack: ["Python", "SQL", "Power BI", "Streamlit"],
    technicalSkills: {
      categories: [
        {
          title: "Programming & Backend",
          skills: [
            { name: "Python", level: 93 },
            { name: "Java", level: 78 },
            { name: "JavaScript (ES6+)", level: 80 },
            { name: "TypeScript", level: 75 },
            { name: "SQL", level: 92 },
            { name: "Node.js / Express.js", level: 80 },
            { name: "FastAPI", level: 82 },
            { name: "Spring Boot", level: 65 },
            { name: "React / Next.js", level: 78 },
            { name: "Julia", level: 68 }
          ]
        },
        {
          title: "AI/ML & Data",
          skills: [
            { name: "LLMs / RAG", level: 85 },
            { name: "LangChain", level: 80 },
            { name: "Hugging Face", level: 78 },
            { name: "Gemini API", level: 88 },
            { name: "Ollama", level: 76 },
            { name: "Pandas / NumPy", level: 93 },
            { name: "Plotly", level: 90 },
            { name: "Power BI", level: 90 },
            { name: "Tableau", level: 90 },
            { name: "ARIMA / Prophet", level: 88 },
            { name: "Seaborn", level: 85 }
          ]
        },
        {
          title: "Cloud, Databases & Tools",
          skills: [
            { name: "AWS (S3, Lambda, SageMaker)", level: 83 },
            { name: "Docker", level: 80 },
            { name: "PostgreSQL", level: 90 },
            { name: "MongoDB", level: 82 },
            { name: "MySQL", level: 90 },
            { name: "Firebase", level: 82 },
            { name: "Supabase", level: 82 },
           
            { name: "Git", level: 90 },
            { name: "GitHub Actions / CI-CD", level: 80 },
            { name: "Linux", level: 85 },
            { name: "Postman", level: 82 },
            { name: "WebSockets", level: 74 }
          ]
        }
      ]
    },
    projects: [
      {
        id: "vizbotz",
        number: "01",
        badge: "🚀 Flagship Project",
        title: "Vizbotz – Data Visualizer",
        description:
          "Built an internal tool automating CSV data ingestion with customizable column selection, enabling data analysis and reducing manual effort by 40%. Integrated AI to auto-generate analytical summaries from querying raw datasets, accelerating data-driven trend identification by 30%.",
        techTags: ["Python", "Pandas", "Plotly", "Streamlit", "Gemini AI"],
        links: {
          github: "https://github.com/MansiMantri/VizBotz",
          demo: null
        },
        isFlagship: true
      },
      {
        id: "stock-sensei",
        number: "02",
        badge: "📈 Machine Learning",
        title: "Stock Sensei – Intelligent Stock Market Forecasting Tool",
        description:
          "Conducted data preprocessing, feature engineering, and forecasting (ARIMA, Prophet) to design predictive ML models for market trend prediction with 95% accuracy, ensuring scalability, reproducibility, and reliable model performance. Integrated PostgreSQL for storage and retrieval of 500+ financial records, and designed interactive BI-style dashboards using Plotly with Tableau-like visualizations for real-time trend analysis, enabling data-driven investment decisions.",
        techTags: ["Python", "ARIMA", "Prophet", "PostgreSQL", "Plotly"],
        links: {
          github: "https://github.com/MansiMantri/Stock-Sensei",
          demo: null
        },
        isFlagship: false
      }
    ],
    internships: [
      {
        organization: "VODA.ai",
        role: "Data Analyst Intern",
        duration: "Jun 2026 – Aug 2026",
        location: "Boston, MA",
        skills: [
          "Queried and maintained SQL relational databases, performing large-scale cleanup, deduplication, and standardization across 10K+ records to support accurate data collection and reporting.",
          "Built automated reporting dashboards using Power BI and HubSpot, improving data visibility and reducing manual reporting effort by 50%.",
          "Developed data-driven enrichment scripts and API-based hooks to automate scoring workflows, translating business requirements into functional reporting tools."
        ],
        tech: ["SQL", "Power BI", "HubSpot", "API Integration"]
      },
      {
        organization: "Dottir Labs",
        role: "Software Engineer Intern",
        duration: "Feb 2026 – Apr 2026",
        location: "Boston, USA",
        skills: [
          "Studied the existing system and redesigned the legacy Tkinter desktop app into a modern web application using React.js, FastAPI, and Julia (for data processing), with Plotly.js dashboards for spectral data visualization (spectra, normalization graphs, calibration curves, peak markers).",
          "Implemented core features including spectral data processing, peak detection with manual override, calibration curve generation, and offline/online connectivity with an offline upload queue and retry logic, plus Google Drive and local storage integration for CSV/JSON data.",
          "Conducted end-to-end system testing before pilot deployment, identifying and resolving 15–20 error-handling issues including battery safety checks, hardware/laser testing, and crash recovery directly enabling the system's successful advancement to pilot phase.",
          "Partnered with Design and QA engineers to diagnose production issues, review code, and iterate rapidly on fixes."
        ],
        tech: ["React.js", "FastAPI", "Julia", "Plotly.js", "Google Drive API"]
      },
      {
        organization: "Park Pulze",
        role: "Backend Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "MI, USA",
        skills: [
          "Developed and optimized scalable backend systems handling high-volume data (2K+ users), improving system throughput by 35%.",
          "Designed secure RESTful APIs with authentication and access control, improving data synchronization performance by 40%.",
          "Debugged and enhanced system reliability through testing and code reviews, reducing issue resolution time by 25%."
        ],
        tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Unit Testing"]
      },
      {
        organization: "Crossing",
        role: "Software Engineer Intern",
        duration: "Sep 2025 – Dec 2025",
        location: "Boston, USA",
        skills: [
          "Built and supported distributed AWS pipelines (S3, Lambda, Step Functions) integrating machine learning preprocessing, delivering high-quality production data processing at 200+ records/week scale.",
          "Developed backend systems with asynchronous processing and LLM-based validation checks (AWS Bedrock), debugging complex data workflows and reducing manual review effort by 60%.",
          "Built a RAG (Retrieval-Augmented Generation) pipeline for automated document extraction and filing assistance for attorneys, reducing a 2–3 hour manual filing process down to 5 minutes, while collaborating cross-functionally through structured data validation and AI-assisted debugging workflows."
        ],
        tech: ["AWS", "Lambda", "S3", "Step Functions", "AWS Bedrock", "RAG", "LLMs"]
      },
      {
        organization: "Atlas Copco",
        role: "Full Stack Developer Intern",
        duration: "Jan 2024 – Jun 2024",
        location: "MH, India",
        skills: [
          "Architected and shipped a real-time microcontroller reservation platform (React/Next.js, Node.js/Express, PostgreSQL) using WebSockets for real-time locking, enabling conflict-free, login-authenticated scheduling built to scale for adoption by teams across multiple countries.",
          "Engineered a fully containerized deployment pipeline with Docker, enabling one-command, environment-agnostic deployment; documented all APIs via Swagger and delivered a polished UI with Tailwind CSS for maintainability and adoption.",
          "Drove system reliability and performance through query and API optimization, resolving 30+ production issues and cutting latency by 20%, while partnering with a cross-functional team of 10–15 engineers through daily scrums to translate feedback into iterative improvements."
        ],
        tech: ["React/Next.js", "Node.js/Express", "PostgreSQL", "WebSockets", "Docker", "Swagger", "Tailwind CSS"]
      },
      {
        organization: "Applied Technology Solutions, Inc.",
        role: "Software Engineer (Research and Development)",
        duration: "Jan 2023 – Dec 2023",
        location: "Lexington, MA",
        skills: [
          "Resolved UI/UX issues on client-facing portals and streamlined API calls, reducing reported interface bugs through targeted redesign contributions, while optimizing legacy web platforms for a 20% increase in system performance and user engagement.",
          "Built and tested backend services using Java and Spring Boot, using Postman for API testing and validation, and managed SQL database migrations by modernizing legacy systems with newer frameworks, reducing data processing time by 30%.",
          "Implemented NTP-based clock synchronization for accurate system timekeeping, and developed Python automation scripts and Linux-based testing/validation workflows, reducing deployment time by 40% and increasing test coverage and team efficiency by 30%."
        ],
        tech: ["Java", "Spring Boot", "Postman", "SQL", "Python", "Linux"]
      }
    ],
    softSkillsList: [
      { name: "KPI Tracking", icon: "📊", desc: "Setting metrics and tracking quantitative business key performance indicators." },
      { name: "Stakeholder Reporting", icon: "🗣️", desc: "Translating complex raw datasets into digestible executive summaries for leaders." },
      { name: "Data-Driven Decisions", icon: "🧠", desc: "Advocating for evidence-based technical, product, and business directions." },
      { name: "Analytical Thinking", icon: "🔍", desc: "Investigating anomalies, cleaning messy database inputs, and auditing models." }
    ]
  }
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Python · Node.js · SQL",
    "Data Pipelines & AI Integration"
  ],
  credential: "MS in Computer Science · Worcester Polytechnic Institute",
  copyright: `© ${new Date().getFullYear()} Mansi Mantri | Built with React`
};

// ============================================================
// Additions for pending components
// ============================================================

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn concepts into robust, reliable, and scalable full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding core requirements, evaluating constraints, and selecting the optimal technology stack to lay a rock-solid foundation."
    },
    {
      number: "02",
      title: "Design",
      text: "Drafting scalable system architectures, design patterns, and relational database schemas to ensure seamless integration and access controls."
    },
    {
      number: "03",
      title: "Develop",
      text: "Engineering secure APIs, processing logic, and responsive frontends with rigorous typescript safety and modular structures."
    },
    {
      number: "04",
      title: "Deploy",
      text: "Writing unit tests, setting up CI/CD automation pipelines, and containerizing environments with Docker for reliable production release."
    }
  ],
  endText: "Ready to ship!"
};

export const leadershipList = [
  {
    badge: "Technical Community",
    title: "Technical Team Member",
    role: "Computer Society of India (CSI)",
    duration: "Jan 2022 – Dec 2023",
    description: "Contributed to the technical team by supporting programming and technology-focused activities, collaborating with team members to organize technical initiatives and events."
  },
  {
    badge: "Marketing Leadership",
    title: "Head of Marketing",
    role: "GeeksForGeeks JNEC",
    duration: "Feb 2022 – Dec 2023",
    description: "Led marketing initiatives and coordinated outreach for technical events and activities, managing promotions and collaborating with the team to increase student engagement and participation."
  }
];


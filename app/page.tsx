import Image from 'next/image';
import ExperienceSection from './components/ExperienceSection';

/* ─── DATA ──────────────────────────────────────────────────────── */

const experience = [
  {
    company: 'Helmholtz Zentrum München',
    location: 'Munich, Germany',
    role: 'Research Assistant',
    period: 'Nov 2024 — Present',
    description:
      'Designed, developed, and maintained a RAG application for internal use, enabling efficient access to domain-specific knowledge from web sources, internal documents, and knowledge graphs.',
    tags: ['RAG', 'LangChain', 'Python', 'Knowledge Graphs'],
    logo: '/images/logos/helmholtz_squared.png',
    initial: 'H',
  },
  {
    company: 'Reply DE',
    location: 'Munich, Germany',
    role: 'Data Engineer (Intern)',
    period: 'Oct 2025 — Mar 2026',
    description:
      'Performed energy-consumption analysis of major data engineering platforms (Spark, Kafka, Flink). Designed a data lake architecture using the most efficient components to reduce the system\'s overall energy footprint.',
    tags: ['Apache Spark', 'Kafka', 'Flink', 'Data Lake Architecture'],
    logo: '/images/logos/reply_de_logo.png',
    initial: 'R',
  },
  {
    company: 'Rappi',
    location: 'Guayaquil, Ecuador',
    role: 'Machine Learning Engineer',
    period: 'Jul 2022 — Apr 2024',
    description:
      'Developed and maintained microservices for ETA (Estimated Time of Arrival) prediction models throughout the full order lifecycle. Built and maintained data pipelines for online model training and validation.',
    tags: ['Python', 'MLOps', 'XGBoost', 'Airflow', 'Microservices'],
    logo: '/images/logos/rappi_logo.png',
    initial: 'R',
  },
  {
    company: 'TIA S.A.',
    location: 'Guayaquil, Ecuador',
    role: 'Deep Learning Engineer',
    period: 'Dec 2020 — May 2022',
    description:
      'Developed a DL system generating heatmaps from video surveillance cameras. Built a people-counting system for retail stores. Delivered a medical AI system for inferring Diabetic Retinopathy and Glaucoma from retinal images.',
    tags: ['PyTorch', 'Computer Vision', 'Medical AI', 'OpenCV'],
    logo: '/images/logos/tia_logo.png',
    initial: 'T',
  },
  {
    company: 'Criptext',
    location: 'Guayaquil, Ecuador',
    role: 'Full Stack Web Developer',
    period: 'Nov 2018 — Dec 2020',
    description:
      'Developed the API and encryption service for an end-to-end encrypted email provider. Built the enterprise admin web application. Participated in the Electron-based desktop client and handled DevOps tasks.',
    tags: ['Node.js', 'React', 'Electron', 'Cryptography', 'DevOps'],
    logo: '/images/logos/criptext_squared.jpeg',
    initial: 'C',
  },
];

const additionalExperience = [
  {
    company: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    role: 'University Research Assistant',
    period: 'Jun 2022 — Dec 2023',
    description:
      'Developed and maintained research projects on distributed systems and data engineering: trace analysis of Microsoft Azure Functions and benchmarking of Apache Spark, Presto, and Amazon Athena.',
    tags: ['Apache Spark', 'Presto', 'AWS Athena', 'Distributed Systems'],
    logo: '/images/logos/espol_squared.jpg',
    initial: 'E',
  },
  {
    company: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    role: 'Data Scientist',
    period: 'Sep 2021 — Dec 2021',
    description:
      'Performed exploratory data analysis over Microsoft\'s Azure Functions Traces Dataset. Conducted time series analysis (trends, burstiness, seasonality) and developed policies to reduce burstiness.',
    tags: ['Python', 'Time Series', 'Pandas', 'Data Analysis'],
    logo: '/images/logos/espol_squared.jpg',
    initial: 'E',
  },
  {
    company: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    role: 'Data Scientist — "Brainy"',
    period: 'Nov 2019 — Feb 2020',
    description:
      'Developed a CNN model to automatically detect and segment White Matter Hyperintensities in brain MRI scans. Built a desktop visualisation app to explore brain lesions (branded as "Brainy").',
    tags: ['Python', 'CNN', 'Medical AI', 'PyQt'],
    logo: '/images/logos/espol_squared.jpg',
    initial: 'E',
  },
  {
    company: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    role: 'University Research Assistant',
    period: 'Sep 2016 — Feb 2019',
    description:
      'Developed a key-value store benchmark based on YCSB using real workloads to analyse performance, latency, and throughput. Also developed a cache replacement admission policy with automated size partitions.',
    tags: ['Java', 'YCSB', 'Redis', 'Benchmarking'],
    logo: '/images/logos/espol_squared.jpg',
    initial: 'E',
  },
  {
    company: 'LACEA LAMES 2018',
    location: 'Guayaquil, Ecuador',
    role: 'Web Developer',
    period: 'Apr 2018 — Nov 2018',
    description:
      'Developed a hybrid mobile app for conference scheduling, bus routes, and tourist attractions. Created an admin web application and a REST API to manage conference logistics.',
    tags: ['Ionic', 'Angular', 'REST API', 'Mobile'],
    logo: null,
    initial: 'L',
  },
  {
    company: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    role: 'Software Developer',
    period: 'Oct 2017 — Feb 2018',
    description:
      'Created an Android native application to monitor Bosque Protector Prosperina. Implemented data streaming communication and an audio listening service for smartphone location tracking.',
    tags: ['Android', 'Java', 'Data Streaming', 'GPS'],
    logo: '/images/logos/espol_squared.jpg',
    initial: 'E',
  },
  {
    company: 'Procare Foundation',
    location: 'Guayaquil, Ecuador',
    role: 'Web Developer',
    period: 'Sep 2016 — Oct 2017',
    description:
      'Developed a REST API and parts of a desktop application to administer teachers, students, and classes for the foundation.',
    tags: ['REST API', 'Node.js', 'Desktop App'],
    logo: null,
    initial: 'P',
  },
];

const education = [
  {
    degree: 'MSc — Data Engineering and Analytics',
    institution: 'Technical University of Munich',
    location: 'Munich, Germany',
    period: 'Apr 2024 — Present',
    note: 'Focus: distributed systems, ML pipelines, data lake architectures.',
    logo: '/images/logos/tum_logo.svg',
  },
  {
    degree: 'BSc — Computer Science',
    institution: 'Escuela Superior Politécnica del Litoral',
    location: 'Guayaquil, Ecuador',
    period: 'May 2014 — Feb 2020',
    note: 'Best Graduate of the Bachelor in Computer Science — Winter Semester 2019/2020.',
    logo: '/images/logos/espol_squared.jpg',
  },
];

const projects = [
  {
    title: 'Brain WMH Segmentation (Medical AI)',
    description:
      'Developed a Swim U-Net Deep Learning model to automatically detect and segment White Matter Hyperintensities in brain MRI scans. Published at IEEE ANDESCON 2022 and HEALTHINF 2021.',
    image: '/images/logos/espol_complete.png',
    tags: ['PyTorch', 'Medical AI', 'IEEE Publication'],
    link: null,
  },
  {
    title: 'ETA Prediction System — Rappi',
    description:
      'ML microservices predicting Estimated Time of Arrival across the full delivery order lifecycle. Served millions of predictions daily with automated online training pipelines.',
    image: '/images/logos/rappi_logo.png',
    tags: ['XGBoost', 'MLOps', 'Airflow', 'Microservices'],
    link: null,
  },
  {
    title: 'RAG Knowledge Base — Helmholtz',
    description:
      'Internal RAG application enabling researchers to query domain-specific knowledge across web sources, internal documents, and knowledge graphs using LLMs.',
    image: '/images/logos/helmholtz_complete.png',
    tags: ['RAG', 'LangChain', 'LLMs', 'Knowledge Graphs'],
    link: null,
  },
];

const publications = [
  {
    title: 'Automatic Brain White Matter Hyperintensities Segmentation with Swim U-Net',
    venue: 'IEEE ANDESCON',
    year: '2022',
    pdf: '/pdfs/papers/Automatic_Brain_White_Matter_Hyperintensities_Segmentation_with_Swin_U-Net.pdf',
  },
  {
    title: 'Automatic Brain White Matter Hyperintensities Segmentation using Deep Learning Techniques',
    venue: 'HEALTHINF',
    year: '2021',
    pdf: '/pdfs/papers/automatic_brain_matter_deep_learning_techniques.pdf',
  },
  {
    title: 'Benchmarking Key-Value Stores via Trace Replay',
    venue: 'IEEE IC2E',
    year: '2017',
    pdf: '/pdfs/papers/Benchmarking_Key-Value_Stores_via_Trace_Replay.pdf',
  },
];

const stack = [
  { name: 'Python', icon: '🐍' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Apache Spark', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Go', icon: '🐹' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Kafka', icon: '📨' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Linux', icon: '🐧' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

/* ─── ICONS ──────────────────────────────────────────────────────── */

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ─── COMPONENTS ─────────────────────────────────────────────────── */

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <span className="font-mono text-primary font-semibold text-sm tracking-tight">
          jviteri<span className="text-highlight">.</span>dev
        </span> */}
        <span className="font-mono text-primary font-semibold text-sm tracking-tight">
          <span className="text-highlight"></span>
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/pdfs/CVs/jose_viteri_cv.pdf" download className="btn-primary text-sm py-2 px-4">
          <DownloadIcon />
          Download CV
        </a>
      </div>
    </nav>
  );
}

/* ─── SECTIONS ───────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div>
          <p className="text-sm font-mono text-secondary tracking-widest uppercase mb-4">
            MSc Student · TU Munich
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
            I build<br />
            <span className="text-secondary">intelligent</span><br />
            data systems.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-md">
            ML &amp; Data Engineer with 8+ years of experience across medical AI,
            delivery-tech, fintech, and research. Currently pursuing an MSc in
            Data Engineering &amp; Analytics at TU Munich.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <LocationIcon />
            <span>Munich, Germany</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowIcon />
            </a>
            <a href="/pdfs/CVs/jose_viteri_cv.pdf" download className="btn-outline">
              <DownloadIcon />
              Download CV
            </a>
          </div>
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/javiteri95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/josé-viteri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:josevns95@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-highlight/40 to-secondary/20 scale-110" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/images/mine/profile.png"
                alt="José Viteri"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {[
          { value: '8+', label: 'Years experience' },
          { value: '3', label: 'IEEE publications' },
          { value: '7+', label: 'Companies worked at' },
          { value: 'C1', label: 'English proficiency' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white px-6 py-6 text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="section-title">Projects</h2>
      <div className="section-divider" />
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="card flex flex-col">
            <div className="relative h-48 bg-white overflow-hidden flex items-center justify-center p-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="section-title">Education</h2>
      <div className="section-divider" />
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="card p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center">
              {edu.logo ? (
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={56}
                  height={56}
                  className="object-contain p-1"
                />
              ) : (
                <span className="text-2xl">🎓</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-secondary font-semibold">{edu.institution}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <LocationIcon /> {edu.location}
                  </p>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap self-start">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="section-title">Publications</h2>
      <div className="section-divider" />
      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.title} className="card p-6 flex items-start gap-5">
            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-highlight/20 flex items-center justify-center">
              <span className="text-lg">📄</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 leading-snug">{pub.title}</p>
              <p className="text-sm text-secondary font-medium mt-1">
                {pub.venue} · {pub.year}
              </p>
            </div>
            <a
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label={`Download PDF: ${pub.title}`}
            >
              <DownloadIcon />
              PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-divider" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 border border-gray-100 shadow-sm hover:border-highlight hover:shadow-md transition-all duration-200 cursor-default"
          >
            <span className="text-2xl" role="img" aria-label={tech.name}>{tech.icon}</span>
            <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Full skill lists */}
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { category: 'ML / Data Engineering', items: 'XGBoost · LightGBM · Sklearn · Optuna · Pandas · NumPy · Matplotlib · Airflow · LangChain · Spark' },
          { category: 'Languages', items: 'Python · TypeScript · Go · Java · C++ · Bash' },
          { category: 'Databases', items: 'PostgreSQL · MySQL · MongoDB · Redis · Snowflake' },
          { category: 'Web Frameworks', items: 'FastAPI · Django · Flask · Gin · Express · React · Vue' },
          { category: 'Infrastructure', items: 'Docker · Kubernetes · Kafka · AWS · HPC · Linux · Git' },
          { category: 'Research', items: 'Deep Learning · Computer Vision · Medical AI · RAG · Distributed Systems' },
        ].map((group) => (
          <div key={group.category} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs font-mono font-semibold text-secondary uppercase tracking-widest mb-2">
              {group.category}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-primary mt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-highlight font-mono text-sm tracking-widest uppercase mb-4">
          Get in touch
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">
          Let&apos;s build something together.
        </h2>
        <p className="text-white/70 text-lg max-w-md mx-auto mb-10">
          I&apos;m open to ML engineering roles, data engineering positions, and
          research collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:josevns95@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-background transition-colors duration-200"
          >
            <EmailIcon />
            josevns95@gmail.com
          </a>
          <a
            href="/pdfs/CVs/jose_viteri_cv.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12 pt-10 border-t border-white/20">
          <a
            href="https://github.com/javiteri95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/60 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/josé-viteri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-white transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:josevns95@gmail.com"
            aria-label="Email"
            className="text-white/60 hover:text-white transition-colors"
          >
            <EmailIcon />
          </a>
        </div>
        <p className="text-white/40 text-xs mt-6 font-mono">
          © {new Date().getFullYear()} José Viteri — Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection primary={experience} additional={additionalExperience} />
        <ProjectsSection />
        <EducationSection />
        <PublicationsSection />
        <StackSection />
      </main>
      <footer>
        <ContactSection />
      </footer>
    </>
  );
}

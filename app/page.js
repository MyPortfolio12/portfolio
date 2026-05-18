'use client'
import { useEffect, useState } from 'react'

// ─── DATA — pulled directly from resume ──────────────────────────────────────

const NAV_LINKS = ['about', 'skills', 'experience', 'contact']

const SKILLS = [
  {
    category: 'Generative AI & LLM Engineering',
    color: 'blue',
    items: ['GPT-4', 'GPT-4o', 'Azure OpenAI', 'AWS Bedrock', 'LangChain', 'LangGraph',
      'LlamaIndex', 'RAG Pipelines', 'Prompt Engineering', 'Semantic Search',
      'Hugging Face Transformers', 'Pinecone', 'FAISS', 'Vector Databases', 'RAGAS'],
  },
  {
    category: 'Machine Learning & Data Science',
    color: 'green',
    items: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM',
      'Random Forest', 'Logistic Regression', 'SMOTE', 'Prophet', 'K-Means',
      'Feature Engineering', 'A/B Testing', 'Statistical Analysis', 'SHAP', 'ONNX'],
  },
  {
    category: 'Backend & API Development',
    color: 'blue',
    items: ['Python', 'FastAPI', 'Flask', 'Django', 'gRPC', 'REST APIs',
      'Microservices Architecture', 'Event-Driven Architecture',
      'OOP', 'Pydantic', 'Swagger / OpenAPI', 'ETL Pipelines'],
  },
  {
    category: 'Cloud Platforms (Azure · AWS · GCP)',
    color: 'green',
    items: ['Azure OpenAI', 'AKS', 'Azure Databricks', 'Azure AI Search', 'Azure Monitor',
      'AWS SageMaker', 'EKS', 'Lambda', 'AWS Glue', 'EMR', 'S3',
      'GCP BigQuery', 'GKE', 'Vertex AI', 'Dataproc', 'Pub/Sub'],
  },
  {
    category: 'Data Engineering & Distributed Systems',
    color: 'blue',
    items: ['Apache Kafka', 'Apache Spark', 'Spark Streaming', 'PySpark',
      'Databricks', 'Dataproc', 'BigQuery', 'Snowflake',
      'Cloud Data Pipelines', 'Stream Processing'],
  },
  {
    category: 'MLOps, DevOps & Databases',
    color: 'green',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions',
      'Azure DevOps', 'MLflow', 'Airflow', 'CI/CD',
      'PostgreSQL', 'SQL Server', 'DynamoDB', 'Cosmos DB', 'Amazon Redshift',
      'Prometheus', 'Grafana', 'Datadog',
      'HIPAA', 'PCI-DSS', 'FedRAMP High'],
  },
]

const EXPERIENCE = [
  {
    title: 'Gen AI Engineer',
    company: 'Quest Diagnostics',
    period: 'Nov 2024 – Present',
    location: 'New York, NY',
    cloud: 'Azure + GCP',
    compliance: 'HIPAA',
    color: '#00C2FF',
    summary: 'Building a production Clinical Document Intelligence platform on Azure and GCP, enabling autonomous healthcare document processing and RAG-powered clinical AI.',
    highlights: [
      'Architected a production-grade Clinical Document Intelligence platform using Azure OpenAI GPT-4o, LangChain, FastAPI, and Azure AI Search — improving healthcare document review efficiency across enterprise clinical operations.',
      'Designed scalable Microservices-based RAG architecture on AKS enabling secure document ingestion, embedding retrieval, orchestration, and real-time healthcare AI response delivery.',
      'Engineered end-to-end RAG pipelines using LangChain and LangGraph implementing semantic chunking, embedding retrieval, ranking, and prompt orchestration improving healthcare knowledge retrieval.',
      'Established enterprise GenAI evaluation workflows using RAGAS, prompt A/B testing, and hallucination monitoring — improving retrieval precision and healthcare reliability across diagnostic AI support.',
      'Built scalable LLM orchestration workflows using LangChain, LangGraph, LlamaIndex, FastAPI, and Hugging Face sentence-transformers supporting OCR extraction and intelligent document-processing.',
      'Orchestrated scalable GenAI workloads on AKS and GKE configuring autoscaling, Kubernetes Secrets, and deployment strategies supporting enterprise healthcare AI operations.',
      'Provisioned enterprise cloud infrastructure through Terraform, Azure OpenAI, Pinecone, and Vertex AI maintaining governance compliance across development and production ecosystems.',
      'Monitored GenAI platform health using Azure Monitor, Application Insights, and Vertex AI Monitoring tracking latency, hallucination rates, and healthcare retrieval quality metrics.',
    ],
    stack: ['Python', 'Azure OpenAI', 'GPT-4o', 'LangChain', 'LangGraph', 'LlamaIndex',
      'FastAPI', 'Azure AI Search', 'Pinecone', 'Vertex AI', 'AKS', 'GKE',
      'Docker', 'Terraform', 'PySpark', 'Azure Databricks', 'RAGAS', 'HIPAA'],
  },
  {
    title: 'AI / ML Engineer',
    company: 'Fiserv, Inc.',
    period: 'Aug 2022 – Oct 2024',
    location: 'Frisco, TX',
    cloud: 'AWS',
    compliance: 'PCI-DSS',
    color: '#00FFAA',
    summary: 'Delivered a real-time fraud detection AI platform on AWS EKS processing enterprise banking transactions, improving risk identification by 38%.',
    highlights: [
      'Delivered a production Real-Time Fraud Detection AI platform using Python, AWS SageMaker, XGBoost, LightGBM, and Apache Kafka — improving transaction risk identification by 38%.',
      'Designed scalable Event-Driven Microservices architecture on Amazon EKS and AWS Lambda enabling secure fraud scoring, alert generation, and transaction monitoring across enterprise banking channels.',
      'Engineered end-to-end RAG pipelines implementing semantic retrieval, contextual ranking, Prompt Engineering, and streaming techniques improving financial knowledge retrieval and conversational AI quality.',
      'Established enterprise Champion/Challenger evaluation frameworks using A/B testing, RAGAS, and SageMaker Model Monitor improving fraud detection reliability across banking intelligence.',
      'Automated end-to-end CI/CD pipelines using AWS CodePipeline, GitHub Actions, and Jenkins streamlining model deployments and integration testing throughout enterprise banking operations.',
      'Provisioned enterprise cloud infrastructure using Terraform and AWS CloudFormation managing SageMaker, EKS, ECR, Redshift, Pinecone, and DynamoDB resources across financial environments.',
      'Monitored fraud AI platform health using Amazon CloudWatch, SageMaker Model Monitor, and Grafana tracking model drift, inference latency, and fraud prediction stability.',
    ],
    stack: ['Python', 'SageMaker', 'XGBoost', 'LightGBM', 'Kafka', 'LangChain',
      'AWS Bedrock', 'FastAPI', 'EKS', 'Lambda', 'Docker', 'Terraform',
      'Pinecone', 'FAISS', 'RAGAS', 'CloudWatch', 'Grafana', 'PCI-DSS'],
  },
  {
    title: 'Sr Data Science Engineer',
    company: 'State of Kentucky',
    period: 'Feb 2020 – Jun 2022',
    location: 'Remote',
    cloud: 'GCP',
    compliance: 'FedRAMP High',
    color: '#00C2FF',
    summary: 'Spearheaded Citizen Claims Intelligence Platform on GCP for statewide unemployment fraud detection, establishing the AI Agent Delivery Framework across 75+ model versions.',
    highlights: [
      'Spearheaded a Citizen Claims Intelligence Platform using Python, FastAPI, XGBoost, and BigQuery improving fraudulent unemployment investigation accuracy during COVID assistance expansion.',
      'Engineered an Event-Driven Fraud Analytics Architecture on GKE, Pub/Sub, and Cloud Storage for real-time unemployment adjudication during statewide COVID assistance modernization.',
      'Established ML feature repositories using MLflow and BigQuery behavioral datasets managing fraud indicators — claimant velocity, benefit duplication, and temporal filing intelligence.',
      'Authored OpenAPI specifications, SHAP baselines, and MLflow lineage documentation covering 75+ production model versions — reducing analyst onboarding timelines by 43% across Kentucky departments.',
      'Instrumented observability dashboards using Cloud Monitoring, Prometheus, and Grafana tracking AUC-ROC drift, PSI thresholds, and latency degradation.',
      'Parameterized Terraform infrastructure modules across development, staging, and production environments reducing configuration drift while enforcing IAM policy consistency.',
      'Stressed-tested unemployment fraud APIs using PyTest and Locust simulations validating concurrent citizen submissions and strengthening regression validation procedures.',
    ],
    stack: ['Python', 'FastAPI', 'Flask', 'gRPC', 'XGBoost', 'ONNX', 'PySpark',
      'Dataproc', 'MLflow', 'Airflow', 'BigQuery', 'GKE', 'Terraform',
      'Prometheus', 'Grafana', 'SHAP', 'SMOTE', 'FedRAMP High'],
  },
  {
    title: 'Python Data Scientist',
    company: 'Starbucks',
    period: 'Oct 2017 – Jan 2020',
    location: 'Seattle, WA',
    cloud: 'Azure',
    compliance: 'PCI-DSS',
    color: '#00FFAA',
    summary: 'Architected Retail Customer Analytics Platform on Azure Synapse powering recommendation systems, sales forecasting, and loyalty personalization across global retail operations.',
    highlights: [
      'Architected a Retail Customer Analytics Platform using Python, Scikit-Learn, and Azure Synapse improving customer-behavior prediction across retail transaction processing and loyalty analytics.',
      'Engineered scalable Batch-and-Streaming retail analytics workflows on Azure Data Factory and Azure Synapse supporting recommendation systems, sales forecasting, and personalization intelligence.',
      'Developed customer-segmentation and recommendation models using TensorFlow, Scikit-Learn, and Pandas improving personalized targeting across digital-commerce retail environments.',
      'Operationalized MLflow Model Registry and Airflow retraining pipelines maintaining lineage tracking and approval workflows supporting enterprise governance and audit-ready ML deployment.',
    ],
    stack: ['Python', 'Scikit-Learn', 'TensorFlow', 'PySpark', 'MLflow', 'Airflow',
      'Azure Synapse', 'Databricks', 'Snowflake', 'AKS', 'Azure DevOps', 'PCI-DSS'],
  },
  {
    title: 'Python Developer',
    company: 'Fortis Healthcare',
    period: 'Apr 2014 – Jun 2017',
    location: 'Hyderabad, India',
    cloud: 'On-Prem',
    compliance: 'HIPAA',
    color: '#00C2FF',
    summary: 'Built healthcare management applications using Python, Django, Flask, and SQL Server across multi-specialty hospital operations with HIPAA compliance.',
    highlights: [
      'Developed healthcare management applications using Python, Django, SQL Server, and JavaScript improving patient-record processing efficiency across multi-specialty hospital operations.',
      'Engineered backend healthcare applications using Python, Flask, and REST APIs supporting electronic patient-record processing across hospital administration and diagnostic workflows.',
      'Structured HIPAA-compliant ingestion workflows enforcing PHI masking controls protecting healthcare information throughout hospital-management and patient-care systems.',
    ],
    stack: ['Python', 'Django', 'Flask', 'REST APIs', 'SQL Server', 'MySQL', 'Docker', 'Jenkins', 'HIPAA'],
  },
]

const STATS = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Enterprise Clients', value: '5' },
  { label: 'Cloud Platforms', value: '3' },
  { label: 'Compliance Domains', value: '3' },
]

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.06 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useActiveSection() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -40% 0px' }
    )
    NAV_LINKS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return active
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,45,64,0.8)' : 'none',
      transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#00C2FF', fontSize: 14, letterSpacing: '0.15em' }}>
          VKA<span style={{ color: '#00FFAA' }}>_</span>
        </span>
        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: active === l ? '#00C2FF' : '#4B6480',
              transition: 'color 0.2s', textDecoration: 'none',
            }}>{l}</a>
          ))}
          <a href="/resume.pdf" target="_blank" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, padding: '8px 16px',
            border: '1px solid #00C2FF', color: '#00C2FF', letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = '#00C2FF'; e.target.style.color = '#080C14' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#00C2FF' }}
          >Resume ↓</a>
        </div>
        {/* Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4B6480' }}>
          <div style={{ width: 24 }}>
            <div style={{ height: 1, background: 'currentColor', marginBottom: 6,
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', transition: 'all 0.2s' }} />
            <div style={{ height: 1, background: 'currentColor', marginBottom: 6,
              opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
            <div style={{ height: 1, background: 'currentColor',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'all 0.2s' }} />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: '#0D1320', borderTop: '1px solid rgba(30,45,64,0.8)', padding: '16px 24px' }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)}
               style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11,
                 textTransform: 'uppercase', color: '#4B6480', padding: '8px 0',
                 textDecoration: 'none', letterSpacing: '0.1em' }}>{l}</a>
          ))}
          <a href="/resume.pdf" target="_blank" style={{
            display: 'inline-block', marginTop: 8, fontFamily: 'var(--font-mono)',
            fontSize: 11, padding: '8px 16px', border: '1px solid #00C2FF',
            color: '#00C2FF', textDecoration: 'none', letterSpacing: '0.1em',
          }}>Resume ↓</a>
        </div>
      )}
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [typed, setTyped] = useState('')
  const titles = ['Sr GenAI Engineer', 'AI / ML Engineer', 'LLM Systems Architect', 'RAG Pipeline Builder', 'Agentic AI Engineer']
  const [ti, setTi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const target = titles[ti]; let t
    if (!del && typed.length < target.length) t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 65)
    else if (!del && typed.length === target.length) t = setTimeout(() => setDel(true), 2400)
    else if (del && typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 32)
    else { setDel(false); setTi((ti + 1) % titles.length) }
    return () => clearTimeout(t)
  }, [typed, del, ti])

  return (
    <section id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
      background: '#080C14',
      backgroundImage: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,194,255,0.08) 0%, transparent 65%),
        linear-gradient(rgba(0,194,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,194,255,0.025) 1px, transparent 1px)`,
      backgroundSize: 'auto, 48px 48px, 48px 48px',
    }}>
      <div className="scan-line" />
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '96px 24px 64px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', color: '#00C2FF', fontSize: 11, letterSpacing: '0.15em', marginBottom: 20, opacity: 0.7 }}>
              {'> PORTFOLIO INITIALIZED // READY'}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}>
              <span style={{ color: '#F0F8FF', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', display: 'block' }}>Vinod Kumar</span>
              <span style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', display: 'block',
                background: 'linear-gradient(135deg, #00C2FF 0%, #0080FF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Aluru
              </span>
            </h1>
            <div style={{ height: 36, marginBottom: 24, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: '#C8D8E8' }}>{typed}</span>
              <span className="blink-cursor" style={{ color: '#00C2FF', marginLeft: 2 }}>|</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', color: '#4B6480', lineHeight: 1.7, marginBottom: 32, maxWidth: 460, fontSize: 14 }}>
              Senior GenAI and AI/ML Engineer with 10+ years of experience building enterprise AI platforms
              across healthcare and financial domains using LLMs, cloud-native services, and scalable
              backend systems. Hands-on expertise in LangChain, RAG pipelines, and production AI deployment
              on Azure, AWS, and GCP.
            </p>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ background: 'rgba(13,19,32,0.7)', border: '1px solid rgba(30,45,64,0.8)',
                  backdropFilter: 'blur(12px)', borderRadius: 4, padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
                    background: 'linear-gradient(135deg, #00FFAA 0%, #00C2FF 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#4B6480', marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="#experience" style={{ padding: '12px 24px', background: '#00C2FF', color: '#080C14',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s' }}>
                View Experience →
              </a>
              <a href="/resume.pdf" target="_blank" style={{ padding: '12px 24px', border: '1px solid #00FFAA',
                color: '#00FFAA', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Download Resume
              </a>
              <a href="#contact" style={{ padding: '12px 24px', border: '1px solid rgba(30,45,64,0.8)',
                color: '#C8D8E8', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Contact
              </a>
            </div>
          </div>

          {/* Right — terminal */}
          <div className="terminal-card" style={{ background: 'rgba(13,19,32,0.7)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(30,45,64,0.8)', animation: 'float 6s ease-in-out infinite' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px',
              borderBottom: '1px solid rgba(30,45,64,0.8)' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(234,179,8,0.6)' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(34,197,94,0.6)' }} />
              <span style={{ marginLeft: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480' }}>
                vinod@genai ~ %
              </span>
            </div>
            <div style={{ padding: 20, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
              {[
                ['$ name', 'Vinod Kumar Aluru'],
                ['$ title', 'Sr GenAI & AI/ML Engineer'],
                ['$ location', 'New Jersey · NYC Metro'],
                ['$ experience', '10+ years'],
                ['$ current', 'Quest Diagnostics (Nov 2024–)'],
                ['$ clouds', 'Azure · AWS · GCP'],
                ['$ llms', 'GPT-4o · Bedrock · LangChain'],
                ['$ domains', 'Healthcare · FinTech · Gov'],
                ['$ compliance', 'HIPAA · PCI-DSS · FedRAMP'],
                ['$ education', 'B.Tech ECE — JNTUH 2015'],
              ].map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                  <span style={{ color: '#4B6480', width: 108, flexShrink: 0 }}>{label}</span>
                  <span style={{ color: '#00FFAA', fontSize: 11, lineHeight: 1.4 }}>{val}</span>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <span style={{ color: '#4B6480' }}>$</span>
                <span className="blink-cursor" style={{ color: '#00C2FF' }}>|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionHeader({ label, title, accent, centered }) {
  return (
    <div className="reveal" style={{ marginBottom: 48, textAlign: centered ? 'center' : 'left' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em',
        color: accent === 'blue' ? '#00C2FF' : '#00FFAA', marginBottom: 8, textTransform: 'uppercase' }}>
        {label}
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F0F8FF',
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', margin: 0 }}>
        {title}
      </h2>
      <div style={{ marginTop: 12, height: 1, width: 64,
        marginLeft: centered ? 'auto' : 0, marginRight: centered ? 'auto' : 0,
        background: `linear-gradient(90deg, ${accent === 'blue' ? '#00C2FF' : '#00FFAA'}, transparent)` }} />
    </div>
  )
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 0', background: '#080C14' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader label="02 // CAPABILITIES" title="Technical Skills" accent="blue" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {SKILLS.map(skill => (
            <div key={skill.category} className="reveal skill-card"
              style={{ background: 'rgba(13,19,32,0.7)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(30,45,64,0.8)', borderRadius: 4, padding: 20,
                transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 3, height: 16, borderRadius: 2, flexShrink: 0,
                  background: skill.color === 'blue' ? '#00C2FF' : '#00FFAA' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12,
                  color: '#F0F8FF', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  {skill.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {skill.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, padding: '3px 8px', borderRadius: 3,
                    background: skill.color === 'blue' ? 'rgba(0,194,255,0.07)' : 'rgba(0,255,170,0.07)',
                    border: `1px solid ${skill.color === 'blue' ? 'rgba(0,194,255,0.22)' : 'rgba(0,255,170,0.22)'}`,
                    color: skill.color === 'blue' ? '#00C2FF' : '#00FFAA',
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function Experience() {
  const [open, setOpen] = useState(0)
  return (
    <section id="experience" style={{
      padding: '96px 0',
      backgroundImage: 'linear-gradient(180deg, #080C14 0%, #0D1320 50%, #080C14 100%)',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader label="03 // CAREER" title="Professional Experience" accent="green" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="reveal" onClick={() => setOpen(open === i ? -1 : i)}
              style={{ cursor: 'pointer', background: 'rgba(13,19,32,0.75)', backdropFilter: 'blur(12px)',
                border: `1px solid ${open === i ? exp.color + '45' : 'rgba(30,45,64,0.8)'}`,
                borderRadius: 4, overflow: 'hidden', transition: 'border-color 0.3s' }}>

              {/* Header */}
              <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 3, borderRadius: 2, flexShrink: 0, minHeight: 48,
                    alignSelf: 'stretch', background: exp.color }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#F0F8FF',
                      fontSize: 16, marginBottom: 4 }}>{exp.title}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500,
                        fontSize: 14, color: exp.color }}>{exp.company}</span>
                      <span style={{ color: '#1E2D40' }}>·</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480' }}>{exp.period}</span>
                      <span style={{ color: '#1E2D40' }}>·</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480' }}>{exp.location}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 8px', borderRadius: 3,
                        background: 'rgba(0,194,255,0.08)', border: '1px solid rgba(0,194,255,0.2)', color: '#00C2FF' }}>
                        {exp.cloud}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 8px', borderRadius: 3,
                        background: 'rgba(0,255,170,0.08)', border: '1px solid rgba(0,255,170,0.2)', color: '#00FFAA' }}>
                        {exp.compliance}
                      </span>
                    </div>
                    {open !== i && (
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#4B6480',
                        marginTop: 8, lineHeight: 1.5 }}>{exp.summary}</p>
                    )}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#4B6480', fontSize: 20, flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </div>

              {/* Expanded */}
              {open === i && (
                <div style={{ borderTop: '1px solid rgba(30,45,64,0.8)', padding: '16px 20px 20px' }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, marginBottom: 10,
                        fontFamily: 'var(--font-body)', fontSize: 13, color: '#C8D8E8', lineHeight: 1.6 }}>
                        <span style={{ color: exp.color, marginTop: 4, fontSize: 8, flexShrink: 0 }}>▪</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                    {exp.stack.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 8px', borderRadius: 3,
                        background: 'rgba(0,194,255,0.06)', border: '1px solid rgba(0,194,255,0.2)', color: '#00C2FF' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Education</div>
          <div style={{ background: 'rgba(13,19,32,0.7)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(30,45,64,0.8)', borderRadius: 4, padding: 20,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#F0F8FF', fontSize: 15 }}>
                B.Tech — Electronics & Communication Engineering
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4B6480', marginTop: 4 }}>
                Jawaharlal Nehru Technological University Hyderabad (JNTUH), India
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#00C2FF' }}>2015</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 0', background: '#080C14' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <SectionHeader label="04 // CONNECT" title="Get In Touch" accent="blue" centered />
        <p style={{ fontFamily: 'var(--font-body)', color: '#4B6480', lineHeight: 1.7,
          marginBottom: 40, fontSize: 14 }}>
          Open to Senior GenAI Engineer, AI/ML Engineer, and Agentic AI roles.
          Based in NJ — available for NYC metro onsite and remote opportunities across the US.
        </p>
        <div className="reveal" style={{ background: 'rgba(13,19,32,0.7)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(30,45,64,0.8)', borderRadius: 4, padding: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, textAlign: 'left', marginBottom: 24 }}>
            {[
              { label: 'Email', val: 'Vinodkumaraluru1@gmail.com', href: 'mailto:Vinodkumaraluru1@gmail.com' },
              { label: 'Phone', val: '+1 (201) 595-9525', href: 'tel:+12015959525' },
              { label: 'Location', val: 'New Jersey · NYC Metro', href: null },
              { label: 'LinkedIn', val: 'linkedin.com/in/aluvinodkuma', href: 'https://linkedin.com/in/aluvinodkuma' },
            ].map(c => (
              <div key={c.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#4B6480',
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                       style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: '#F0F8FF',
                         textDecoration: 'none', transition: 'color 0.2s' }}
                       onMouseEnter={e => e.target.style.color = '#00C2FF'}
                       onMouseLeave={e => e.target.style.color = '#F0F8FF'}>{c.val}</a>
                  : <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: '#F0F8FF' }}>{c.val}</span>
                }
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: 'linear-gradient(90deg, #00C2FF, #00FFAA, transparent)', marginBottom: 24 }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <a href="mailto:Vinodkumaraluru1@gmail.com"
               style={{ padding: '12px 24px', background: '#00C2FF', color: '#080C14',
                 fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Send Email →
            </a>
            <a href="/resume.pdf" target="_blank"
               style={{ padding: '12px 24px', border: '1px solid #00FFAA', color: '#00FFAA',
                 fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Download Resume
            </a>
            <a href="https://linkedin.com/in/aluvinodkuma" target="_blank" rel="noreferrer"
               style={{ padding: '12px 24px', border: '1px solid rgba(30,45,64,0.8)', color: '#C8D8E8',
                 fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: 13, color: '#00FFAA' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FFAA',
            animation: 'pulse 2s ease-in-out infinite' }} />
          Available for new opportunities · 2026
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(30,45,64,0.8)', padding: '32px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480' }}>
          © 2026 Vinod Kumar Aluru · Sr GenAI & AI/ML Engineer
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4B6480' }}>
          New Jersey · NYC Metro
        </span>
      </div>
    </footer>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Page() {
  useScrollReveal()
  const active = useActiveSection()

  return (
    <>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scan { 0%{transform:translateY(-100vh)} 100%{transform:translateY(100vh)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink-cursor { animation: blink 1.2s step-end infinite; }
        .scan-line { position:fixed;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,194,255,0.2),transparent);animation:scan 12s linear infinite;pointer-events:none;z-index:100; }
        .reveal { opacity:0;transform:translateY(18px);transition:opacity 0.7s ease,transform 0.7s ease; }
        .reveal.visible { opacity:1;transform:translateY(0); }
        .skill-card:hover { background:rgba(17,24,39,0.9)!important;border-color:rgba(0,194,255,0.3)!important;transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,194,255,0.08); }
        @media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}.terminal-card{display:none!important}}
        .hidden{display:none}.md\\:flex{display:flex}.md\\:hidden{display:none}
        @media(min-width:768px){.hidden{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}}
        @media(max-width:767px){.hidden{display:block!important}.md\\:flex{display:none!important}}
      `}</style>

      <Navbar active={active} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

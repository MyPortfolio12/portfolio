'use client'
import { useEffect, useState } from 'react'
 
// ─── DATA — pulled directly from resume ──────────────────────────────────────
 
const NAV_LINKS = ['about', 'skills', 'experience', 'contact']
 
const SKILLS = [
  {
    category: 'Generative AI & LLM Engineering',
    color: 'blue',
    items: ['GPT-4o', 'GPT-4o-mini', 'Azure OpenAI', 'LangChain', 'LangGraph',
      'LlamaIndex', 'RAG', 'RAGAS', 'Prompt Engineering', 'Chain-of-Thought Prompting',
      'Semantic Search', 'Embeddings', 'Hugging Face sentence-transformers',
      'Pinecone', 'Vertex AI Vector Search', 'Azure AI Search', 'OCR', 'Vector Databases'],
  },
  {
    category: 'Machine Learning & Data Science',
    color: 'green',
    items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'SMOTE', 'SHAP',
      'RFM Analysis', 'CLV Modeling', 'Propensity Scoring', 'Churn Prediction',
      'Basket Analysis', 'Cross-Validation', 'Hyperparameter Optimization',
      'A/B Testing', 'Hypothesis Testing', 'ML Pipelines', 'Model Governance',
      'Experiment Lineage', 'Model Cards'],
  },
  {
    category: 'Backend & API Development',
    color: 'blue',
    items: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs',
      'Microservices Architecture', 'Django ORM', 'API Integration',
      'Workflow Automation', 'Swagger / OpenAPI', 'OOP'],
  },
  {
    category: 'Cloud Platforms (Azure · AWS · GCP)',
    color: 'green',
    items: ['Azure OpenAI', 'Azure AI Search', 'Azure Databricks', 'Azure Blob Storage',
      'Azure SQL Database', 'Cosmos DB', 'AKS', 'Azure Container Registry',
      'Amazon SageMaker', 'SageMaker Feature Store', 'SageMaker Model Monitor',
      'AWS Glue', 'Amazon Redshift', 'Amazon EKS', 'Amazon S3', 'AWS IAM',
      'AWS CodePipeline', 'AWS CodeBuild', 'Vertex AI', 'Vertex AI Vector Search',
      'BigQuery', 'GKE', 'Google Cloud Build'],
  },
  {
    category: 'Data Engineering & Distributed Systems',
    color: 'blue',
    items: ['Apache Spark', 'PySpark', 'Azure Databricks', 'AWS Glue',
      'Great Expectations', 'HL7/FHIR REST APIs', 'SageMaker Feature Store',
      'Cloud Data Pipelines', 'Distributed Data Processing'],
  },
  {
    category: 'MLOps, DevOps & Databases',
    color: 'green',
    items: ['Docker', 'Kubernetes', 'AKS', 'Amazon EKS', 'GKE', 'Terraform',
      'Jenkins', 'GitHub Actions', 'Azure DevOps', 'AWS CodePipeline', 'Google Cloud Build',
      'MLflow', 'CI/CD', 'SQL Server', 'MySQL', 'Cosmos DB', 'BigQuery',
      'Azure SQL Database', 'Amazon Redshift', 'Amazon S3',
      'Azure Monitor', 'CloudWatch', 'Grafana', 'Hallucination Rate Monitoring',
      'HIPAA', 'PCI-DSS', 'PHI Masking', 'PII Redaction', 'AML', 'KYC', 'SOX'],
  },
]
 
const EXPERIENCE = [
  {
    title: 'Generative AI Engineer',
    company: 'Quest Diagnostics',
    period: 'Mar 2025 – Present',
    location: 'New York, NY',
    cloud: 'Azure + GCP',
    compliance: 'HIPAA',
    color: '#00C2FF',
    summary: 'Building a production Clinical Document Intelligence platform on Azure and GCP, enabling autonomous healthcare document processing and RAG-powered clinical AI.',
    highlights: [
      'Clinical Document Intelligence platform work brought together Azure OpenAI, GPT-4o, LangChain, FastAPI, and Azure AI Search to improve healthcare document review across clinical operations and diagnostic support teams.',
      'Microservices-based RAG delivery on Azure Kubernetes Service supported secure document ingestion, embedding retrieval, orchestration, and real-time healthcare AI responses for clinical support environments.',
      'Secure healthcare ingestion used Azure Blob Storage, SQL Server, HL7/FHIR REST APIs, and Cosmos DB, with PHI masking and PII redaction before downstream LLM processing.',
      'End-to-end RAG work used LangChain and LangGraph for semantic chunking, embedding retrieval, ranking, and prompt orchestration to improve diagnostic knowledge retrieval.',
      'Performance tuning used Prompt Engineering, Chain-of-Thought prompting, and Azure AI Search query refinement to reduce healthcare response latency and strengthen diagnostic context handling.',
      'LLM orchestration used LangChain, LangGraph, LlamaIndex, FastAPI, and Hugging Face sentence-transformers to support OCR extraction and intelligent healthcare document processing.',
      'Semantic retrieval used Pinecone and Vertex AI Vector Search to manage healthcare embeddings across diagnostic guidelines, treatment references, and clinical repositories.',
      'Platform monitoring used Azure Monitor, Application Insights, and Vertex AI Monitoring to track latency, hallucination rates, retrieval quality, and service stability.',
      'Cloud provisioning used Terraform with Azure OpenAI, Pinecone, and Vertex AI to maintain governance alignment across development and production healthcare AI environments.',
      'Release workflows used Azure DevOps, Google Cloud Build, and GitHub Actions for Docker image builds, integration testing, and zero-downtime GenAI releases.',
    ],
    stack: ['Python', 'Azure OpenAI', 'GPT-4o', 'LangChain', 'LangGraph', 'LlamaIndex',
      'FastAPI', 'Azure AI Search', 'Pinecone', 'Vertex AI', 'AKS', 'GKE',
      'Docker', 'Terraform', 'PySpark', 'Azure Databricks', 'Cosmos DB', 'BigQuery',
      'HL7/FHIR APIs', 'RAGAS', 'PyTest', 'HIPAA'],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'UBS',
    period: 'Sep 2020 – Nov 2022',
    location: 'India',
    cloud: 'AWS',
    compliance: 'PCI-DSS · SOX',
    color: '#00FFAA',
    summary: 'Engineered a wealth risk scoring platform on AWS SageMaker for fraud triage and regulated portfolio analytics within wealth management governance.',
    highlights: [
      'Engineered wealth risk scoring platform with Amazon SageMaker, XGBoost, and Amazon S3, improving advisor intelligence, fraud triage, and regulated portfolio analytics for wealth management.',
      'Designed event-driven ML architecture across AWS Glue, Amazon Redshift, and Amazon SageMaker, processing transaction feeds, portfolio holdings, and market signals for model training at scale.',
      'Integrated transaction feeds, MCC codes, and watchlist data through AWS Glue and Amazon S3, applying AML controls for governed feature preparation and audit traceability.',
      'Adopted SageMaker Feature Store to manage reusable AML, KYC, transaction velocity, and advisor interaction features across training and inference workflows with lineage controls.',
      'Benchmarked XGBoost, LightGBM, and scikit-learn models against banking risk patterns, selecting gradient boosting for explainability, tabular performance, and auditability.',
      'Addressed class imbalance using SMOTE, stratified cross-validation, and threshold calibration, improving suspicious activity detection across analyst queues.',
      'Standardized MLflow tracking with scikit-learn Pipeline patterns, capturing parameters, artifacts, and model lineage for repeatable experimentation under governance audit.',
      'Evaluated champion-challenger models using SHAP, SageMaker Model Monitor, and drift diagnostics, validating AUC stability and PSI movement before governance board decisions.',
      'Deployed scoring workloads on Amazon EKS with autoscaling, and automated release pipelines using AWS CodePipeline, AWS CodeBuild, and PyTest with rolling deployment strategy.',
      'Authored model cards, SHAP baselines, experiment lineage, and feature engineering specs supporting SOX audit readiness and transparent model governance documentation.',
    ],
    stack: ['Python', 'PySpark', 'Pandas', 'Amazon SageMaker', 'SageMaker Feature Store',
      'SageMaker Model Monitor', 'XGBoost', 'LightGBM', 'scikit-learn', 'SMOTE', 'MLflow',
      'SHAP', 'Great Expectations', 'AWS Glue', 'Amazon S3', 'Amazon Redshift',
      'Amazon EKS', 'Docker', 'Terraform', 'CloudWatch', 'Grafana', 'PCI-DSS', 'SOX', 'AML', 'KYC'],
  },
  {
    title: 'Data Scientist',
    company: 'Starbucks',
    period: 'Jan 2018 – Aug 2020',
    location: 'India',
    cloud: 'Azure',
    compliance: 'PCI-DSS',
    color: '#00C2FF',
    summary: 'Delivered Azure retail personalization models improving recommendation relevance across mobile ordering, loyalty engagement, and targeted campaigns.',
    highlights: [
      'Delivered Azure retail personalization models using Python, SQL, and Scikit-learn, improving recommendation relevance across mobile ordering, loyalty engagement, and targeted campaigns.',
      'Analyzed POS feeds, loyalty records, and mobile orders through Azure Data Factory, supporting customer segmentation and purchase behavior analysis for seasonal demand forecasting.',
      'Modeled customer behavior using RFM analysis, CLV modeling, and propensity scoring, improving loyalty recommendations, offer targeting, and segmentation for recurring purchase patterns.',
      'Compared Scikit-learn and XGBoost approaches for recommendation scoring, selecting ensemble models where nonlinear purchase patterns improved prediction stability.',
      'Tuned machine learning models with cross-validation, class imbalance handling, and hyperparameter optimization for seasonal churn prediction, offer conversion, and basket analysis.',
      'Validated model outputs using SHAP, A/B testing design, and hypothesis testing, improving explainability for customer segmentation and loyalty campaigns.',
      'Organized analytical datasets in Azure Data Lake Storage and Azure SQL Database for segmentation analysis and dashboard refreshes across marketing teams.',
      'Monitored model performance through Azure Monitor and Application Insights, tracking latency, AUC-ROC drift, and feature distribution shifts during high-traffic campaign launches.',
    ],
    stack: ['Python', 'SQL', 'Scikit-learn', 'XGBoost', 'Pandas', 'Azure Data Factory',
      'Azure Databricks', 'RFM Analysis', 'CLV Modeling', 'Propensity Scoring',
      'SHAP', 'A/B Testing', 'Azure Data Lake Storage', 'Azure SQL Database',
      'Azure Monitor', 'Application Insights', 'PCI-DSS'],
  },
  {
    title: 'Python Developer',
    company: 'Fortis Healthcare',
    period: 'Jun 2015 – Nov 2017',
    location: 'Hyderabad, India',
    cloud: 'On-Prem',
    compliance: 'HIPAA',
    color: '#00FFAA',
    summary: 'Built healthcare management applications using Python, Django, Flask, and SQL Server across multi-specialty hospital operations with HIPAA compliance.',
    highlights: [
      'Developed healthcare management applications using Python, Django, SQL Server, and JavaScript improving patient-record processing efficiency across multi-specialty hospital operations.',
      'Architected patient-registration and appointment-management modules using Python, Django, and MySQL improving outpatient scheduling efficiency throughout multi-specialty clinical coordination.',
      'Engineered backend healthcare applications using Python, Flask, and REST APIs supporting electronic patient-record processing across hospital administration and diagnostic workflows.',
      'Structured ingestion workflows consuming patient-registration records, insurance details, and laboratory reports enforcing HIPAA and PHI masking controls.',
      'Established reusable backend utility modules using Python and Django ORM managing enterprise API integrations for appointment scheduling, insurance verification, and diagnostic-report coordination.',
      'Automated build and deployment using Jenkins, Git, and Docker streamlining healthcare application maintenance and release consistency.',
    ],
    stack: ['Python', 'Django', 'Flask', 'REST APIs', 'SQL Server', 'MySQL',
      'Django ORM', 'Pandas', 'Jenkins', 'Git', 'Docker', 'HIPAA'],
  },
]
 
const STATS = [
  { label: 'Years Experience', value: '9+' },
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
              Senior GenAI and AI/ML Engineer with 9+ years of experience building enterprise AI platforms
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
                ['$ experience', '9+ years'],
                ['$ current', 'Quest Diagnostics (Mar 2025–)'],
                ['$ clouds', 'Azure · AWS · GCP'],
                ['$ llms', 'GPT-4o · LangChain · LangGraph'],
                ['$ domains', 'Healthcare · FinTech · Retail'],
                ['$ compliance', 'HIPAA · PCI-DSS · SOX · AML'],
                ['$ education', 'M.S. CS — Pace University 2024'],
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'rgba(13,19,32,0.7)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(30,45,64,0.8)', borderRadius: 4, padding: 20,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#F0F8FF', fontSize: 15 }}>
                  M.S. — Computer Science
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4B6480', marginTop: 4 }}>
                  Pace University, New York
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#00C2FF' }}>Jan 2023 – Dec 2024</div>
            </div>
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
              { label: 'Phone', val: '+1 (919) 504-4516', href: 'tel:+19195044516' },
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
 

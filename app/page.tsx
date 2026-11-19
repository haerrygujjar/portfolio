"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Blocks,
  BriefcaseBusiness,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";

const projects = [
  {
    name: "Invorto",
    category: "Voice AI",
    type: "VOICE PLATFORM",
    description:
      "A real-time voice platform for enterprise conversations, built around low-latency speech, model orchestration, and dependable telephony connections.",
    overview:
      "Invorto brings real-time voice conversations, AI model orchestration, and telephony together in one enterprise platform. The work focused on making conversations feel responsive while keeping the underlying voice path dependable.",
    focus: [
      "Real-time voice experiences built with Pipecat, LiveKit, and WebRTC.",
      "AI model orchestration using Amazon Bedrock.",
      "Reducing end-to-end response latency for natural conversations.",
    ],
    impact: "40% lower response latency",
    tags: ["Pipecat", "LiveKit", "WebRTC", "Amazon Bedrock"],
    icon: AudioLines,
    tone: "violet",
  },
  {
    name: "Lumen",
    category: "Agentic AI",
    type: "AGENT PLATFORM",
    description:
      "A practical agent layer for CRM work—bringing together lead operations, reporting, and customer context through orchestrated AI workflows.",
    overview:
      "Lumen gives CRM teams an agentic layer for everyday work. It brings lead operations, reporting, and customer context into coordinated workflows, helping teams move from asking questions to getting work done.",
    focus: [
      "Agent workflows shaped around CRM operations and customer context.",
      "Workflow orchestration with LangGraph and Python services.",
      "A production API layer built with FastAPI and Aurora.",
    ],
    impact: "100+ enterprise customers",
    tags: ["LangGraph", "Python", "FastAPI", "Aurora"],
    icon: Sparkles,
    tone: "blue",
  },
  {
    name: "Converse",
    category: "AI platforms",
    type: "NO-CODE CONVERSATION DESIGN",
    description:
      "A visual workspace that lets teams shape, launch, and refine customer conversations without waiting on a custom build for every change.",
    overview:
      "Converse is a no-code conversation design platform. It gives teams a visual place to shape and refine customer journeys, then put those experiences into production without a custom engineering cycle for every change.",
    focus: [
      "Visual conversation design for customer-facing teams.",
      "A Java and Spring AI platform connected to Bedrock.",
      "Redis-backed services supporting production conversation experiences.",
    ],
    impact: "1,000+ agents in production",
    tags: ["Java", "Spring AI", "Bedrock", "Redis"],
    icon: Blocks,
    tone: "orange",
  },
  {
    name: "Clinical data services",
    category: "Distributed systems",
    type: "HEALTHCARE INTEROPERABILITY",
    description:
      "Cloud services for clinical data exchange, designed to move healthcare records across systems with scale, resilience, and less storage overhead.",
    overview:
      "These cloud services connect healthcare systems so clinical records can move between them reliably. The work included interoperability flows for FHIR and HL7 data, with a focus on scaling exchange while reducing the storage footprint.",
    focus: [
      "Healthcare interoperability with FHIR and HL7 integrations.",
      "Event-driven services using Spring Boot and Kafka.",
      "GraphQL and Cassandra in a cloud-based clinical data platform.",
    ],
    impact: "Up to 60× less storage",
    tags: ["Spring Boot", "Kafka", "GraphQL", "Cassandra"],
    icon: BriefcaseBusiness,
    tone: "green",
  },
];

const roles = [
  {
    company: "LeadSquared",
    period: "2023 — 2026",
    title: "Staff Software Engineer",
    summary:
      "Grew from senior engineer to staff-level leadership while taking AI products from first architecture through enterprise rollout.",
    details: [
      "Set technical direction across voice AI, agentic workflows, and no-code conversational products.",
      "Led a 15+ person group across engineering, AI, QA, and product.",
      "Helped teams reduce infrastructure spend by 30% and raise AI response accuracy by 20%.",
    ],
    mark: "L",
    tone: "violet",
  },
  {
    company: "Modivcare",
    period: "2022 — 2023",
    title: "Software Engineer II",
    summary:
      "Built backend services for a nationwide healthcare transportation platform, with a focus on faster lookups and resilient async workflows.",
    details: [
      "Cut driver lookup time by about 45% with a Redis L2 cache.",
      "Used RabbitMQ and asynchronous messaging to improve responsiveness at scale.",
    ],
    mark: "M",
    tone: "blue",
  },
  {
    company: "OneTrust",
    period: "2022",
    title: "Senior Software Engineer",
    summary:
      "Delivered Java services and REST APIs for an enterprise risk management product.",
    details: [
      "Worked across Spring Boot, MySQL, and backend architecture reviews.",
      "Improved service reliability and release quality through targeted optimization.",
    ],
    mark: "O",
    tone: "orange",
  },
  {
    company: "GE HealthCare",
    period: "2019 — 2022",
    title: "Software Engineer",
    summary:
      "Worked on cloud-native services that move clinical information between healthcare systems.",
    details: [
      "Built FHIR and HL7 integrations with Spring Boot, Kafka, and GraphQL.",
      "Reworked storage strategies to reduce requirements by nearly 60×.",
    ],
    mark: "G",
    tone: "green",
  },
  {
    company: "Accenture",
    period: "2016 — 2019",
    title: "Associate Software Engineer",
    summary:
      "Started in banking technology, building Java services and automated test workflows for a mortgage platform.",
    details: [
      "Developed backend workflows for AIB’s mortgage platform.",
      "Introduced JUnit and Cucumber coverage to shorten regression cycles.",
    ],
    mark: "A",
    tone: "blue",
  },
];

const skillGroups = [
  {
    title: "AI & language models",
    icon: Sparkles,
    skills: [
      "LLMs",
      "Agentic AI",
      "Voice AI",
      "RAG",
      "LangGraph",
      "LangChain",
      "Prompt engineering",
      "AI agents",
      "Tool calling",
      "Semantic search",
      "Vector databases",
      "Amazon Bedrock",
      "OpenAI",
      "Claude",
      "Gemini",
    ],
  },
  {
    title: "Realtime & backend",
    icon: AudioLines,
    skills: [
      "Pipecat",
      "LiveKit",
      "WebRTC",
      "STT / TTS",
      "Streaming AI",
      "Telephony",
      "WebSocket",
      "Java 8–24",
      "Spring Boot",
      "Spring AI",
      "Micronaut",
      "Quarkus",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Data & infrastructure",
    icon: Blocks,
    skills: [
      "Kafka",
      "Kafka Streams",
      "Redis Streams",
      "RabbitMQ",
      "Event-driven architecture",
      "Async processing",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Cassandra",
      "Redis",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI / CD",
      "ELK Stack",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Engineering practice",
    icon: BriefcaseBusiness,
    skills: [
      "Python",
      "Go",
      "System design",
      "Distributed systems",
      "Scalable systems",
      "High availability",
      "Fault tolerance",
      "Performance optimization",
      "Low-latency systems",
      "Design patterns",
      "Agile / Scrum",
    ],
  },
];

const skillLogos: Record<string, string> = {
  "Amazon Bedrock": "amazonbedrock",
  OpenAI: "openai",
  Claude: "anthropic",
  Gemini: "googlegemini",
  LangChain: "langchain",
  LiveKit: "livekit",
  "Java 8–24": "openjdk",
  "Spring Boot": "spring",
  "Spring AI": "spring",
  FastAPI: "fastapi",
  Kafka: "apachekafka",
  "Kafka Streams": "apachekafka",
  "Redis Streams": "redis",
  RabbitMQ: "rabbitmq",
  GraphQL: "graphql",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Cassandra: "apachecassandra",
  Redis: "redis",
  AWS: "amazonaws",
  Azure: "microsoftazure",
  Docker: "docker",
  Kubernetes: "kubernetes",
  "CI / CD": "githubactions",
  Prometheus: "prometheus",
  Grafana: "grafana",
  Python: "python",
  Go: "go",
};

const filters = ["All work", "Voice AI", "Agentic AI", "AI platforms", "Distributed systems"];
const linkedinUrl = "https://www.linkedin.com/in/hirendra-gujjar-17a519aa";

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [activeRole, setActiveRole] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const projectDialog = useRef<HTMLDialogElement>(null);
  const visibleProjects =
    filter === "All work" ? projects : projects.filter((project) => project.category === filter);
  const role = roles[activeRole];

  useEffect(() => {
    const dialog = projectDialog.current;
    if (selectedProject && dialog && !dialog.open) dialog.showModal();
    if (!selectedProject && dialog?.open) dialog.close();
  }, [selectedProject]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#161513] text-[#f2f1f3]">
      <header className="site-header">
        <a href="#home" className="wordmark" aria-label="Hirendra Gujjar home">
          <span className="wordmark-mark">hg</span>
          <span>HIRENDRA GUJJAR</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:hirendragujjar@gmail.com">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <section id="home" className="hero-section section-wrap">
        <motion.div
          className="avatar-orbit"
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-label="Software engineer avatar"
        >
          <img src="/figma/avatar.png" alt="Illustrated developer avatar" />
        </motion.div>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55 }}
        >
          STAFF SOFTWARE ENGINEER <span>·</span> AI & DISTRIBUTED SYSTEMS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65 }}
        >
          I build <span className="gradient-text">AI systems</span> that hold up in production.
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
        >
          I’m Hirendra, a staff engineer focused on applied AI and distributed systems. I take ideas
          from architecture to launch, building the foundations that help teams ship reliable,
          high-scale products.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
        >
          <a href="#contact" className="button-primary">
            Get in touch <ArrowUpRight size={16} />
          </a>
          <a href="/Hiren_staff_engg_2026.pdf" className="button-quiet" download>
            Download résumé <ArrowDown size={15} />
          </a>
        </motion.div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://github.com/haerrygujjar" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href="mailto:hirendragujjar@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
          <span><MapPin size={14} /> Bengaluru, India</span>
        </div>
      </section>

      <section className="stack-section" aria-label="Technologies">
        <h2>EXPERIENCE WITH</h2>
        <div className="stack-logos">
          <img src="/figma/logo-1.svg" alt="JavaScript" />
          <img src="/figma/logo-2.svg" alt="Node.js" />
          <img src="/figma/logo-3.svg" alt="HTML5" />
          <img src="/figma/logo-4.svg" alt="CSS3" />
          <img src="/figma/logo-5.svg" alt="React" />
        </div>
      </section>

      <section id="work" className="section-wrap content-section">
        <SectionHeading number="01" label="SELECTED WORK" title="Projects" />
        <div className="filter-row" role="tablist" aria-label="Filter selected work">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? "filter-chip active" : "filter-chip"}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.article
                  layout
                  key={project.name}
                  className="project-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className={`project-art ${project.tone}`}>
                    <span className="art-index">0{projects.indexOf(project) + 1} / 04</span>
                    <div className="art-mark"><Icon size={34} strokeWidth={1.4} /></div>
                    <span className="art-label">{project.type}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-title-row">
                      <div>
                        <span className="project-category">{project.category}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <ArrowDownRight className="project-arrow" size={20} />
                    </div>
                    <p>{project.description}</p>
                    <div className="project-impact"><span />{project.impact}</div>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-links">
                      <button type="button" onClick={() => setSelectedProject(project)} aria-label={`Read more about ${project.name}`}>
                        More about this project <ArrowDownRight size={15} />
                      </button>
                      <span><MousePointerClick size={13} /> Select for details</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="experience" className="section-wrap content-section experience-section">
        <SectionHeading number="02" label="EXPERIENCE" title="Experience" />
        <div className="experience-layout">
          <div className="role-list" role="tablist" aria-label="Career experience">
            {roles.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeRole === index}
                className={activeRole === index ? "role-tab active" : "role-tab"}
                key={item.company}
                onClick={() => setActiveRole(index)}
              >
                <span className={`company-mark ${item.tone}`}>{item.mark}</span>
                <span className="role-tab-copy"><strong>{item.company}</strong><small>{item.period}</small></span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              key={role.company}
              className="role-detail"
              role="tabpanel"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="role-detail-top"><span>{role.company.toUpperCase()}</span><span>{role.period}</span></div>
              <h3>{role.title}</h3>
              <p className="role-summary">{role.summary}</p>
              <ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section id="skills" className="section-wrap content-section skills-section">
        <SectionHeading number="03" label="EXPERTISE" title="Tools & systems" />
        <div className="skill-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-group" key={group.title}>
                <h3><Icon size={17} />{group.title}</h3>
                <div className="tag-list skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      <span className="skill-mark" aria-hidden="true">
                        <span>✦</span>
                        {skillLogos[skill] && (
                          <img
                            src={`/icons/${skillLogos[skill]}.svg`}
                            alt=""
                            loading="lazy"
                            onError={(event) => event.currentTarget.remove()}
                          />
                        )}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="education-row">
          <div><span>EDUCATION</span><strong>B.Tech, Computer Science & Engineering</strong><small>Institute of Engineering & Technology, Lucknow · 2012–2015</small></div>
          <div><span>ALSO</span><strong>Diploma, Computer Science & Engineering</strong><small>Government Polytechnic, Bijnor · 2009–2012</small></div>
        </div>
      </section>

      <footer id="contact" className="section-wrap footer-section">
        <div className="footer-copy">
          <span className="section-label"><span>04</span> CONTACT</span>
          <h2>Let’s talk about<br /><span className="gradient-text">what you’re building.</span></h2>
          <p>Interested in AI platforms, distributed systems, or a tricky engineering problem? I’d be glad to hear about it.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hirendragujjar@gmail.com"><Mail size={16} /><span><small>EMAIL</small>hirendragujjar@gmail.com</span><ArrowUpRight size={16} /></a>
          <a href="tel:+917829666686"><span className="contact-icon">☎</span><span><small>PHONE</small>+91 78296 66686</span><ArrowUpRight size={16} /></a>
          <a href="https://github.com/haerrygujjar" target="_blank" rel="noreferrer"><Github size={16} /><span><small>GITHUB</small>github.com/haerrygujjar</span><ArrowUpRight size={16} /></a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={16} /><span><small>LINKEDIN</small>Connect with me</span><ArrowUpRight size={16} /></a>
        </div>
        <div className="footer-bottom"><a href="#home">HIRENDRA GUJJAR</a><span>BENGALURU, INDIA · BUILT WITH CARE</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      <dialog
        className="project-dialog"
        ref={projectDialog}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === projectDialog.current) setSelectedProject(null);
        }}
      >
        {selectedProject && (
          <article className="project-detail">
            <div className={`project-detail-art ${selectedProject.tone}`}>
              <span>{selectedProject.type}</span>
              {(() => {
                const Icon = selectedProject.icon;
                return <Icon size={42} strokeWidth={1.35} aria-hidden="true" />;
              })()}
              <span>{selectedProject.category}</span>
            </div>
            <div className="project-detail-content">
              <div className="project-detail-heading">
                <div>
                  <span className="project-category">PROJECT / {String(projects.indexOf(selectedProject) + 1).padStart(2, "0")}</span>
                  <h2 id="project-dialog-title">{selectedProject.name}</h2>
                </div>
                <button type="button" className="project-dialog-close" onClick={() => setSelectedProject(null)} aria-label="Close project details" autoFocus>
                  <X size={19} />
                </button>
              </div>
              <p className="project-detail-overview">{selectedProject.overview}</p>
              <div className="project-detail-impact"><span /><div><small>REPORTED OUTCOME</small><strong>{selectedProject.impact}</strong></div></div>
              <section className="project-detail-section" aria-labelledby="project-focus-title">
                <h3 id="project-focus-title">What it focuses on</h3>
                <ul>{selectedProject.focus.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
              </section>
              <section className="project-detail-section">
                <h3>Technology</h3>
                <div className="tag-list">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </section>
              <div className="project-detail-actions">
                <a href={`mailto:hirendragujjar@gmail.com?subject=${encodeURIComponent(`Let’s talk about ${selectedProject.name}`)}`}>Discuss a similar project <ArrowUpRight size={15} /></a>
                <a href="https://github.com/haerrygujjar" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </article>
        )}
      </dialog>
      <ChatWidget />
    </main>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const sessionId = useRef("");
  const messagesContainer = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; text: string }[]>([
    { role: "assistant", text: "Hey! I’m Hiren’s portfolio assistant. Ask me about his work, projects, or technical focus." },
  ]);

  useEffect(() => {
    const container = messagesContainer.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages, busy, showContactForm, contactStatus]);

  async function sendMessage(text = draft) {
    const question = text.trim();
    if (!question || busy) return;
    setDraft("");
    setMessages((current) => [...current, { role: "user", text: question }]);
    setBusy(true);
    if (!sessionId.current) sessionId.current = crypto.randomUUID();
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          session_id: sessionId.current,
          history: messages.slice(1).slice(-8).map(({ role, text: content }) => ({ role, content })),
        }),
      });
      const data = await response.json();
      if (data.needs_contact || !response.ok) {
        setShowContactForm(true);
        setContactMessage(question);
      }
      setMessages((current) => [...current, {
        role: "assistant",
        text: response.ok ? data.answer : "I’m having trouble connecting right now. Leave your question and contact details below and I’ll follow up, or email me directly.",
      }]);
    } catch {
      setShowContactForm(true);
      setContactMessage(question);
      setMessages((current) => [...current, { role: "assistant", text: "I’m having trouble connecting right now. Leave your question and contact details below and I’ll follow up, or email me directly." }]);
    } finally {
      setBusy(false);
    }
  }

  async function sendContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactStatus("");
    try {
      const response = await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          session_id: sessionId.current,
        }),
      });
      if (!response.ok) throw new Error("Message not saved");
      setContactStatus("Thanks, your message is with Hiren.");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    } catch {
      setContactStatus("Your message wasn’t saved. Email Hiren directly and he’ll get back to you.");
    }
  }

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.section
            className="chat-panel"
            role="dialog"
            aria-label="Chat with Hiren’s portfolio assistant"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <header className="chat-topbar">
              <span className="chat-avatar">hg</span>
              <div><strong>Chat with Hiren</strong><small>Personal portfolio assistant</small></div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={17} /></button>
            </header>
            <div ref={messagesContainer} className="chat-messages" aria-live="polite">
              {messages.map((message, index) => (
                <p key={`${index}-${message.role}`} className={`chat-bubble ${message.role}`}>{message.text}</p>
              ))}
              {busy && <p className="chat-bubble assistant chat-typing">Thinking<span>·</span><span>·</span><span>·</span></p>}
              {messages.length === 1 && <div className="chat-prompts">
                {["What does Hiren work on?", "Tell me about Invorto", "What’s his background?"] .map((prompt) => (
                  <button key={prompt} type="button" onClick={() => void sendMessage(prompt)}>{prompt}<ArrowUpRight size={12} /></button>
                ))}
              </div>}
              {showContactForm && <form className="chat-contact-form" onSubmit={sendContact}>
                <label>Name<input value={contactName} onChange={(event) => setContactName(event.target.value)} autoComplete="name" maxLength={80} required /></label>
                <label>Email<input type="email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} autoComplete="email" maxLength={254} required /></label>
                <label>Your message<textarea value={contactMessage} onChange={(event) => setContactMessage(event.target.value)} maxLength={1500} rows={3} required /></label>
                <label className="chat-consent"><input type="checkbox" required />I agree that Hiren can use these details to reply to me.</label>
                <button type="submit">Send to Hiren <ArrowUpRight size={14} /></button>
                {contactStatus && <p role="status">{contactStatus}{contactStatus.startsWith("Your message wasn’t saved") && <> <a href={`mailto:hirendragujjar@gmail.com?subject=${encodeURIComponent("Portfolio question")}&body=${encodeURIComponent(contactMessage)}`}>Email Hiren</a></>}</p>}
              </form>}
            </div>
            <form className="chat-compose" onSubmit={(event) => { event.preventDefault(); void sendMessage(); }}>
              <input value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={1000} placeholder="Ask me anything…" aria-label="Your message" />
              <button type="submit" disabled={!draft.trim() || busy} aria-label="Send message"><Send size={16} /></button>
            </form>
            <div className="chat-footnote">Messages are stored so Hiren can follow up.</div>
          </motion.section>
        )}
      </AnimatePresence>
      <button type="button" className={`chat-launcher${open ? " is-open" : ""}`} onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {open ? <X size={19} /> : <><MessageCircle size={18} /><span>Chat with me</span><i /></>}
      </button>
    </div>
  );
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-label"><span>{number}</span>{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

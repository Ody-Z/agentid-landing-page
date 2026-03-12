const bundleItems = [
  {
    title: "Phone number",
    label: "VOICE + SMS",
    description:
      "Provision a dedicated number for each agent and route calling, verification, and messaging through a single identity layer.",
  },
  {
    title: "Email inbox",
    label: "INBOUND OPS",
    description:
      "Spin up inboxes that agents can monitor, classify, and reply from without building separate auth and mailbox infrastructure.",
  },
  {
    title: "MPC wallet",
    label: "ASSET CONTROL",
    description:
      "Attach programmable wallets with approval policy, custody separation, and transaction visibility from day one.",
  },
];

const workflowSteps = [
  {
    index: "01",
    title: "Provision",
    description:
      "Create an agent identity bundle and issue an AGNT_KEY that maps phone, inbox, and wallet into one access layer.",
  },
  {
    index: "02",
    title: "Integrate",
    description:
      "Use any framework, runtime, or orchestration stack. AgentID stays outside your model layer and plugs into existing flows.",
  },
  {
    index: "03",
    title: "Operate",
    description:
      "Manage communications, treasury actions, and recovery controls from a unified surface built for autonomous systems.",
  },
];

const assuranceItems = [
  "Single-key access with separated underlying services",
  "Policy-ready wallet controls for agent transactions",
  "Inbox and phone provisioning designed for production workflows",
  "Built for teams that need auditability, not just demos",
];

export default function Home() {
  const formAction =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/your-form-id";
  const usingPlaceholder = formAction.includes("your-form-id");

  return (
    <main className="page-shell">
      <div className="page-grid" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="AgentID home">
          <span className="brand-mark" />
          <span>AgentID</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#bundle">Bundle</a>
          <a href="#workflow">Workflow</a>
          <a href="#security">Security</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a className="nav-cta" href="#waitlist">
          Join waitlist
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Framework-agnostic identity infrastructure for AI agents</p>
          <h1>
            One key.
            <br />
            One phone.
            <br />
            One inbox.
            <br />
            One wallet.
          </h1>
          <p className="hero-text">
            AgentID provisions a complete identity bundle for each agent: a phone
            number, an email inbox, and an MPC wallet, all accessed through a
            single <span>AGNT_KEY</span>.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#waitlist">
              Join waitlist
            </a>
            <p className="micro-copy">
              Built for agent teams that need trust, operational clarity, and a
              production-grade control plane.
            </p>
          </div>

          <div className="signal-strip">
            <span>Carrier-ready provisioning</span>
            <span>Programmable inbox operations</span>
            <span>MPC wallet security</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-core">
            <span className="core-label">AGNT_KEY</span>
          </div>
          <div className="orbit-card orbit-phone">
            <strong>Phone</strong>
            <span>Agent hotline</span>
          </div>
          <div className="orbit-card orbit-inbox">
            <strong>Inbox</strong>
            <span>Shared memory channel</span>
          </div>
          <div className="orbit-card orbit-wallet">
            <strong>Wallet</strong>
            <span>MPC transaction rail</span>
          </div>
          <div className="visual-ring ring-a" />
          <div className="visual-ring ring-b" />
          <div className="visual-glow" />
        </div>
      </section>

      <section className="trust-band">
        <p>Identity primitives for autonomous systems that need to look legitimate from the first interaction.</p>
        <div>
          <span>Secure-by-design</span>
          <span>Operationally clean</span>
          <span>Built for real deployment</span>
        </div>
      </section>

      <section className="bundle-section" id="bundle">
        <div className="section-heading">
          <p className="eyebrow">Identity bundle</p>
          <h2>Provision once. Operate everywhere.</h2>
          <p>
            AgentID turns fragmented communications and wallet plumbing into one
            deterministic developer surface.
          </p>
        </div>

        <div className="bundle-grid">
          {bundleItems.map((item) => (
            <article className="bundle-card" key={item.title}>
              <span className="card-tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}

          <article className="bundle-card bundle-card-accent">
            <span className="card-tag">CONTROL LAYER</span>
            <h3>One abstraction, not three integrations</h3>
            <p>
              Keep your agent stack framework-agnostic while centralizing identity,
              credentials, and operator controls around a single access primitive.
            </p>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>Designed for advanced teams, not fragile demos.</h2>
        </div>

        <div className="workflow-grid">
          {workflowSteps.map((step) => (
            <article className="workflow-card" key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="security-section" id="security">
        <div className="security-panel">
          <div className="security-copy">
            <p className="eyebrow">Safety and legitimacy</p>
            <h2>Built to make agent operations feel credible.</h2>
            <p>
              The point is not just capability. The point is giving every agent a
              coherent identity surface that can communicate, receive work, and
              hold value without ad hoc credential sprawl.
            </p>
          </div>

          <ul className="assurance-list">
            {assuranceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="waitlist-section" id="waitlist">
        <div className="waitlist-copy">
          <p className="eyebrow">Join waitlist</p>
          <h2>Get early access to AgentID.</h2>
          <p>
            Leave your email and we’ll reach out when onboarding opens for teams
            building serious agent products.
          </p>
        </div>

        <form
          className="waitlist-form"
          action={formAction}
          method="POST"
        >
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Ada Lovelace" />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="team@company.com"
              required
            />
          </label>

          <label className="field">
            <span>What are you building?</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Autonomous support agent, treasury agent, workflow copilot..."
            />
          </label>

          <input type="hidden" name="_subject" value="AgentID waitlist submission" />
          <button className="primary-button submit-button" type="submit">
            Join waitlist
          </button>

          <p className="form-note">
            {usingPlaceholder
              ? "Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment before launch."
              : "Powered by Formspree."}
          </p>
        </form>
      </section>
    </main>
  );
}

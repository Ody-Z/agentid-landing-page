const bundleItems = [
  {
    title: "SMS + phone",
    label: "TEXT API",
    description:
      "Give your agent its own phone number so it can text people and receive replies.",
  },
  {
    title: "Email inbox",
    label: "EMAIL API",
    description:
      "Give your agent an inbox so it can send email, read replies, and stay in the loop.",
  },
  {
    title: "Crypto wallet",
    label: "WALLET API",
    description:
      "Give your agent a wallet so it can hold funds and make onchain payments when needed.",
  },
];

const workflowSteps = [
  {
    index: "01",
    title: "Create",
    description:
      "Create one AGNT_KEY and get email, SMS, and wallet access for your agent.",
  },
  {
    index: "02",
    title: "Connect",
    description:
      "Plug it into your app or agent framework instead of wiring together three different tools.",
  },
  {
    index: "03",
    title: "Run",
    description:
      "Your agent can email people, text people, and use a wallet from one simple setup.",
  },
];

const assuranceItems = [
  "One key for email, SMS, and wallet access",
  "Each agent gets its own inbox, number, and wallet",
  "Simple enough for people just playing around with agents",
  "Ready to grow into a real product when you need it",
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
          <p className="eyebrow">Email, SMS, and wallet APIs for AI agents</p>
          <h1>
            Give your agent
            <br />
            email, SMS,
            <br />
            and a crypto
            <br />
            wallet.
          </h1>
          <p className="hero-text">
            AgentID gives your agent the basics a human already has: email like
            Gmail, texting like iMessage, and a crypto wallet like Coinbase. You
            connect all three with one <span>AGNT_KEY</span>.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#waitlist">
              Join waitlist
            </a>
            <p className="micro-copy">
              Built for anyone experimenting with agents, from side projects to
              production apps.
            </p>
          </div>

          <div className="signal-strip">
            <span>Email API</span>
            <span>SMS API</span>
            <span>Wallet API</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-core">
            <svg
              className="core-emblem"
              viewBox="0 0 120 88"
              role="presentation"
              focusable="false"
            >
              <g transform="rotate(-16 40 44)">
                <circle
                  cx="30"
                  cy="44"
                  r="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                />
                <circle cx="30" cy="44" r="6" fill="#13201c" />
                <rect x="46" y="38" width="48" height="12" rx="6" fill="currentColor" />
                <rect x="68" y="50" width="10" height="18" rx="2" fill="currentColor" />
                <rect x="84" y="50" width="10" height="24" rx="2" fill="currentColor" />
                <rect x="90" y="38" width="10" height="12" rx="2" fill="currentColor" />
              </g>
            </svg>
            <span className="core-label">AGNT_KEY</span>
          </div>
          <div className="orbit-card orbit-phone">
            <strong>SMS</strong>
            <span>Texting for your agent</span>
          </div>
          <div className="orbit-card orbit-inbox">
            <strong>Email</strong>
            <span>Inbox for your agent</span>
          </div>
          <div className="orbit-card orbit-wallet">
            <strong>Wallet</strong>
            <span>Crypto wallet access</span>
          </div>
          <div className="visual-ring ring-a" />
          <div className="visual-ring ring-b" />
          <div className="visual-glow" />
        </div>
      </section>

      <section className="trust-band">
        <p>Everything your agent needs to message people and hold money, behind one simple API.</p>
        <div>
          <span>Email</span>
          <span>SMS</span>
          <span>Wallet</span>
        </div>
      </section>

      <section className="bundle-section" id="bundle">
        <div className="section-heading">
          <p className="eyebrow">What you get</p>
          <h2>Three basics, one API.</h2>
          <p>
            Instead of stitching together email, phone, and wallet tools yourself,
            AgentID gives you one simple place to start.
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
            <span className="card-tag">SIMPLE IDEA</span>
            <h3>Like Gmail, iMessage, and Coinbase for agents</h3>
            <p>
              Humans get an inbox, a phone, and a wallet. AgentID gives your
              agents the same basics through one API key.
            </p>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Easy to understand. Easy to plug in.</h2>
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
            <p className="eyebrow">Why this matters</p>
            <h2>The basic identity stack for an agent.</h2>
            <p>
              If humans use Gmail, iMessage, and Coinbase, agents need something
              similar. AgentID puts those building blocks behind one simple API.
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
            Leave your email and we’ll reach out when AgentID is ready for people
            building and testing agents.
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
              placeholder="Customer support agent, shopping agent, research assistant..."
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

import type React from "react";
import { useState } from "react";

interface SignupWidgetProps {
  variant?: "inline" | "card";
}

const SignupWidget: React.FC<SignupWidgetProps> = ({ variant = "inline" }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    // Simulate async request – this is where an API call would go.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const containerClass =
    variant === "card" ? "nv-signup-card nv-glass-surface" : "nv-signup-inline";

  return (
    <div className={containerClass}>
      <form className="nv-signup-form" onSubmit={handleSubmit}>
        {!submitted && (
          <div className="nv-signup-header">
            <div className="nv-signup-topbar" />
            <div className="nv-signup-heading">
              <h2>Start your next software project</h2>
              <p>
                Tell us what you need and we&apos;ll design and build the right software or website
                on time for your business.
              </p>
            </div>
          </div>
        )}

        {submitted ? (
          <div className="nv-signup-success">
            <h3>
              Thank you{ name ? `, ${name}` : "!"}
            </h3>
            <p>
              We&apos;ve received your request. We&apos;ll get back to you at{" "}
              <strong>{email}</strong> with a detailed proposal tailored to your project.
            </p>
          </div>
        ) : (
          <>
            <div className="nv-signup-grid">
              <div className="nv-field">
                <label htmlFor="nv-name">Your name</label>
                <input
                  id="nv-name"
                  type="text"
                  placeholder="Alex from Fintech Bank"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="nv-field">
                <label htmlFor="nv-service">Service you&apos;re interested in</label>
                <select
                  id="nv-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Select a service</option>
                  <option value="custom-web-platforms">Custom web platforms</option>
                  <option value="staff-augmentation">Staff augmentation</option>
                  <option value="ongoing-support">Ongoing support</option>
                  <option value="banking-financial">Banking &amp; financial services</option>
                  <option value="hotels-hospitality">Hotels &amp; hospitality</option>
                  <option value="import-export-logistics">Import, export &amp; logistics</option>
                  <option value="hospitals-clinics">Hospitals &amp; clinics</option>
                  <option value="pharma-wholesale">Pharmaceutical wholesalers</option>
                  <option value="other">Other / not sure yet</option>
                </select>
              </div>
            </div>

            <div className="nv-field">
              <label htmlFor="nv-email">Work email</label>
              <input
                id="nv-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="nv-actions">
              <button
                type="submit"
                className="nv-btn nv-btn-primary"
                disabled={loading || !email.trim()}
              >
                {loading ? "Submitting..." : "Request a proposal"}
              </button>
              <p className="nv-helper-text">No spam. Just one clear, tailored response.</p>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SignupWidget;


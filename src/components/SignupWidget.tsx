import { useState } from "react";
import type { FormEvent } from "react";
import { serviceOptions } from "../data/services";

interface SignupWidgetProps {
  variant?: "inline" | "card";
}

const SignupWidget = ({ variant = "inline" }: SignupWidgetProps) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detailsError, setDetailsError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (!details.trim()) {
      setDetailsError("Tell us briefly what you want us to design or build.");
      return;
    }

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
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
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

            <div className="nv-field">
              <label htmlFor="nv-details">
                Briefly describe what you want us to build{" "}
                <span className="nv-optional">(up to 400 words)</span>
              </label>
              <textarea
                id="nv-details"
                rows={4}
                maxLength={400 * 6} // simple upper guard, UI guidance is 400 words
                placeholder="For example: a booking website for our hotel with online payments and an admin dashboard for staff..."
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                  if (detailsError && e.target.value.trim()) {
                    setDetailsError("");
                  }
                }}
              />
              {detailsError ? <p className="nv-field-error">{detailsError}</p> : null}
            </div>

            <div className="nv-actions">
              <button
                type="submit"
                className="nv-btn nv-btn-primary"
                disabled={loading || !email.trim()}
              >
                {loading ? "Submitting..." : "Request   Proposal"}
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


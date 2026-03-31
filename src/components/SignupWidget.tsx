import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { serviceOptions } from "../data/services";

interface SignupWidgetProps {
  variant?: "inline" | "card";
}

const MIN_WORDS = 100;
const MAX_WORDS = 500;

const countWords = (text: string) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const SignupWidget = ({ variant = "inline" }: SignupWidgetProps) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  const wordCount = countWords(details);
  const emailValid = isValidEmail(email.trim());
  const detailsValid = wordCount >= MIN_WORDS && wordCount <= MAX_WORDS;
  const formReady = emailValid && detailsValid;

  useEffect(() => {
    if (!submitted) return;
    (document.activeElement as HTMLElement)?.blur();

    const timer = setTimeout(() => {
      const el = widgetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset - 80;
      window.scrollTo({ top: Math.max(0, absoluteTop), behavior: "smooth" });
    }, 400);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      return;
    }

    if (!emailValid) {
      setEmailError("Please enter a valid email address (e.g. you@company.com).");
      return;
    }

    if (!details.trim()) {
      setDetailsError("Tell us briefly what you want us to design or build.");
      return;
    }

    if (wordCount < MIN_WORDS) {
      setDetailsError(`Please write at least ${MIN_WORDS} words (currently ${wordCount}).`);
      return;
    }

    if (wordCount > MAX_WORDS) {
      setDetailsError(`Please keep it under ${MAX_WORDS} words (currently ${wordCount}).`);
      return;
    }

    setLoading(true);

    (document.activeElement as HTMLElement)?.blur();
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const containerClass =
    variant === "card" ? "nv-signup-card nv-glass-surface" : "nv-signup-inline";

  return (
    <div ref={widgetRef} className={containerClass}>
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
              Thank you{name ? `, ${name}` : "!"}
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
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
              />
              {emailError ? <p className="nv-field-error">{emailError}</p> : null}
            </div>

            <div className="nv-field">
              <label htmlFor="nv-details">
                Describe what you want us to build{" "}
                <span className="nv-optional">({MIN_WORDS}–{MAX_WORDS} words)</span>
              </label>
              <textarea
                id="nv-details"
                rows={5}
                placeholder="For example: a booking website for our hotel with online payments and an admin dashboard for staff..."
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                  if (detailsError) setDetailsError("");
                }}
              />
              <div className="nv-field-meta">
                <span className={`nv-word-count${detailsValid ? " nv-word-count--ok" : ""}${wordCount > MAX_WORDS ? " nv-word-count--over" : ""}`}>
                  {wordCount} / {MIN_WORDS}–{MAX_WORDS} words
                </span>
                {detailsError ? <span className="nv-field-error">{detailsError}</span> : null}
              </div>
            </div>

            <div className="nv-actions">
              <button
                type="submit"
                className="nv-btn nv-btn-primary"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Proposal"}
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

import type React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <main className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>Privacy Policy</h2>
          <p>
            This page explains how Supernova Technologies collects, uses, and protects information
            when you visit our website or work with us on a software project.
          </p>
        </div>

        <section className="nv-section">
          <div className="nv-features-grid">
            <article className="nv-feature-card">
              <h3>Information we collect</h3>
              <p>
                When you contact us through forms or email, we collect the details you provide, such
                as your name, company name, email address, phone number, and a short description of
                your project. For existing clients, we may also store project documentation and
                technical details that are necessary to deliver and maintain your software.
              </p>
            </article>

            <article className="nv-feature-card">
              <h3>How we use your information</h3>
              <p>
                We use your information to respond to your requests, prepare proposals, deliver
                software projects, provide support, and communicate about improvements or important
                changes. We do not sell your data to third parties. We may share limited information
                with trusted partners only when it is required to deliver hosting, infrastructure,
                or similar services for your project.
              </p>
            </article>

            <article className="nv-feature-card">
              <h3>Data security and retention</h3>
              <p>
                We take reasonable technical and organizational measures to protect the information
                we handle, including access control and secure hosting. We keep your data only as
                long as it is needed for the purposes above or as required by law. If you end a
                project with us, you can ask us to remove non-essential copies of your data from our
                systems.
              </p>
            </article>

            <article className="nv-feature-card">
              <h3>Your choices</h3>
              <p>
                You can contact us at any time if you want to review, update, or delete information
                you have shared with us, or if you have questions about how your data is used. When
                we update this privacy policy, we will change the date on this page so you know when
                the latest version took effect.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;


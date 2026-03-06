import type React from "react";
import awashBankLogo from "../assets/awash-bank-logo.svg";
import ethiopianAirlinesLogo from "../assets/ethiopian-airlines-logo.svg";
import skylightHotelLogo from "../assets/skylight-hotel-logo.svg";

const testimonials = [
  {
    id: 1,
    logo: awashBankLogo,
    company: "Awash Bank (Ethiopia)",
    name: "M. Bekele",
    role: "Digital Channels Director",
    quote:
      "Supernova Technologies delivered our new corporate banking portal on time and with zero downtime at launch. Their team understood both the technical and regulatory side of Ethiopian banking.",
  },
  {
    id: 2,
    logo: skylightHotelLogo,
    company: "Skylight Hotel Addis",
    name: "S. Tesfaye",
    role: "General Manager",
    quote:
      "Our new booking and property management tools have reduced manual work for the front desk and reservations teams. Guests are checking in faster and we have better visibility across the hotel.",
  },
  {
    id: 3,
    logo: ethiopianAirlinesLogo,
    company: "Ethiopian Hospitality Group",
    name: "H. Alemu",
    role: "Group IT Lead",
    quote:
      "Working with Supernova feels like working with an internal product team. Communication is clear, releases are predictable, and they are quick to support new ideas from our business units.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>Trusted by leading Ethiopian brands</h2>
          <p>
            Banks, hotels, and hospitality groups in Ethiopia rely on Supernova Technologies to run
            their day-to-day operations.
          </p>
        </div>

        <div className="nv-testimonials-grid">
          {testimonials.map((item) => (
            <figure key={item.id} className="nv-testimonial-card nv-glass-surface">
              <div className="nv-testimonial-header">
                <div className="nv-avatar">
                  <img src={item.logo} alt={`${item.company} logo`} />
                </div>
                <div>
                  <figcaption className="nv-testimonial-name">{item.name}</figcaption>
                  <div className="nv-testimonial-meta">
                    <span>{item.role}</span>
                    <span> · </span>
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
              <blockquote className="nv-testimonial-quote">“{item.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import { testimonials } from "../data/testimonials";

const Testimonials = () => {
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


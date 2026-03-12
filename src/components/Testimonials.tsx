import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="nv-section">
      <div className="nv-container">
        <div className="nv-section-header">
          <h2>What our clients say</h2>
          <p>
            Hospitals, hotels, wholesalers, and growing businesses across Ethiopia trust Supernova
            Technologies to build and run the software behind their daily operations.
          </p>
        </div>

        <div className="nv-testimonials-grid">
          {testimonials.map((item) => (
            <figure key={item.id} className="nv-testimonial-card nv-glass-surface">
              <div className="nv-testimonial-header">
                <div className="nv-avatar">
                  <span className="nv-avatar-initials">{item.initials}</span>
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
              <blockquote className="nv-testimonial-quote">"{item.quote}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

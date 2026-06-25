import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Administrator</h4>
                <h5>Glow & Spa Salon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Manage and maintain the brand's digital presence using WordPress, Astra MCP, and professional hosting services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Content Creator</h4>
                <h5>Freelance Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Conceptualize and develop high-impact commercial video advertisements for local brands using AI tools to enhance visual storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Designing and deploying responsive websites using modern web hosting platforms and continuously upskilling in Python and AI-driven development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

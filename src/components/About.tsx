import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">Hi, I'm Rohan. 👋</p>
        <p className="para">New Jersey based, freshly graduated from Stevens, and always in the middle of building something.</p>
        <p className="para para-sub">I started with energy forecasting and computer vision, got pulled into the world of LLMs and agentic systems, and haven't looked back since. Along the way I've shipped open source tools, published research, and built at hackathons across NY Tech Week.</p>
        <p className="para para-cta">Open to AI/ML and Data Engineering roles in the US.</p>
      </div>
    </div>
  );
};

export default About;

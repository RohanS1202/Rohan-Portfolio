import "./styles/Experience.css";
import { MdArrowOutward } from "react-icons/md";

const experience = [
  {
    role: "Data Analyst Intern",
    company: "SRP BizExcell Pvt. Ltd.",
    duration: "Sep 2023 - Aug 2024",
    points: [
      "Designed and automated reporting pipelines using Python and SQL, reducing manual reporting time by ~40%",
      "Built interactive dashboards to surface KPIs for business stakeholders, improving decision turnaround",
      "Conducted data cleaning and exploratory analysis on business datasets to support strategic planning",
    ],
    
  },
];

const hackathons = [
  {
    emoji: "🏆",
    title: "4th Place - Code for Climate Hackathon",
    event: "NY Tech Week 2026 (60+ teams)",
    project: "TideMemory",
  },
  {
    emoji: "🤖",
    title: "Participant - Agents League Hackathon 2026",
    event: "June 4–14, 2026",
    project: "RAGprobe Studio"
  },
  {
    emoji: "⚡",
    title: "Builder — NY Tech Week 2026",
    event: "Phinite AI Graph Studio + GMI Cloud",
    project: "Strategic Doc Red-Teamer",
  },
];

type Publication = {
  title: string;
  venue: string;
  description: string;
  link?: string;
};

const publications: Publication[] = [
  {
    title: "Gridwise: A Dynamic Dashboard for the Visualization and Monitoring of Renewable Energy Sources",
    venue: "ICHCSC 2024 — Human-Centric Smart Computing (Smart Innovation, Systems and Technologies, Vol. 440)",
    description:
      "Combines time series analysis and machine learning to forecast solar and wind energy generation, with a dynamic dashboard and threshold alerts for real-time monitoring.",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-3420-0_21",
  },
  {
    title: "Vehicle Detection with Number Plate Recognition",
    venue: "ICNDA 2024 — 2nd International Conference on Nonlinear Dynamics and Applications, Vol. 3",
    description:
      "Presents VDNPRS, integrating computer vision and AI for real-time vehicle detection and license plate recognition to improve traffic management, road safety, and security.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-69146-1_19",
  },
];

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <div className="experience-container section-container">
        <h2>
          Experience & <span>Achievements</span>
        </h2>

        <div className="experience-block">
          <span className="experience-block-label">Work Experience</span>
          {experience.map((exp) => (
            <div className="experience-card" key={exp.role}>
              <div className="experience-card-header">
                <div>
                  <h4>{exp.role}</h4>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <div className="experience-points">
                {exp.points.map((point, i) => (
                  <div className="experience-point" key={i}>
                    <span className="experience-dot"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-block">
          <span className="experience-block-label">Hackathon Wins</span>
          <div className="hackathon-grid">
            {hackathons.map((h) => (
              <div className="hackathon-card" key={h.title}>
                <div className="hackathon-emoji">{h.emoji}</div>
                <h4>{h.title}</h4>
                <p className="hackathon-event">{h.event}</p>
                <p className="hackathon-project">Project: {h.project}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-block">
          <span className="experience-block-label">Publications</span>
          <div className="publication-list">
            {publications.map((pub, i) => (
              <div className="publication-card" key={i}>
                <h4>{pub.title}</h4>
                <p className="publication-venue">{pub.venue}</p>
                <p className="publication-description">{pub.description}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                    data-cursor="disable"
                  >
                    View Paper <MdArrowOutward />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

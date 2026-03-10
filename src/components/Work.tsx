import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Adversarial Robustness in Deep Learning",
    category: "Machine Learning Research",
    tools: "Python, PyTorch, CNNs, CIFAR-10",
    description:
      "Researched adversarial ML vulnerabilities in deep learning models. Implemented Min-Max adversarial training, improving model robustness by 3× under attack while maintaining strong clean-data accuracy. Evaluated multiple defense strategies balancing accuracy, efficiency, and security.",
    highlights: ["3× robustness improvement", "Min-Max optimization", "Multiple defense strategies", "CIFAR-10 benchmark"],
    github: "",
  },
  {
    title: "Vehicle Detection & Number Plate Recognition",
    category: "Computer Vision",
    tools: "Python, YOLOv8, EasyOCR, OpenCV",
    description:
      "Built a real-time computer vision system for vehicle detection and license plate recognition with 92% accuracy across diverse environments. Processed 1,500+ image features to detect traffic violations and reduced response time by 40% with automated alert mechanisms.",
    highlights: ["92% detection accuracy", "1,500+ image features", "40% faster response time", "Real-time processing"],
    github: "https://github.com/RohanS1202/Vehicle-Detection-and-Number-Plate-Recognition-System",
  },
  {
    title: "Gridwise – Renewable Energy Monitoring Dashboard",
    category: "Data Analytics & Forecasting",
    tools: "Python, Power BI, Forecasting Models",
    description:
      "Built an interactive analytics dashboard integrating data from 50+ energy sources and smart grid systems. Implemented forecasting models with 88% accuracy to predict energy demand and improve resource allocation by 20%, with cybersecurity compliance metrics.",
    highlights: ["50+ energy sources", "88% forecast accuracy", "20% better resource allocation", "Smart grid integration"],
    github: "https://github.com/RohanS1202/Gridwise",
  },
  {
    title: "Crop Price Forecasting System",
    category: "Predictive Modeling",
    tools: "Python, Scikit-learn, Time Series Forecasting",
    description:
      "Developed an ML model using 8+ years of agricultural data (weather, soil, market trends) to forecast crop prices with 91% accuracy. Helped 100+ farmers make data-driven crop decisions, improving profitability by 25%.",
    highlights: ["91% forecast accuracy", "8+ years of data", "100+ farmers impacted", "25% profitability increase"],
    github: "https://github.com/RohanS1202/Crop-Price-Prediction",
  },
  {
    title: "NYC 311 — Response Time & SLA Risk Analysis",
    category: "Data Engineering & Analytics",
    tools: "Python, DuckDB, Pandas, Streamlit, Altair, Tableau, PyArrow, Parquet, NYC Open Data API",
    description:
      "End-to-end analytics system for NYC's 311 dataset processing 13M+ service requests over 5 years. Achieved ~90% faster queries using DuckDB, deployed a Streamlit dashboard with sub-second interactivity, and computed SLA breach flags across boroughs with automated Tableau exports.",
    highlights: ["13M+ service requests", "~90% faster queries", "Sub-second dashboard", "5 years of data"],
    github: "https://github.com/RohanS1202/311-Service-Requests-from-2010-to-December-2024",
    github: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="carousel-github" data-cursor="disable">
                            <FaGithub /> View on GitHub <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-highlights">
                      {project.highlights.map((h, i) => (
                        <div className="highlight-item" key={i}>
                          <span className="highlight-dot"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

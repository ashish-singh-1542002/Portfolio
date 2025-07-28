import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap"; // Importing Bootstrap Components
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircle = ({ skill, value }) => {
    return (
        <div style={{ width: "120px", margin: "20px", textAlign: "center" }}>
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: getProgressColor(value),
              trailColor: "#2a2a2a",
              textSize: "20px",
            })}
          />
          <h5 style={{ marginTop: "10px", color: "#fff" }}>{skill}</h5>
        </div>
    );
};

// Function to determine color based on progress value
const getProgressColor = (value) => {
    if (value >= 80) return "#00ff00";  // Green for high progress
    if (value >= 60) return "#ffa500";  // Orange for mid-level progress
    return "#ff0000";  // Red for low progress
};

const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <section className="Skills" id="skills" style={{ position: "relative" }}>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>These are my technical skills and expertise levels.</p>
                            
                            {/* Horizontal Slider for Skills */}
                            <Carousel 
                                responsive={responsive} 
                                infinite={false} 
                                className="owl-carousel owl-theme skill-slider"
                                centerMode={true} 
                            >
                                <SkillCircle skill="JavaScript" value={80} />
                                <SkillCircle skill="ReactJS" value={70} />
                                <SkillCircle skill="NodeJS" value={70} />
                                <SkillCircle skill="ExpressJS" value={65} />
                                <SkillCircle skill="MongoDB" value={60} />
                                <SkillCircle skill="Machine Learning" value={70} />
                            </Carousel>  
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Skills;

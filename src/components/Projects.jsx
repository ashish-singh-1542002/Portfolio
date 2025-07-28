import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time-Code-Editor",
      description: "Real-Time-Code-Editor enables users to see each other's code and make changes instantly, ensuring synchronized updates and improved teamwork.",
      imgUrl: projImg1,
      link: "https://realtime-code-editor-roan.vercel.app/"
    },
    {
      title: "Whatsapp Chat Analyzer",
      description: "Developed a data visualization tool in Python using Plotly and Altair charts to illustrate trends in WhatsApp chat data.",
      imgUrl: projImg2,
      link: "https://threappdgit-cc5eu3ft8ydufveurlrkfh.streamlit.app/"
    },
    {
      title: "SMS/Email Spam Detector",
      description: "Developed a Streamlit-based spam detection app using NLTK and machine learning models with 98% accuracy.",
      imgUrl: projImg3,
      link: "https://v4z2s4nt74l8eywm9kvwkm.streamlit.app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the demo projects I’ve created, showcasing my skills in web development, AI, and machine learning. Each project reflects my passion for innovation and problem-solving. Feel free to explore them and see my work in action.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      {/* You can remove the below two if not needed */}
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coming Soon</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>More projects coming soon...</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for additional features and apps.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

export default Projects;

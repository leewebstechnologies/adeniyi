import "./projects.css";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../projectcard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp.png";
import projImg1 from "../../assets/img/3.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Tesla-Clone",
      description: "Web Developmet",
      imgUrl: projImg1,
    },
    {
      title: "CubeVest",
      description: "UI/UX Design",
      imgUrl: projImg2,
    },
    {
      title: "SmartBuy",
      description: "Graphic Design",
      imgUrl: projImg3,
    },
    {
      title: "Website",
      description: "Web Developmet",
      imgUrl: projImg1,
    },
    {
      title: "CubeVest",
      description: "UI/UX Design",
      imgUrl: projImg2,
    },
    {
      title: "SmartBuy",
      description: "Graphic Design",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I design and develop services for customers of all sizes,
                    specialising in creating stylish, modern websites, graphic
                    designs and online stores.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Second dolor sit amet consectetur adipisicing elit.
                          Cumque quam, quod neque provident velit, rem explicabo
                          excepturi id illo molestiae blanditiis, eligendi dicta
                          officiis asperiores delectus quasi inventore debitis
                          quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          third ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
      <h1>Tinder Clone</h1>
    </section>
  );
};

export default Projects;

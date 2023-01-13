import "./projects.css";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../projectcard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp.png";
import projImg1 from "../../assets/img/3.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";

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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sit, similique eaque corporis ipsum ex excepturi sequi enim iste
              aliquid praesentium molestiae a repellat fugit autem quas
              temporibus accusamus eius.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-img-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;

import { Col, Container, Row, Tab } from "react-bootstrap";
import "./projects.css";

const Projects = () => {
  const projects = [
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
              <Nav variant="pills" defaultActiveKey="/home">
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
                        
                    </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

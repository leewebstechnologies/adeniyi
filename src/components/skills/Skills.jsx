import "./skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>We can help you build better websites using React Js and its
                ecosystem.<br></br> We can also make fantastic graphic designs using Adobe Photoshop and Illustrator.</p>
                </div>
                </Col>
            </Row>
        </Container>

    </section>
  );
};

export default Skills;

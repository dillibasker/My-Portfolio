import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';


export const Projects = () => {

  

  const projects = [
    {
      title: "HealthCare Apllication  ",
      description: "Blockchain Project",
      imgUrl: projImg1,
      link:"https://healthcare-ten-xi.vercel.app/"
    },
    {
      title: "Lottory Application",
      description: "Blockchain Project",
      imgUrl: projImg2,
      link:"https://lattory.vercel.app/"
    },
    {
      title: "IPFS Hash ",
      description: "Blockchain Project",
      imgUrl: projImg3,
      link:"https://ipfs-hash.vercel.app/"
    },
    {
      title: "Voting Application",
      description: "Blockchain Project",
      imgUrl: projImg4,
      link:"https://voting-web3-rho.vercel.app/"
    },
    {
      title: "MarketPlaceApplication",
      description: "Blockchain Project",
      imgUrl: projImg5,
      link:"https://market-place-plum.vercel.app/"
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <div className="projects-container">
                <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-list">
            <div className="project-card">
                <p className="project-title">Decentralized Healthcare System</p>
                <p className="project-desc">A blockchain-powered platform ensuring secure and tamper-proof medical records.</p>
            </div>
            <div className="project-card">
                <p className="project-title">Blockchain Voting System</p>
                <p className="project-desc">A transparent and secure voting application using smart contracts.</p>
            </div>
            <div className="project-card">
                <p className="project-title">Decentralized Lottery System</p>
                <p className="project-desc">A fair and verifiable lottery system built on Ethereum.</p>
            </div>
            <div className="project-card">
                <p className="project-title">IPFS-Based File Storage</p>
                <p className="project-desc">A decentralized solution for storing and retrieving files securely using IPFS.</p>
            </div>
            <div className="project-card">
                <p className="project-title">NFT Marketplace</p>
                <p className="project-desc">A full-stack marketplace for minting, buying, and selling NFTs.</p>
            </div>
        </div>
    </div>
            
        </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
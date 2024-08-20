import { Container, Row, Col } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7}>
                        <h3 className='aboutmetext'>Sobre <span>Mim</span></h3>
                        <p className='aboutdetails'>
                            Sou graduando no tecnólogo do IFRN e atuo como desenvolvedor full stack na própria instituição.
                        </p>
                        <p className='aboutdetails'>
                            Além disso, possuo experiência profissional em banco de dados, manutenção e redes.
                        </p>
                        <p className='aboutdetails'>
                            Tenho 27 anos e sou apaixonado por conhecimento. Me encontrei na área de desenvolvimento de sistemas, pois gosto de desvendar desafios e tenho uma curiosidade que me move a aprender constantemente.
                        </p>
                        <p className='aboutdetails'>
                            Acho fascinante o avanço da tecnologia e as novidades que surgem diariamente, então, me sinto no dever de participar e colaborar com esses avanços.
                        </p>
                        <p className='aboutdetails'>
                            Estou à procura de uma oportunidade para aprender, desenvolver e contribuir com o crescimento da equipe, colocando em prática o que estou estudando todos os dias.
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={100}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id}>
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="img-hero">
                            <div className="rotate-text">
                                <div className="text"></div>
                                <span><i></i></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutpage;

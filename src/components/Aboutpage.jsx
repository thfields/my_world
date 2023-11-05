import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                    
                <Row className='textbackground'>
                    
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mim</span></h3>
                        <p className='aboutdetails'> 
                        <p>Sou estudante, cursando a graduação de programação no IFRN, <br/>
                            tenho 26 anos e experiência profissional em redes e manutenção de computadores, banco de dados e sistemas de help desk.
                            <br/>
                            <br/>
                            Sou apaixonado por conhecimento e me encontrei na área de desenvolvimento de sistemas,
                            acho fascinante o avanço da tecnologia e as novidades que surgem diariamente,
                            então, me sinto no dever de participar e colaborar com esses avanços.
                            <br/> 
                            <br/> 
                            Estou a procura de uma oportunidade para aprender,<br/> 
                            desenvolver e contribuir com crescimento da equipe
                            colocando em prática o que estou estudando todos os dias.
                            </p>
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
                                        <div className="skill--box" key={id} >
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
                                        <div className="text">
                                            
                                        </div>
                                        <span><i></i></span>
                                        </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage
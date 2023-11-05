import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMessage,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../pages/style.css";





function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Olá <span className='wave'>👋</span></h2>
            <h2 className='nametext'>Eu sou Thiago</h2>
            <span></span>
            <Text />
            <h2 className='portext'>Seja bem vindo ao meu</h2><h2 className='portext2'>portfólio <h3 className='portext3'>🚀</h3></h2>
            <button onClick={() => {
              window.open("https://github.com/thfields");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/thiagocampos97/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("mailto:thiago_campos11@hotmail.com");
            }}
              className='socailmediabtn'><AiOutlineMail className='icon' /></button>
            <button onClick={() => {
              window.open("https://wa.me/5584996171333");
            }}
              className='socailmediabtn'><FaWhatsapp className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
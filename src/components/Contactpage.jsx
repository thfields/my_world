import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Entre em contato</h2>
        <p className="contactpara">
          O poder de acreditar em si mesmo.<br/>
          Esse vai ser o poder que vai mudar o destino.<br/>
          Esse é meu jeito Dev de ser. <h3>🛸</h3>
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://wa.me/5584996171333");
          }}
        >
          Fale comigo
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Desenvolvido por <span>Thfields 👽</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
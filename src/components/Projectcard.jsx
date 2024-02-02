import Card from "react-bootstrap/Card";
import "../pages/style.css";

function ProjectCard(props) {
  const handleClick = () => {
    window.open(props.ghLink, "_blank");
  };

  return (
    <Card
      className="project-card-view"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

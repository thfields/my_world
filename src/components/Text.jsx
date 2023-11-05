import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudante",
          "Front End Developer",
          "Back End Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text
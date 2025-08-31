import './Home.css';
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>

<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
    <h1 className="typing">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("DEVAPRASAD")
                                    .start();
                            }}
                        />
                    </h1>
      <p>I'm a Developer<span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

    </>
  );
}

export default Hero;

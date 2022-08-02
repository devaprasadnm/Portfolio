import './Home.css';
import profileimg from "../Assets/Images/dp-profile.jpg";

const About = () => {
  return (
        <>
          <body>
          <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>To succeed in an environment of growth and excellence to earn a job which provides me job satisfaction and self-development and help me achieve personal as well as an organizational goal. Also to obtain a responsible, challenging and awarding position in a software development organization with an established track record where my skills, ability and technical ability can be utilized.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profileimg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer. &amp; Software Developer</h3>
            <p className="fst-italic">
            I am a 4th-year B.Tech student in the Division of Computer Science at School of Engineering CUSAT. I love coding because I enjoy the joy of learning, which springs from the nonrepeating nature of the task and relish the sheer delight of exploring new things.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 May 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://devaprasadnm.github.io</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>7306290566</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kannur,Kerala</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>devaprasadmohanan@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
             
            </p>
          </div>
        </div>

      </div>
    </section>
    
    </body>
        </>
      );
}

export default About;
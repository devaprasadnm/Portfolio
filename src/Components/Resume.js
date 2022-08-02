import './Home.css';

const Resume = () => {
  return (
    <>
   <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>To succeed in an environment of growth and excellence to earn a job which provides me job satisfaction and self-development and help me achieve personal as well as an organizational goal. Also to obtain a responsible, challenging and awarding position in a software development organization with an established track record where my skills, ability and technical ability can be utilized.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Devaprasad</h4>
              <p><em>I am a 4th-year B.Tech student in the Division of Computer Science at School of Engineering CUSAT.</em></p>
              <ul>
                <li>Kannur,Kerala</li>
                <li>8547198697</li>
                <li>devaprasadmohan@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech</h4>
              <h5>2019 - 2023</h5>
              <p><em>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</em></p>
              <p>Currently studying for B.tech Computer Science and Engineering.
Expected to graduate in 2023. Current CGPA :9.13</p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary</h4>
              <h5>2016 - 2018</h5>
              <p><em>IJM HSS KOTTIYOOR</em></p>
              <p>Completed High School Education.

Securing 96.3%.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Backend Developer</h4>
              <h5>2022</h5>
              <p><em>Student Management System</em></p>
              <ul>
                <li>Created database framework using Django and postgres sql.</li>
                <li>Also high security authentication and authorisation was imeplemented in the website.</li>
                
                
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>2020 </h5>
              <p><em>Meez General Trading Ltd</em></p>
              <ul>
                <li>Product: A Trading Company's Website.,</li>
                <li>Backend: React Js </li>
                <li>Frontend: HTML , CSS , REACT</li>
                <li>Created the product inserting engine from scratch using the React framework
cordinated with lead team .</li>
              </ul>
            </div>
           
          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default Resume;
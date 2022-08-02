import './Home.css';
import About from './About'
import Facts from './Facts'
import Skills from './Skills'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Main = () => {
  return (
        <main id="main">
          <body>
        <About/>
        {/* <Facts/>  */}
        {/* <Skills/> */}
        <Resume/>
        <Portfolio/>
        {/* <Services/>
        <Testimonials/> */}
        {/* <Contact/> */}
    
    </body>
        </main>
      );
}

export default Main;
import './Home.css';


import '../Assets/vendor/bootstrap/css/bootstrap.min.css';
import '../Assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../Assets/vendor/boxicons/css/boxicons.min.css';
import '../Assets/vendor/glightbox/css/glightbox.min.css';
import '../Assets/vendor/swiper/swiper-bundle.min.css';

import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';



const Home = () => {
  return (
    <>
      <body>
    <Header/>
    <Hero/>
    <Main/>
    <Footer/>


</body>
    </>
  );
}


export default Home;
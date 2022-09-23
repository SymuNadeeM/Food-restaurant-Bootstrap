import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import BookFood from './Components/BookFood/BookFood';
import Counter from './Components/Counter/Counter';
import Explor from './Components/Explor/Explor';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import NavbarBar from './Components/Navbar/Navbar';
import NewsLater from './Components/NewsLater/NewsLater';
import Stoty from './Components/Story/Stoty';
import Testmonial from './Components/testimonial/Testmonial';
import Topbanner from './Components/TopBanner/Topbanner';

function App() {
  return (
    <>
       <NavbarBar/>
       <Topbanner/>
       <Counter/>
       <About/>
       <Stoty/>
       <Explor/>
       <Testmonial/>
       <Faq/>
       <BookFood/>
       <NewsLater/>
       <Footer/>
       
    </>
  );
}

export default App;

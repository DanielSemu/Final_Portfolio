
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
   <>
   <Sidebar/>
   <Pricing/>
   <main className='main'>
    {/* <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Testimonials/>
    <Contact/> */}
   </main>
   </>
  );
}

export default App;

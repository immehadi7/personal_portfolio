import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import Pricing from './sections/Pricing';
import Blog from './sections/Blog';
import Contact from './sections/Contact'; // <-- Import the final section!

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Clients />
      <Pricing />
      <Blog />
      <Contact /> {/* <-- Goodbye temporary sections! */}
      
      {/* A clean, simple Footer to end the page */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} All Rights Reserved to Mehedi Hasan.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
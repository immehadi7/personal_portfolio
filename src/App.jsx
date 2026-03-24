import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import Pricing from './sections/Pricing';
import Blog from './sections/Blog'; // <-- Import the new Blog section

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
      <Blog /> {/* <-- Replace the dummy Blog section with the real one */}
      
      {/* The VERY LAST temporary section! */}
      <section id="contact" style={{ height: '100vh', backgroundColor: '#ffffff', paddingTop: '100px' }}>
        <div className="container"><h2>Contact Section Placeholder</h2></div>
      </section>
    </div>
  );
}

export default App;
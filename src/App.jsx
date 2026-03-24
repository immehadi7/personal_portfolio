import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Testimonials from './sections/Testimonials';
import Clients from './sections/Clients';
import Pricing from './sections/Pricing'; // <-- Import Pricing

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
      <Pricing /> {/* <-- Add Pricing here */}
      
      {/* The final temporary sections */}
      <section id="blog" style={{ height: '50vh', backgroundColor: '#e9ecef', paddingTop: '100px' }}>
        <div className="container"><h2>Blog Section Placeholder</h2></div>
      </section>

      <section id="contact" style={{ height: '100vh', backgroundColor: '#f8f9fa', paddingTop: '100px' }}>
        <div className="container"><h2>Contact Section Placeholder</h2></div>
      </section>
    </div>
  );
}

export default App;
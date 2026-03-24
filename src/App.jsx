import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services'; // <-- Import Services

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services /> {/* <-- Our real Services section! */}
      
      {/* The remaining temporary sections */}
      <section id="portfolio" style={{ height: '100vh', backgroundColor: '#dee2e6', paddingTop: '100px' }}>
        <div className="container"><h2>Portfolio Section</h2></div>
      </section>

      <section id="resume" style={{ height: '100vh', backgroundColor: '#ced4da', paddingTop: '100px' }}>
        <div className="container"><h2>Resume Section</h2></div>
      </section>

      <section id="contact" style={{ height: '100vh', backgroundColor: '#adb5bd', paddingTop: '100px' }}>
        <div className="container"><h2>Contact Section</h2></div>
      </section>
    </div>
  );
}

export default App;
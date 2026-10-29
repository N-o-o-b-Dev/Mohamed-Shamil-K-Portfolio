import Hero from '../components/Hero';
import Education from '../components/Education';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Education & Verified Credentials Section */}
      <Education />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;


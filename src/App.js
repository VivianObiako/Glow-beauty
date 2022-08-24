import './App.css';
import { useEffect, useState } from 'react';
import ExploreSection from './components/ExploreSection';
import FaqSection from './components/faqSection/FaqSection';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Landing from './components/Landing';
import LogoSection from './components/LogoSection';
import ProductSection from './components/ProductSection';
import ReviewSection from './components/ReviewSection';
import StorySection from './components/StorySection';

function App() {

  const [activeLanding, setActiveLanding] = useState(false)

  useEffect(()=>{
      setActiveLanding(true)
      setTimeout(() => {
        setActiveLanding(false);
      }, 1000);
  }, [])

  return (
    <div className="App">
      {activeLanding && <Landing />}
      {!activeLanding && 
        <div>
          <Header />
          <Hero />
          <ExploreSection />
          <ProductSection />
          <ReviewSection />
          <FaqSection />
          <StorySection />
          <LogoSection />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;



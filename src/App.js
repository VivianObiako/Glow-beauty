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
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const [activeLanding, setActiveLanding] = useState(false)

  useEffect(()=>{
      setActiveLanding(true)
      setTimeout(() => {
        setActiveLanding(false);
      }, 6000);
  }, [])

  return (
    <div className="App" id="smooth-wrapper">
      {activeLanding && <Landing />}
      {!activeLanding && 
        <div className='main' id="smooth-content">
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



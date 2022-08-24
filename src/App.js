import './App.css';
import ExploreSection from './components/ExploreSection';
import FaqSection from './components/faqSection/FaqSection';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ReviewSection from './components/ReviewSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExploreSection />
      <ProductSection />
      <ReviewSection />
      <FaqSection />
    </div>
  );
}

export default App;



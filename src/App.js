import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Composition from './components/Composition';
import Enhance from './components/Enhance';
import FAQ from './components/FAQ';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowTo from './components/HowTo';
import Improve from './components/Improve';
import Modal from './components/Modal';
import OneTap from './components/OneTap';
import PreFooter from './components/PreFooter';
import ProLevel from './components/ProLevel';
import Footer from './components/Footer';
import './Styles/App.css';
function App() {

  const [toggle,setToggle] = useState(false);
  const [click,setClick] = useState(false);
  const ref = useRef();
  const onScreen = useOnScreen(ref,'-70px')

  window.addEventListener('resize',()=>{
    window.innerWidth < 950 ? setToggle(true) : setToggle(false);
  })

  window.addEventListener('load',()=>{
    window.innerWidth < 950 ? setToggle(true) : setToggle(false);
  })

  const handleClick = ()=>{
    setClick(!click)
  }


  return (
    <div className="wrapper">
        <Header onScreen={onScreen} toggle={toggle} click={click} handleClick={handleClick}/>
        {click ? <Modal setClick={setClick}/> : null}
        <HeroSection>
        <div ref={ref} className="hero-sec">
            <div className="hero-content">
            <h1>
            Free Online Photo Enhancer
            </h1>
            <p>
            Fotor’s online photo enhancer helps you enhance photo quality instantly.
            <br/>
            Enhance colors, reduce blur, increase sharpness, remove haze, highlight focus and more.

            Perfect your photos in no time.
            </p>

            <Button>
                enhance photos now
            </Button>
            </div>
        </div>
        </HeroSection>
        <OneTap/>
        <Improve/>
        <ProLevel/>
        <Composition/>
        <Enhance/>
        <HowTo/>
        <FAQ/>
        <PreFooter/>
        <Footer/>
    </div>
  );
}

export function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default App;

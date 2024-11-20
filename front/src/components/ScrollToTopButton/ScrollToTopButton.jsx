import  { useState, useEffect } from 'react';
import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition); 

    if (scrollPosition > 100) { 
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ⇑ 
      </button>
    )
  );
};

export default ScrollToTopButton;

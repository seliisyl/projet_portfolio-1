import React, { useEffect, useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 4;

  const imagesArray = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.clientWidth / visibleSlides;

    const updateButtons = () => {
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
      nextBtn.style.display = currentIndex >= imagesArray.length - visibleSlides ? 'none' : 'block';
    };

    const updateIndicators = () => {
      const allIndicators = document.querySelectorAll('.indicator');
      allIndicators.forEach((indicator, index) => {
        if (index >= currentIndex && index < currentIndex + visibleSlides) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    };

    updateButtons();
    updateIndicators();

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleSlides, 0));
      slider.scrollTo({
        left: (currentIndex - visibleSlides) * slideWidth,
        behavior: 'smooth'
      });
    };

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + visibleSlides, imagesArray.length - visibleSlides));
      slider.scrollTo({
        left: (currentIndex + visibleSlides) * slideWidth,
        behavior: 'smooth'
      });
    };

    const handleScroll = () => {
      const currentScrollLevel = slider.scrollLeft;
      setCurrentIndex(Math.round(currentScrollLevel / slideWidth));
    };

    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);
    slider.addEventListener('scroll', handleScroll);

    return () => {
      prevBtn.removeEventListener('click', handlePrevClick);
      nextBtn.removeEventListener('click', handleNextClick);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, imagesArray.length]);

  return (
    <div className="carousel">
      <ion-icon name="chevron-back-outline" className="nav-btn" id="prevBtn"></ion-icon>
      <div className="slider" id="slider">
        {imagesArray.map((imageSrc, index) => (
          <img key={index} src={imageSrc} id={`slide-${index}`} className="slide" alt={`Slide ${index}`} />
        ))}
      </div>
      <ion-icon name="chevron-forward-outline" className="nav-btn" id="nextBtn"></ion-icon>
      <div className="slider-indicators" id="indicators">
        {imagesArray.map((_, index) => (
          <a key={index} href={`#slide-${index}`} className={`indicator ${index < visibleSlides ? 'active' : ''}`}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

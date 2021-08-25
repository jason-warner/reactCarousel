// inspiration: https://codepen.io/ryasan86/pen/QXwEbM
import './Carousel.scss';
import React from 'react';
import { useEffect, useRef } from 'react';


const slides = [
  {
    slide: {
      title: 'Slide One',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      summary: 'Details about slide one'
    },
  },
  {
    slide: {
      title: 'Slide Two',
      content: '',
      summary: 'Details about slide two'
    },
  },
  {
    slide: {
      title: 'Slide Three',
      content: '',
      summary: 'Details about slide three'
    },
  },
  {
    slide: {
      title: 'Slide Four',
      content: '',
      summary: 'Details about Slide four'
    },
  },
  {
    slide: {
      title: 'Slide Five',
      content: '',
      summary: 'Details about Slide five'
    }
  }
];



// slides.push(...slides);

const SlideItem = ({ item, idx, currentSlide }) => {
  const
    slide = item.slide,
    slideRef = useRef(null);

  const activeSlideLogic = () => {
    const
      domSlide = slideRef.current,
      slideIndex = (parseInt(domSlide.className.substr(4, 1)));

    if (slideIndex === currentSlide) {
      domSlide.classList.remove("inactive-slide");
      domSlide.classList.add("active-slide");
    } else {
      domSlide.classList.remove("active-slide");
      domSlide.classList.add("inactive-slide");
    }
  }

  useEffect(() => {
    activeSlideLogic();
  })
  return (
    <li ref={slideRef} className={`idx-${idx} slideItem`}>
      <h2>{slide.title}</h2>
      <article>{slide.content}</article>
      <p>{slide.summary}</p>
    </li>
  )
}




const Carousel = () => {
  let activeSlide = 0;
  return (
    <div className="carouselWrap">
      <div className="carouselContainer">
        <ul className="carouselList">
          {slides.map((slide, index) => (
            <SlideItem
              key={index}
              item={slide}
              idx={index}
              currentSlide={activeSlide}
            />
          ))}
        </ul>
      </div>
      <nav className="carouselNav">
        <button className="carouselLeft">
          <svg width="24" height="24" viewBox="0 0 24 24" transform="rotate(180)" >
            <path d="M21 12l-18 12v-24z" />
          </svg>
        </button>
        <div className="carouselDots">
          {slides.map(() => (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
            </svg>
          ))}
        </div>
        <button className="carouselRight">
          <svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M21 12l-18 12v-24z" />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Carousel;

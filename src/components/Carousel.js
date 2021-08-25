// inspiration: https://codepen.io/ryasan86/pen/QXwEbM
import './Carousel.scss';
import React from 'react';
import { useEffect } from 'react';
const slides = [
  {
    slide: {
      title: 'Slide One',
      content: ``,
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

const SlideItem = ({ item, idx }) => {
  const slide = item.slide;
  console.log(idx);
  return (
    <li className="slideItem">
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
            <SlideItem key={index} item={slide} idx={activeSlide} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;

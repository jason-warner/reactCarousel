// inspiration: https://codepen.io/ryasan86/pen/QXwEbM
import './Carousel.scss';
import React from 'react';
import { useEffect, useRef } from 'react';


const slides = [
  {
    slide: {
      title: 'Slide One',
      content: `LYywjeR`,
      summary: 'Details about slide one'
    },
  },
  {
    slide: {
      title: 'Slide Two',
      content: 'bGWJqxN',
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
    slideRef = useRef(null),
    codepenLink = ("https://codepen.io/jason-warner/pen/").concat(slide.content);

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
  const addScript = () => {
    const script = document.createElement("script");

    script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    activeSlideLogic();
    addScript();
  })
  return (
    <li ref={slideRef} className={`idx-${idx} slideItem`}>
      <h2>{slide.title}</h2>
      <article>
        <p className="codepen" data-height="350" data-theme-id="dark" data-slug-hash={slide.content} data-user="jason-warner">
          <span>See the Pen <a href={codepenLink}>
            React Shutter Effect</a> by Jason Warner (<a href="https://codepen.io/jason-warner">@jason-warner</a>)
            on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        {/* {slide.content} */}
      </article>
      <p>{slide.summary}</p>
    </li>
  )
}

// {/* <p className="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="LYywjeR" data-user="jason-warner" style={{ height: '300px', boxSizing: 'borderBox', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}>
// <span>See the Pen <a href="https://codepen.io/jason-warner/pen/LYywjeR">
//   React Shutter Effect</a> by Jason Warner (<a href="https://codepen.io/jason-warner">@jason-warner</a>)
//   on <a href="https://codepen.io">CodePen</a>.</span>
// </p> */}


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

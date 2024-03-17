import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { NextButton, PrevButton } from './buttons';
import useEmblaCarousel from 'embla-carousel-react';

import * as styles from './styles.module.scss';

const Carousel = ({
  options = { loop: true }, // Customizable options for the carousel
  onSlideChange, // Callback for slide change event
  children, // Function to render custom content for each slide
  className, // CSS class name for styling
  addArrows = false,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleSlideChange = useCallback(() => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    if (onSlideChange) onSlideChange(emblaApi.selectedScrollSnap());
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', handleSlideChange);
    return () => emblaApi.off('select', handleSlideChange);
  }, [emblaApi, handleSlideChange]);

  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className="embla" ref={emblaRef}>
        <div className={`embla__slides__container`}>
          {slides?.map((child, i) => (
            <div key={i} className={`embla__slide ${i === selectedIndex ? 'embla__slide--selected' : ''}`}>
              {child}
            </div>
          ))}
        </div>
        <div className="embla__dotsAndArrows">
          {addArrows && <PrevButton onClick={scrollPrev} />}
          {addArrows && <NextButton onClick={scrollNext} />}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

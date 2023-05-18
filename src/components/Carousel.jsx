import { useRef } from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Carousel({ imgOne, imgTwo, altOne, altTwo }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const imagesRef = useRef();

  const imgSrcArr = [imgOne, imgTwo];
  function handleClickRight() {
    const transitionByIndex = {
      0: '-translate-x-full',
      1: '-translate-x-0',
    };

    imagesRef.current.classList = 'flex duration-300';
    imagesRef.current.classList.add(transitionByIndex[carouselIndex]);
    setCarouselIndex((prev) => (prev + 1) % imgSrcArr.length);
  }

  function handleClickLeft() {
    const transitionByIndex = {
      0: '-translate-x-full',
      1: '-translate-x-0',
    };

    imagesRef.current.classList = 'flex duration-300';
    imagesRef.current.classList.add(transitionByIndex[carouselIndex]);
    if (carouselIndex === 0) {
      setCarouselIndex(imgSrcArr.length - 1);
    } else {
      setCarouselIndex((prev) => (prev - 1) % imgSrcArr.length);
    }
  }

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="h-12 w-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="relative overflow-hidden">
      <div ref={imagesRef} className="flex duration-300">
        <LazyLoadImage src={imgOne} alt={altOne} width="100%" />
        <LazyLoadImage src={imgTwo} alt={altTwo} width="100%" />
      </div>
      <button
        onClick={handleClickLeft}
        className="absolute top-1/2 -translate-y-1/2 bg-black/25 py-1 text-white/60"
      >
        {chevron}
      </button>
      <button
        onClick={handleClickRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/25 py-1 text-white/60"
      >
        <div className="rotate-180">{chevron}</div>
      </button>
    </div>
  );
}

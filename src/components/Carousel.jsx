import { useRef } from 'react';
import { useState } from 'react';

export default function Carousel({ imgOne, imgTwo }) {
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
    <div className="relative overflow-hidden lg:m-10">
      <div ref={imagesRef} className="flex duration-300">
        <img className="" src={imgSrcArr[0]} alt="" />
        <img className="" src={imgSrcArr[1]} alt="" />
      </div>
      <button
        onClick={handleClickLeft}
        className="absolute top-1/2 -translate-y-1/2 bg-black/30 py-1 text-white/75"
      >
        {chevron}
      </button>
      <button
        onClick={handleClickRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/30 py-1 text-white/75"
      >
        <div className="rotate-180">{chevron}</div>
      </button>
    </div>
  );
}

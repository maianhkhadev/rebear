/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  forwardRef,
  HTMLProps,
  useState,
  useEffect,
  useMemo,
} from 'react';
import clsx from 'clsx';
import { IconArrowLeft, IconArrowRight } from 'rebear-icons';
import { ButtonIcon } from '../Button';
import { ClassNames } from './Carousel.constants';
import './Carousel.scss';

export type CarouselProps = {
  dots?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
};

export const Carousel = forwardRef<
  HTMLDivElement,
  CarouselProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function Carousel(props, ref) {
  const {
    className,
    dots,
    arrows,
    autoPlay,
    autoplaySpeed,
    children,
    ...rest
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = React.Children.count(children);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % total;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + total) % total;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplaySpeed);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoPlay, autoplaySpeed]);

  const style = useMemo(() => {
    return { transform: `translateX(-${currentIndex * 100}%)` };
  }, [currentIndex]);

  const classes = clsx([ClassNames.Carousel, className]);

  return (
    <div className={classes} {...rest} ref={ref}>
      <div className={ClassNames.CarouselSlides} style={style}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={ClassNames.CarouselSlide}>
            {child}
          </div>
        ))}
      </div>

      {arrows && (
        <ButtonIcon
          className={ClassNames.CarouselArrowLeft}
          variant="secondary"
          icon={<IconArrowLeft />}
          onClick={handlePrevious}
        />
      )}

      {arrows && (
        <ButtonIcon
          className={ClassNames.CarouselArrowRight}
          variant="secondary"
          icon={<IconArrowRight />}
          onClick={handleNext}
        />
      )}

      {dots && (
        <div className={ClassNames.CarouselIndicators}>
          {React.Children.map(children, (_, index) => {
            const isActive = index === currentIndex;
            const classes = clsx([isActive && ClassNames.IndicatorActive]);

            return (
              <button
                key={index}
                className={classes}
                onClick={() => setCurrentIndex(index)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
});

Carousel.defaultProps = {
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
};

export default Carousel;

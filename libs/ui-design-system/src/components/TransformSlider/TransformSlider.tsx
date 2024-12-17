import React, { forwardRef, HTMLProps, useState } from 'react';
import clsx from 'clsx';
import { ClassNames } from './TransformSlider.constants';
import './TransformSlider.scss';

type TransformSliderProps = {
  beforePhoto: string;
  afterPhoto: string;
};

export const TransformSlider = forwardRef<
  HTMLDivElement,
  TransformSliderProps & HTMLProps<HTMLDivElement>
>(function TransformSlider(props, ref) {
  const { beforePhoto, afterPhoto, className } = props;
  const [value, setValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const classes = clsx([ClassNames.TransformSlider, className]);

  return (
    <div ref={ref} className={classes}>
      <div className="slider-wrapper">
        <div
          className={ClassNames.BeforePhoto}
          style={{ backgroundImage: `url(${beforePhoto})` }}
        />
        <div
          className={ClassNames.AfterPhoto}
          style={{
            backgroundImage: `url(${afterPhoto})`,
            clipPath: `inset(0 ${100 - value}% 0 0)`,
          }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className={ClassNames.SlideBar}
        onChange={handleSliderChange}
      />
    </div>
  );
});

export default TransformSlider;

import { useRef, useEffect } from "react";

import "./slider.scss";

interface Props {
  disabled?: boolean;
  label?: string;
  icon?: string;
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  onChangeValue?: (value: number) => void;
}

export function Slider(props: Props): JSX.Element {
  const {
    disabled = false,
    icon,
    label = "",
    max = 100,
    min = 0,
    step = 1,
    value = 0,
    onChangeValue,
  } = props;
  const range = useRef<any>(null);

  const handleChange = (event: any) => {
    if (onChangeValue) onChangeValue(event.target.value);
  };

  const changeStyle = () => {
    if (range) {
      const sliderValue = (range.current.value * 100) / max;
      range.current.style.background = `linear-gradient(to right, #d7192d ${sliderValue}%, #fff ${sliderValue}%)`;
    }
  };

  useEffect(() => {
    if (value) changeStyle();
  }, [value, max]);

  return (
    <div className="ib-ng-input-container">
      <div className="ib-input ib-ng-input">
        <label className="ib-input__label">
          {icon && <span className="material-symbols-outlined">{icon}</span>}
          {label}
        </label>
        <input
          id="range"
          ref={range}
          className="ib-input__input"
          type="range"
          name="range"
          disabled={disabled}
          max={max}
          min={min}
          step={step}
          value={value}
          onInput={handleChange}
        />
      </div>
    </div>
  );
}

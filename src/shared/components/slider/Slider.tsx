import { useRef, useEffect, ChangeEvent } from 'react';

import './slider.scss';

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
  const { disabled = false, icon, label = '', max = 100, min = 0, step = 1, value = 0, onChangeValue } = props;
  const range = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChangeValue && event) onChangeValue(+event.target.value);
  };

  const changeStyle = () => {
    if (range && range.current) {
      const sliderValue = (+range.current.value * 100) / max;
      range.current.style.background = 
        `linear-gradient(to right, #d7192d ${sliderValue}%, transparent ${sliderValue}%)`;
    }
  };

  useEffect(() => {
    if (value) changeStyle();
  }, [value, max]);

  return (
    <div className="ib-ng-input-container">
      <div className="ib-input">
        <label className="ib-input__label">
          {icon && <span className="material-symbols-outlined">{icon}</span>}
          {label}
        </label>
        <input
          className="ib-input__input"
          id="range"
          type="range"
          name="range"
          ref={range}
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

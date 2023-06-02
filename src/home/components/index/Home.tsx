import { useState } from "react";

import "./Home.scss";
import PopoverDemo from "../popover/Popover";
import { Slider } from "../../../shared/components";

interface PersonInterface {
  name: string;
  age: number;
}

export default function Home(): JSX.Element {
  const [person] = useState<PersonInterface>({
    name: "Angel",
    age: 5,
  });
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <section className="home">
      <h2>Home Page</h2>
      <PopoverDemo />
      <h2>Example type Vite</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <br />
      <br />
      <Slider
        label="Vuelos"
        icon="flight"
        max={2500}
        value={sliderValue}
        onChangeValue={setSliderValue}
      />
      <p>Value: {sliderValue}</p>
      <button
        onClick={() => {
          setSliderValue(1500);
        }}
      >
        Change value
      </button>
    </section>
  );
}

import React, { useState } from "react";

import "./Home.scss";
import PopoverDemo from "../popover/Popover";

interface PersonInterface {
  name: string;
  age: number;
}

export default function Home(): JSX.Element {
  const [person, setPerson] = useState<PersonInterface>({
    name: "Angel",
    age: 5,
  });

  return (
    <section className="home">
      <h2>Home Page</h2>
      <PopoverDemo />

      <h2>Example type Vite</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </section>
  );
}

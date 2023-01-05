import React from "react";

import "./Home.scss";
import PopoverDemo from "../popover/Popover";

export default function Home(): JSX.Element {
  return (
    <section className="home">
      <h2>Home Page</h2>
      <PopoverDemo />
    </section>
  );
}

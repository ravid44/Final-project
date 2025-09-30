import React from "react";
import { NavbarComponent } from "../nav/navigation";

export default function About() {
  return (
    <section>
      <NavbarComponent />
      <div className="mt-[7rem] p-10 flex justify-center items-center">
        <h1 className="text-3xl font-bold text-black">Aboutus</h1>
      </div>

      <div className="flex justify-center items-center gap-5">
        <img
          className="w-[50%] rounded-2xl"
          src="https://i.pinimg.com/736x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg"
        />
        <p className="text-3xl">
          Technology is the application of scientific knowledge, tools, and
          methods to solve problems, make life easier, and improve efficiency.
          It combines creativity, engineering, and innovation to create systems,
          devices, and processes that benefit individuals and society.
        </p>
      </div>
    </section>
  );
}

import React from "react";

export default function About() {
  return (
    <section id="home" className="pb-20">
      <div className="flex px-20 py-20 md:flex-row flex-row items-center bg-red-100">
        <div className="lg:flex-row md:w-1/2 lg:pr-16 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 py-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-300">
            Heya! I am Ramya
          </h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./product.svg"
          />
        </div>
      </div>
    </section>
  );
}

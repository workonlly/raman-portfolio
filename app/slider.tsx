import React from "react";

const people = [
  {
    name: "Dr. Aziz Business",
    subtitle: "1.2M Subscribers",
    image: "/images/aziz.jpg",
  },
  {
    name: "Coffee Bean & Tea Leaf",
    subtitle: "Brand Partner",
    image: "/images/coffee.jpg",
  },
  {
    name: "McDonalds",
    subtitle: "350K Followers",
    image: "/images/mcdonalds.jpg",
  },
  {
    name: "Zlora No Code Games",
    subtitle: "420K Subscribers",
    image: "/images/zlora.jpg",
  },
  {
    name: "Ahlam Khalifa",
    subtitle: "Brand Ambassador",
    image: "/images/ahlam.jpg",
  },
  {
    name: "Devlin Jatho",
    subtitle: "500K Followers",
    image: "/images/devlin.jpg",
  },
  {
    name: "Jake Wayne",
    subtitle: "273K Subscribers",
    image: "/images/jake.jpg",
  },
];

export default function WorkedWith() {
  return (
    <section className="bg-black text-white py-16">
      <h2 className="text-center text-lg md:text-xl font-medium mb-10 opacity-80">
        Worked with the best of the best
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-10 px-6 min-w-max">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-700 hover:scale-105 transition duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-sm font-medium text-center">
                {person.name}
              </p>
              <p className="text-xs text-gray-400 text-center">
                {person.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

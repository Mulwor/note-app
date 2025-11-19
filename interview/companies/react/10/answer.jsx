import React, { useState, useEffect } from "react";

const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState(0);
  const scrollY = useScroll();

  useEffect(() => {
    const fetchNumber = async () => {
      const randomNumber = await fetchRandomNumber();
      setNumber(randomNumber);
    };

    fetchNumber();
  }, []);
  // Используем фрагменты вместо div, но стоит уточнить, если
  // div не влияет на верстку
  return (
    <>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </>
  );
};

//вынесем в отдельный хук
const useScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

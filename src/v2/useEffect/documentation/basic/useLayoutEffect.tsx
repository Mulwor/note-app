import { useState, useLayoutEffect, useEffect } from 'react';

export const ExampleWithUseLayoutEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    console.log('Сработал useLayoutEffect');
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Ширина окна: {width}</p>
    </div>
  );
};

export const ExampleWithUseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('Сработал useEffect');
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Ширина окна: {width}</p>
    </div>
  );
};
